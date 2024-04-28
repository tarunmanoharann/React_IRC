import '../assets/css/login.css'
const Log=()=>
{
  return(
    <>
      <div class="login-container">
    <form class="login-form" action="process_login.php" method="POST">
      <h2>Login</h2>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter name" required/>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" required/>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>

    </>
  )
}
export default Log;