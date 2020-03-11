import React from "react"
import FacebookSharebutton, { FacebookIcon, TwitterIcon,WhatsappIcon, FacebookShareCount } from 'react-share'


interface LatestNewsProps {
  title: string;
  content: string;
  author: string;
  time: string;
}

function NewsBody({title, content, author, time}: LatestNewsProps) {
  return (
    <div className="newsbody overflow-x-auto">
      <div className="info flex justify-around items-center mb-2 mr-1 pt-4"> 
        <h1 className="author text-gray-700 text-sm">{author}</h1> 
        <h1 className="categorynews font-bold text-lg">Technology</h1>
  <h1 className="date text-gray-700 text-sm">{time}</h1>
      </div>
      <div className="font-bold pt-6 pl-4">
        <h3>{title}</h3>
      </div>
      <div className='content p-4'>
        <p>{content}</p>
        <div className="share font-bold text-lg pt-4">Share this post</div>
          <div className="flex justify-around pt-2">
            <FacebookIcon className="p-2" size={75} round={true}/>
            <TwitterIcon className="twitter p-2" size={75} round={true}/>
            <WhatsappIcon className="p-2" size={75} round={true}/>
          </div>
      </div>
    </div>
  )
}

export default NewsBody