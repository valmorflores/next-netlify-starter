import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
            Contact information 
        </p>
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
