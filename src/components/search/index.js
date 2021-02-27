import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

import UserPanel from '../userPanel';
import Cards from '../../components/cards';

import { joinWords } from '../../utils/joinWords';
import { minutesTodays } from '../../utils/minutsToDay';
import { convertISO } from '../../utils/convertISO';
import { getDayleUserTime } from '../../utils/getUserDayleTime';

import {
 API_KEY_MARCIO,
 YOUTUBE_URI,
 TOTALRESULTS
} from '../../utils/config.json';

import './styles.css'

function Search() {

 const [query, setQuery] = useState('');
 const [list, setList] = useState([]);
 const [totalTime, setTotaltime] = useState(0);
 const [userTime, setUserTime] = useState(0);




 useEffect(() => {
  if (list.length === 0) {
   return
  }
  getAllTimes();
  setUserTime(getDayleUserTime());
 }, [list]);

 function getAllTimes() {
  let arrayTimes = []
  list.forEach(({ VideoDetails: { contentDetails } }) => {
   arrayTimes.push(convertISO(contentDetails.duration));
  });
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

 return (
  <div className="searchContainer">
   <form onSubmit={handleSubmit} className="formContainer">
    <input className="searchImput" placeholder="Search" autoFocus value={query} onChange={e => setQuery(e.target.value)} />
    <button className="searchButton"><FaSearch className="searchIcon" /></button>
   </form>
   <UserPanel />
   <div className="totalTime">
    {userTime !== 0 ?
     <h3>User time: {userTime}</h3> :
     <h3>User time: 0</h3>}

    {totalTime !== 0 ?
     <h3>Time to Watch all videos: {minutesTodays(totalTime)}</h3> :
     <h3>Time to Watch all videos: 0</h3>}
   </div>
   <Cards list={list} />
  </div>
 )
}

export default Search;