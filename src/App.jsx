import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Items from './components/Items/Items'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state =
    {
      currentItems: [],
      item: [
        {
          "id": 1,
          "key": "rings",
          "name": "Каблучка",
          "color": "Жовте золото",
          "stone": "Рубін",
          "image": "ring.png",
          "price": "20000"
      },
      {
          "id": 2,
          "key": "rings",
          "name": "Каблучка",
          "color": "Жовте золото",
          "stone": "Рубін",
          "image": "ring.png",
          "price": "20000"
      },
      {
          "id": 3,
          "key": "rings",
          "name": "Каблучка",
          "color": "Жовте золото",
          "stone": "Рубін",
          "image": "ring.png",
          "price": "20000"
      },
      {
          "id": 4,
          "key": "rings",
          "name": "Каблучка",
          "color": "Жовте золото",
          "stone": "Рубін",
          "image": "ring.png",
          "price": "20000"
      },
      {
          "id": 5,
          "key": "rings",
          "name": "Каблучка",
          "color": "Жовте золото",
          "stone": "Рубін",
          "image": "ring.png",
          "price": "20000"
      },
      {
          "id": 6,
          "key": "rings",
          "name": "Каблучка",
          "color": "Жовте золото",
          "stone": "Рубін",
          "image": "ring.png",
          "price": "20000"
      },
      {
          "id": 7,
          "key": "rings",
          "name": "Каблучка",
          "color": "Жовте золото",
          "stone": "Рубін",
          "image": "ring.png",
          "price": "20000"
      }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(){
  return (
    <>
     <Header/>
     <Presentation/>
     <Items/>
    </>
  )
}
}

export default App
