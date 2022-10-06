import Header from "@components/Header";
import { AppProvider } from "@context/provider";
import NextNProgress from "nextjs-progressbar";
import React from "react";

import "../../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
        options={{ easing: "ease", speed: 500 }}
      />
      <React.StrictMode>
        <div className="overflow-visible">
          <Header />
          <Component {...pageProps} />
        </div>
      </React.StrictMode>
    </AppProvider>
  );
}

export default MyApp;
