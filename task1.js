function convertBase(value, fromBase, toBase) {
  if (value > 10000 || value < 0) throw new Error('Invalid value');
  if (fromBase > 36 || fromBase < 1) throw new Error('Invalid base');
  if (toBase > 36 || toBase < 1) throw new Error('Invalid base');

  const range = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const fromRange = range.slice(0, fromBase);
  const toRange = range.slice(0, toBase);
  let decValue = value.split('').reverse().reduce((carry, digit, index) => {
    if (fromRange.indexOf(digit) === -1) throw new Error(`Invalid digit \`${digit}\` for base ${fromBase}.`);
    const result = carry + (fromRange.indexOf(digit) * (fromBase ** index));
    return result;
  }, 0);

  let newValue = '';
  while (decValue > 0) {
    newValue = toRange[decValue % toBase] + newValue;
    decValue = (decValue - (decValue % toBase)) / toBase;
  }
  return newValue || '0';
}

process.stdout.write(convertBase(process.argv[2], process.argv[3], process.argv[4]));
