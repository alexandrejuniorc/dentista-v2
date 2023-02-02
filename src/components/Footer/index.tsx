import Link from 'next/link'
import React from 'react'
import { FooterContainer, FooterContent, InfosContainer } from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* <img src="" alt="" /> */}
        <p>Joubert Barbosa</p>

        <InfosContainer>
          <h3>Contato</h3>

          <ul>
            <li>
              <Link href="tel:+5535999999999">+55 35 99999-9999</Link>
            </li>
            <li>
              <Link href="mailto:nenogarbes@hotmail.com">
                nenogarbes@hotmail.com
              </Link>
            </li>
            <li>Rua Ali Perto, 42 - Botafogo</li>
            <li>Rio de Janeiro - RJ</li>
          </ul>
        </InfosContainer>

        <InfosContainer>
          <h3>Informações</h3>

          <ul>
            <li>
              <Link href="/especialidades">Especialidades</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </InfosContainer>

        <p>Joubert Barbosa © Alguns direitos reservados.</p>
      </FooterContent>
    </FooterContainer>
  )
}
