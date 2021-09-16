export default function Registration() {
  return (
    <div className='p-2'>
      <h2 className='text-3xl underline mx-4 py-1'>Registration</h2>
      <p className='text-xl mx-3'>一般：20,000円</p>
      <p className='text-xl mx-3'>学生：16,000円</p>
      <ul className='mx-3 p-3 bg-gray-600 rounded'>
        <li>お支払いは当日現金にてお願いします。</li>
        <li>社会人学生については一般と同じ参加費になります。</li>
        <li>内訳が必要な場合は宿泊費12,000円（食費込）、参加費（一般）8,000円、（学生）4,000円としております。</li>
        <li>宿泊せずに参加される場合は、参加費（一般）8,000円、（学生）4,000円のみを頂戴いたします。</li>
        <li>宿泊せずに懇親会に参加される方は、懇親会費5,000円を頂戴致します。</li>
        <li>参加費は1日のみの参加の場合でも減額は致しませんので、ご了承下さい。</li>
      </ul>
    </div>
  );
}
