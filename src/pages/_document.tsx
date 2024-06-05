import { ServerStyles, createStylesServer } from '@mantine/next';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = (
      <>
        {initialProps.styles}
        <ServerStyles html={initialProps.html} server={stylesServer} />
      </>
    );

    // TODO: Remove this when we have a better solution for the SSR issue
    initialProps.styles = styles;

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
