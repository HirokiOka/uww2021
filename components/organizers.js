export default function Organizers ()  {
  const organizersList = [
    {
      "role": "ワークショップ委員長", "name": "塚本昌彦 (神戸大) ",
    },
    {
      "role": "ワークショップ副委員長", "name": "寺田 努 (神戸大) ",
    },
    {
      "role": "実行委員長", "name": "村尾和哉 (立命館大) ",
    },
    {
      "role": "実行副委員長", "name": "磯山直也 (奈良先端大) ",
    },
    {
      "role": "会計", "name": "土田修平 (神戸大) ",
    },
    {
      "role": "Webシステム", "name": "毛 昊珉 (神戸大) ",
    },
    {
      "role": "プログラム", "name": "渡邉拓貴 (北海道大) ",
    },
    {
      "role": "出版", "name": "	後藤佑介 (岡山大), 双見京介 (立命館大) ",
    },
    {
      "role": "広報 (Webページ・デザイン) ", "name": "清水友順 (神戸大), 岡 大貴 (神戸大) ",
    },
    {
      "role": "ローカル", "name": "大西鮎美 (神戸大) ",
    },
  ];
  return  (
    <div className='p-2 m-3'>
      <h2 className='text-3xl underline mx-2 py-2'>Organizers</h2>
      <div className='rounded bg-gray-700 p-3'>
        <table className='table-auto mx-3 border text-center '>
          {organizersList.map((v, i) =>  (
            <tr key={i}>
              <td className='border px-3 font-bold'>{v.role}</td>
              <td className='border px-3'>{v.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  ) ;
}
