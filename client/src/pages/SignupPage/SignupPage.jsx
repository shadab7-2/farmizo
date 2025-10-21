import React from 'react'
import { Link } from 'react-router-dom'
function SignupPage() {
  return (
    <div>
<h1>Signup page</h1>
<h4>Already have an account: </h4>
<li><Link to="/auth/login" className="">LogIn</Link></li>
    </div>
  )
}

export default SignupPage
