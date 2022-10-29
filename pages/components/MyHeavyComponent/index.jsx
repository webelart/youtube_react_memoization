import React, { useState, useEffect, useRef } from 'react';

import style from './index.module.scss';

const MAX_NUMBER = 20;

function MyHeavyComponent() {
    const [ currentNum, setCurrentNum ] = useState(MAX_NUMBER);
    const [ error, setError ] = useState(null);
    const [ myTime, setMyTime ] = useState(0);
    const intervalRef = useRef();

    const factorialCurrentNum = currentNum <= MAX_NUMBER
        ? factorial(currentNum)
        : null;

    useEffect(() => {
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setMyTime(myTime + 1);
        }, 1000);
    }, [myTime]);

    return (
        <div className={style.heavyComponent}>
            <section>
                <label className={style.heavyComponent__Label}>Put your number:</label>
                <input
                    type="number"
                    value={currentNum}
                    className={style.heavyComponent__Input}
                    onChange={(event) => {
                        const newNum = Number(event.target.value);
                        if (newNum > MAX_NUMBER) {
                            setError('Sorry, I will die to calculate it...:P');
                        }
                        setCurrentNum(newNum);
                    }}
                />
                {error && <p className={style.heavyComponent__Error}>{error}</p>}
                <p className={style.heavyComponent__Result}>
                    Factorial current number {currentNum} is: 
                    {` ${factorialCurrentNum || 'NOOOOOOO!!! I am dead! :D'}`}
                </p>
            </section>
            <section>My own time! 😎 {myTime}</section>
        </div>
    );
}

// 0! = 1
// n! = n * (n - 1)!

// 2! = 1 * 2 = 2;
// 3! = 1 * 2 * 3 = 6;
// 4! = 1 * 2 * 3 * 4 = 24;


function factorial(n) {
    if (n < 0) {
        console.error('factorial вызван с неверным значением n');
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

export default MyHeavyComponent;