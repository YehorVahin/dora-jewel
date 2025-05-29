import css from './Items.module.css'
import Item from '../Item/Item'

import {React} from 'react'


const Items = ({item, children}) => {
    return(
        <main>
        <ul className={css.items}>
            {item.map(({id, image, name, weight, stone, article}) => (
                <li className={css.listitem} key={id}>
                    <Item image={image} name={name} weight={weight} stone={stone} article={article}>
                    {children}
                    </Item>
                </li>
            ))}
        </ul>
        
        </main>
    )
}
export default Items