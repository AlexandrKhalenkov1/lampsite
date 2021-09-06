import React from 'react'
import Link from './link'; 
import { linksArr } from '../components/header';

const Links = ({ linksArr  }) => linksArr.map(({
  id, className, img, href, to, text, option,
  }) => (
    <Link
     key={id}
     id={id}
     className={className}
     img={img}
     href={href}
     to={to}
     text={text}
     option={option} />
  ));

export default Links




   