import React from 'react'
import {GlobalStyle} from './styles/createGlobalStyle'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
        <GlobalStyle/>
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
        <NavBar />
    </>
  )
}

export default App