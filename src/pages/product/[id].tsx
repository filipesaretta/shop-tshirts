import { useRouter } from "next/router"
import { ContentContainer, ImageContainer, ProductContainer } from "../../styles/pages/products"

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ContentContainer>
        <h1>Product X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, ullam. Consequatur quos delectus suscipit explicabo magni, velit dolorem earum soluta eos facilis qui distinctio perspiciatis! Amet odio sed in inventore?</p>
        <button>Buy Now</button>
      </ContentContainer>
    </ProductContainer>
  )
}