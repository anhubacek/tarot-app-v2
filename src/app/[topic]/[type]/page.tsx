"use client"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import styles from "../../../styles/lecture.module.scss"
import Link from 'next/link';
import bg from '../../../assets/background3.jpg'

const style={
    backgroundImage: `url(${bg.src})`,
   
  }

export default function Lecture({ params }: { params: { topic: string, type: string } }) {
    const [cards, setCards] = useState<any[]>([])
    
    useEffect(() => {
        if (params && params.type){
            
            fetch(`https://tarot-api-es.vercel.app/api/v1/random?n=${params.type}`).then(response => response.json()).then((data) => {
                setTimeout(()=>{ setCards(data.cards)}, 800)
            })
        }
    }, [params])


    
    return (
        <>
        <main className={styles.container} style={style}>
        <h1 className={styles.title}>Lectura de Tarot</h1>
                <h2 className={styles.subtitle}>{params.topic.slice(0, 1).toUpperCase() + params.topic.slice(1, 20)}</h2>
                
        {cards.length ? <>
                {params.type === "1" &&
                      cards?.map((card: any) => {
                    
                        return (
                            <div className={styles["big-card-container"]} key={card.name}>
                            <p  className={styles["card-title"]}>{card.name}</p>
                                <div className={styles["one-card-container"]}>
                                
                            <img className={styles["one-card"]} src={card.image} alt="image"/>
                                    <p className={styles["card-text"]}>{card[params.topic.toLowerCase()]}</p>
                                    
                                </div>
                            </div>
                            
                        )
                    })

                }
         
                   { params.type !== "1" && <div className={styles["cards-container"]}>
                        {cards?.map((card: { image: string }) => {
                            return (
                                <img className={styles["top-card"]}  src={card.image} alt="image" key={card.image}/>
                            )
                        })}

                    </div>}
                {params.type !== "1" &&
                    <div>
                        {cards?.map((card:any) => {
                    
                            return (
                                <div className={styles["big-card-container"]} key={card.name}>
                                    <div className={styles["card-container"]}>
                                  
                                        {params.type === "3" && <img className={styles["div-card"]} src={card.image} />}
                                        <p  className={styles["card-title"]}>{card.name}</p>
                                        <p className={styles["card-text"]}>{card[params.topic.toLowerCase()]}</p>
                                        
                                    </div>
                                </div>
                                
                            )
                        })}
                    </div>}

                <Link href={"/"} className={styles.back}>Volver al inicio</Link>
                </>
                    :
                    <div className={styles["loader-container"]}>
                        <div className={styles.loader}></div>
                        <div className={styles.loader}></div>
                        <div className={styles.loader}></div>
              </div>
              }
        </main>
           <Footer></Footer>
           </>
      
    )
}