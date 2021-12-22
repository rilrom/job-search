import type { NextPage } from "next";
import Head from "next/head";

import SearchResults from "components/SearchResults";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Job Search</title>
      </Head>

      <SearchResults />
    </>
  );
};

export default Home;
