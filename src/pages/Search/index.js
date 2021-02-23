import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { FaSearch } from 'react-icons/fa';

import { joinWords } from '../../utils/joinWords';

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
  const [list, setList] = useState([]);

  async function handleSubmit(e) {
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
        let ids = getVideoIds(response.data.items);
        return getContent(ids);
      }).catch(err => {
        console.log(err);
      });
  };

  function getVideoIds(videos) {
    return videos.map(video => {
      return video.id.videoId;
    })
  }

  function getContent(ids) {
    axios(`${YOUTUBE_URI}videos?id=${ids}&part=snippet,contentDetails&key=${API_KEY_GUILHERME}`)
      .then(({ data: { items } }) => {
        setList(joinWords(items));
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

  return (
    <>
      <div className="youtubeSearchContainer">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <input className="searchImput" placeholder="Pesquisar" autoFocus value={query} onChange={e => setQuery(e.target.value)} />
            <button className="searchButton"><FaSearch className="searchIcon" /></button>
          </form>
        </div>
        <div className="responseContainer">
          <div className="optons">
          </div>
          <div>
            {(list.length === 0 ?
              (<div className="videoNotFound">
                <p>Nenhum Resultado Encontrado</p>
              </div>)
              : (
                <ul className="videoList">
                  {list.map((item) => (
                    <li className="videoItem" key={item.id}>
                      <div className="thumb">
                        <img alt={item.VideoDetails.snippet.channelTitle} src={item.VideoDetails.snippet.thumbnails.default.url} />
                      </div>
                      <div className="videoContent">
                        <div className="title">
                          <b><a href={item.VideoDetails.snippet.channelTitle}>{item.VideoDetails.snippet.channelTitle}</a></b>
                        </div>
                        <div className="description">
                          <textarea value={item.VideoDetails.snippet.description} className="descriptionArea"></textarea>
                        </div>
                        <ul className="meta">
                          <div className="metaItem">
                            <li>duração: {convertISO(item.VideoDetails.contentDetails.duration)}</li>
                          </div>
                        </ul>
                        <ul>
                        </ul>
                        {item.countedWords.map(({ word, repeat }) => (
                          <div className="wods">
                            <p>word: {word} </p>
                            <p>repeat: {repeat} </p>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
