// ShareButtons.js
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ShareButtons = ({ url, title }) => {
  return (
    <div>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon></TwitterIcon>
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon></WhatsappIcon>
      </WhatsappShareButton>
      {/* Add more social share buttons as needed */}
    </div>
  );
};

export default ShareButtons;
