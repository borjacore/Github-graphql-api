# Welcome

Thanks for your time, this is my repositories search application using 
the Github GrapqhQl API.

Stack used:
  - React
  - React-query (For dealing with async data)
  - Typescript (Type safe is cool)
  - Styled-components (Css in JS)
  - Ant design (Pre-built component)
  - React testing library (Testing yay!)

Main Features:
  - The appliation renders the 10 most Javascript starred repositories by default
  - You can search for the repositories (Flexible Search)
  - Each item in the list is a link to the original repo
  - Wide and Secure test coverage
  - Dockerized 🐳

# HOW TO START
  - Execute `npm i`
  - Then run the app `npm run start`
  - Enjoy :)

## Commands
  - `npm run start`: Initialises the app for dev mode
  - `npm run test`: Makes sure that the app is robust and the continues development is safe
  - `npm run build`: Creates the production package

## Philosophy 
This app tries to show in a short period of development (Around 2h time)
how to build a functional web app using the stack mentioned above with 
react-hooks, clean code and ant design

Time expend preparing the app (around 20 minutes) for installing dependencies
and organise the directories, as DDD belongs to the backend side, I've chosen
something similar to organise my code, while each domain will have their own page,
components related only to that page, local styles.

The schema would something like this
----/ src

------/ pages

--------/ page1

----------/ components related to page1

----------/ services related to page1

----------/ common services to page1

--------/ page2

----------/ components related to page2

----------/ services related to page2

----------/ common services

------/ hooks (widely used)

------/ components (shared)

------/ utils (shared)

Due the size of the application it only contains 1 domain (Home) where everything lives there
but the providers, on the above layer provide access to the whole application to Theming and Queries (state)

Time expent building the app (around 1h) was for writing the components for the application,
hook for grapqhQL queries, business logic related to each domain, creating interfaces and testing

Time expent for styling the app (around 15 mins) using styled-components and ant design

I used the rest of the time to dockerize the app, and polish it a bit

## What would I add with more time
- E2E testing to add robustness to the application
- CommitLint to facilitate the development between a team
- Pagination
- Cool design
- Use of Git-Flow to manage the tasks and features of the application, as small development task, just done it in once
