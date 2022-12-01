import React,{useState} from 'react'
import InputArea from './InputArea'
import TodoItem from './TodoItem'

const App = () => {
  const [items, setItems] = useState([])

  const addItems = (item)=>{
    setItems((allItem)=>{
      return [...allItem,item]
    });
  }
  const deleteItem = (id)=>{
     setItems((currentItems)=>{
      return currentItems.filter((item,index)=>{
        return index !== id
      })
     })

  }
  console.log(items);
  return (
    <>
    <div className='todo_body'>
      <h1>ToDo App</h1>
      <br />      
      <InputArea addItems={addItems} />
      <div>
          <ol>
            {
              items.map((item,index)=>{
                return (
                <TodoItem 
                key={index}
                text={item} 
                index={index}
                onClick={()=>deleteItem (index)}
                />)
              })
            }
          </ol>
        </div> 
    </div>    
    </>
  )
}

export default App