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
      items: [
        {
          id: 1,
          key: "rings",
          name: "Каблучка",
          color: "Жовте золото",
          stone: "Рубін",
          image: "ring.png",
          price: "20000"
      },
      {
          id: 2,
          key: "rings",
          name: "Каблучка",
          color: "Жовте золото",
          stone: "Рубін",
          image: "ring.png",
          price: "20000"
      },
      {
          id: 3,
          key: "rings",
          name: "Каблучка",
          color: "Жовте золото",
          stone: "Рубін",
          image: "ring.png",
          price: "20000"
      },
      {
          id: 4,
          key: "rings",
          name: "Каблучка",
          color: "Жовте золото",
          stone: "Рубін",
          image: "ring.png",
          price: "20000"
      },
      {
          id: 5,
          key: "rings",
          name: "Каблучка",
          color: "Жовте золото",
          stone: "Рубін",
          image: "ring.png",
          price: "20000"
      },
      {
          id: 6,
          key: "rings",
          name: "Каблучка",
          color: "Жовте золото",
          stone: "Рубін",
          image: "ring.png",
          price: "20000"
      },
      {
          id: 7,
          key: "rings",
          name: "Каблучка",
          color: "Жовте золото",
          stone: "Рубін",
          image: "ring.png",
          price: "20000"
      }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <>
     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
     <Presentation/>
     <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
    </>
  )
}
onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category) {
  if (category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({currentItems: this.state.items.filter(el => el.category === category)})
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}
addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el => {
    if (el.id === item.id) 
      isInArray = true
    
  })
    if (!isInArray) {
      this.setState({orders:[...this.state.orders, item]})
    }
  }
}

export default App
