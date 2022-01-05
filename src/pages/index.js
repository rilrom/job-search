// Dependencies
import Head from "next/head";

// Components
import SearchResults from "components/SearchResults";

const Home = () => {
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
