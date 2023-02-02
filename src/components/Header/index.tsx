import React from 'react'
import { HeaderContainer, HeaderContent, LinksContainer } from './styles'
import Link from 'next/link'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <strong>Joubert Barbosa</strong>

        <LinksContainer>
          <Link href="/especialidades">Especialidades</Link>
          <Link href="/contato">Contato</Link>
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
