import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import { AppContext } from '../app-context/AppContext'
import { useSetAppContext } from '../hooks/useSetAppContext'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Hooks
  const { context, setContext } = useSetAppContext()

  const handleNprogressStart = () => {
    NProgress.start()
  }

  const handleNprogressStop = () => {
    NProgress.done()
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleNprogressStart);
    router.events.on('routeChangeComplete', handleNprogressStop);
    router.events.on('routeChangeError', handleNprogressStop)
  },[router])

  return (
    <AppContext.Provider value={context}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer position="bottom-left"/>
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
