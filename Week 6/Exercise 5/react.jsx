const names = [['John', 'Doe'], ['Jane', 'Doe']];

// Either string formatting
const fullNames1 = names.map((name) => `${name[0]} ${name[1]}`);

// Or using the .join() array method
const fullNames2 = names.map((name) => name.join(' '));

console.log(fullNames2); // Output: ['John Doe', 'Jane Doe']
