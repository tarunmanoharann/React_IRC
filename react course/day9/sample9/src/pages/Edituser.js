import React from 'react'

const Edituser = () => {
  return (
    <>
    <form>
      <input type='text' id='username' placeholder='username'/> 
      <input type='text' id='password' placeholder='password'/> 
      <button type='submit' className='submit-btn'>Save</button>
    </form>
    </>

  )
}

export default Edituser