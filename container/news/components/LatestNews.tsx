import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router'
import { fetchApi } from '../../../config/Api'
import { AxiosResponse, AxiosError } from 'axios'
import queryString from 'querystring'

function LatestNews() {

  const [articles, setArticles] = useState<any>(null);

  useEffect(() => {
    const data = {
      country: 'us'
    }
    fetchApi({
      method: 'GET',
      url: `/v2/top-headlines?${queryString.stringify(data)}`
    }).then(
      (result: AxiosResponse) => {
        if (result.status === 200) {
          setArticles(result.data.articles)
        }
      }
    ).catch(
      (error: AxiosError) => {
        console.log(error);
      }
    );
  }, []);

  return(
    <div className="latestnews flex flex-nowrap flex-row overflow-x-auto scrolling-auto" >
      {
        articles && articles.map (
          (value: ArticleElement, index: number) =>
          <Cards 
          key = {`${index}`}
          image = {value.urlToImage}
          title = {value.title}
          time = {value.publishedAt}
          content = {value.content}
          author = {value.author}
          />
        )
      }
    </div>
  );
}
  
export default LatestNews

interface Props{
  image: string;
  title: string;
  time: string;
  content: string;
  author: string;

}

function Cards ({image, title, time, content, author}: Props) {
  const history: any = useHistory();
  return(
    <div className="news w-1/2 h-40 mx-1 md:w-1/4 h-40 pb-1" onClick={()=> history.push('/news', {image, title, time, content, author})}>
      <div className="item w-full h-full cursor-pointer">
       <img src={image} alt="image" className="image w-full h-full object-cover rounded-lg"/>
        <div className="text ml-3">
          <h3 className="newstitle">{title}</h3>
          <h3 className="newstime text-sm text-gray-700">{time}h ago</h3>
        </div>
      </div>
    </div>
  )
}


export interface Article {
  JSON:               JSON;
  "Response Payload": ResponsePayload;
}

export interface JSON {
  status:       string;
  totalResults: number;
  articles:     ArticleElement[];
}

export interface ArticleElement {
  source:      Source;
  author:      string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  string;
  publishedAt: string;
  content:     string;
}

export interface Source {
  id:   null | string;
  name: string;
}

export interface ResponsePayload {
  EDITOR_CONFIG: EditorConfig;
}

export interface EditorConfig {
  text: string;
  mode: string;
}
