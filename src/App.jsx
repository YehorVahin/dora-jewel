import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Item from './components/Item/Item'

import item from './item.json'

function App() {
  

  return (
    <>
     <Header/>
     <Presentation/>
     <Item
     image={item.image} 
     name={item.name} 
     color={item.color} 
     stone={item.stone} 
     price={item.price}/>
    </>
  )
  
}

export default App
