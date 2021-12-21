export default function Download() {
  return (
    <div className='p-2 m-2'>
      <h2 className='text-3xl underline mx-4 '>Download</h2>
      <div className='rounded bg-gray-700 m-2 p-2'>
        <div className='text-center inline-flex'> 
         <h3 className='text-xl font-bold m-2 p-2'>原稿テンプレート：</h3>
         <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-2 mb-2 mx-6"><a href="http://cse.eedept.kobe-u.ac.jp/uww2021/UWW2021_Format_LaTeX.zip">LaTeX</a></button>
         <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-2 mb-2 mx-6"><a href="http://cse.eedept.kobe-u.ac.jp/uww2021/word_UWW2021.docx">Word</a></button>
        </div>
        <div className='text-center inline-flex'> 
         <h3 className='text-xl font-bold m-2 p-2'>プロシーディングス：</h3>
         <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-2 mb-2 mx-6"><a href="http://cse.eedept.kobe-u.ac.jp/uww2021/UWW2021_proc.pdf">pdf</a></button>
        </div>
      </div>
    </div>
  );
}
