import React from 'react'
import css from './Categories.module.css'


const Categories = () => {
  return (
    <div className={css.categories}>
            <ul>
                <li>Каблучки</li>
                <li>Обручки</li>
                <li>Ланцюжки</li>
                <li>Браслети</li>
                <li>Сережки</li>
                <li>Кольє</li>
                <li>Хрестики</li>
                <li>Набори</li>
            </ul>
    </div>
  )
}

export default Categories