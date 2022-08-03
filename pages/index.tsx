import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div id={styles.container}>
      <div>
        <div>
          <h1>Stones Europe 2022</h1>
        </div>
        <div>
          <img src="tounge.webp" style={{height: '400px'}} /> 
        </div>
        <div>
          <div id={styles.preTextContent}>
            Sixty Tour
          </div>
          <div id={styles.textContent}>
            The Rolling stones are celebrating their 60th<br/>
            aniversity with a tour through Europe this month.<br/>
            Click to see tour dates!
          </div>
          <Link href={'details'}><button  id={styles.readMoreBtn}>&#10140;</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
