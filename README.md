# File Counter Node.js

A command-line tool to count lines, words, and characters in files.

## Features

- Count lines, words, and characters in files
- Support for multiple files
- Recursive directory counting
- File type filtering
- Multiple output formats

## Installation

```bash
npm install -g file-counter-nodejs
```

Or clone and install locally:

```bash
git clone https://github.com/mizoz/file-counter-nodejs.git
cd file-counter-nodejs
npm install
```

## Usage

```bash
# Count all files in directory
file-counter .

# Count specific file
file-counter myfile.txt

# Count with details
file-counter --verbose myfile.txt

# Recursive counting
file-counter --recursive ./src
```

## Options

- `-r, --recursive` - Recursively count files in subdirectories
- `-v, --verbose` - Show detailed output
- `-t, --types` - Specify file types to count (e.g., .js,.ts)

## Example Output

```
File: example.txt
Lines: 150
Words: 892
Characters: 5432
```

## License

MIT License

## Author

mizoz
