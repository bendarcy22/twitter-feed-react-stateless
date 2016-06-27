import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
  let tweets = props.data.map(tweet => {
    let tweetImage;
    let tweetImageDisplay;
    let tweetText = tweet.text;
    let date = new Date(-tweet.timestamp_ms).toDateString().split('')
    if (Object.getOwnPropertyNames(tweet.entities).length > 0) {
      tweetImage = tweet.entities.media[0].media_url;
      tweetImageDisplay = tweet.entities.media[0].display_url;
      tweetText = tweetText.replace(` ${tweetImageDisplay}`, '');
    }
    return (
      <Tweet
        key={tweet.id_str}
        name={tweet.user.name}
        profileUrl={tweet.user.profile_image_url}
        userName={tweet.user.screen_name}
        timeStamp={date}
        text={tweetText}
        tweetImgUrl={tweetImage}
        tweetImgText={tweetImageDisplay}
        favoriteCount={tweet.favorite_count}
        retweetCount={tweet.retweet_count}
      />
    )
  })

  return (
    <div>
      {tweets}
    </div>
  )
}

export default TwitterFeed;
