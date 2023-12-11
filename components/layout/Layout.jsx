import { persistableStore, persistor } from '../../redux/ReduxPersistStore'
import localFont from 'next/font/local'
import React from 'react'
import { Provider } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { PersistGate } from 'redux-persist/integration/react'
import Header from '../Header'
import Footer from '../Footer'
import TopBanner from '../TopBanner'



export const iranSansWeb = localFont({src:"../../public/fonts/IRANSansWeb.woff"});

const Layout = ({children}) => {

  return (
   <div>
    <Provider loading={<BeatLoader color="black" />} store={persistableStore}>
    <PersistGate  persistor={persistor}>
      <main className={iranSansWeb.className}>
      <TopBanner />
      <Header />
     {children}
      <Footer />
      </main>
     </PersistGate>
    </Provider>
   </div>
  )
}

export default Layout