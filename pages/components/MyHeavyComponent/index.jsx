import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import cl from 'classnames';

import style from './index.module.scss';

const themes = {
	white: 'white',
    black: 'black',
};

const MAX_NUMBER = 20;

function MyHeavyComponent() {
    console.log('re-render MyHeavyComponent')
    const [ theme, setTheme ] = useState(themes.white);

    const [ currentNum, setCurrentNum ] = useState(MAX_NUMBER);
    const [ error, setError ] = useState(null);

    const factorialCurrentNum = typeof currentNum === 'number' && currentNum <= MAX_NUMBER
        ? factorial(currentNum)
        : null;
    
    const [ myTime, setMyTime ] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setMyTime(myTime + 1);
        }, 1000);
    }, [myTime]);

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
            <section>
                <label className={style.factorialCalculation__Label}>Put your number:</label>
                <input
                    type="number"
                    value={currentNum}
                    className={style.factorialCalculation__Input}
                    onChange={(event) => {
                        const newNum = Number(event.target.value);
                        if (newNum > MAX_NUMBER) {
                            setError('Sorry, I will die to calculate it...:P');
                        }
                        setCurrentNum(event.target.value === '' ? event.target.value : newNum);
                    }}
                />
                {error && <p className={style.factorialCalculation__Error}>{error}</p>}
                <p className={style.factorialCalculation__Result}>
                    Factorial current number {currentNum} is: 
                    {` ${factorialCurrentNum || 'NOOOOOOO!!! I am dead! :D'}`}
                </p>
            </section>
            <section>My own time! 😎 {myTime}</section>
        </div>
    );
}

export default MyHeavyComponent;

function factorial(n) {
    if (n < 0) {
        console.error('factorial вызван с неверным значением n');
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
