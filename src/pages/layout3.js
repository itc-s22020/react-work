import styles from '../styles/layout3.module.css'

const layout3 = () => {
    return (
        <>
            <div className={styles.html}>
            <header className={styles.header}>
                <h1>PREP BLOG</h1>
            </header>
            <article className={styles.box}>
                <h1>
                    <a href="#">Keep coding everyday</a>
                    <span className={styles.date}>(2013.01.01)</span>
                </h1>
                <p className={styles.box_img}>
                    {/*<Image/>*/}
                </p>
                <div className={styles.box_sentence}>
                    <p>
                        コードを書く喜びとして、一つの問題を解決した時の達成感が挙げられます。</p>
                    <p> ある問題が発生した時に、頭を悩ませながら色々なことを試して答えに近づいていく過程はプログラマーにとって至福の一時と言えます。</p>
                    <p> そうして沢山の問題を解決しているうちにだんだん問題のパターンが見えてきて…
                        <a href="#">続きを読む</a>
                    </p>
                </div>
            </article>

            <article className={styles.box}>
                <h1>
                    <a href="#">Keep coding everyday2</a>
                    <span className={styles.date}>(2013.01.02)</span>
                </h1>
                <p className={styles.box_img}>
                    {/*<Image/>*/}
                </p>
                <div className={styles.box_sentence}>
                    <p>
                        コードを書く喜びとして、一つの問題を解決した時の達成感が挙げられます。</p>
                    <p> ある問題が発生した時に、頭を悩ませながら色々なことを試して答えに近づいていく過程はプログラマーにとって至福の一時と言えます。</p>
                    <p> そうして沢山の問題を解決しているうちにだんだん問題のパターンが見えてきて…
                        <a href="#">続きを読む</a>
                    </p>
                </div>
            </article>
            </div>
        </>
    )
}

export default layout3