import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact({name}) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
            Contact information {name}
        </p>
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://criativa.app/work/servers/sei1/gestorequipes/api/v1/version/0')
  const json = await res.json
  return {
    props: {
      name: json.system.software,
      version: json.system.version
    }
  }
}
