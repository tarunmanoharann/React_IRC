import React from 'react'

const User = () => {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>
             Username
          </th>
          
          <th>
            Password
          </th>

          <th>
            Edit
          </th>

          <th>
            Delete
          </th>

        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Tarun</td>       
          <td>Cse</td>  
          <td>
            <button className='edit'>Edit</button>
          </td>     
          <td>
            <button className='del'>Delete</button>
          </td>     
         </tr>
      </tbody>

    </table>
    </>
  )
}

export default User