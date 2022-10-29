import React, { useState, useMemo } from 'react';

import style from './index.module.scss';

const MAX_NUMBER = 20;

function FactorialCalculation({
    myArray,
    onClick,
}) {
    const [ currentNum, setCurrentNum ] = useState(MAX_NUMBER);
    const [ error, setError ] = useState(null);

    console.log('re-render FactorialCalculation')

    const factorialCurrentNum = typeof currentNum === 'number' && currentNum <= MAX_NUMBER
            ? factorial(currentNum)
            : null;

    return (
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

export default React.memo(FactorialCalculation);