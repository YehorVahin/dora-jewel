import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Items from './components/Items/Items'
import item from './item.json'

function App () {
  return (
    <div className='wrapper'>
    <Header/>
    <Presentation/>
    <Items item={item}/>
    </div>)
}

export default App
