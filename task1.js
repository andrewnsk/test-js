function convertBase(value, fromBase, toBase) {
  if (value > 10000 || value < 0) return 0;
  if (fromBase > 36 || fromBase < 2) return 0;
  if (toBase > 36 || toBase < 2) return 0;

  const range = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
  const fromRange = range.slice(0, fromBase);
  const toRange = range.slice(0, toBase);
  let decValue = value.split('').reverse().reduce((carry, digit, index) => {
    if (fromRange.indexOf(digit) === -1) throw new Error(`Invalid digit \`${digit}\` for base ${fromBase}.`);
    return carry + (fromRange.indexOf(digit) * (fromBase ** index));
  }, 0);

  let newValue = '';
  while (decValue > 0) {
    newValue = toRange[decValue % toBase] + newValue;
    decValue = (decValue - (decValue % toBase)) / toBase;
  }
  return newValue || '0';
}

process.stdout.write(convertBase(process.argv[2], process.argv[3], process.argv[4]));
