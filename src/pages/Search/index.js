import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { FaSearch } from 'react-icons/fa';

import UserPainel from '../../components/userPainel'

import { joinWords } from '../../utils/joinWords';
import { minutesTodays } from '../../utils/minutsToDay'

import {
  API_KEY_GUILHERME,
  API_KEY_KEREN,
  API_KEY_MARCIO,
  YOUTUBE_URI,
  TOTALRESULTS
} from '../../utils/config.json';

import './styles.css';

function Search() {

  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);
  const [totalTime, setTotaltime] = useState(0);

  useEffect(() => {
    if (list.length === 0) {
      return
    }
    getAllTimes();
  }, [list]);

  function getAllTimes() {
    let arrayTimes = []
    list.forEach(({ VideoDetails: { contentDetails } }) => {
      arrayTimes.push(convertISO(contentDetails.duration));
    });
    console.log("AQUI");
    createTotalTime(arrayTimes);
  };

  function createTotalTime(times) {
    let totalTime = 0;
    times.forEach(element => {
      totalTime = (totalTime + element);
    });
    setTotaltime(totalTime);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRequestVideos();
  };

  function handleRequestVideos() {
    let query = queryValidator();
    axios(`${YOUTUBE_URI}search?part=snippet&maxResults=${TOTALRESULTS}&type=video&q=${query}&key=${API_KEY_MARCIO}`)
      .then(({ data: { items } }) => {
        return getContent(getVideoIds(items));
      }).catch(err => {
        console.log(err);
      });
  };

  function queryValidator() {
    return encodeURIComponent(query);
  };

  function getVideoIds(videos) {
    return videos.map(({ id: { videoId } }) => {
      return videoId;
    })
  };

  function getContent(ids) {
    axios(`${YOUTUBE_URI}videos?id=${ids}&part=snippet,contentDetails&key=${API_KEY_MARCIO}`)
      .then(({ data: { items } }) => {
        setList(joinWords(items));
      }).catch(err => {
        console.log(err);
      });
  };

  function convertISO(duration) {
    if (!duration) {
      return
    }

    return moment.duration(duration).asMinutes();
  };

  return (
    <>
      <div className="youtubeSearchContainer">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <input className="searchImput" placeholder="Pesquisar" autoFocus value={query} onChange={e => setQuery(e.target.value)} />
            <button className="searchButton"><FaSearch className="searchIcon" /></button>
          </form>
          <div className="UserOptions">
            <h3>User Options</h3>
          </div>
          <div className="totalTime">
            {totalTime !== 0 ?
              <h3>Total {minutesTodays(totalTime)}</h3> :
              <h3>0</h3>}
          </div>
        </div>
        <div className="responseContainer">
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
                          <p className="descriptionArea">{item.VideoDetails.snippet.description}</p>
                        </div>
                        <ul className="meta">
                          <div className="metaItem">
                            <li>duração: {minutesTodays(convertISO(item.VideoDetails.contentDetails.duration))}</li>
                          </div>
                        </ul>
                        <ul>
                        </ul>
                        <div className="wordsContainer">
                          {item.countedWords.map(({ word, repeat }) => (
                            <div className="words" >
                              <p><span className="marker">{word}</span> - <span className="marker1">{repeat}x</span></p>
                            </div>
                          ))}
                        </div>
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
