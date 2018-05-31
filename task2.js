const day = process.argv[1];
const month = process.argv[2].toLowerCase();
const year = process.argv[3];

function daysLeft(day_, monthName, year_) {
  if (day_ > 31 || day_ < 1) throw new Error('Invalid day');
  if (year_ > 2999 || year_ < 1) throw new Error('Invalid year');
  let monthNum;
  switch (monthName) {
    case 'января': monthNum = 12; break;
    case 'февраля': monthNum = 1; break;
    case 'марта': monthNum = 2; break;
    case 'апреля': monthNum = 3; break;
    case 'мая': monthNum = 4; break;
    case 'июня': monthNum = 5; break;
    case 'июля': monthNum = 6; break;
    case 'августа': monthNum = 7; break;
    case 'сентября': monthNum = 8; break;
    case 'октября': monthNum = 9; break;
    case 'ноября': monthNum = 10; break;
    case 'декабря': monthNum = 11; break;
    default: monthNum = 0;
  }
  if (monthNum === 0) throw new Error('Invalid month');
  const Timezone = new Date().getTimezoneOffset() / 60;
  const getDate = new Date(year_, monthNum, day_, Timezone);
  const nextYear = new Date(year_, 12, 1, Timezone);
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.ceil((nextYear.getTime() - getDate.getTime()) / msPerDay) - 1;
}

process.stdout.write(daysLeft(day, month, year).toString());
