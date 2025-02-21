import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepg from './pages/Homepg'
import Apipg from './pages/Apipg'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepg></Homepg>}></Route>
      <Route path='/api' element={<Apipg></Apipg>}></Route>
    </Routes>
  </BrowserRouter>
)
