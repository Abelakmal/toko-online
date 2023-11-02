import React from 'react';


export default function SlideImg() {

  const img = [
    {
     url: "https://plus.unsplash.com/premium_photo-1679314213957-909df10381ac?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      url: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?auto=format&fit=crop&q=80&w=1916&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    backgroundSize: 'cover'
  }
  

  return (
  <div className="slides-img flex mb-9 justify-center">
    {img.map((image, index) =>(
      <div key={index}>
        <div >
          <img src={image.url} alt="" className='' style={{height:600, width:600}}/>
        </div>
      </div>
    ))}
  </div>
  );
}

