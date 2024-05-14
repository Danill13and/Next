"use client"

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/search.module.css";

export default function Topper(){
    <main className={styles.topper}>
        <div  className={styles.search}>
            <form>
                <input name="search" type="text" placeholder='search'/>       
            </form>
        </div>
        
        <div className={styles.ad}>
            <a href="">
            <p>Add advertisement </p>
            </a>
        </div>
            
        <div className={styles.pfp}>
        <Image 
             // src={user.image}
                width={60}
                height={60}
                alt="Picture of the User"/>
        </div>
        
    </main>
}