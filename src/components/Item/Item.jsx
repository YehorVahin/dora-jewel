import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt="" onClick={() => this.props.onShowItem(this.props.item)}/>
        <div className=''>
            <h2 className=''>{this.props.item.name}</h2>
            <p className=''>{this.props.item.color}</p>
            <p className=''>{this.props.item.stone}</p>
            <b className=''>{this.props.item.price} грн.</b>
      </div>
      </div>
    )
  }
}

export default Item