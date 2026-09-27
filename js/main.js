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


function formattedPhone(phone) {
  if (typeof phone !== 'string') {
    return 'Помилка: Неправильний формат (очікується рядок).';
  }

  let cleaned = phone.trim();

  if (cleaned.startsWith('+380') && cleaned.length === 13) {
    cleaned = cleaned.slice(1); 
  } else if (cleaned.startsWith('+80') && cleaned.length === 12) {
    cleaned = '3' + cleaned.slice(1); 
  } else if (cleaned.startsWith('80') && cleaned.length === 11) {
    cleaned = '3' + cleaned; 
  } else if (cleaned.startsWith('0') && cleaned.length === 10) {
    cleaned = '38' + cleaned;
  } else {
    return 'Формат функції неправильний';
  }

  if (!/^\d{12}$/.test(cleaned)) {
    return 'Формат функції неправильний';
  }


  const countryCode = cleaned.slice(0, 2); 
  const operatorCode = cleaned.slice(2, 5); 
  const part1 = cleaned.slice(5, 8);
  const part2 = cleaned.slice(8, 10);
  const part3 = cleaned.slice(10, 12); 

  return `+${countryCode} (${operatorCode}) ${part1}-${part2}-${part3}`;
}


console.log(formattedPhone('+380664567890')); 
console.log(formattedPhone('+80664567890'));  
console.log(formattedPhone('80971234567'));   
console.log(formattedPhone('0671234567'));    
console.log(formattedPhone('12345'));

function runInteractiveTask2() {
  const userInput = prompt('Введіть номер телефону (наприклад, 0671234567 або +380664567890):');

  if (userInput === null) return; 

  const result = formattedPhone(userInput);
  alert(result);
}


runInteractiveTask2();