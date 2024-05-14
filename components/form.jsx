"use client"

import { useState } from "react";
import styles from "../styles/profile.module.css";
export default function Form(){
    const [name, SetName] = useState("")
    const [feedback, SetFeedback] = useState("")
    
   
    return(
        <main>
            <form>
                <div className={styles.pict}>
                        <div className={styles.photo}>
                        <input name="pict" type="file" />
                        </div>
                    <label className={styles.labl} htmlFor="pict">Change yout account picture:</label>
                </div>
                
            </form>
        </main>
    );
}