"use client"

import { useState } from "react"
import styles from "./page.module.css";
import { useCookies } from 'react-cookie'

export default function Home() {
  const [error, setError] = useState('')
  const [cookies, setCookies] = useCookies(['apiKey'])
  const [formData, setFormData] = useState({
    name: '',
    password: ''
})

const handleChange = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setFormData(prevValue => ({
        ...prevValue,
        [inputName]: inputValue
    }))
}

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://api-sms9.onrender.com/login', {
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
        <h1 className={styles.lable}>Auth</h1>
        <form onSubmit={handleSubmit} className={styles.form_lable}>
          <div className={styles.inp_div}>
            <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange} className={styles.inp}/>
          </div>
          <div className={styles.inp_div}>
            <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} className={styles.inp}/>
          </div>
          <button method="submit" className={styles.button}>Send</button>
        </form>
        <p>{error}</p>
      </div>
    </main>
  );
}
