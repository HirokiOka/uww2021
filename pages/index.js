import Header from '../components/header';
import Registration from '../components/registration';
import Deadline from '../components/deadline';
import Schedule from '../components/schedule';
import Organizers from '../components/organizers';
import About from '../components/about';
import Sponsors from '../components/sponsors';
import LinkCollection from '../components/linkCollection';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='font-display bg-gray-800 h-full text-gray-200'>
      <head>
        <title>UWW2021</title>
      </head>
      <body>
        <Header />

        <div className='contents'>
          <About />
          <Registration />
          <Deadline />
          <div className='grid md:grid-cols-2 sm:grid-cols-none p-2'>
            <Schedule />
            <Organizers />
          </div>
          <Sponsors />
          <h2 className='text-center text-xl'>E-mail: uww2021_org [at] ubi.eedept.kobe-u.ac.jp</h2>
          <LinkCollection />

        </div>
      </body>
      <Footer />
      </div>
  )
}
