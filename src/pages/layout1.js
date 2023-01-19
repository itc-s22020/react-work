import styles from "../styles/layout1.module.css"

const Layout1 = () => {
    return (
        <>
            <div className={styles.html}>
                <header className={styles.header}>
                    <h1>Sample Website</h1>
                </header>

                <main className={styles.main}>
                    <h2>Heading</h2>
                    <p>
                        Content comes here. Content comes here. Content comes here.
                    </p>
                    <h2>Heading 2</h2>
                    <p>
                        Content comes here. Content comes here. Content comes here.
                    </p>
                </main>

                <footer className={styles.footer}>
                    <p>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}
export default Layout1