import React from 'react'
import { AppFooter,AppHeader } from './common'
import { Routes,Route } from 'react-router-dom'
import { Home,About,Profile,Contact,Products,NotFound,ProductDealties, SignUp,Login, Cart } from './Pages'

const AppRouter = () => {
  return (
    <>
 <AppHeader/>
    <Routes>
     <Route path = "/" element = {<Home/>}></Route>
     <Route path = "/about" element = {<About/>}></Route>
     <Route path = "contact" element = {<Contact/>}></Route>
     <Route path = "products" element = {<Products/>}></Route>
     <Route path = {`${"/productdealties"}/:id`} element = {<ProductDealties/>}></Route>
     <Route path = "/login" element = {<Login/>}></Route>
     <Route path = "/cart" element = {<Cart/>}></Route>
     <Route path = "/*" element = {<NotFound/>}></Route>
     </Routes>
    <AppFooter/>
      </>
  )
}

export default AppRouter