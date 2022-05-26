import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyle from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
      <Layout>
        <section>
          <p>私はフロントエンドエンジニアです。JavaScript/ React/ Next.jsを学習してポートフォリオサイトなどを作成しました。</p>
        </section>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img src="images/thumbnail01.jpg" alt="" />
              </Link>
              <Link href="/">
                <a>テストタイトル</a>
              </Link>
              <br />
              <small>
                February 23, 2020
              </small>
            </article>
          </div>
        </section>

      </Layout>
    </>
  )
}


