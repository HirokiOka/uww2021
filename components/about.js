export default function About() {
  return (
    <div>
      <h1 className='text-6xl text-center pt-16'>Ubiquitous Wearable Workshop 2021</h1>
      <p className='text-center'>2021年某日開催</p>
      <p className='text-center'>@神戸大学百年記念館 六甲ホール</p>
      <p className='text-center'>〒657-8501 兵庫県神戸市灘区六甲台町1-1</p>
      <div className='p-2'>
        <h2 className='text-4xl text-center py-2 underline'>Welcome to UWW2021</h2>
        <div className='bg-gray-600 rounded mx-3 p-3'>
          <p>ユビキタス・ウェアラブル技術の発展はめざましく、これらの技術に関する研究開発が活発に行われています。神戸大学塚本・寺田研究室およびNPO法人ウェアラブルコンピュータ研究開発機構では、ユビキタス・ウェアラブルワークショップを2007年以来毎年開催し、今年は15回目となります。昨年はユビキタス・ウェアラブル技術に関する70件の密度の濃い発表と議論を行いました。</p>
          <p>これまで現地での開催を行ってきましたが、本年度は新型コロナウイルス (SARS-CoV-2) の状況を踏まえまして、オンライン開催、もしくは、オンラインとオフラインのハイブリッド開催を予定しております。下記の通りの企画をしておりますので、是非ご参加いただけますようお願い致します。</p>
          <ul className='mx-3 px-3 justify-start bg-gray-500 rounded'>本ワークショップの特色は以下の通りです．
            <li>A4原稿1枚記述</li>
            <li>一人15分程度のショートプレゼンテーション</li>
            <li>参加者間の交流を目指したワークショップ</li>
            <li>実践的な情報処理技術に関する特別な企画などを含んだ「ナイトセッション」</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
