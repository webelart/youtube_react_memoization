import React, { useState, useEffect, useRef } from 'react';

function MyTime() {
    const [ myTime, setMyTime ] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setMyTime(myTime + 1);
        }, 1000);
    }, [myTime]);

    console.log('re-render MyTime');
    return (
        <section>My own time! 😎 {myTime}</section>
    );
}

export default MyTime;