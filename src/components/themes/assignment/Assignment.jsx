import React from 'react';
import s from './Assignment.module.css'
import NavBar from '../../NavBar/NavBar';



const Assignment = () => {
    return (
        <div className={s.about}>
     <NavBar/>
            <h1>Присваивание значений</h1>

            <h1 className={s.about_header}>Python is...</h1>
            <div className={s.about_text}>
                Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.[28]
                Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural,) object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library.[29]
            </div>
            <h1 className={s.about_header}>Python is...</h1>
            <div className={s.about_text}>
                Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.[28]
                Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural,) object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library.[29]
            </div>
            <h1 className={s.about_header}>Python is...</h1>
            <div className={s.about_text}>
                Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.[28]
                Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural,) object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library.[29]
            </div>
        </div>

    );
}

export default Assignment;
