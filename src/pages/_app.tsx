import "../styles/globals.css";
import "../styles/scrollBar.css";
import type { AppProps } from "next/app";
import { RecentlySeenProvider } from "@contexts/RecentlySeenContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecentlySeenProvider>
      <Component {...pageProps} />
    </RecentlySeenProvider>
  );
}
