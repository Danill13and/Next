import Image from "next/image";
import styles from "../styles/profile.module.css";
import {useState, useEffect} from "react"
import Form from "@/components/form";
import React from "react";

export default function Profle() {
    const [prod, setProd] = useState([])
    const [name, setName] = useState("")
    const [email, setPmail] = useState("")
    const [phone, setPhone] = useState("")

  
    // const fetchUserData = async(e)=>{
    //     fetch("https://api-sms9.onrender.com/getUserByApiKey",{
    //         method:"GET",
    //         headers:{
    //                "Content-Type": "application/json",
    //               //  "apiKey": apiKey
    //         }
      
    //       }).then(data=>{
    //         setName(data.name),
    //         setEmail(data.email),
    //         setPhone(data.phone)
            
    //       }).then(response=>{
    //             return response.json()
    //           })
    //     }
    




    
    // const fetchProd = async(e)=>{
    
    //     fetch("https://api-sms9.onrender.com/getProduct",{
    //       method:"GET",
    //       headers:{
    //         "Content-Type": "application/json",

    //       }
    
    //     }).then(data=>{
    //       setProd(data)
    //     })
    //   }
    //   useEffect(() => {
    //     fetchProd()
    //     fetchUserData()
    //   })
  return (
    <main className={styles.main}>
        <div className={styles.data}>
            <div className={styles.picture}>
                <Form/>
            </div>
            <div className={styles.profile}>
                <div className={styles.inp}>
                    {name}
                </div>
                <div className={styles.inp}>
                    {email}
               </div>
                <div className={styles.inp}>
                    {phone}
                </div>
                <h1 className={styles.inp}>Your advertisements</h1>
                <div className={styles.allProds}>
                {
                  prod.map((product, index)=>{
                    return(
                     
                        <div key={index} className={styles.prod}>
                                    <div className={styles.img}>
                                        <Image
                                        src={product.image}
                                        width={500}
                                        height={500}
                                        alt="Picture of the advert"
                                        />     
                                    </div>
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
            
                    )
                })
                        }

                                    </div>
                                </div>

        </div>
    </main>
  );
}
