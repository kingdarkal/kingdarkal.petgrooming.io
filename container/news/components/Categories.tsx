import React from 'react'
import {useHistory} from 'react-router'

function Categories () {
  return (
    <div className="categories flex flex-nowrap flex-row overflow-x-auto mb-5 md:justify-around">
      {
        categoryMock.map(
          (value: Props, index: number) =>
          <Category
          key = {`${index}`} 
          categoryName={value.categoryName}
          />
        )
      }
    </div>
  )
}

export default Categories

interface Props {
  categoryName: string;
}

function Category ({categoryName}: Props) {
  const history: any = useHistory();

  return(
    <div>
      <h1 className="p-4 px-5 cursor-pointer" onClick={()=> history.push('/sportnews',{categoryName})}>{categoryName}</h1>
    </div>
  )
}

let categoryMock: Props[] = [
  {
    categoryName: 'General'
  },
  {
    categoryName: 'Politics'
  },
  {
    categoryName: 'Fashion'
  },
  {
    categoryName: 'Sports'
  },
  {
    categoryName: 'Business'
  },
  {
    categoryName: 'Technology'
  },
]