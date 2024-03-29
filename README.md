[![npm version](https://badge.fury.io/js/%40gradiant%2Fxapi-dsl.svg)](https://badge.fury.io/js/%40gradiant%2Fxapi-dsl)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# Gradiant xAPI DSL

Set of types for easily building [xAPI](https://xapi.com) statements.

## Overview

This package contains a set of typescript definitions types to work with xAPI statements.

- Actor
- Attachment
- Context
- Object
- Result
- Statement
- Verb

It also includes some external xAPI vocabulary terms (e.g. verbs, activities and extension identifiers) to be used in a centralized way.
Some of the xAPI vocabularies considered here are:

- external
  - [tincan](http://xapi.vocab.pub/describe/?url=https%3A%2F%2Fregistry.tincanapi.com&sid=32726)
  - [acrossx](http://xapi.vocab.pub/describe/?url=https://w3id.org/xapi/acrossx)
  - [adl](http://xapi.vocab.pub/describe/?url=https%3A%2F%2Fw3id.org%2Fxapi%2Fadl&sid=32724)
  - activitystream
  - qti
- internal
  - smart
  - gradiant
  - in2it

## DSL

You can consult the entire DSL at the [dsl-definition.json](./dsl-definition.json)

## Getting started

The module exports in the index all the types needed by the xapi as well as the dsl as a nested object

```typescript
// xapi interfaces...
import { Statement } from '@gradiant/xapi-dsl';

// dsl nested object
import { dsl } from '@gradiant/xapi-dsl';

const statement: Statement = jsonStatement as Statement;

if (statement.verb.id === dsl.activityTypes.smart.essay) {
  // essay activity type URI
  console.log('Smart essay activity');
}
```

Also, DSL constants can be imported individually from the `dsl` folder

```typescript
import { activityTypes, verbs, contextExtensions /* ... */ } from '@gradiant/xapi-dsl/dsl';
```

## Scripts

### npm run build

Build the TypeScript files under de `src` folder into the root folder.
It will generate the `dsl` folder and the `types` folder.
These two folder are auto generated and therefore should not be edited directly.

### npm run clean

Remove the following generated directories/files

- **dsl**
- **types**
- **index.js**
- **index.d.ts**
- **index.d.ts.map**

### npm run lint

Run `tslint` and `prettier` applying the available fixes


### npm run dsl:print

It generates a new version of dsl-definition.json file. This file must be updated to release a new version. 
