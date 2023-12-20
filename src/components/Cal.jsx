import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './cal.css'


function Cal() {
    const [amount,setAmount]=useState(0);
    console.log(amount);
    const [year,setYear]=useState(0);
    const [rate,setRate]=useState(0)
    const [result, setResult]=useState(0)

    const calculate=(e)=>{
        const output=amount*year*rate/100;
        console.log(output);
        setResult(output);
    }

    const reset=(e)=>{
        setAmount(0);
        setRate(0);
        setYear(0);
        setResult(0);
    }







  return (
        <div className="container">
            <div className="header">
                <h1>Simple Intrest Calculator</h1>
                <p>Calculate Your simple Intrest With Us</p>
            </div>
            <div className="total">
                <h2>&#x20B9;{result}</h2>
            </div>
            <div className="form">

            <form >
            <TextField id="outlined-basic" label="Amount" variant="outlined" className='amt' type='number' value={amount||""} onChange={(e)=>setAmount(e.target.value)} />
            <br />
            <TextField id="outlined-basic" label="Percentage" variant="outlined" type='number' className='perc' value={rate||""} onChange={(e)=>setRate(e.target.value)} /><br />
            <TextField id="outlined-basic" label="Number Of Years" variant="outlined" type='number' className='years' value={year||""} onChange={(e)=>setYear(e.target.value)} /><br />
            <br />
            <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
            <Button variant="contained" onClick={e=>reset(e)}>Reset</Button>
            </form>

            
            </div>
            
        </div>
  )
}

export default Cal