import React from 'react'

const Adduser = () => {
  return (
    <>
    <form>
      <input type='text' id='username' placeholder='username'/> 
      <input type='password' id='password' placeholder='password'/> 
      <button type='submit' className='submit-btn'>Add</button>
    </form>
    </>
  )
}

export default Adduser