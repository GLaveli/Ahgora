import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

import {
 API_KEY_RAPID_API,
 API_KEY_GUILHERME,
 API_KEY_KEREN,
 YOUTUBE_URI,
 TOTALRESULTS
} from '../../config/config.json';

import './styles.css';

function Search() {

 const [query, setQuery] = useState('');
 const [list, setList] = useState(null);
 const [teste, setteste] = useState([]);
 //spread operator

 let videoData = [];
 var videoDuration = [];

 async function searchYouTube(query) {

  query = encodeURIComponent(query);
  const { data } = await axios(`${YOUTUBE_URI}search?part=snippet&maxResults=${TOTALRESULTS}&type=video&q=${query}&key=${API_KEY_KEREN}`);

  data.items.map(video => {
   videoData.push(video.snippet);
  });

  await getVideoId(data);

  console.log("AAAAAAAAAAAAAAA", typeof (videoDuration), videoDuration[1]);

  videoDuration.forEach(item => {
   console.log(item);
  })

  joinDuration(videoDuration, videoData);

  //------------------------------------------------------------------------------------//
  // const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + query, {
  //  "method": "GET",
  //  "headers": {
  //   "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
  //   "x-rapidapi-key": `${API_KEY_RAPID_API}`
  //  }
  // });

  // const body = await response.json();

  // const videos = body.items.filter(item => item.type === 'video');
  // return videos
 }

 async function getVideoId(data) {
  const idList = [];

  await data.items.map(id => {
   idList.push((id.id.videoId));
  });

  await idList.map(idVideo => {
   requestTimeById(idVideo);
  });

 };

 async function requestTimeById(id) {

  const { data } = await axios(`${YOUTUBE_URI}videos?id=${id}&part=snippet,contentDetails&key=${API_KEY_KEREN}`);
  console.log(data.items[0].contentDetails.duration);
  videoDuration.push(data.items[0].contentDetails.duration);
 }

 function joinDuration(videoDuration, videoData) {

  var result = videoData.map((item, i) => {
   console.log("VideoDuration", videoDuration, i, videoDuration[0]);
   var newItem = Object.assign(item, { duration: videoDuration[i] });
   return newItem;
  });

  console.log(result);



 }

 const search = (e) => {
  e.preventDefault();
  searchYouTube(query).then(setList);
 };

 return (
  <>
   <div className="youtubeSearchContainer">

    <div className="formContainer">
     <form onSubmit={search}>
      <input className="searchImput" placeholder="Pesquisar" autoFocus value={query} onChange={e => setQuery(e.target.value)} />
      <button className="searchButton"><FaSearch className="searchIcon" /></button>
     </form>
    </div>

    <div className="responseContainer">
     <div className="optons">

     </div>
     <div>
      {list &&
       (list.length === 0
        ? (
         <div className="videoNotFound">
          <p>Nenhum Resultado Encontrado</p>
         </div>)
        : (
         <ul className="videoList">
          {list.map(item => (
           <li className="videoItem" key={item.id}>
            <div className="thumb">
             <img alt={item.author.name} src={item.thumbnail} />
            </div>
            <div className="videoContent">
             <div className="title">
              <b><a href={item.link}>{item.title}</a></b>
             </div>
             <div className="description">
              <p>{item.description}</p>
             </div>
             <ul className="meta">
              <div className="metaItem">
               <li>Views: {item.views}</li>
              </div>
              <div className="metaItem">
               <li>Duration: {item.duration}</li>
              </div>
              <div className="metaItem">
               <li>{item.uploaded_at}</li>
              </div>
             </ul>
             <ul>
              <li className="by">
               <li><a href={item.author.ref}>{item.author.name}</a></li>
              </li>
             </ul>
            </div>
           </li>
          ))}
         </ul>
        )
       )
      }
     </div>
    </div>

   </div>
  </>

 );
}

export default Search;
