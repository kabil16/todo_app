import React,{useState} from 'react'

const InputArea = ({addItems}) => {
    const [inputText, setInputText] = useState("");

    const handleChange = (event)=>{
        setInputText(event.target.value);
    }
    const addItem = () =>{
        if(inputText.trim() !==""){
        addItems(inputText);
        setInputText("")
        }
    }
  return (
    <>
        <div className='input_area'>
            <input type="text" onChange={handleChange} value={inputText}/>
            <button onClick={addItem}>ADD</button>
        </div>
    </>
  )
}

export default InputArea