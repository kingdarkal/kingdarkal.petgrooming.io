import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useHistory } from 'react-router'

interface LatestNewsProps {
  image: string;
}

function NewsHeader({ image }: LatestNewsProps) {
  const history: any = useHistory();
  return (
    <div className="">
      <img src={image}className={"newsimg w-full h-full"} />
      <div className="back">
        <MdKeyboardBackspace className="cursor-pointer" size={25} color='white' onClick={() => history.goBack('/')} />
      </div>
    </div>
  )
}

export default NewsHeader