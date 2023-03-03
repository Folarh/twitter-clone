import React from 'react'
import TweetBox from './TweetBox'
import './Feed.css'
import Post from './Post'

export default function Feed() {
  return (
    <div className='feed'>
      {/* header */}
      <div className='feed--header'>
      <h2>Home</h2>
      </div>
      
      {/* tweetbox */}
      <TweetBox/>

      {/* posts */}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

