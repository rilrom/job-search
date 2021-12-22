// Global sass files
import "styles/variables.scss";
import "styles/globals.scss";

// Global packages
import "react-accessible-accordion/dist/fancy-example.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { store } from "store";

import Layout from "components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
