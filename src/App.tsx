import { Route, Routes } from 'react-router-dom'
import Layout from '~/features/layout'
import router from '~/config/router'
import { Provider } from 'react-redux'
import store from '~/store'
import { useEffect } from 'react'
import { initializeGA } from './utils/firebase'

function App() {
  useEffect(() => {
    initializeGA()
  }, [])

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {router.map((route, i) => (
            <Route {...route} key={i} />
          ))}
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
