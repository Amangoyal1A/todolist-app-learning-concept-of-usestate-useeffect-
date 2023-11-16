import React,{useState} from 'react'

import './todo.css'
const Todo = () => {

const[inputData,setInpudata] = useState("");
const[items,setItems] = useState([]);
const[itemid,setitemid] = useState("");
const[toggleplusbtn,setoggleplusbtn] = useState(false);

// console.log(inputData)//

function addItem(){
  if(inputData==="")
  {
    alert("plz fill the data")
  }else if(inputData && toggleplusbtn===true ) {
    setItems(items.map((curr) => {
        if(itemid === curr.id) {
            return {...curr, name: inputData};
        }
        return curr;
    }));
    setInpudata("");
    setitemid("");
    setoggleplusbtn(false);
}
  
  else{
    const objitems = {
      id :new Date().getTime().toString(),
      name:inputData
    }
     setItems([...items,objitems])
     setInpudata("")
     
  }
}

function deleteItem(id){

const deleteitem = items.filter((curr)=>{
       return curr.id !==id
})
setItems(deleteitem)
}

function removeall(){
   setItems([])
}

const updateitem = (id)=>{

  const updatetodo = items.find((curr)=>{
     return id === curr.id 
     })
     setitemid(id)
     setInpudata(updatetodo.name)
     setoggleplusbtn(true)
}
  return (
    <>
     <div className='main-div'> 
     <div className='child-div'>
      <figure>
        <img src='notes.jpeg' alt='todologo'/>
        <figcaption>Add you list here</figcaption> 
      </figure>
      <div className='addItems'>
      <input type="text" placeholder='✍ Add items' className="form-control"
value={inputData}  onChange={(event)=>setInpudata(event.target.value)}
      />
      {
        toggleplusbtn ? <i className="fa fa-edit  add-btn" onClick={addItem}></i> :<i className="fa fa-plus add-btn" onClick={addItem}></i>
      }
      <div className="showItems"> 
{
  items.map((curr,index)=>{
    return(
      <>
<div className="eachItem"> 
 <h3>{curr.name}</h3>
<div className="todo-btn">
<i className="fa fa-edit add-btn" onClick={()=>{
              return updateitem(curr.id);
            }}></i>
<i className="fa fa-trash" onClick={()=>deleteItem(curr.id)}></i>
</div>
 </div>
</>
    )
  })
}
</div>
</div>
      <div className='showItems'> <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeall}><span > Check List </span> </button></div>
     </div>
     
     </div> 
    </>
  )
};

export default Todo;
