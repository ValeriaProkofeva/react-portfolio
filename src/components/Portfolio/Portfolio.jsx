import styles from "./Portfolio.module.css"

function Portfolio() {

    return (
        <>
            <div className={styles.project}>
                <div className={styles.projectCard}>
                    <p>Project 1</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque, molestias ex nulla dolore, deserunt dolorem obcaecati</p>
                </div>
                <div className={styles.projectCard}>
                    <p>Project 2</p>
                    <p>quod qui unde eum aliquid! Officiis magni nostrum, quisquam veniam atque placeat explicabo.</p>
                </div>
                <div className={styles.projectCard}>
                    <p>Project 3</p>
                    <p>quod qui unde eum aliquid! Officiis magni nostrum, quisquam veniam atque placeat explicabo.</p>
                </div>
            </div>
        </>
    )
}

export default Portfolio
