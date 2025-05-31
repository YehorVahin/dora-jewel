import css from './Item.module.css'
import {React} from 'react'

const Item = ({id, image, name, weight, stone, article, children}) => {
    
    return(
        <div className={css.item}>
            <img src={image} alt="" />
            <p className={css.name}>{name}</p>
            <p className={css.weight}>Середня вага: {weight}г</p>
            <p className={css.stone}>Вставка: {stone}</p>
            <p className={css.article}> Артикул: {article}</p>
            <div key={id}>{children}</div>
        </div>
    )
}
export default Item