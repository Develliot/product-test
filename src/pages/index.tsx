// import { Product } from "@/types/types";
// import { gql, useQuery } from "@apollo/client";
import Box from "@/components/Box";
import NextLink from "next/link";

// import { Product } from "@/types/types";

export default function Home() {
  //  I envisaged this being a list of products with links to the product pages

  // const GET_PRODUCTS = gql`
  //   query getProducts {
  //     products {
  //       id
  //       name
  //       power
  //       description
  //       price
  //       quantity
  //       brand
  //       weight
  //       height
  //       width
  //       length
  //       model_code
  //       colour
  //       img_url
  //     }
  //   }
  // `;
  // const { loading, error, data } = useQuery(GET_PRODUCTS);
  // const products = data?.products as Product[];

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing{" "}
          <code>client/pages/product.js</code>
        </p>

        <Box backgroundColor="ice" borderRadius="1em">
          <NextLink href={"/product"}>Product Page</NextLink>
        </Box>

        {/* <ul>
          {data.products.map((product: Product) => (
            <li key={product.id}>{product.power}</li>
          ))}
        </ul> */}
      </div>
    </main>
  );
}
