import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-gray-700 top-0 fixed w-full'>
      <nav className='m-4 text-xl text-right'>
        <Link href="/"><a className='m-2 my-2 hover:underline'>Home</a></Link>
        <Link href="/access"><a className='m-2 my-2 hover:underline'>Access</a></Link>
        <Link href="/program"><a className='m-2 my-2 hover:underline'>Program</a></Link>
      </nav>
    </header>
  );
}
