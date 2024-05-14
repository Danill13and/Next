"use client"
import Image from "next/image";

import styles from "../styles/main.module.css";
import Topper from "@/components/topper";
import {useState, useEffect} from "react"
import React from "react";

export default function Home() {

  const [prod, setProd] = useState([])
  
  const fetchProd = async(e)=>{

    fetch("https://api-sms9.onrender.com/allProduct",{
      method:"GET",

    }).then(response=>{
        return response.json()
      }).then(data=>{
          setProd(data)
    })
  }
  useEffect(() => {
    fetchProd()
  })

  return (
    
    <main className={styles.main}>
        <Topper/>

    {
    prod.map((product, index)=>{
      
        return(
          
            <div key={index} className={styles.prods} >
              <a className={styles.a} href="URL">
              <div className={styles.prod}>
                        {/* <div className={styles.img}>
                            <Image
                            src={product.image}
                            width={500}
                            height={500}
                            alt="Picture of the advert"
                            />     
                        </div> */}
                        <div className={styles.info}>
                            <div className={styles.name}>
                            <p>{product.name}</p>     
                            </div>
                            <div className={styles.category}>
                            <p>{product.category}</p>     
                            </div>
                    
                        </div>
                        <div className={styles.delButton}>
                            <div className={styles.price}>
                              <p>{product.price}</p>    
                            </div>
                                  
                        </div>
                        </div>
                        </a>
                </div>

        )
    })
    }
  </main>
  );
}
