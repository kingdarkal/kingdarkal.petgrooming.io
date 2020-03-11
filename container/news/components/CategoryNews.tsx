import React from 'react'
import { MdYoutubeSearchedFor, MdKeyboardBackspace}from 'react-icons/md'
import {useHistory} from 'react-router'

interface CategoriesProps{
  categoryName: string;
}

function CategoryNews({ categoryName} : CategoriesProps) {
  const history: any = useHistory();
  return(
    <div className="categorynews">
      <div className="menunews flex justify-between items-center mb-6">
      <MdKeyboardBackspace className="cursor-pointer" size={25} color='black' onClick={()=> history.goBack('/')} />
       <h1 className="title font-bold">{categoryName}</h1>
      <div><MdYoutubeSearchedFor size={25}/></div>
    </div>

    <div className=''>
      <div className="latestnews flex flex-nowrap flex-row overflow-x-auto scrolling-auto"> 
      <div className="news w-1/2 h-40 mx-1">
      <div className="item w-full h-full cursor-pointer">
       <img src='https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png' className="image w-full h-full object-cover rounded-lg"/>
        <div className="text ml-3">
          <h3 className="newstitle">Title</h3>
          <h3 className="newstime text-sm text-gray-700">5h ago</h3>
        </div>
      </div>
    </div>
    <div className="news w-1/2 h-40 mx-1">
      <div className="item w-full h-full cursor-pointer">
       <img src='https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png' className="image w-full h-full object-cover rounded-lg"/>
        <div className="text ml-3">
          <h3 className="newstitle">Title</h3>
          <h3 className="newstime text-sm text-gray-700">5h ago</h3>
        </div>
      </div>
    </div>
    <div className="news w-1/2 h-40 mx-1">
      <div className="item w-full h-full cursor-pointer">
       <img src='https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png' className="image w-full h-full object-cover rounded-lg"/>
        <div className="text ml-3">
          <h3 className="newstitle">Title</h3>
          <h3 className="newstime text-sm text-gray-700">5h ago</h3>
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
  )
}

export default CategoryNews