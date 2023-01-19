import styles from '../styles/layout6.module.css'

const layout6 = () => {
    return (
        <>
            <style jsx global>
            {`
                body {
                     background-color: #033;
                }
            `}
            </style>
            <div className={styles.html}>
            <div className={styles.box}>
                <h1>COMING SOON</h1>
                <p>
                    NEW WEBSITE IS AVAILABLE<br /> 
                    ON 20XX.01.01
                </p>
            </div>
            </div>
        </>
    )
}

export default layout6