import React from 'react'
import {GlobalStyle} from './styles/createGlobalStyle'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

function App() {
  return (
    <>
        <GlobalStyle/>
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
  )
}

export default App