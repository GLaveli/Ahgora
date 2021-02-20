import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


import { API_KEY } from '../../config/config.json';

import './styles.css';

function Search() {

 const [query, setQuery] = useState('');
 const [list, setList] = useState(null);

 async function searchYouTube(q) {
  q = encodeURIComponent(q);
  const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
   "method": "GET",
   "headers": {
    "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
    "x-rapidapi-key": `${API_KEY}`
   }
  });

  const body = await response.json();

  const videos = body.items.filter(item => item.type === 'video');

  return videos
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
     <div className="videos">
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
            <div className="title">
             <b><a href={item.link}>{item.title}</a></b>
            </div>
            <div className="description">
             <p>{item.description}</p>
            </div>
            <ul className="meta">
             <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
             <li>Views: {item.views}</li>
             <li>Duration: {item.duration}</li>
             <li>Uploaded: {item.uploaded_at}</li>
            </ul>
           </li>
          ))}
         </ul>
        )
       )
      }
     </div>
     <div className="optons">

     </div>
    </div>

   </div>
  </>

 );
}

export default Search;
