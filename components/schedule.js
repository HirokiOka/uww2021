
export default function Schedule() {
  const dayOneSchedule = [
    {
      "time": "10:30-10:45",
      "event": "オープニング",
    }, {
      "time": "10:45-17:00",
      "event": "口頭発表セッション（途中休憩あり）",
    }, {
      "time": "19:20-21:00",
      "event": "ナイトセッション",
    }
  ];
  const dayTwoSchedule = [
  {
      "time": "9:00",
      "event": "受付開始",
      }, {
        "time": "10:00-17:00",
        "event": "口頭発表セッション（途中休憩あり）",
      }, {
        "time": "17:00-17:15",
        "event": "表彰・クロージング",
      },
  ];
  return (
    <div className='p-2'>
      <h2 className='text-3xl underline mx-4 py-1'>Schedule</h2>
      <div className='rounded p-2 bg-gray-600'>
        <h3 className='text-xl'>12月19日（日）</h3>
        <table className='table-auto mx-3 border text-center mb-4'>
          {dayOneSchedule.map((v, _i) => (
                <tr>
                  <td className='border px-3'>{v.event}</td>
                  <td className='border px-3'>{v.time}</td>
                </tr>
          ))}
        </table>
      </div>
      <div className='rounded p-2 bg-gray-600'>
        <h3 className='text-xl'>12月20日（月）</h3>
        <table className='table-auto mx-3 border text-center mb-4'>
          {dayTwoSchedule.map((v, _i) => (
                <tr>
                  <td className='border px-3'>{v.event}</td>
                  <td className='border px-3'>{v.time}</td>
                </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
