import React from 'react'
import { Button, Avatar} from '@mui/material';
import './TweetBox.css'

export default function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox--input">
            <Avatar src="https://avatars.githubusercontent.com/u/98031422?s=40&v=4"/>
            <input placeholder="What's happening?" type="text"/>
           
        </div>
        <input 
        className='tweetBox--imageInput'
        placeholder="Optional: Enter image URL" 
        type="text"/>
        <Button className='tweetBox--tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}
