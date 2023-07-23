
import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
//import About from './components/about'
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';

const LazyAbout = React.lazy(() => import('./components/about'))

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>}
        />
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />}></Route>
          <Route path='featured' element={<FeaturedProducts />}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userid' element={<UserDetails />}></Route>
          <Route path='admin' element={<Admin />}></Route>
        </Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>

  );
}

export default App;
