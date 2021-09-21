import Image from 'next/image';
import teamTsukamotoLogo from '../public/img/teamtsukamoto-logo.png';
import tsukakenLogo from '../public/img/tsukamototerada-logo.png';

export default function Sponsors() {
  return (
    <div className='p-2'>
      <h1 className='text-3xl underline mx-4 py-1'>Sponsors</h1>
      <div className='m-2 grid grid-cols-2 bg-gray-600 rounded'>
        <div className='text-center'>
          <h2 className='text-xl p-2'>神戸大学大学院工学研究科 塚本・寺田研究室</h2>
          <Image src={tsukakenLogo} alt="塚本寺田研究室ロゴ" />
        </div>
        <div className='text-center'>
          <h2 className='text-xl p-2'>NPO法人ウェアラブルコンピュータ研究開発機構</h2>
          <Image src={teamTsukamotoLogo} alt="Team Tsukamotoロゴ" />
        </div>
      </div>
      <p className='text-center'>本ワークショップは、科学技術振興機構戦略的創造研究推進事業(CREST)の成果報告会を兼ねています。</p>
    </div>
  );
}