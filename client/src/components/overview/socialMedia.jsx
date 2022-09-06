import React, { useState, useEffect } from 'react';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton, FacebookIcon, PinterestIcon, TwitterIcon } from "react-share";

const SocialMedia = (props) => {

  return (
    <div>
      <FacebookShareButton url={window.location.href}>&nbsp;
        <FacebookIcon round={true} size={24}/>
      </FacebookShareButton>
      <PinterestShareButton url={window.location.href} media={props.style.photos[0].url}>&nbsp;
        <PinterestIcon round={true} size={24}/>
      </PinterestShareButton>
      <TwitterShareButton url={window.location.href}>&nbsp;
        <TwitterIcon round={true} size={24}/>
      </TwitterShareButton>
    </div>
    );
}


export default SocialMedia;