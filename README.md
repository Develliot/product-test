## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

```bash
npm run test

```

## Caveats

The test was looking for basket item count, which wasn't included in the design. I made some assumptions to get the tests to pass was that was the primary request for the test
Also I had to add a wrapper to the tests to get them to pass because we are testing a route and the route relies on all sorts of contexts and providers. I would use Playwrite to avoid all the mocking in the future, tests might take longer to run but they are closer to the user experience and a much better DX

I used Apollo for the GraphQL client (and server) just to test it out. Looking at the work invloved to get Apollo working with SSR SSG, I would probably just use a query builder and fetch and SWR or React Query so I don't need to write my own helpers for hydration to work with all sorts of deep merging and deep equality checks. This looks like an ecomm app so I would definitely want most of this to be rendered on the server not the client. Also I wouldn't store the basket state in context I would store it on the server. So if someone closed their browser and came back again we wouldn't loose their custom with a bad UX.

I wanted to see if I could run the API in the same next JS instance in stead of a separate service. I hope this is seen more as a flex than going against the grain of the test. Again I haven't touched graphql since I was in Mixcloud 3-4 years ago so I wanted to see what it was like to write my own resolver. It also feels a bit neater.

With time I would have monorepoed this and had the UI components in a separte package, it also takes up the lions share of the types.ts so would clean up that file too.
I also would have a more comprehensive them that used colour and token colours so I could write primary or buttonHover etc instead of tokenColour names like sohoLights.

## Deployed on Vercel

Deployed App URL: [https://product-test-pi.vercel.app/](https://product-test-pi.vercel.app/)
