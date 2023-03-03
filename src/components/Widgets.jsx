import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'

export default function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets--input">
        <SearchIcon className="widgets--searchIcon"/>
        <input type="text" placeholder='Search Twitter'/>
      </div>

      <div className="widgets--widgetsContainer">
        <h2>Wahat's happening</h2>
        <TwitterTweetEmbed tweetId="1099327577490104322"/>
        < TwitterTimelineEmbed
        sourceType="profile"
        screenName="hardey_folarin"
        options={{height: 400}}
        />
        < TwitterTimelineEmbed
        sourceType="profile"
        screenName="MakinsOf_Events"
        options={{height: 400}}
        />
        <TwitterShareButton
        url={"https://web.facebook.com/folarin14"}
        option={{text: "#reactjs is awesome", via:"hardey_folarin"}}
        />
      </div>
    </div>
  )
}
