import React from 'react'
import NewsHeader from '../components/NewsHeader'
import NewsBody from '../components/NewsBody'
import ReleatedPosts from '../components/ReleatedPosts'
import Menu from '../components/Menu'

interface Props {
  location: any;
}

function NewsScreen({ location }: Props) {
  return(
    <div className="newsscreen">
    <Menu/>
    <NewsHeader image = {location.state.image}/>
    <NewsBody title = {location.state.title}
              content = {location.state.content}
              author = {location.state.author}
              time = {location.state.time}
    />
    <ReleatedPosts/>
    </div>
  )
}

export default NewsScreen