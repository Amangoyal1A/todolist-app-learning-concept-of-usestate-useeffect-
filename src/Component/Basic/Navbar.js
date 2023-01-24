


const Navbar = ({ filter,menulist }) => {
    return(
        <>
    
<nav className='navbar'>
<h1>Fpst-fppd</h1>
    <div className='btn-group'>
    {
        menulist.map((currele)=>
        {
return(
     <center>   <button className='btn-group__item'  onClick={()=>filter(currele)}>{currele}</button></center>
)
        })
    }
        
        {/* <button className='btn-group__item' onClick={()=>filter("breakfast")}>breakfast</button>
        <button className='btn-group__item' onClick={()=>filter("dinner")}>Dinner</button> */}
          {/* <button className='btn-group__item' onClick={()=>setMenudata(Menu)}>All</button> */}
    </div>
</nav>

</>
    )

 
  };
  
  export default Navbar;
  