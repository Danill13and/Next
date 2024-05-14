"use client"

import { useState } from "react"
import styles from "../styles/register.module.css";
export default function Register() {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    reapit_password: ''
})

const handleChange = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setFormData(prevValue => ({
        ...prevValue,
        [inputName]: inputValue
    }))
}

const handleSubmit = async (e) => {
  console.log(formData)
  e.preventDefault()
  fetch("https://api-sms9.onrender.com/createUser", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(response => {
      return response.json()
  })
  .then(data =>{
    if(data.error != undefined){
      setCookies("apiKey", data.api_key)
    }else{
      setError(data.error)
    }
  })
}

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h1 className={styles.lable} >Registration</h1>
        <form className={styles.form_lable} onSubmit={handleSubmit}>
          <div className={styles.inp_div} >
            <input className={styles.inp} type="text" name="username" placeholder="name" value={formData.name} onChange={handleChange}/>
          </div>
          <div className={styles.inp_div} >
            <input className={styles.inp} type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange}/>
          </div>
          <div className={styles.inp_div} >
            <input className={styles.inp} type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange}/>
          </div>
          <div className={styles.inp_div} >
            <input className={styles.inp} type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange}/>
          </div>
          <div className={styles.inp_div} >
            <input className={styles.inp} type="password" name="reapit password" placeholder="repeat_password" value={formData.reapit_password} onChange={handleChange}/>
          </div >
          <button className={styles.button} method="submit">Create account</button>
        </form>
        <p>{error}</p>
      </div>
    </main>
  );
}
