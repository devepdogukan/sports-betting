import { Outlet } from 'react-router-dom'
import Navbar from '~/features/layout/navbar'
import Basket from '~/features/basket'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pr-4 max-lg:pr-0 gap-4 max-xl:flex-col-reverse">
        <main className="flex-1 min-lg:pr-4">
          <Outlet />
        </main>
        <aside className="w-3/12 max-xl:w-full h-fit sticky top-6 max-xl:top-0 mt-4 max-xl:mt-0">
          <Basket />
        </aside>
      </div>
    </>
  )
}

export default Layout
