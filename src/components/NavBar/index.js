import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import Context from '../../Context'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <Nav>
              <Link to='/' aria-current={'home'}><MdHome size={SIZE} /></Link>
              <Link to='/favs' onClick={activateAuth}><MdFavoriteBorder size={SIZE} /></Link>
              <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
            </Nav>

          )
        }

      }
    </Context.Consumer>
  )
}
