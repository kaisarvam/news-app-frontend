import React from 'react'
import { useState } from 'react';

 const DatePickerOption=()=>{ 
    const [date,setDate]= useState(null);
    console.log("found date :",date);
  return (
    <div style={{height:"35px",backgroundColor:"#FFFFFF",marginTop:"-2px"}}>
        <div>
      <input style={{height:"35px",backgroundColor:"#FFFFFF",borderRadius:"5px"}} type="date" onChange= {(e)=>{
        setDate(e.target.value);
      }}
      />
        </div>
    </div>
  )
}

export default DatePickerOption;