import styles from "./Header.module.css"

function Header() {

  return (
    <>
    <div className={styles.contNav}>
    <div className={styles.name}>
    <p>Прокофьева.Исаев</p>
    </div>
    <div className={styles.nav}>
    <p>навигация</p>
    <p>навигация</p>
    <p>навигация</p>
    <p>навигация</p>
    </div>
    </div>
    </>
  )
}

export default Header
