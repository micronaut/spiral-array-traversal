[![Build Status](https://travis-ci.org/micronaut/spiral_array_traversal.svg?branch=master)](https://travis-ci.org/micronaut/spiral-array-traversal)
[![Coverage Status](https://coveralls.io/repos/github/micronaut/spiral_array_traversal/badge.svg?branch=master)](https://coveralls.io/github/micronaut/spiral-array-traversal?branch=master)

Spiral Array Traversal
======================
Spiral Array Traversal is a simple JavaScript module created and maintained by Eric Danowski (https://github.com/micronaut).

## Installation

  `npm install @emdanowski/spiral-array-traversal`

## Usage

```js
let { traverse } = require('../src/matrixTraversal');

let arr = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
let result = traverse(arr);

/*
will return the following:
"1 2 3 6 9 8 7 4 5"
*/
````

## License
Spiral Array Traversal is licensed under the MIT License.