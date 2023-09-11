#/usr/bin/bash
const count = process.argv.lengh;
console.log(count ===2 ? 'No argement' : count ===3 ? 'Argument found' : 'Arguments found');
