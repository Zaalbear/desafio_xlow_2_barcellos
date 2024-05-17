import { useEffect, useState } from "react"
import { imageArray } from "../../data/database.js"
import styles from "./styles.module.css"

import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export const Slider = () => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount + 1) % imageArray.length);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ul className={styles.image_list}>
            {imageArray.map((image, index) => {
                return (
                    <li className={styles.image_container} key={index}>
                        {index === count ? <img className={styles.image} src={image.URL} alt={image.ALT} /> : null}
                    </li>
                )
            })}

            <ul className={styles.dot_list}>
                {imageArray.map((image, index) => {
                    return (
                        <span className={styles.dot_item} key={index}>
                            <CircleIcon className={index === count ? styles.active : styles.inactive} fontSize="medium" onClick={() => { setCount(index) }} />
                        </span>
                    )
                })}

            </ul>
            <button className={`${styles.button} ${styles.left}`} onClick={() => { count - 1 >= 0 ? setCount(count - 1) : setCount(imageArray.length - 1) }}><ArrowDropDownCircleIcon className={styles.button_icon} fontSize="large" /></button>
            <button className={`${styles.button} ${styles.rigth}`} onClick={() => { count + 1 < imageArray.length ? setCount(count + 1) : setCount(0) }}><ArrowDropDownCircleIcon className={styles.button_icon} fontSize="large" /></button>
        </ul>
    )
}