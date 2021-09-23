import Head from 'next/head';
import Header from '../components/header';
import LinkCollection from '../components/linkCollection';
import Footer from '../components/footer';

export default function Program() {
  return (
    <div className='bg-gray-900 h-full text-gray-300 font-sans'>
      <Head>
        <title>UWW2021</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Header />
        <div className='contents'>
          <h1 className='pt-16 text-4xl text-center underline'>Program</h1>
        </div>
        <LinkCollection />
      </body>
      <Footer />
    </div>
  );
}
