
export default function Schedule() {
  const dayOneSchedule = [
    {
      "time": "09:00",
      "event": "受付開始",
    }, {
      "time": "10:00 - 10:15",
      "event": "オープニング",
    }, {
      "time": "10:15 - 18:40",
      "event": "口頭発表セッション (途中休憩あり) ",
    }, {
      "time": "19:15 - 20:45",
      "event": "懇親会",
    }, {
      "time": "21:00 - 23:00",
      "event": "ナイトセッション",
    }
  ];
  const dayTwoSchedule = [
  {
      "time": "08:30",
      "event": "受付開始",
      }, {
        "time": "08:30 - 17:30",
        "event": "口頭発表セッション (途中休憩あり) ",
      }, {
        "time": "17:30 - 17:50",
        "event": "表彰・クロージング",
      },
  ];
  return ( 
    <div className='p-2 m-3'>
      <h2 className='text-3xl underline mx-2 py-2'>Schedule</h2>
      <div className='rounded p-2 bg-gray-700'>
        <h3 className='text-xl font-bold'>12月19日 (日) </h3>
        <table className='table-auto mx-3 text-center mb-3'>
          {dayOneSchedule.map((v, i) => ( 
                <tr key={i}>
                  <td className='border px-3'>{v.time}</td>
                  <td className='border px-3'>{v.event}</td>
                </tr>
          ))}
        </table>
        <h3 className='text-xl font-bold'>12月20日( 月)</h3>
        <table className='table-auto mx-3 border text-center mb-3'>
          {dayTwoSchedule.map((v, i) => ( 
                <tr key={i}>
                  <td className='border px-3'>{v.time}</td>
                  <td className='border px-3'>{v.event}</td>
                </tr>
          ))}
        </table>
        <p className='m-3'>上記は暫定のタイムテーブルであり、参加者数やオンライン発表の希望者数等により変更が生じる場合がございます。</p>
      </div>
    </div>
  );
}
