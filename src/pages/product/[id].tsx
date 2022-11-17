import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ContentContainer, ImageContainer, ProductContainer } from "../../styles/pages/products"

interface ProductsProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string
    description: string
  }
}

export default function Product({ product }: ProductsProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt={product.name} />
      </ImageContainer>
      <ContentContainer>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Buy Now</button>
      </ContentContainer>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_Mo9ErB4z7sx2hK' } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('it', {
          style: 'currency',
          currency: 'EUR',

        }).format(price.unit_amount / 100),
        description: product.description,
      }
    }
  }
}