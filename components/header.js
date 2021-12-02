import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-gray-700 top-0 fixed w-full'>
      <nav className='m-3 text-xl text-right'>
        <Link href="http://cse.eedept.kobe-u.ac.jp/uww2021"><a className='m-2 hover:underline'>Home</a></Link>
        <Link href="http://cse.eedept.kobe-u.ac.jp/uww2021/program.html"><a className='m-2 hover:underline'>Program</a></Link>
        <Link href="http://www.yumebutai.org/access/index.html"><a className='m-2 hover:underline'>Access</a></Link>
      </nav>
    </header>
  );
}
