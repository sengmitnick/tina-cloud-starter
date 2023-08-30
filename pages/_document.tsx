import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="我是程序员大胜， 一个前端开发工程师。"
          />
          <meta name="keywords" content="技术随笔, IDE, 编程, AI, AIGC, 大胜" />
          <title>大胜的技术随笔</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
