import { useState } from "react";
import styles from "./About.module.css"

function About() {

    const [isVisible, setIsVisible] = useState(false);  
    const toggleVisibility = () => { setIsVisible(!isVisible); };  
    return (  
      <>
      
      <div className={styles.Box}>  
      <p className={styles.BoxP}>Основная информация: ...</p>
        <button className={styles.BTN} onClick={toggleVisibility}>  
          {isVisible ? 'Кратко' : 'Подробно'} Инфа о создателе
        </button>  
        
        {isVisible && <div className={styles.Hiden}>...учатся в колледже ОКЭИ</div>}  
      </div>  
      </>
    );  
}

export default About