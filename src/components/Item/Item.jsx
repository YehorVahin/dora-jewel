import css from './Item.module.css'

const Item = ({image, name, color, stone, price}) => {
    return (
      <div className={css.item}>
        <img src={image} alt="Jewelry image" className={css.itemimage}/>
        <div className={css.desc}>
            <p className={css.name}>{name}</p>
            <p className={css.color}>{color}</p>
            <p className={css.stone}>{stone}</p>
            <b className={css.price}>{price} грн.</b>
        </div>
      </div>
    )
  
}

export default Item