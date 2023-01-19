import Link from "next/link"

const Home = () => {
  return (
    <>
      <a>react-work s22020</a>
      <h1>Layout</h1>
      <ul>
        <li>
          <Link href="/layout1/">
            <div>CSSでつくるWebページ</div>
          </Link>
        </li>

        <li>
          <Link href="/layout2/">
            <div>CSSでつくる新聞の1ページ</div>
          </Link>
        </li>

        <li>
          <Link href="/layout3/">
            <div>CSSでつくるブログ記事一覧レイアウト</div>
          </Link>
        </li>

        <li>
          <Link href="/layout4/">
            <div>CSSでつくる三段組レイアウト</div>
          </Link>
        </li>

        <li>
          <Link href="/layout5/">
            <div>CSSでつくるグリッドレイアウト</div>
          </Link>
        </li>
        <li>
          <Link href="/layout6/">
            <div>CSSでつくる斜め型ボックスレイアウト</div>
          </Link>
        </li>

        {/*
        <li>
          <Link href="/layout7/">
            <div>CSS3でつくる重ね写真レイアウト</div>
          </Link>
        </li>
  */}

      </ul>
    </>

  )
}

export default Home