import { gql, useQuery } from "@apollo/client";

import { Product } from "@/types/types";
import Layout from "@/components/Layout";

// we probably should use /product/[id] route here instead of /product
// but it's what the tests are asking for
export default function ProductPage() {
  // we also could use getStaticProps / getServerProps here to get the product data SSR
  // doing this all client side because I wanted to see what apollo client was like
  const GET_PRODUCTS = gql`
    query getProduct($id: Int!) {
      product(id: $id) {
        id
        name
        power
        description
        price
        quantity
        brand
        weight
        height
        width
        length
        model_code
        colour
        img_url
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { id: 1 },
  });
  // TODO: figure out why useQuery generics aren't working, got to be better than type assertions
  const product = data?.product as Product;

  if (loading || !product) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <Layout>
      <h1>{product.name}</h1>
    </Layout>
  );
}
