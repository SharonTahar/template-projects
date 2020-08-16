import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import PicShow from './component/PicShow'

const pics = [
  {
    id: 1,
    image_url:'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'
  },
  {
    id: 2,
    image_url:'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'
  },
  {
    id: 3,
    image_url:'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'
  }
]


function App() {
  return (
    <Carousel>
    {
      pics.map( (item, i) => {
        return <PicShow data={item} key={i}/>
      })
    }
    </Carousel>
  );
}

export default App;
