import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from "react";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import Layout from './components/Layout/Layout.jsx';


const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const CatalogDetailsPage = lazy(() => import('./pages/CatalogDetailsPage/CatalogDetailsPage.jsx'));

function App() {
  
  return (
    <React.Fragment>
    <Layout>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
       <Route path="/catalog" element={<CatalogPage/>} />
        <Route path="/catalog/:id" element={<CatalogDetailsPage/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Suspense>
    </Layout>
    </React.Fragment>
  )
}

export default App
