// import React from 'react'
import Logo from '../../../public/logo.jpg';




export default function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src={Logo} alt='logo' style={{ width: '95px' }} />
        <h1>ABC Book</h1>
      </div>
      <input placeholder='Search your book'
        style={{
          marginLeft: '50px',
          width: '500px',
          height: '50px',
          borderRadius: '20px',
          paddingLeft: '20px',
          borderColor: 'gray'
        }}></input>
    </div>
  )
}
