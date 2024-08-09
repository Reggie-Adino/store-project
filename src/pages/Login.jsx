import React,{useState} from 'react'
import { authenticateUser } from '../utils'

const Login = ({setUser, setIsLogged}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    setLoading(true)
    e.preventDefault();
    const getUser = async () => {
      const  response = await authenticateUser(email, password)
      response ? (setUser(response, setIsLogged(true))) : setErrorMsg("Invalid EMAIL OR PASSWORD");
  
      // const response = await authenticateUser(email, password);
      // if (response) {
      //   setUser(response);
      //   setIsLogged(true);
      // } else {
      //   setErrorMsg("Invalid EMAIL OR PASSWORD");
      // }

      console.log(response)
      setLoading(false)
    }

    getUser()
  }

  return    <form className="login-form" onSubmit={handleLogin}>
  <span className="error-span">{errorMsg}</span>
  <label htmlFor="email" className="login-label">
    Email
  </label>
  <input
    type="text"
    name="email"
    className="login-inp"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <label htmlFor="password" className="login-label">
    Password
  </label>
  <input
    type="password"
    name="password"
    className="login-inp"
    placeholder="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button type="submit">{!loading ? "Submit":"Loading..."}</button>
</form>
}

export default Login