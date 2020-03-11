import React from 'react'
import CategoryNews from '../components/CategoryNews'

interface Props {
  location: any;
}

function CategoryNewsScreen({location}: Props) {
  return (
    <div className="categorynews_screen m-2">
      <CategoryNews categoryName = {location.state.categoryName}/>
    </div>
  )
}

export default CategoryNewsScreen
