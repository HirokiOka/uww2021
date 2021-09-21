import Header from '../components/header';
import LinkCollection from '../components/linkCollection';
import Footer from '../components/footer';

export default function Program() {
  return (
    <div className='bg-gray-900 h-full text-gray-200'>
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
