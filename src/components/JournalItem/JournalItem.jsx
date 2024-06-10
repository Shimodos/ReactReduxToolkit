// import './JournalItem.css';

// function JournalItem({ title, date, text }) {
//   // const formatedDate = new Intl.DateTimeFormat('un-US').format(date);
//   const formatedDate = new Intl.DateTimeFormat('uk-UA').format(date);

//   return (
//     <>
//       <h2 className="journal-item__headr">{title}</h2>
//       <h2 className="journal-item__body">
//         <div className="journal-item__data">{formatedDate}</div>
//         <div className="journal-item__text">{text}</div>
//       </h2>
//     </>
//   );
// }

// export default JournalItem;

import './JournalItem.css';

function JournalItem({ title, date, text }) {
  let formattedDate;

  try {
    // Ensure date is a valid Date object or a valid date string
    const validDate = new Date(date);
    if (!isNaN(validDate.getTime())) {
      formattedDate = new Intl.DateTimeFormat('uk-UA').format(validDate);
    } else {
      throw new Error('Invalid date');
    }
  } catch (error) {
    console.error('Error formatting date:', error);
    formattedDate = 'Invalid date';
  }

  return (
    <>
      <h2 className="journal-item__header">{title}</h2> {/* Исправлена опечатка */}
      <div className="journal-item__body">
        {' '}
        {/* Исправлена структура HTML */}
        <div className="journal-item__date">{formattedDate}</div>
        <div className="journal-item__text">{text}</div>
      </div>
    </>
  );
}

export default JournalItem;
