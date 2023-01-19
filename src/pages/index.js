import Link from "next/link"

const Home = () => {
  return (
    <>
      <a>work</a>
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
        
          {/* <li> 
            <Link></Link>
          </li>

          <li>
            <Link></Link>
          </li>

          <li>
            <Link></Link>
          </li>

          <li>
            <Link></Link>
          </li>

          <li>
            <Link></Link>
          </li>
  */}
  
        </ul>
    </>

  )
}

export default Home