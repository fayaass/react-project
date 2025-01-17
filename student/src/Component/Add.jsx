import {useState } from "react"
import axios from 'axios'

function Add(){
    const [roll_no,setRoll_no]=useState('')
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/task/',{roll_no,name,age,email,phone}).then((res)=>{
            setRoll_no('')
            setName('')
            setAge('')
            setEmail('')
            setPhone('')
        }).catch(error=>console.log(error.message))
    }

    return(
            <form onSubmit={handleSubmit}>
                <input type="number" name="roll_no" id="roll_no" value={roll_no} placeholder="roll_no" onChange={(e)=>setRoll_no(e.target.value)} />
                <input type="text" name="name" id="name"  value={name} placeholder="name" onChange={(e)=>setName(e.target.value)} />
                <input type="number" name="age" id="age" value={age} placeholder="age" onChange={(e)=>setAge(e.target.value)} />  
                <input type="email" name="email" id="email"  value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="number" name="phone" id="phone" value={phone} placeholder="phone" onChange={(e)=>setPhone(e.target.value)} />           
                <input type="submit" value="add"/>
            </form>
    )
}
export default Add