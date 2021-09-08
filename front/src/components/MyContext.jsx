import React, { useState, useMemo, useCallback, useEffect } from 'react';
import mainIcon from '../images/main-icon.png';
import gold from '../images/Gold.png';
import blueDesk from '../images/BlueDesk.png';

const TestContext = React.createContext();
const {Provider, Consumer} = TestContext;

const TestProvider = (props) => {

  const [currentLampProps, setCurrentLampProps] = useState([])
  const [lampsInCart, setLampsInCart] = useState([]);
  let filtredGoods = [];
  let currprops = [];

  const linksArr = [{
    id: 1,
    className: "header__icon",
    img: mainIcon,
    href: "/starter-store",
    to: '/',
    text: "Starter Store",
  },{
    id: 2,
    className: "header__text",
    href: "/sign-up",
    to:'/sign-up',
    text: "Sign Up",
  },{
    id: 3,
    className: "header__text",
    href: "/sign-in",
    to:'/sign-in',
    text: "Sign In",
  }]; 

  const lampsArr = [{
    name: 'Gold',
    price: '243.00',
    picture: gold,
    id: 0,
    vendorcode: 'LPT:GLMM1234',
    count: 0
  }, {
    name: 'Blue Desk',
    price: '150.00',
    picture: blueDesk,
    id: 1,
    vendorcode: 'SKU:BLDR1731',
    count: 0
  }, {
    name: 'example',
    price: '300.00',
    picture: gold,
    id: 2,
    vendorcode: 'LPT:EXMM1111',
    count: 0
  }, {
    name: 'example2',
    price: '301.00',
    picture: gold,
    id: 3,
    vendorcode: 'LPT:EXMM1112',
    count: 0
  }, {
    name: 'Completed',
    price: '320.00',
    picture: gold,
    id: 4,
    vendorcode: 'LPT:EXMM1215',
    count: 0
  }];
  

  const showCurrentLamp = (id) => {
    lampsArr.find((item) => {
      if(item.id === id) setCurrentLampProps(item);
    });
  };
  
   //getitem
  
  useMemo(() => {
    const localLampsInCart= JSON.parse(localStorage.getItem('lampsInCart'));
    setLampsInCart(localLampsInCart || []);  
  }, []);

  const addToCart = (id, count) => {
    const findLamp = lampsArr.find(item => item.id === +id);
    const checkItemInCart = lampsInCart.some(item => item.id === +id);
    if (lampsInCart.length && checkItemInCart) {
      const itemsCart = lampsInCart.map(item => {
        if (item.id === +id) {
          item.count += count;
        }
        return item
      })
      setLampsInCart(itemsCart);
      localStorage.setItem('lampsInCart', JSON.stringify(itemsCart));
    } else {
      findLamp.count = 1;
      setLampsInCart([...lampsInCart, findLamp]);
      localStorage.setItem('lampsInCart', JSON.stringify([...lampsInCart, findLamp]));
    }
  };

  const deleteFromCart = (targetId) => {
    const target = parseInt(targetId, 10)
    filtredGoods = lampsInCart.filter(function(item){
      return item.id !== target
    });
    
    setLampsInCart(filtredGoods);
    localStorage.setItem('lampsInCart', JSON.stringify(filtredGoods));
  };

  const cartCounter = useCallback(() => {
      if(!lampsInCart){
        let result = 0;
        return  result
      }
      let result = lampsInCart.length;
    return result
    
    },[deleteFromCart, addToCart])

  const [amountTotal, setAmountTotal] = useState(0);

  useEffect(() => {
    let res = 0
    lampsInCart.map(({price, count}) => {
    res += (+price * +count)
  })
  setAmountTotal(res)
  }, [lampsInCart]);

  const context = {
    cartCounter,
    showCurrentLamp,
    currprops,
    lampsInCart,
    filtredGoods,
    addToCart,
    deleteFromCart,
    amountTotal,
    currentLampProps,
    linksArr,
    lampsArr
  };

  return <Provider value={context}>{props.children}</Provider>;

};

export {TestProvider, Consumer as TagsConsumer};
export default TestContext;