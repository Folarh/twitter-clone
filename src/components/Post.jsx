import React from 'react'
import './Post.css'
import { Avatar} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';

// images
import Red from "../assets/redGirl_gg3p24.png"


export default function Post() {
  return (
    <div className='post'>
      <div className="post--avatar">
      <Avatar src="https://avatars.githubusercontent.com/u/98031422?s=40&v=4"/>
      </div>
      <div className="post--body">
        <div className="post--header">
            <div className="post--headerText">
                <h3>
                    Taiwo Ojo 
                    <span className='post--headerSpecial'>
                        <VerifiedUserIcon className="post--badge"/>
                        @Folarh
                    </span>
                </h3>
            </div>
            <div className="post--headerDescription">
                <p>I challenge you to build a twitter clone with react</p>
            </div>
        </div>
        <img src={Red} alt=""/>
        <div className="post--footer">
            <ChatBubbleOutlineIcon fontSize="small"/>
            <RepeatIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
  )
}
