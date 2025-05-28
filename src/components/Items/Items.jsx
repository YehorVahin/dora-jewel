import css from './Items.module.css'
import Item from '../Item/Item'
import { Modal } from '../Modal/Modal'
import {React, useState} from 'react'


const Items = ({item}) => {
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
    return(
        <main>
        <ul className={css.items}>
            {item.map(({id, image, name, weight, stone, article}) => (
                <li className={css.listitem} key={id}>
                    <Item image={image} name={name} weight={weight} stone={stone} article={article}>
                    <button className={css.button_open} onClick={() => setModalInfoOpen(true)}>Детальніше</button>
                    </Item>
                </li>
            ))}
        </ul>
        <Modal  isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
        {item.map(({ id, image, name, weight, stone, article }) => (
            <Item image={image} name={name} weight={weight} stone={stone} article={article} key={id}></Item>
            ))}
        </Modal>
        </main>
    )
}
export default Items