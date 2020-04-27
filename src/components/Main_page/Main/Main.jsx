import React from 'react';
import s from './Main.module.css'


const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.title}>Python</div>
            <div className={s.title_text}>Python — high-level general-purpose programming language</div>
            <button className={s.button}>Press for start</button>
        </div>
    );
}

export default Main;
