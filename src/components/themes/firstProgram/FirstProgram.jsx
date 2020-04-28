import React from 'react';
import s from './FirstProgram.module.css'
import NavBar from '../../NavBar/NavBar';



const FirstProgram = () => {
    return (
        <div className={s.about}>
            <NavBar />
            <h1>Ваша первая программа</h1>

            <h1 className={s.about_header}>Python is...</h1>
            <div className={s.about_text}>
                Кроме того, что интерактивный режим Python полезен в качестве
                простейшего калькулятора, его можно использовать для создания
                программ. Программа на языке Python — это обычный текстовый
                файл, созданный с помощью простого редактора, такого как Блокнот
                (Notepad), и сохраненный в файле с расширением .py. Запустить программу на Python можно, указав имя соответствующего файла после
                команды python в командной строке интерпретатора.
            </div>

            <div className={s.about_text}>
                По традиции первая программа, которую создают при изучении языка
                программирования, просто выводит какое-либо сообщение с приветствием. На языке Python для этого используется функция print(), сообщение для вывода этой функции указывается в скобках. Это может
                быть строка символов, заключенная в кавычки. Кавычки могут быть
                как двойными (""), так и одинарными(''), но нельзя использовать одновременно и те, и другие.
            </div>
            <h1 className={s.about_header}>Python is...</h1>
            <div className={s.about_text}>
                Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.[28]
                Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural,) object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library.[29]
            </div>
        </div>

    );
}

export default FirstProgram;
