import { Product, HeroBanner, FooterBanner } from "./components"
import { client } from "../lib/client"

interface Props{
  bannerData: any[]
  products: any[]
}

const Home: React.FC<Props> = ({products, bannerData}) => {
  console.log(bannerData)
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best selling products</h2>
      <p>speakers of many variations</p>
    </div>

    <div className="products-container">
      {products?.map((product) => product.name)}
    </div>

    <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product" ]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner" ]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home
