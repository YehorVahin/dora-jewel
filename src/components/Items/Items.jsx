import css from './Items.module.css'
import Item from '../Item/Item'

const Items = ({item}) => {
    return(
        <main>
        <ul className={css.items}>
            {item.map(({id, image, name, weight, stone, article}) => (
                <li className={css.listitem} key={id}>
                    <Item image={image} name={name} weight={weight} stone={stone} article={article}/>
                </li>
            ))}
        </ul>
        </main>
    )
}
export default Items