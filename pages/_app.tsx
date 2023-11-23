import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Maven_Pro } from 'next/font/google'
import Layout from '../components/layout'
import { Metadata } from 'next'

const mavenpro = Maven_Pro({
  subsets: ['latin'],
  variable: '--font-mavenpro',
})

export const metadata: Metadata = {
  title: 'futech-JOBS',
  description: 'All tech jobs at one place',
}

function MyApp({ Component, pageProps }: AppProps) {
  return <main className={`${mavenpro.variable} p-6`} >
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main >
}

export default MyApp
