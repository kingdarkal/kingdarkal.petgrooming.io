import React from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { MdYoutubeSearchedFor } from 'react-icons/md'

function Menu() {
  return (
    <div className="menu flex justify-between items-center mb-1 md:justify-around">
      <div className="burger"><AiOutlineMenuUnfold size={25}/></div>
      <h1 className="title font-bold">News</h1>
      <div><MdYoutubeSearchedFor size={25}/></div>
    </div>
  );
}

export default Menu