import css from './Item.module.css'

const Item = ({image, name, weight, stone, article}) => {
    return(
        <div className={css.item}>
            <img src={image} alt=""/>
            <p className={css.name}>{name}</p>
            <p className={css.weight}>Середня вага: {weight}г</p>
            <p className={css.stone}>Вставка: {stone}</p>
            <p className={css.article}> Артикул: {article}</p>
        </div>
    )
}
export default Item