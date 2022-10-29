import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import cl from 'classnames';

import FactorialCalculation from '../FactorialCalculation';
import MyTime from '../MyTime';

import style from './index.module.scss';

const themes = {
	white: 'white',
    black: 'black',
};



function MyHeavyComponent() {
    console.log('re-render MyHeavyComponent')
    const [ theme, setTheme ] = useState(themes.white);

    const myArray = useMemo(() => ([
        {id: 1, title: 'Elena'},
        {id: 2, title: 'Alena'},
        {id: 3, title: 'Kate'},
        {id: 4, title: 'Andrey'}
    ]), []);

    const myClick = useCallback(() => {
        console.log('My calculation')
    }, [])

    return (
        <div className={cl(style.heavyComponent, theme === themes.white ? style.heavyComponentWhite : style.heavyComponentBlack)}>
            <button
                className={style.button}
                onClick={() => {
                    if (theme === themes.white) {
                        setTheme(themes.black)
                    } else {
                        setTheme(themes.white)
                    }
                }}
            >
                Change theme
            </button>
            <FactorialCalculation
                myArray={myArray}
                onClick={myClick}
            />
            <MyTime />
        </div>
    );
}

export default MyHeavyComponent;
