"use client"

import Footer from "@/components/footer"
import styles from "../styles/home.module.scss"
import { useState } from "react"
import Link from 'next/link';
import bg from '../assets/background3.jpg'

const style={
     backgroundImage: `url(${bg.src})`,
   
  }

export default function Home() {
  const [topic, setTopic] = useState<string>()
  const [type, setType] = useState<string>()

  const handleTopic = (e: any) => {
    setTopic(e.target.name)
  }

  const handleType = (e: any) => {
    setType(e.target.value)
  }

  console.log(topic)
  return (
    <>
   <main className={styles.container} style={style}>
        <h1 className={styles.title}>Lectura de Tarot</h1>

        <div >
      <p className={styles["option-title"]}>Elige una temática</p>
      <div style={{
          textAlign: "center"
        }}>
        <button name="amor" onClick={(e) => handleTopic(e)} className={ topic === "amor" ? styles["topic-selected"]: styles.topic}>Amor</button>
        <button name="salud" onClick={(e) => handleTopic(e)}   className={ topic === "salud" ? styles["topic-selected"]: styles.topic}>Salud</button>
        <button name="finanzas" onClick={(e) => handleTopic(e)}  className={ topic === "finanzas" ? styles["topic-selected"]: styles.topic}>Finanzas</button>
        <button name="espiritualidad" onClick={(e) => handleTopic(e)}   className={ topic === "espiritualidad" ? styles["topic-selected"]: styles.topic}>Espiritualidad</button>
        <button name="trabajo" onClick={(e) => handleTopic(e)}  className={ topic === "trabajo" ? styles["topic-selected"]: styles.topic}>Trabajo</button>
      </div>

      <p className={styles["option-title"]}>Tipo de tirada</p>
      <div style={{
          textAlign: "center"
        }}>
        <button value="1"  onClick={(e) => handleType(e)} className={type=== "1" ? styles["type-selected"] : styles.type}>Una sola carta</button>
        <button value="3"  onClick={(e) => handleType(e)} className={type=== "3" ? styles["type-selected"] : styles.type}>Tres cartas</button>
        {/* <button className={styles.type}>Tirada completa</button> */}
  
      </div>
    </div>
    <Link href={ !type || !topic ?  "/" : `/${topic}/${type}`} className={ !type || !topic ? styles["action-disabled"] : styles.action}  >Ir a la lectura</Link>
      </main>
      <Footer></Footer>
      </>
  )
}
