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
    <div className='bg-gray-900 h-full text-gray-200 font-mono'>
      <head>
      </head>
      <body>
        <Header />

        <div className='contents'>
          <About />
          <Registration />
          <Deadline />
          <div className='grid grid-cols-2 p-2'>
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
