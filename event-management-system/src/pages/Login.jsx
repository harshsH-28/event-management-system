import { useEffect, useRef, useState } from 'react'

function Login() {
    const [role, setRole] = useState("");

    useEffect(()=>{
        
    },[])
  return (
    <div>
        <div>
        <label htmlFor="userRole">Select your Role:</label>
        <select name="userRole" id="userRole">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="vendor">Vendor</option>
        </select>
        </div>
    </div>
  )
}

export default Login 