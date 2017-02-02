# api.3846masa.ml

> 3846masa API

This is API about 3846masa.

## Table of Contents

<!-- TOC depthFrom:2 depthTo:3 -->

- [Table of Contents](#table-of-contents)
- [API](#api)
  - [Where](#where)
  - [Phone/Battery](#phonebattery)
- [Contribute](#contribute)
- [License](#license)

<!-- /TOC -->

## API

### Where

#### GET | /where

Return where is 3846masa's phone.

https://api.3846masa.ml/where

```js
{
  "status": "ok",
  "data": {
    "lab": true,
    "university": true,
    "house": false
  }
}
```

#### POST | /where?key={SECRTET_KEY}

Update where info.

### Phone/Battery

#### GET | /phone/battery

Battery info of 3846masa's phone.

https://api.3846masa.ml/phone/battery

```js
{
  "status": "ok",
  "data": {
    // Range 0 - 100
    "power_level": 80,
    "is_plagged": true,
    // unixtime
    "last_modified": 1485975782
  }
}
```

#### POST | /phone/battery?key={SECRTET_KEY}

Update battery info.

## Contribute

PRs accepted.

## License

MIT © 3846masa
