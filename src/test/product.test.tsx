import { ThemeProvider } from "styled-components";
import { render, fireEvent, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import Product, { GET_PRODUCTS } from "../pages/product";
import { CartContextProvider } from "@/contexts/CartContext";
import { theme } from "@/styles/theme";
import { data } from "@/server/db.js";

const firstProduct = data.products[0];
const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: {
        id: 1,
      },
    },
    result: {
      data: {
        product: firstProduct,
      },
    },
  },
];

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <Product />
        </ThemeProvider>
      </CartContextProvider>
    </MockedProvider>
  );

  expect(await screen.findByText("Loading...")).toBeInTheDocument();

  expect(await screen.findByText("+")).toBeInTheDocument();

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <Product />
        </ThemeProvider>
      </CartContextProvider>
    </MockedProvider>
  );

  expect(await screen.findByText("Loading...")).toBeInTheDocument();

  expect(await screen.findByText("+")).toBeInTheDocument();

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});
