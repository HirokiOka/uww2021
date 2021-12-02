import Head from 'next/head';
import Header from '../components/header';
import LinkCollection from '../components/linkCollection';
import Footer from '../components/footer';
import { useState } from 'react';
import fs from 'fs';

export default function Program({ dayOne, dayTwo }) {
  const [isDayOne, setIsDayOne] = useState(true);

  function toggle() {
    setIsDayOne(!isDayOne);
  }
  return (
    <div className='bg-gray-900 h-full text-gray-300 font-sans'>
      <Head>
        <title>UWW2021</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Header />
        <div className='contents'>
          <h1 className='pt-16 text-4xl underline text-center pb-2'>Program</h1>
            <div className='p-2 text-center  md:mx-48 rounded'>
            <table className='m-auto'>
              <tr>
                <td><img src='./img/com.svg' width='24' height='24' /></td>
                <td><p className='text-center font-bold'>:発表者</p></td>
              </tr>
            </table>
            <p className=''>発表時間: 10分 (目安: 7分発表 + 2分質疑 + 1分転換) </p>
          </div>
          <div className='text-xl text-center md:mx-24 pt-4'>
            <button  onClick={toggle} className={isDayOne ? "m-2 p-2 text-center bg-gray-600 rounded underline" : "m-2 p-2 text-center bg-gray-900 rounded hover:bg-gray-700"}>12/19 (日)</button>
            <button  onClick={toggle} className={isDayOne ? "m-2 p-2 text-center bg-gray-900 rounded hover:bg-gray-700" : "m-2 p-2 text-center bg-gray-600 rounded underline"}>12/20 (月)</button>
          </div>
              {isDayOne ? (
              <>
                {dayOne.map((s, i) => (
                  <div className='my-4 mx-24 p-2 rounded bg-gray-700 justify-center' key={i}>
                    <h1 className='text-xl text-center'>{s.startTime} - {s.endTime}</h1>
                    <h1 className='text-2xl font-bold text-center'>{s.eventName}</h1>
                    {s.isSession ? (
                      <div className='m-4' key={i}>
                      <h2 className='text-center'>座長: {s.sessionContent.chairman}</h2>
                        {s.sessionContent.presentations.map((p, j) => (
                          <ul className='list-disc list-inside m-2 p-2 bg-gray-600 rounded' key={j}>
                            <li className='md:text-xl text-center'>{p.title}</li>
                            <table className='m-auto'>
                              <tr>
                                <td><img src='./img/com.svg' width='24' height='24' /></td>
                                <td><p className='text-center font-bold'>{p.firstAuthor} ({p.affiliation})</p></td>
                              </tr>
                            </table>
                            <div className='flex mb-1 md:justify-center'>
                              {p.coAuthors.map((ca, idx ,ary) => (
                                <div key={idx}>
                                  {p.firstAuthor !== 'Adhe Rahmatullah Sugiharto' ? (
                                    <p className='md:text-sm md:break-words text-xs'>{(ca.name.length > 4) && (ca.name.match(/[a-z]/g) === null) ? ca.name.replaceAll(' ', '') : ca.name}{(ary[idx+1] && (ary[idx+1].affiliation === ca.affiliation)) ? '' : " (" + ca.affiliation + ")"}{idx < (ary.length-1) ? ',' : ''}&nbsp;</p>
                                  ) : (
                                    <p className='text-center text-sm break-words'>{idx < ary.length-1 ? "" : "Shuhei Tsuchida (Kobe University), I Putu Alit Pawana (Department of Physical Medicine & Rehabilitation of Airlangga University, Dr. Soetomo General Academic Hospital), Tsutomu Terada, Masahiko Tsukamoto (Kobe University)"}</p>
                                  )}
                                </div>
                              ))}
                          </div>
                          </ul>
                      ))}
                      </div>
                    ) : (
                        <h1 key={i}></h1>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                {dayTwo.map((s, i) => (
                  <div className='my-4 mx-24 p-2 rounded bg-gray-700 justify-center' key={i}>
                    <h1 className='text-xl text-center'>{s.startTime} - {s.endTime}</h1>
                    <h1 className='text-2xl font-bold text-center'>{s.eventName}</h1>
                    {s.isSession ? (
                      <div className='text-center m-4' key={i}>
                      <h2>座長: {s.sessionContent.chairman}</h2>
                        {s.sessionContent.presentations.map((p, j) => (
                          <ul className='list-disc list-inside m-2 p-2 bg-gray-600 rounded' key={j}>
                            <li className='text-xl text-center'>{p.title}</li>
                          <table className='m-auto'>
                            <tr>
                              <td><img src='./img/com.svg' width='24' height='24' /></td>
                              <td><p className='text-center font-bold'>{p.firstAuthor} ({p.affiliation})</p></td>
                            </tr>
                          </table>
                            <div className='flex mb-1 justify-center'>
                              {p.coAuthors.map((ca, idx ,ary) => (
                                <div key={idx}>
                                  <p className='text-sm break-words'>{(ca.name.length > 4 && (ca.name.match(/[a-z]/g) === null)) ? ca.name.replaceAll(' ', '') : ca.name}{(ary[idx+1] && (ary[idx+1].affiliation === ca.affiliation)) ? '' : " (" + ca.affiliation + ")"}{idx < (ary.length-1) ? ',' : ''}&nbsp;</p>
                                </div>
                              ))}
                            </div>
                          </ul>
                      ))}
                      </div>
                    ) : (
                        <h1 key={i}></h1>
                    )}
                  </div>
                ))}
                <div className='text-center bg-gray-700 rounded md:mx-24 my-2'>
                  <h1 className='text-2xl font-bold  p-2'>高速バス情報(淡路夢舞台発)</h1>
                  <p>18:16発 (19:12新神戸着)</p>
                  <p>19:16発 (20:12新神戸着)</p>
                  <p>20:16発 (21:08新神戸着)</p>
                </div>
              </>
            )}
        </div>
        <LinkCollection />
      </body>
      <Footer />
    </div>
  );
}

Program.getInitialProps = async () => {
  const dayOne = JSON.parse(fs.readFileSync("./public/data/dayOne.json"));
  const dayTwo = JSON.parse(fs.readFileSync("./public/data/dayTwo.json"));
  return { dayOne, dayTwo };
}
