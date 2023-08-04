import { useState } from 'react'
import {Hero} from './components/hero'
 import { Navbar } from './components/Navbar'
 import { Card } from './components/Card'
 import { Contact } from './components/contact'
 import card from './assets/card-img.png'
 import wed from './assets/wedding-photography.png'
 import bike from './assets/bike.jpeg'
import { Jokes } from './components/jokes'
import {a} from './components/jokesData'

import './App.css'

function App() {
    const ele= a.map(el=> (<Card img={el.coverImg}
    rating={el.stats.rating}
    reviews={el.stats.reviewCount}
    title={el.title}
    price={el.price}
    open={el.openSpots}
    />))
  return (
    <div>
      <Navbar/>
      <Hero/>
    <div className='card'> 
      {ele}
    </div>
    </div>
   
   )
  }
  
  export default App
  
  //        <Navbar/>
  //  <Hero/>
  //   <div className='card-abc'>
  //    <Card img={card} rating='6' detail='Life lessons with Katie Zaferes'  price='18$' />    
  //    <Card img={wed} rating='30' detail='Learn wedding photography'  price='30$' />    
  //    <Card img={bike} rating='90' detail='Group Mountain Biking'  price='120$' />    

      
  //   </div>
  // <Jokes setup='I got my daughter a fridge for her birthday' punchline="I can't wait to see her face light up when she opens it"/>
  // <Jokes setup='I got my daughter a fridge for her birthday' punchline="I can't wait to see her face light up when she opens it"/>
  // <Jokes setup='I got my daughter a fridge for her birthday' punchline="I can't wait to see her face light up when she opens it"/>
  // <Jokes setup='I got my daughter a fridge for her birthday' punchline="I can't wait to see her face light up when she opens it"/>