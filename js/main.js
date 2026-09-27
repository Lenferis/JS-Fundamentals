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

function runInteractiveTask1() {
  const row1 = prompt('Введіть перший рядок:', 'Slow and steady wins the race');
  const row2 = prompt('Введіть второй рядок:', 'You can say that again');
  const userChar = prompt('Введіть літеру для підрахунку:', 'a');

  if (!row1 || !row2 || !userChar) {
    alert('Помилка: введено порожні дані.');
    return;
  }

  const charToCount = userChar.charAt(0);
  const count1 = countChar(row1, charToCount);
  const count2 = countChar(row2, charToCount);

  let result = '';
  if (count1 > count2) {
    result = `У першому рядку більше літер "${charToCount}" (${count1} проти ${count2}):\n"${row1}"`;
  } else if (count2 > count1) {
    result = `У другому рядку більше літер "${charToCount}" (${count2} проти ${count1}):\n"${row2}"`;
  } else {
    result = `Кількість літер "${charToCount}" однакова в обох рядках (${count1}).`;
  }

  alert(result);
}
runInteractiveTask1();