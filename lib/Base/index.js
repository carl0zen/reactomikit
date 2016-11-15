import React from 'react'
import styled from 'styled-components'
import theme from '../Theme'
import { themer } from '../utils'
const { color, font, nav, menu, transition, button } = theme

export const Menu = styled.nav`
  line-height: ${props => props.theme.height || nav.height};
  position: relative;

  a {
    background: ${props => props.theme.menu.background || menu.background};
    padding: 20px 2em;
    cursor: pointer;
    color: ${props => props.theme.color.white || color.white};
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: ${props => props.theme.font.small || font.small};
    font-weight: 600;
    transition:
      background-color ${props => props.theme.transition || transition},
      padding ${props => props.theme.transition || transition},
      border ${props => props.theme.transition || transition};

    &:hover {
      background-color: ${props => props.theme.color.secondary || color.secondary};
      color: ${props => props.theme.color.white || color.white};
      border-bottom: 3px solid ${props => props.theme.color.white || color.white};
      border-collapse: collapse;
      padding: 7px 2em;
  }
}
`

export const Button = styled.button`
  border: 1px solid transparent;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0;
  font-weight: 700;
  outline: none;
  position: relative;
  transition:
    background-color ${props => props.theme.transition || transition},
    opacity ${props => props.theme.transition || transition};
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 0;
  border-radius: 3px;
  text-align: center;
  background-color: ${props => props.theme.color.info || color.info};
  color: ${props => props.theme.color.white|| color.white};

  ${props => props.primary && `
    background-color: ${props => props.theme.color.primary || color.primary};
  `}

  ${props => props.disabled && `
    color: ${props => props.theme.color.base || color.base};
    opacity: 0.4;
    background-color: ${props => props.theme.color.white || color.white};
    pointer-events: none;
  `}

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.color.info || color.info};
    color: ${props => props.theme.color.info || color.info};
    background-color: ${props => props.theme.color.white || color.white};

    ${props => props.primary && `
      border-color: ${props => props.theme.color.primary || color.primary};
      background-color: ${props => props.theme.color.white || color.white};
      color: ${props => props.theme.color.primary || color.primary};
      `
    }
  }

  ${props => props.rounded && `
    width: ${props => props.theme.button.roundedSize || button.roundedSize};
    height: ${props => props.theme.button.roundedSize || button.roundedSize};
    max-width: ${props => props.theme.button.roundedSize || button.roundedSize};
    min-width: ${props => props.theme.button.roundedSize || button.roundedSize};
    border-radius: 50%;
    line-height: ${props => props.theme.button.roundedSize || button.roundedSize};
    padding: 0;
  `}
`

export const Link = styled.a`
  color: ${props => props.theme.color.link || color.link};

  &:hover {
    color: ${props => props.theme.color.link || color.link};
  }
`

export const Logo = styled.img`
  width: 130px;
`

export const Label = styled.label`
  background: red;
`
