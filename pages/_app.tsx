import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="我是程序员大胜， 一个前端开发工程师。"
        />
        <meta name="keywords" content="技术随笔, IDE, 编程, AI, AIGC, 大胜" />
        <title>大胜的技术随笔</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
