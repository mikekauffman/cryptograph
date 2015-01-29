Cryptograph
===========

A simple text encode/decode script

## Installation

```shell
  npm install cryptograph --save
```

## Usage

```js
  var cryptograph = require('../index'),
      encode = cryptograph.encode,
      decode = cryptograph.decode;

  encode("this is not encoded text");

  decode("nrzj zj mhn dmwhpdp ndvn");
```

## Tests

```shell
   npm test
```

## Contributing

Pull requests welcome.

## Release History

* 0.1.0 Initial release