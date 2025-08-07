This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Next.js rendering parading
    - SSR
        - Server site generation (SSR)
        - Incremental site regeneration (ISR)
    - CSR


## Root route
inside app
page.js/jsx or page.ts/tsx  - home route

## Nested routing
[route] => about
[route] => about/team
[route] => about/team/1
[route] => about/team/1/2
[route] => about/team/1/2/3
[route] => about/team/1/2/3/4

## Dynamic routing
[route] => about/team/[id]
[route] => about/team/[id]/[name]
[route] => about/team/[id]/[name]/[age]

## Nested Dynamic routing
[route] => about/team/[id]/[name]/[age]/[location]
[route] => about/team/[id]/[name]/[age]/[location]/[hobby]

## Dynamic routing with catch all
[route] => about/team/[...params]
[route] => about/team/[...params]/[...moreParams]
## Dynamic routing with optional catch all
[route] => about/team/[...params?]
[route] => about/team/[...params?]/[...moreParams?]
## Dynamic routing with multiple catch all
[route] => about/team/[...params]/[...moreParams?]
## Dynamic routing with multiple optional catch all
[route] => about/team/[...params?]/[...moreParams?]
## Dynamic routing with multiple optional catch all and params
[route] => about/team/[...params?]/[...moreParams?]/[id]
## Dynamic routing with multiple optional catch all and params with query
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value
## Dynamic routing with multiple optional catch all and params with query and hash
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash
## Dynamic routing with multiple optional catch all and params with query and hash and fragment
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment and customSearch
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value&customSearch=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment and customSearch and customSort
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value&customSearch=value&customSort=value
## Dynamic routing with multiple optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment and customSearch and customSort and customFilter
[route] => about/team/[...params?]/[...moreParams?]/[id]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value&customSearch=value&customSort=value&customFilter=value

## Catch All routing
[route] => about/team/[...params]
[route] => about/team/[...params]/[...moreParams]

## Private route
When do not want add route add then will add like __privateFoldername
[route] => about/team/private/[...params]
[route] => about/team/private/[...params]/[...moreParams]
## Reusable components
[route] => about/team/[...params]/[...moreParams]/reusable
[route] => about/team/[...params]/[...moreParams]/reusable/[id]
## Reusable components with dynamic routing
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]
## Reusable components with nested routing
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested
## Reusable components with nested dynamic routing
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]
## Reusable components with nested dynamic routing and catch all
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll]
## Reusable components with nested dynamic routing and catch all and optional catch all
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]
## Reusable components with nested dynamic routing and catch all and optional catch all and params
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment and customSearch
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value&customSearch=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment and customSearch and customSort
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value&customSearch=value&customSort=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment and customSearch and customSort and customFilter
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value&customSearch=value&customSort=value&customFilter=value
## Reusable components with nested dynamic routing and catch all and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order and direction and searchParams and customParams and customQuery and customHash and customFragment and customSearch and customSort and customFilter and customPagination
[route] => about/team/[...params]/[...moreParams]/reusable/[id]/[name]/[age]/nested/[location]/[...catchAll?]/[param]?query=value#hash#fragment&search=value&sort=value&filter=value&page=1&limit=10&offset=0&order=asc&direction=asc&searchParams=value&customParams=value&customQuery=value&customHash=value&customFragment=value&customSearch=value&customSort=value&customFilter=value&customPagination=value


## Build common/reusable layouts
## Layouts
## Nested layouts
## Nested layouts with dynamic routing
## Nested layouts with dynamic routing and catch all
## Nested layouts with dynamic routing and optional catch all
## Nested layouts with dynamic routing and optional catch all and params
## Nested layouts with dynamic routing and optional catch all and params with query
## Nested layouts with dynamic routing and optional catch all and params with query and hash
## Nested layouts with dynamic routing and optional catch all and params with query and hash and fragment
## Nested layouts with dynamic routing and optional catch all and params with query and hash and fragment and search
## Nested layouts with dynamic routing and optional catch all and params with query and hash and fragment and search and sort
## Nested layouts with dynamic routing and optional catch all and params with query and hash and fragment and search and sort and filter
## Nested layouts with dynamic routing and optional catch all and params with query and hash and fragment and search and sort and filter and pagination
## Nested layouts with dynamic routing and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit
## Nested layouts with dynamic routing and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset
## Nested layouts with dynamic routing and optional catch all and params with query and hash and fragment and search and sort and filter and pagination and limit and offset and order

## Metadata api

## Create custom not found page


## Route groups
All (routegroup)

## Private folder

## Rendering parading in next.js

## Static Vs Dynamic Rendering

## Static site generator

## DynamicParam

## ISR - Incremental static regenerating

## SSR

## CSR

## how node.js handle both SSR and CSR

## SSR -> SSG
       -> ISR