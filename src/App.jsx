import {React, useState} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Items from './components/Items/Items'
import item from './item.json'
import { Modal } from './components/Modal/Modal'

function App () {
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  const handleModalOpen = () => {
    setModalInfoOpen(true);
  };
  const handleModalClose = () => {
    setModalInfoOpen(false);
  };
  return (
    <div className='wrapper'>
    <Header/>
    <Presentation/>
    <Items item={item}>
      <button className='modal-button' onClick={handleModalOpen}>Детальніше</button>
    </Items>
    {modalInfoIsOpen && (
      <div>
        {item.map(({id, image, name, weight, stone, article }) => (
          <Modal key={id} isOpen={modalInfoIsOpen} onClose={handleModalClose} image={image} name={name} weight={weight} stone={stone} article={article} >
            </Modal>
           ))}
       </div> )}
    </div>)
}

export default App
