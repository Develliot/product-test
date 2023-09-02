import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

import Layout from "@/components/Layout";
import Heading from "@/components/Heading";
import Box from "@/components/Box";

import { Product } from "@/types/types";
import Text from "@/components/Text";
import { formatMoney } from "@/utils/formatUtils";
import Button from "@/components/Button";
import { useCartContext } from "@/contexts/CartContext";
import { useState } from "react";

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1em;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const RowBetweenAlignFlexEnd = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Price = styled(Text)`
  font-size: 2em;
  margin-bottom: 0;
`;

const Column = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const QuantityButton = styled(Button)`
  width: 2em;
  height: 2em;
  padding: 0 0 0 0;
`;

export const GET_PRODUCTS = gql`
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

// we probably should use /product/[id] route here instead of /product
// but it's what the tests are asking for
export default function ProductPage() {
  const [cartState, setState] = useCartContext();
  const [quantityToAdd, setQuantityToAdd] = useState<number>(1);
  const cartItems = cartState.cartItems;
  // we also could use getStaticProps / getServerProps here to get the product data SSR
  // doing this all client side because I wanted to see what apollo client was like

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { id: 1 },
  });
  // TODO: figure out why useQuery generics aren't working, got to be better than type assertions
  const product = data?.product as Product;
  const moneyString = formatMoney(product?.price / 100 || 0);
  // we always want this to default to 1
  const numberInCart =
    cartItems.find((item) => item.product.id === product.id)?.quantity || 0;

  // TODO: don't store cart in state store on server side against cookie
  const increaseQuantity = () => {
    setQuantityToAdd((prevState) => prevState + 1);
  };
  const decreaseQuantity = () => {
    setQuantityToAdd((prevState) => prevState - 1);
  };

  const addQuantityToCart = () => {
    setState((prevState) => ({
      ...prevState,
      cartItems: [
        ...prevState.cartItems.filter((item) => item.product.id !== product.id),
        {
          product,
          quantity: numberInCart + quantityToAdd,
        },
      ],
    }));
  };

  if (loading || !product) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <Box padding="s">
        <ImageWrapper>
          <StyledImage src={product.img_url} alt="" />
        </ImageWrapper>
        <Heading h1>{product.name}</Heading>
        <Text textColor="purpleHaze">{`${product.power} // Packet of ${product.quantity}`}</Text>
        <RowBetweenAlignFlexEnd marginBottom="s">
          <Price>{`£${moneyString}`}</Price>
          <Column>
            <Text textAlign="center">Qty</Text>
            <RowBetweenAlignFlexEnd>
              <QuantityButton
                onClick={() => decreaseQuantity()}
                aria-label={`decrease quantity to add to ${quantityToAdd - 1}`}
                disabled={quantityToAdd < 2}
              >
                -
              </QuantityButton>
              <Text paddingHorizontal="s" title="Current quantity">
                {quantityToAdd}
              </Text>
              <QuantityButton
                aria-label={`incease quantity to add to ${quantityToAdd + 1}`}
                onClick={() => increaseQuantity()}
              >
                +
              </QuantityButton>
            </RowBetweenAlignFlexEnd>
          </Column>
        </RowBetweenAlignFlexEnd>
        <Button
          full
          onClick={() => {
            addQuantityToCart();
          }}
        >
          Add to cart
        </Button>
        <Box marginTop="s">
          <Text title="Basket items" paddingHorizontal="s">
            {`${numberInCart} in basket`}
          </Text>
        </Box>
      </Box>
      <Box padding="s" backgroundColor="hemocyanin" margin="none">
        <Heading h2>Description</Heading>
        <Text>{product.description}</Text>
      </Box>
      <Box padding="s" margin="none">
        <Heading h2>Specification</Heading>
        {/* appologies ran out of time to style this */}
        <table>
          <tbody>
            <tr>
              <td>Brand</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>Item weight (g)</td>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <td>Dimensions (cm)</td>
              <td>{`${product.length} x ${product.width} x ${product.height}`}</td>
            </tr>
            <tr>
              <td>Item Model number</td>
              <td>{product.model_code}</td>
            </tr>
            <tr>
              <td>Colour</td>
              <td>{product.colour}</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Layout>
  );
}
