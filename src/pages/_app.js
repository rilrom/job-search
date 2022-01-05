// Global sass files
import "styles/variables.scss";
import "styles/globals.scss";

// Global packages
import "react-datepicker/dist/react-datepicker.css";
import "react-accessible-accordion/dist/fancy-example.css";

// Dependencies
import { Provider } from "react-redux";
import { store } from "store";

// Components
import Layout from "components/Layout";

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
