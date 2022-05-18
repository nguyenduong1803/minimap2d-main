import { useState, useEffect, useRef } from 'react'
import styles from "./Carousel.module.css"
const arrImage = [
    {
        src: "https://wallpaperaccess.com/full/138728.jpg",
        isActive: false
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        isActive: false
    },
    {
        src: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
        isActive: false
    },
    {
        src: "https://www.w3schools.com/w3css/img_lights.jpg",
        isActive: false
    },
    {
        src: "https://wallpaperaccess.com/full/138728.jpg",
        isActive: false
    },
    {
        src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        isActive: false
    },
    {
        src: "https://www.w3schools.com/howto/img_forest.jpg",
        isActive: false
    },
    {
        src: "https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=",
        isActive: false
    },
    {
        src: "https://image.shutterstock.com/z/stock-photo--micro-peacock-feather-hd-image-best-texture-background-colourful-indian-peacock-feather-1127238599.jpg",
        isActive: false
    },
]

function Carousel() {
    const [x, setX] = useState(21)
    const imgStyle = (index) => {
        return {
            "--x": `${Number(x) * Number(index)}%`
        }
    }
    const [range, setRange] = useState({ start: 0, end: 4 })
    const [caro, setCaro] = useState(2);
    const handleNext = () => {
        setCaro(() => {
            if (arrImage.length - 1 === caro) {
                return 0
            } else {
                return caro + 1
            }
        })
        setRange(() => {
            if (caro < 2) {
                return { start: 0, end: 4 }
            }
            else if (range.start === arrImage.length - 5 && range.end === arrImage.length - 1) {
                return { start: arrImage.length - 5, end: arrImage.length - 1 }
            }
            else {
                return { start: range.start++, end: range.end++ }
            }
        })
    }
    const handlePrev = () => {
        setCaro(() => {
            // if(caro>=arrImage.length-3){

            // }
            if (caro === 0) {
                return arrImage.length - 1
            }
            else {
                return caro - 1
            }
        })
        setRange(() => {
            if (caro >= arrImage.length - 2) {
                return { start: arrImage.length - 5, end: arrImage.length - 1 }
            }
            else if (range.start < 0 && range.end < 4) {
                return { start: 0, end: 4 }
            }
            else {
                return { start: range.start--, end: range.end-- }
            }
        })
    }
    const handleClickImg =(index)=>{
        console.log(index)
        if(index!=0|| index!=1 ||index !=arrImage.length-1 || index !=arrImage.length-2){
            setRange(()=>{
                return { start:index-2,end:index+2}
            })
        }
        setCaro(index)
    }
    useEffect(() => {
        if (caro === arrImage.length - 1) {
            setRange({ start: arrImage.length - 5, end: arrImage.length - 1 })
        }
        else if (caro === 0) {
            setRange({ start: 0, end: 4 })
        }
    }, [caro])
    let count = 0;
    return (
        <div>
            <div className={`${styles.wrapCaroseul} ${styles.container}`}>
                <div className={styles.wrapImage}>
                    <span
                        className={styles.prev}
                        onClick={() => handlePrev()}
                    >&laquo;</span>
                    <div className={styles.hidden}>
                        {
                            arrImage.map((img, index) => {
                                if (index >= range.start && index <= range.end) {
                                    return (
                                            <img
                                                style={imgStyle(count++)}
                                                key={index}
                                                className={caro === index ? `${styles.caro_img} ${styles.caro_Active} ${styles[`slide${count}`]}` : `${styles.caro_img} ${styles[`slide${count}`]}`}
                                                src={img.src} alt="caro"
                                                onClick={(e)=>handleClickImg(index)}
                                            />
                                    )

                                }
                            })
                        }
                    </div>
                    <span
                        className={styles.next}
                        onClick={() => handleNext()}
                    >
                        &raquo;
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Carousel