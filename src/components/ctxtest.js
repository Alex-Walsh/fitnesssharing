import React, { useContext } from 'react';
import { UsrCntxt } from '../contextThings';

export default function Ctx() {
    const {value, setvalue} = useContext(UsrCntxt);


    return (
        <div>
        <h1>
            {value}
        </h1>
        <button onClick={() => setvalue('hey')}>Click Me</button>
        </div>
    );
}