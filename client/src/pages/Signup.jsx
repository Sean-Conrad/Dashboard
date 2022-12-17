 import { useState } from 'react'
 
 const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return(
    <div className="wrapper">
      <div className="container-fluid row">
            <form className="form-login" onSubmit={handleSubmit}>
                <h3> Sign Up</h3>

                <label>Email: </label>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} >
                </input>
                <label>Password: </label>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} >
                </input>

                <button>Sign Up</button>

            </form>
        </div>
    </div>
    )

 }

 export default Signup;