import Image from "next/image";

import logo from '../../assets/logo.svg'
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt="Ignite Shop Store"></Image>
    </HeaderContainer>
  )
}