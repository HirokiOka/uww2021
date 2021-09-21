
export default function Schedule() {
  return (
    <div className='p-2'>
      <h2 className='text-3xl underline mx-4 py-1'>Schedule</h2>
      <div className='rounded bg-gray-600 p-2'>
        <h3 className='px-2 py-1 text-xl'>12月19日(日)</h3>
        <table className='table-auto mx-3 border text-center'>
          <tr>
            <td>10:30-10:45</td>
            <td>オープニング</td>
          </tr>
          <tr>
            <td>10:45-17:00</td>
            <td>口頭発表セッション（途中休憩あり）</td>
          </tr>
          <tr>
            <td>19:20-21:00</td>
            <td>ナイトセッション</td>
          </tr>
        </table>
        <h3 className='text-xl px-2 py-1'>12月20日(月)</h3>
        <table className='table-auto mx-3 border text-center'>
          <tr>
            <td>9:00</td>
            <td>受付開始</td>
          </tr>
          <tr>
            <td>10:00-17:00</td>
            <td>口頭発表セッション（途中休憩あり）</td>
          </tr>
          <tr>
            <td>17:00-17:15</td>
            <td>表彰・クロージング</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
