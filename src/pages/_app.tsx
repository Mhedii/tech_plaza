import store from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      </Provider>
    </SessionProvider>
  );
}
