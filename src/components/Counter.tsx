import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count,setCount]=useState<number>(0)
    console.log(classes)
    return (
        <div className={classes.div}>
            <div>кол-во сделанных кликов = {count}</div>
            <button onClick={()=>{setCount(count+1)}}>click</button>
        </div>
    );
};

