import { HomePage } from '@pages/HomePage'
import './App.css'
import { UserPage } from '@pages/UserPage'
import { useState } from 'react'
import { Navbar } from '@molecules/Navbar';
import { ProductsPage } from '@pages/ProductsPage';

function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Navbar setValue={setPage} />
      {
        page === "Home" ? <HomePage />
        : page === "Users" ? <UserPage />
        : page === "Products" ? <ProductsPage />
        : <HomePage />
      }
    </>
  )
}

export default App
