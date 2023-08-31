import React, {useState, useEffect} from 'react';
import './Test.css';

const TestBiz = ()=>{
  
  const clickBtn = async () => {

    let param ={};
    let response;
    let result ;
    const obj ={};

    param.name = 'a';
    param.password = 'b';
   
    response = await fetch('/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
    });

     result = await response.json();

    if (result) {
      var Taxt = '';
      for (let i = 0; i < result.length; i ++ ){
        let val = result[i];
        let textVal = ' [ ' + i + ' ] 번 째 : ' + JSON.stringify(val) + '\n'; 
        console.log( '[ ' , i , ' ] 번째 : ' , val);
        obj[i] = val;
        Taxt += textVal;
      }
      console.log(obj)
      alert(Taxt);
    }
}


  return (
    <div>
      <button onClick={clickBtn}>{'Click'}</button>
    </div>
  );
}

export default TestBiz;