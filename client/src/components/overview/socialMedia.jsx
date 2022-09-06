import React, { useState, useEffect } from 'react';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton, FacebookIcon, PinterestIcon, TwitterIcon } from "react-share";

const SocialMedia = (props) => {

  return (
    <div>
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon round={true} size={20}/>
      </FacebookShareButton>
      <PinterestShareButton url={window.location.href} media={props.style.photos[0].url}>
        <PinterestIcon round={true} size={20}/>
      </PinterestShareButton>
      <TwitterShareButton url={window.location.href}>
        <TwitterIcon round={true} size={20}/>
      </TwitterShareButton>
    </div>
    );
}


export default SocialMedia;