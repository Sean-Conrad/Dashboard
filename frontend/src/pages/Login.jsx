import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'; 

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const {login, error, isLoading} = useLogin();

   const handleSubmit = async (e) => {
       e.preventDefault()

       await login(email, password)
   }

   return(
    <div className="wrapper">
      <div className="container-fluid row">
        <form className="form-login" onSubmit={handleSubmit}>
            <h3> Log In</h3>
            <div className="container-small row">
              <label className="col-md-4">Email: </label>
              <input 
                  className="col-md-6"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} >
              </input>
            </div>
            <div className="container-small row">
            <label className="col-md-4">Password: </label>
              <input 
                  className="col-md-6"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} >
              </input>
            </div>
 
            <button disabled = {isLoading}>Log In</button>
            {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
   )
}

export default Login; 