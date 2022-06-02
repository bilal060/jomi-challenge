// import { NextLink } from "components/common/NextLink";
import { Container } from "@mui/material";
import CarouselBlock from "components/common/CarouselBlock";
import Header from "components/homepage/Header";
import TwoColumnBlock from "components/common/TwoColumnBlock";
// import TwoColumnBlock from "components/homepage/TwoColumnBlock";
import { HomePageDocument, HomePageQuery, useHomePageQuery } from "graphql/cms/homepage.generated";
import { APOLLO_STRAPI_STATE_PROP_NAME, initializeStrapiApollo } from "lib/apollo/cms-client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HeaderBlock from "components/common/HeaderBlock";

const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  console.log("Data is", data);
  console.log("hi")

  
  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name="description" content="Manage your expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>

        {/* header component start */}
          <HeaderBlock />
        {/* header component end */}

        {/* two column block start */}
          <TwoColumnBlock section= { data?.homePage?.data?.attributes?.sections } />
        {/* two column block end */}

        {/* Carousel component start */}
            <CarouselBlock section = { data?.homePage?.data?.attributes?.sections } />
        {/* Carousel component end */}
      </Container>
    </>
  );
};
 
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = await initializeStrapiApollo();
  await client.query<HomePageQuery>({
    query: HomePageDocument,
  });
 
  return {
    props: {
      [APOLLO_STRAPI_STATE_PROP_NAME]: client.cache.extract(),
    },
  };
};


// export async function getStaticProps() {
//   const client = new ApolloClient({
//       uri: "http://localhost:1337/graphql",
//       cache: new InMemoryCache()
//   })

//   const { data } = await client.query({
//     query: gql`
//     query HomePage {
//       homePage {
//         data {
//           attributes {
//             sections {
//               ... on ComponentCommonCarousel {
//                 Item {
//                   TitleText
//                   Description
//                   ButtonText
//                   ButtonUrl
//                 }
//                 # TODO: Complete this query
//               }
              
//             }
//           }
//         }
//       }
//     }
//   `,
//   });

//   return {
//     props: {
//       attributes : data?.homePage?.data?.attributes?.sections
//     }
//   }
// }

