import React, { useState, useEffect } from 'react';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton, FacebookIcon, PinterestIcon, TwitterIcon } from "react-share";

const SocialMedia = (props) => {

  return (
    <div>
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon round={true}/>
      </FacebookShareButton>
      <PinterestShareButton url={window.location.href} media={props.style.photos[0].url}>
        <PinterestIcon round={true}/>
      </PinterestShareButton>
      <TwitterShareButton url={window.location.href}>
        <TwitterIcon round={true}/>
      </TwitterShareButton>
    </div>
    );
}


export default SocialMedia;