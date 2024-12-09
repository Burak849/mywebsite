// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../style/style.css';  // CSS dosyasını burada import edin

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
