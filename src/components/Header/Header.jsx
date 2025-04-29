import React from 'react'
import css from './Header.module.css'
import Categories from '../Categories/Categories'
import { FaTelegram } from "react-icons/fa"
import categories from '../../categories.json'

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <p>DoraJewel</p>
      </div>
      <div><Categories key={categories.key} name={categories.name}/></div>
      <div className={css.telegramlink}>
      <FaTelegram className={css.telegram}/>
      <a target='blank' href="https://t.me/+3j_naYRgY9k5ODgy?fbclid=PAZXh0bgNhZW0CMTEAAae1DTEAKMBwWTThLAPBoKJEvuAq26R9qvq4yZYeL60ihMUxsQDZ-ZwC0N-URw_aem_aHuql36knSWl6BDKZsWY9Q">Телеграм канал</a>
      </div>
    </div>
  )
}
