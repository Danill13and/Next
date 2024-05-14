import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/mainProduct.module.css";
import { useEffect, useState } from "react";

export default function ProductDynamicID(){

  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null);

  const fetchProduct = () => {
      fetch("http://localhost:8000/getProduct", {
          method: 'GET',
          body: JSON.stringify({ id }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
          setProduct(data); 
      })
      .catch(error => {
          console.error("Error fetching product:", error);
      });
  };

  if (!product) {
      return null; 
  }

  return (
    <main className={styles.main}>
      <div className={styles.main_block_style}>
        <Image className={styles.image} src={product.image} width={300} height={150} alt="No Image"/>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
        <a className={styles.back} href="/">Back</a>
      </div>
    </main>
  );

}