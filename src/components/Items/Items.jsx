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
                    <button key={id} className={css.button_open} onClick={() => setModalInfoOpen(true)}>Детальніше</button>
                    </Item>
                </li>
            ))}
        </ul>
        <Modal  isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
        {item.map(({id, image, name, weight, stone, article}) => (
                <div className={css.listitem} key={id}>
                    <Item key={id} image={image} name={name} weight={weight} stone={stone} article={article}>
                        
                        </Item>
                </div>
            ))}
        </Modal>
        </main>
    )
}
export default Items