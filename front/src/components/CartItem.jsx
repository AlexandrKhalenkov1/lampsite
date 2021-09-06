import React from 'react';

const cartItem = ( { id, name, price,  picture,  vendorcode, removeTask }) => {

    
  const deleteTask = (e) =>{
    e.preventDefault();
    const targetId = e.target.id;
    removeTask(targetId);
  }
  

return (
    <div id={id}>
    <div className="goods" >
        <div className="goods__item">
            <img src={picture} alt="не подгрузився:(" className="goods__png"/>
            <div className="goods__info">
                <div className="goods__name">{name}</div> 
                <div className="goods__price">1x {price}</div> 
                <div className="goods__moreInfo">See more information goes here...</div> 
            </div>
        </div>
        <div className="goods__item">
            <div className="goods__centrify">
                <button className="goods__button" onClick={deleteTask}>
                    <div className="cross" id={id}>&#10006;</div> 
                </button> 
            </div>
        </div>
    </div>
    </div> 
  )
}

export default cartItem