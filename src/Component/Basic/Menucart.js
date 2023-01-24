import React from 'react'


const Menucart = ({Menus}) => {
   
    return (
        <>
            <section className='main-card--cointainer'>
                {Menus.map((currele) => {
                   
                       return( 
                        <>
                            <div className='card-container'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{currele.id}</span>
                                        <span className='card-author subtle'>{currele.category}</span>
                                        <h2 className='card-title'> {currele.name}</h2>
                                        <span className='card-description'>{currele.description}</span>
                                        <div className='card-read'> read</div>
                                    </div>
                                    <img src={currele.image} alt='images' className='card-media' />
                                    <span className='card-tag subtle'>order Now</span>
                                </div>
                            </div>
                        </>
                    )
                  })};
                  
            </section>
        </>
    );
                };

export default Menucart;
