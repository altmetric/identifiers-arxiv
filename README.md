# Identifiers - arXiv [![Build Status](https://travis-ci.org/altmetric/identifiers-arxiv.svg?branch=master)](https://travis-ci.org/altmetric/identifiers-arxiv)

Extract, validate and normalize [arXiv IDs](https://arxiv.org/help/arxiv_identifier).

**Current version:** 0.1.1  
**Supported Node.js versions:** 4, 5, 6, 7

## Installation

Add the following to your `package.json` via `yarn add identifiers-arxiv` or `npm install --save identifiers-arxiv`:

```shell
"identifiers-arxiv": "^0.1.0"
```

## Usage

```javascript
const arxiv = require("identifiers-arxiv");

arxiv.extract("math.GT/0309136\narXiv:1501.00001v2");
//=> ["math.GT/0309136", "1501.00001v2"]
```

## Other versions

Other packages are available for different scholar identifiers:

DOIs (and ISBN-As): https://github.com/altmetric/identifiers-doi  
PubMed IDs: https://github.com/altmetric/identifiers-pubmed  
ORCID: https://github.com/altmetric/identifiers-orcid  
Handles: https://github.com/altmetric/identifiers-handle  
National Clinical Trials IDs: https://github.com/altmetric/identifiers-nct  
ADS Bibcodes : https://github.com/altmetric/identifiers-bibcode  
RePEc IDs: https://github.com/altmetric/identifiers-repec  
URNs: https://github.com/altmetric/identifiers-urn  

We also maintain versions of these libraries for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2022 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
