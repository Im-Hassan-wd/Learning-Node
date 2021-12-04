const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunck) => {
//     console.log("-------New CHUNK --------")
//     console.log(chunck);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunck)
// });