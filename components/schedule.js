
export default function Schedule() {
  return (
    <div className='p-2'>
      <h2 className='text-3xl underline mx-4 py-1'>Schedule</h2>
      <div className='rounded bg-gray-600 p-2'>
        <h3 className='px-2 py-1 text-xl'>12月20日(金)</h3>
        <table className='table-auto mx-3 border text-center'>
          <tr>
            <td>9:10</td>
            <td>受付開始</td>
          </tr>
          <tr>
            <td>10:10-10:20</td>
            <td>オープニング</td>
          </tr>
          <tr>
            <td>10:20-18:10</td>
            <td>口頭発表セッション（途中休憩あり）</td>
          </tr>
          <tr>
            <td>18:25-19:55</td>
            <td>懇親会</td>
          </tr>
          <tr>
            <td>20:25-23:25</td>
            <td>ナイトセッション</td>
          </tr>
        </table>
        <h3 className='text-xl px-2 py-1'>12月21日(土)</h3>
        <table className='table-auto mx-3 border text-center'>
          <tr>
            <td>8:30-17:05</td>
            <td>口頭発表セッション（途中休憩あり）</td>
          </tr>
          <tr>
            <td>17:05-17:25</td>
            <td>表彰・クロージング</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
