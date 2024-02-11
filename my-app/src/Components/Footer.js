import React from 'react';
const Footer = (props) => {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 bg-black text-white fs-4' style={{height:"50px",boxShadow:props.mode==="dark"?"0 0 5px white":"0 0 5px black"}}>
      Copyright &copy; <span id="currentYear"></span> All Rights Reserved
    </div>
  )
}

export default Footer
