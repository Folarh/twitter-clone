import React from 'react'

//material icons
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

//style
import './Sidebar.css'

//components import
import SidebarOption from './SidebarOption';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        {/* {twitter icon} */}
        <TwitterIcon className='twitter--icon'/>


     <SidebarOption active Icon={HomeIcon} text="Home"/>
     <SidebarOption Icon={TagIcon} text="Explore"/>
     <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
     <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
     <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
     <SidebarOption Icon={ListAltIcon} text="List"/>
     <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
     <SidebarOption Icon={MoreHorizIcon} text="More"/>

     <Button variant='outlined' className='sidebar--tweet' fullWidth>
      Tweet
      </Button>
        
      
    </div>
  )
}
