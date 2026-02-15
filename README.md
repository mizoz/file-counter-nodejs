# File Counter Node.js

[![npm Version](https://img.shields.io/npm/v/file-counter-nodejs?style=flat-square)](https://www.npmjs.com/package/file-counter-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/file-counter-nodejs?style=flat-square)](https://www.npmjs.com/package/file-counter-nodejs)
[![License](https://img.shields.io/npm/l/file-counter-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/file-counter-nodejs?style=flat-square)](https://www.npmjs.com/package/file-counter-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/file-counter-nodejs?style=flat-square)](https://github.com/mizoz/file-counter-nodejs)

> A Node.js CLI tool for counting lines, words, and characters in files.

## Features

- Count lines in files
- Count words in files
- Count characters in files
- Recursive directory counting
- Multiple file support
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g file-counter-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/file-counter-nodejs.git
cd file-counter-nodejs
npm install
```

## Usage

### Command Line

```bash
# Count a single file
file-counter myfile.txt

# Count multiple files
file-counter file1.txt file2.txt

# Count all files in directory
file-counter --recursive myfolder/
```

### JavaScript API

```javascript
const { FileCounter } = require("file-counter-nodejs");

const counter = new FileCounter();

// Count a file
const result = counter.count("myfile.txt");
console.log(result);  // {lines: 100, words: 500, chars: 3000}
```

## Requirements

- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**mizoz**
- GitHub: [@mizoz](https://github.com/mizoz)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
