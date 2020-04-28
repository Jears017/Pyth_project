import React from 'react';
import s from './NavBar.module.css'
import { NavLink, Route } from 'react-router-dom';





const NavBar = () => {
    return (
            <div class={s.sidenav}>
                <NavLink className={s.link} to="/installation">Установка Python на компьютер</NavLink>
                <NavLink className={s.link} to="/firstProgram">Ваша первая программа</NavLink>
                <NavLink className={s.link} to="/numeric">Работа с переменными</NavLink>
                <NavLink className={s.link} to="/arithOperations">Арифметические действия</NavLink>
                <NavLink className={s.link} to="/assignment">Присваивание значений</NavLink>
                <NavLink className={s.link} to="/logicalOper">Оценочная логика</NavLink>
                <NavLink className={s.link} to="/priority">Определение приорететов</NavLink>
                <NavLink className={s.link} to="/datatypes">Преобразование типов данных</NavLink>
                <NavLink className={s.link} to="/lists">Списки</NavLink>
                <NavLink className={s.link} to="/conditional">Условные операторы</NavLink>
                <NavLink className={s.link} to="/introduction">Переменные</NavLink>
            </div>
    );
}

export default NavBar;
