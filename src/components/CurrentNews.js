
    import axios from "axios";
import React, { useEffect, useState } from 'react'
import './news.css'

export default function CurrentNews() {
    const [currNews, setCurrnews] = useState(null);

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {q: 'coins', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '2d2a9fa111msh699a1383208323dp1a75fejsne0a16aa95880',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};
    useEffect(() => {
    axios.request(options).then(function (response) {
    setCurrnews(response.data.value);
}).catch(function (error) {
	console.error(error);
});
},[])

    if (!currNews) {
        return
    }
    console.log(currNews[0])
  return (
      <div className="newscards">
          {
              currNews.map((data,index) => {
                  return <>
                      <div className="news-container" key={index}>
                          <h5>{data.description}</h5>
                          <br/>
                          <h5>Date:{data.datePublished.slice(0, 10)}</h5>
                          <h5>{data.provider[0].name}</h5>
                          <a className="see-more-link" href={data.url}>See More </a>
                          {/* <img src={ data.image.thumbnail.contentUrl} /> */}

                            
                          
                        
                      </div>
                  </>
            })  
          }
    </div>
  )
}
