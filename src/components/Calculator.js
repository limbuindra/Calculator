import React ,{useState } from 'react'

const Calculator = () => {
    const [result , setResult ]= useState("");
const clickHandler =(e)=>{
  setResult(result.concat(e.target.value));
}
const clearDisplay= () =>{
  setResult("");
}

const backSpace = (e) =>{
setResult(result.slice(0,-1));
}
const Calculate = () =>{
  try{

    setResult(eval(result).toString());
  }catch(err){
    setResult("Error")
  }
}
    return (
        <>        
             <div  className='main'>
<input type="text" placeholder="0" id="answer" value={result}/>  
<input type="button" value="CLR"className='button highlights 'id='backspace' onClick={backSpace}/>
<input type="button" value="%"className='button highlights' onClick={clickHandler}/>
<input type="button" value="/"className='button highlights' onClick={clickHandler}/>
<input type="button" value="AC"className='button highlights'id='clear' onClick={clearDisplay}/>
<input type="button" value="7"className='button' onClick={clickHandler}/>
<input type="button" value="8"className='button' onClick={clickHandler}/>
<input type="button" value="9"className='button' onClick={clickHandler}/>
<input type="button" value="*"className='button highlights' onClick={clickHandler}/>
<input type="button" value="4"className='button' onClick={clickHandler}/>
<input type="button" value="5"className='button' onClick={clickHandler}/>
<input type="button" value="6"className='button' onClick={clickHandler}/>
<input type="button" value="+"className='button highlights' onClick={clickHandler}/>
<input type="button" value="1"className='button' onClick={clickHandler}/>
<input type="button" value="2"className='button' onClick={clickHandler}/>
<input type="button" value="3"className='button' onClick={clickHandler}/>
<input type="button" value="-"className='button highlights' onClick={clickHandler}/>
<input type="button" value="0" className='button' onClick={clickHandler}/>
<input type="button" value="."className='button highlights' onClick={clickHandler}/>
<input type="button" value="="className='button  highlights btn-1'  onClick={Calculate}/>

    </div>
  </>
  );
} 
        

export default Calculator;
