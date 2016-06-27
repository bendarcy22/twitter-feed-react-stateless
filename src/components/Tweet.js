import React from 'react';
const Tweet = props => {


  return (
    <div className="callout secondary">

      <div className="user-data">
        <div className="row">
          <div className="medium-1 small-1 columns ">
            <img src={props.profileUrl}/>
          </div>
          <div className="medium-2 small-4 columns">
            {props.name}
          </div>
          <div className="small-2 small-1 columns">
            @{props.userName}
          </div>
          <div className="small-7 small-1 columns">
            {props.timeStamp}
          </div>
        </div>
      </div>
      <div className="inline">
      {props.text}
      </div>

      <div className="tweet-image">
      <img src={props.tweetImgUrl}/>
      </div>
      <div className="row">
        <div className="small-2 medium-1 columns">
          <button className="fa fa-reply" aria-hidden="true" onClick={event => alert("You replied...YA!")}></button>
        </div>
        <div className="small-2 medium-2 columns">
          <button className="fa fa-retweet" aria-hidden="true" onClick={event => alert("You've successfully retweeted an idiot.")}></button> {props.retweetCount}
        </div>
        <div className="small-2 medium-2 columns">
          <button className="fa fa-heart gray" aria-hidden="true" onClick={event => alert("Aw you love someone!")}></button>{props.favoriteCount}
        </div>
        <div className="small-2 medium-7 columns">
          <button className="fa fa-ellipsis-h" aria-hidden="true" onClick={event => alert("Aw you love someone!")}></button>
        </div>
      </div>
    </div>
  )
};
export default Tweet;
