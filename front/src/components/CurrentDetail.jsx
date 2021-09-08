import React, { useState, useMemo, useContext } from 'react';
import MyContext from './MyContext';

const CurrentDetail = ({ id }) => {
  const [inputCount, setInputCount] = useState(1);

  const myContext = useContext(MyContext);
  const {
    showCurrentLamp,
    currentLampProps,
    addToCart,
  } = myContext;


  const { name, price, picture, vendorcode } = currentLampProps;

  //тут берем все параметры из массива по ид
  useMemo(() => {
    showCurrentLamp(+id);
  }, []);


  const AddToCart = () => {
    addToCart(id, +inputCount);
  }

  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about__picture-wrapper">
            <img src={picture} alt="не подгрузився:(" className="about__png" />
          </div>
          <div className="about__purchase">
            <div className="about__name">
              {name}
            </div>

            <div className="about__price">
              ${price}
            </div>
            <div className="about__vendorcode">
              {vendorcode}
            </div>

            <div className="purchase__form">
              <input className="purchase__input" id="input" type="number" value={inputCount} onChange={(e) => setInputCount(e.target.value)} min={1} max={3} />
              <button className="purchase__button" type="submit" onClick={AddToCart}>Add to Cart</button>
            </div>

          </div>
        </div>

        <div className="about-footer">
          <div className="about-footer__title">
            About this product
          </div>
          <div className="about-footer__text">
            The perfect accessory for a desk or beside table of any modern house.
            The shade can be titled to suit your needs and is replaceble extending
            the life of your lamp.
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentDetail