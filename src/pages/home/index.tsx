import Image from 'next/image'
import homeHeader from '../../assets/home-header.jpeg'
import { HomeHeaderContainer, HomeHeaderContent } from './styles'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HomeHeaderContainer>
        <HomeHeaderContent>
          <h1>Bicicletas feitas sob medida</h1>
          <p>
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para você. Explore o mundo na sua velocidade com a Bikcraft.
          </p>

          <Link href="/">Escolha a sua</Link>
        </HomeHeaderContent>

        <Image src={homeHeader} alt="" width={560} height={840} />
      </HomeHeaderContainer>
    </>
  )
}
