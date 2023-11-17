// pages/_app.tsx

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const hideFooter = currentPath === "/loginPage"; // Tentukan path sesuai kebutuhan Anda
  const hideHeader = currentPath === "/loginPage";

  return (
    <Layout hideFooter={hideFooter} hideHeader={hideHeader}>
      <Component {...pageProps} />
    </Layout>
  );
}
