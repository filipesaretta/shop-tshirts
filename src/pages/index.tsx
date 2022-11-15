import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from '../assets/t-shirts-to-be-deleted/Shirt-1.png'
import shirt2 from '../assets/t-shirts-to-be-deleted/shirt-2.png'
import shirt3 from '../assets/t-shirts-to-be-deleted/Shirt-3.png'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt='' width={520} height={480} ></Image>
        <footer>
          <strong>
            Camiseta XL
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} alt='' width={520} height={480} ></Image>
        <footer>
          <strong>
            Camiseta XL
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} alt='' width={520} height={480} ></Image>
        <footer>
          <strong>
            Camiseta XL
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} alt='' width={520} height={480} ></Image>
        <footer>
          <strong>
            Camiseta XL
          </strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
