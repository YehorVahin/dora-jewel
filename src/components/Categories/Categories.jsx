import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    "key": "rings",
                    "name": "Каблучки"
                },
                {
                    "key": "weddingrings",
                    "name": "Обручки"
                },
                {
                    "key": "earrings",
                    "name": "Сережки"
                },
                {
                    "key": "chains",
                    "name": "Ланцюжки"
                },
                {
                    "key": "bracelets",
                    "name": "Браслети"
                },
                {
                    "key": "necklaces",
                    "name": "Кольє"
                },
                {
                    "key": "crosses",
                    "name": "Хрестики"
                },
                {
                    "key": "kits",
                    "name": "Набори"
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories