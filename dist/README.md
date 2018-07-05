# exec-if-updated

Node command line utility for executing a command only if a set of source files has been updated.

## Motivation

The exec-if-updated application was primarily designed to be used in NPM
scripts to prevent recompiling or regenerating files if their source has
not changed. The determination is made by comparing the latest timestamps 
of a set of source and target files. If any source files are newer than the
target files, the command is executed.

## Installation

### Prerequisites

The exec-if-updated program is designed to work with [Node.js](http://nodejs.org) versions >= 8.x. You must have Node and NPM installed to install and run the application.

### Locally

If you will be installing exec-if-updated for use in NPM scripts for
your own package, the following commands can be used to install 
the program locally:

#### NPM

```bash
npm install --save-dev exec-if-updated
```

#### Yarn

```bash
yarn add --dev exec-if-updated
```

### Globally

To install exec-if-updated for use across your entire system, use 
the following commands (depending on your environment and package manager):

#### NPM (Windows)

```bash
npm install -g exec-if-updated
```

#### NPM (Mac and Linux)

```bash
sudo npm install -g exec-if-updated
```

#### Yarn (Windows)

```bash
yarn global add exec-if-updated
```

#### Yarn (Mac and Linux)

```bash
sudo yarn global add exec-if-updated
```

## Usage

```bash
exec-if-updated --source <src glob> --target <target glob> command
```

### Options

#### --source, -s **(REQUIRED)**

The source option is used to control which source files will be compared to the target
to check for updated files. The source option can be supplied multiple times to add additional source files for comparison to the targets.

```bash
exec-if-updated --source src/** -s assets/** --target <target glob> command
```

#### --target, -t **(REQUIRED)**

The target option specifies which files would be regenerated by the executable command.
The target option can be specified multiple times to add additional target file for comparison.

```bash
exec-if-updated --source <source glob> --target dist/** -t build/** command
```

#### --help

The help option can be used to print help running the exec-if-updated application.

```bash
exec-if-updated --help
```

#### --version

The version option can be used to print the current version of the exec-if-updated application.

```bash
exec-if-updated --version
```

### Examples

```bash
exec-if-updated --source src/*.es6 --target dist/*.js babel src/app.es6 -o dist/app.js
```

```bash
echo "Even works with pipes" | exec-if-updated --source src/** --target dist/** cat
```

## Built With

* [Yargs](https://github.com/yargs/yargs) - For command line parsing.
* [execa](https://github.com/sindresorhus/execa) - For executing the command line application.
* [globby](https://github.com/sindresorhus/globby) - For matching the file globs for comparison.

## Versioning

exec-if-updated uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/mwootendev/exec-if-updated/tags). 

## Authors

* **Michael Wooten** - [mwootendev](https://github.com/mwootendev)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Special thanks to [Sindre Sorhus](https://github.com/sindresorhus) for the awesome utilities that greatly simplified this application.