import { useState } from "react";
import styles from '../styles/createProduct.module.css';
import { useCookies } from 'react-cookie'

export default function createProduct() {
  const [error, setError] = useState("");
  const [cookies, setCookies] = useCookies(['apiKey'])
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    image: null,
    categoryName: ""
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((prevValue) => ({
      ...prevValue,
      [inputName]: inputValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://api-sms9.onrender.com/createProduct", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "api-key": cookies.apiKey
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>CreateProduct</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
              className={styles.textInput}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className={styles.textInput}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className={styles.textInput}
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              placeholder="Name of category"
              value={formData.categoryName}
              onChange={handleChange}
              className={styles.textInput}
            />
          </div>

          <button type="submit" className={styles.createButton}>Send</button>
        </form>
        <p>{error}</p>
      </div>
    </main>
  );
}
