import React from 'react'
import { GlobalStyle } from './styles/createGlobalStyle'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { NavBar } from './components/NavBar'
import Context from './Context'

function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ?
              <>
                <ListOfCategories />
                <ListOfPhotoCards />
                <NavBar />
              </>
              :
              <>
                <h1>No Autenticado dale click al ❤️</h1>
                <NavBar />
              </>
        }
      </Context.Consumer>
    </>
  )
}

export default App