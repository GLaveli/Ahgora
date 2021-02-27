import { minutesTodays } from '../../utils/minutsToDay';
import { convertISO } from '../../utils/convertISO';

import './styles.css';

function Cards({ list }) {


 return (

  <div className="videoContainer">
   {(list.length === 0 ?
    (<div className="awaytVideo">
     <p>Enter to search</p>
    </div>)
    : (
     <div className="videoList">
      {list.map((item) => (
       <div className="cardContainer" key={item.id}>
        <div className="card">
         <div className="title">
          <a href={item.VideoDetails.snippet.localized.title}>{item.VideoDetails.snippet.localized.title}</a>
         </div>
         <div className="thumb">
          <img alt={item.VideoDetails.snippet.channelTitle} src={item.VideoDetails.snippet.thumbnails.default.url} />
         </div>
         <div className="videoContent">
          <div className="description">
           <p className="descriptionArea">{item.VideoDetails.snippet.description}</p>
          </div>
          <div className="words" >
           {item.countedWords.map(({ word, repeat }) => (
            <p><span className="wordMarker">{word}: </span> <span className="timesMarker">{repeat}x</span></p>
           ))}
          </div>
          <div className="duration">
           <span>Duration: {minutesTodays(convertISO(item.VideoDetails.contentDetails.duration))}</span>
          </div>
         </div>
        </div>
       </div>
      ))}
     </div>
    )
   )}
  </div>
 )
}

export default Cards;