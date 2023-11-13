import React, { useEffect, useState } from 'react';

import img1 from './img/img1.webp';
import img2 from './img/img2.webp';
import img3 from './img/img3.webp';
import img4 from './img/img4.webp';

export default function SlideImg() {
  const [index, setIndex] = useState(0);
  const img = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slides-img flex mb-9 justify-center">
      <div className='w-full bg-black'>
        <img src={img[index]} alt={`img${index}`} style={{ height: 500}}  className='border-2 rounded w-full object-fill' />
      </div>
    </div>
  );
}

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '400px',
//   backgroundSize: 'cover'
// }

// {img.map((image, index) =>(
//   <div key={index}>
//     <div >
//       <img src={image.url} alt="" className='' style={{height:600, width:600}}/>
//     </div>
//   </div>
// ))}

// {
//   url: "https://plus.unsplash.com/premium_photo-1679314213957-909df10381ac?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//  },
//  {
//    url: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//  },
//  {
//    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//  },
//  {
//    url: "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?auto=format&fit=crop&q=80&w=1916&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//  }
