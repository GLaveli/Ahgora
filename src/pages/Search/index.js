import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { FaSearch } from 'react-icons/fa';

import { findMostRepeatedWord } from '../../utils/findMostRepeatedWord';

import {
 API_KEY_RAPID_API,
 API_KEY_GUILHERME,
 API_KEY_KEREN,
 YOUTUBE_URI,
 TOTALRESULTS
} from '../../utils/config.json';

import './styles.css';

function Search() {

 const [query, setQuery] = useState('polado');
 const [words, setWord] = useState('macaco, gorila, macaco maquina eum coelho saltou pela cartola do magico, este coelho é mesmos forte, pois sua cartola era grande, nem os ursos foram tao longe quanto o coelho magico, magico e magico, colher, colher, mesa, mesa gorila');
 const [list, setList] = useState([]);

 async function search(e) {
  e.preventDefault();
  handleRequestVideos();
 }

 function queryValidator() {
  let newQuery = ''
  newQuery = encodeURIComponent(query);
  return newQuery;
 }

 function handleRequestVideos() {
  let query = queryValidator();

  axios(`${YOUTUBE_URI}search?part=snippet&maxResults=${TOTALRESULTS}&type=video&q=${query}&key=${API_KEY_GUILHERME}`)
   .then(response => {
    let ids = handleGetVideIds(response.data.items);
    return handleGetConten(ids);
   }).catch(err => {
    console.log(err);
   });
 };

 function handleGetVideIds(videos) {
  return videos.map(video => {
   return video.id.videoId;
  })
 }

 function handleGetConten(ids) {
  axios(`${YOUTUBE_URI}videos?id=${ids}&part=snippet,contentDetails&key=${API_KEY_GUILHERME}`)
   .then(response => {
    let videolist = response.data.items;
    console.log(videolist);
    setList(videolist);
   }).catch(err => {
    console.log(err);
   });
 }

 function convertISO(duration) {
  if (!duration) {
   return
  }
  return moment.duration(duration).asMinutes();
 }

 let arrayteste = findMostRepeatedWord(words);




 return (
  <>
   <div className="youtubeSearchContainer">

    <div className="formContainer">
     <form>
      <input className="searchImput" placeholder="Pesquisar" autoFocus value={query} onChange={e => setQuery(e.target.value)} />
      <button className="searchButton"><FaSearch className="searchIcon" /></button>
     </form>
    </div>

    <div className="responseContainer">
     <div className="optons">

     </div>
     <div>
      {/* {(list.length === 0 ?
       (<div className="videoNotFound">
        <p>Nenhum Resultado Encontrado</p>
       </div>)
       : (
        <ul className="videoList">
         {list.map(item => (
          <li className="videoItem" key={item.id}>
           <div className="thumb">
            <img alt={item.snippet.channelTitle} src={item.snippet.thumbnails.default.url} />
           </div>
           <div className="videoContent">
            <div className="title">
             <b><a href={item.snippet.channelTitle}>{item.snippet.channelTitle}</a></b>
            </div>
            <div className="description">
             <textarea className="descriptionArea">{item.snippet.description}</textarea>
            </div>
            <ul className="meta">
             <div className="metaItem">
              <li>duração: {convertISO(item.contentDetails.duration)}</li>
             </div>
            </ul>
            <ul>
            </ul>
           </div>
          </li>
         ))}
        </ul>
       )
      )
      } */}
     </div>
    </div>

   </div>
  </>
 );
}

export default Search;
