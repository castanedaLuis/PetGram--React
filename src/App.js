import React from 'react'
import {GlobalStyle} from './createGlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

function App() {
  return (
    <>
        <GlobalStyle/>
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
  )
}

export default App