import { FaTelegram } from "react-icons/fa";
import React, { Component } from 'react'
import Categories from '../Categories/Categories';



export default function Header() {
  
    return (
      <div className='header'>
        <div className='logo'><p className='text-logo'>DoraJewel</p></div>
        <div className='nav-menu'>
        <Categories chooseCategory={this.chooseCategory}/>
        </div>
        
        <div className='telegram-link'>
                <FaTelegram className='telegram'/>
                <a  href="https://l.instagram.com/?u=https%3A%2F%2Ft.me%2F%2B3j_naYRgY9k5ODgy%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacrUuYwm48LQP-tVD_096E8jR5SS00hLDd8wa-SWOnEW6Xf3AjXnwgNZnYkIw_aem_V9JoBQILNVsFvDiHX9aXQQ&e=AT1N2NXhP9AlRblD91sF_SM62XpR_4BDuWKq4qZjiiFslENKm0WiZP6MiHuKlGYS2WKfv5UrQ9mzRB70X3rMUGCTG3EDfNjsl6QhhQ">Телеграм канал</a>
        </div>
      </div>
    )
}