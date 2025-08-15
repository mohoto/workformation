import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import '@/styles/globals.css'
import Layout from '../components/common/Layout'
import Navbar from '../components/common/Navbar'
import { Poppins, Roboto } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-work',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      if(url !== router.asPath) {
        setLoading(true);
      }
    };
    const handleComplete = (url) => {
      if(url === router.asPath) {
        setTimeout(() => {setLoading(false)}, 500);
      }
    }
        
  
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    }
  });
  return (
    <>
      {loading ? (
          <div className="flex items-center justify-center w-full h-screen bg-bleue-karoy-100">
              <span className="absolute inline-flex w-12 h-12 rounded-full opacity-75 animate-ping bg-second-50"></span>
              <span className="relative inline-flex w-10 h-10 bg-white rounded-full"></span>
          </div>
      ): (
        <main className={`${poppins.variable} font-sans bg-white`}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
        </main>
      )}
    </>   
  )
}
