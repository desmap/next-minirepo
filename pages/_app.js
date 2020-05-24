// import App from 'next/app'

function MyApp({ Component, pageProps, greeting }) {
  return (
    <div>
      <div>{greeting + ' and welcome!'}</div>
      <Component {...pageProps} />
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export async function getStaticProps(context) {
  console.log('calling getStaticProps')
  return {
    props: { greeting: 'Hello' }, // will be passed to the page component as props
  }
}

export default MyApp
