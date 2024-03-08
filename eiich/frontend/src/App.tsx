import Home from "@/pages/Home/Home"
// import { Navbar } from "./layout/Navbar"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import { Navbar } from "./layout/Navbar"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

const Root = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  )
}
