import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { Store } from '@/redux/slice/store/store'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return(
  <>
  <Provider store={Store}>
    <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
    </>
    )
}
