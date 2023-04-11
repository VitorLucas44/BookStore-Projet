import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { Store } from '@/redux/slice/store/store'
import MainLayout from '../../components/layout/main-layout'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default function App({ Component, pageProps }) {
  return(
  <>
  <Provider store={Store}>
    <div className='flex flex-col justify-between h-screen'>
      <div>
        <NavBar/>
        <Component {...pageProps} />
      </div>
    </div>
    </Provider>
    </>
    )
}
