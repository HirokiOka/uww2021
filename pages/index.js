import Head from 'next/head';
import Header from '../components/header';
import Registration from '../components/registration';
import Deadline from '../components/deadline';
import Download from '../components/download';
import Schedule from '../components/schedule';
import Organizers from '../components/organizers';
import About from '../components/about';
import Sponsors from '../components/sponsors';
import LinkCollection from '../components/linkCollection';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='bg-gray-900 h-full text-gray-300 font-sans'>
      <Head>
        <title>UWW2021</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Header />

        <div className='contents'>
          <About />
          <Registration />
          <div className='grid md:grid-cols-2 sm:grid-cols-none '>
            <Deadline />
            <Download />
          </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-none '>
            <Schedule />
            <Organizers />
          </div>
          <Sponsors />
          <h2 className='text-center text-xl'>E-mail: uww2021org [at] ubi.eedept.kobe-u.ac.jp</h2>
          <LinkCollection />

        </div>
      </body>
      <Footer />
      </div>
  )
}
