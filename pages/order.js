"use client"

import { useState } from "react"

export default function Register() {
  const [adress, setadress] = useState('')

const handleChange = (e) => {
    const inputValue = e.target.value
    setadress(inputValue)
}

const handleSubmit = (e) => {
  e.preventDefault()
  fetch('/api/send/', {
      method: 'POST',
      body: JSON.stringify(adress)
  })
  .then(response => {
      return response.json()
  })
  .then(data =>{
      console.log(data)
  })
}

  return (
    <main>
      <div>
        <h1>Order</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="adress" placeholder="Home Adress" value={adress.name} onChange={handleChange}/>
          </div>
          <button method="submit">Send</button>
        </form>
      </div>
    </main>
  );
}