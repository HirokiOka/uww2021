import Header from '../components/header';
import Registration from '../components/registration';
import Deadline from '../components/deadline';
import Schedule from '../components/schedule';
import Organizers from '../components/organizers';
import Footer from '../components/footer';
import About from '../components/about';

export default function Home() {
  return (
    <div className='bg-gray-900 h-full text-gray-200 sans'>
      <head>
      </head>
      <body>
        <Header />

        <div className='contents'>
          <About />
          <Registration />
          <div className='grid grid-cols-2 p-2'>
            <Deadline />
            <Schedule />
            <Organizers />
          </div>

        </div>
      </body>
      <Footer />
      </div>
  )
}
