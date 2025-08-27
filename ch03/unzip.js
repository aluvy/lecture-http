const zlib = require('zlib');
const fs = require('fs');

const sourceStream = fs.createReadStream('./ch03/result-gzip');
const outputStream = fs.createWriteStream('./ch03/result-html');

sourceStream.pipe(zlib.createUnzip()).pipe(outputStream);

/**
 * $ node ch03/unzip.js
 * ==> result-html이 생성됨: result-gzip의 압축이 해제 된 html 파일
 */
