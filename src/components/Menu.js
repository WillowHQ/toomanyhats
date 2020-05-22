import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    font-size: 1em;
    margin-left: 1.5em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
    @media (max-width: 400px) {
      font-size: 0.8em;
      margin-left: 1em;
    }
  }

  a {
    text-decoration: none;
    font-family: "Libre Baskerville", serif;
    color: #f3f3f3;
    font-weight: 400;
    transition: all 0.2s;
    &:hover {
      color: #9e9e9e;
    }
  }
`

const activeLinkStyle = {
  color: '#9e9e9e',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name} style={{textTransform: 'uppercase'}}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
