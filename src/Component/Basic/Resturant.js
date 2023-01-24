import { useState } from 'react';
import './style.css'
import Menucart from './Menucart';
import Menu from './Menuapi'
import Navbar from './Navbar';
function BasicExample(image) {

    const uniqueCategories = [...new Set(Menu.map(item => item.category)),"All"];
    const[Menudata,setMenudata] = useState(Menu)

const filter=(cat)=>{ 
if(cat==="All")
{
   return setMenudata(Menu)
}
 const updatedlist =  Menu.filter((currele)=>{
return currele.category === cat
 })

setMenudata(updatedlist);

}

  return (
<>
<Navbar filter={filter}  menulist={uniqueCategories} />
<Menucart Menus={Menudata}/>


</>
  );
}

export default BasicExample;