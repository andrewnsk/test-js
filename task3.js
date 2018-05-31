const seconds1 = parseInt(process.argv[1], 10);
const seconds2 = parseInt(process.argv[2], 10);

function getTime(seconds1_, seconds2_) {
  if (seconds1_ > 100000 || seconds1_ < 1) throw new Error('Invalid input');
  if (seconds2_ > 100000 || seconds2_ < 1) throw new Error('Invalid input');
  let totalSeconds = seconds1_ + seconds2_;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  let timeString = hours ? hours + ' час ' : '';
  timeString += minutes ? ' ' + minutes + ' минут' : '';
  timeString += seconds ? ' ' + seconds + ' секунд' : '';

  return timeString;
}

process.stdout.write(getTime(seconds1, seconds2).toString());
