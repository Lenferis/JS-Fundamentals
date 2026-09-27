const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function countChar(row, char) {
  let count = 0;
  for (let i = 0; i < row.length; i++) {
    if (row.charAt(i).toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}

function getRow(firstRow, secondRow) {
  const count1 = countChar(firstRow, 'a');
  const count2 = countChar(secondRow, 'a');

  if (count1 > count2) {
    return firstRow;
  } else if (count2 > count1) {
    return secondRow;
  } else {
    return 'Кількість літер одинакова в обох рядках.';
  }
}

console.log(getRow(firstRow, secondRow)); 