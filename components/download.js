export default function Download() {
  return (
    <div className='p-2 m-2'>
      <h2 className='text-3xl underline mx-4 '>Download</h2>
      <div className='rounded bg-gray-700 m-2 p-2 text-center'>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 mb-4 mx-8"><a href="http://cse.eedept.kobe-u.ac.jp/uww2021/UWW2021_Format_LaTeX" className=''>テンプレート(LaTeX)</a></button>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 mb-4 mx-8"><a href="http://cse.eedept.kobe-u.ac.jp/uww2021/word_UWW2021.docx" className=''>テンプレート(Word)</a></button>
      </div>
    </div>
  );
}
