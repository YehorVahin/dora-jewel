import css from './Header.module.css'
import { FaTelegram } from "react-icons/fa";
import React, { Component } from 'react'
import Categories from './Categories';



export class Header extends Component {
  render() {
    return (
      <div className={css.header}>
        <div className={css.logo}><p className={css.textlogo}>DoraJewel</p></div>
        <div className='nav-menu'>
            <Categories/>
        </div>
        <div className={css.telegramlink}>
                <FaTelegram className={css.telegram}/>
                <a target='blank' href="https://l.instagram.com/?u=https%3A%2F%2Ft.me%2F%2B3j_naYRgY9k5ODgy%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacrUuYwm48LQP-tVD_096E8jR5SS00hLDd8wa-SWOnEW6Xf3AjXnwgNZnYkIw_aem_V9JoBQILNVsFvDiHX9aXQQ&e=AT1N2NXhP9AlRblD91sF_SM62XpR_4BDuWKq4qZjiiFslENKm0WiZP6MiHuKlGYS2WKfv5UrQ9mzRB70X3rMUGCTG3EDfNjsl6QhhQ">Телеграм канал</a>
        </div>
      </div>
    )
  }
}

export default Header