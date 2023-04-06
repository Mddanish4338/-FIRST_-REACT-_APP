import { useState } from 'react';
import './incDre.css';

const IncDre = () => {
    const [number,setnumber] = useState(0);
    const increment = () =>{
        setnumber(number+1);
    }
    const decrement = () =>{
        setnumber(number-1)
    }
   const reset = () =>{
        setnumber(0);
    }
    

    return (
        <div className="incDreParent">
            <p className='DANISH'><strong>{number}</strong> </p>
            <div className='child'>
                <button className='inc' onClick={increment}>inc</button>
                <button className='inc' onClick={decrement}>dre</button>
                <button className='inc' onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default IncDre;