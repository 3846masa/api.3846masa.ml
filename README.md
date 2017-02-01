# api.3846masa.ml

> 3846masa API

This is API about 3846masa.

## Table of Contents

<!-- TOC depthFrom:2 depthTo:3 -->

- [Table of Contents](#table-of-contents)
- [API](#api)
  - [Phone/Battery](#phonebattery)
- [Contribute](#contribute)
- [License](#license)

<!-- /TOC -->

## API

### Phone/Battery

|        |                                    |
|:------:|------------------------------------|
| Source | [./phone-battery](./phone-battery) |

#### GET | /phone/battery

Battery info of 3846masa's phone.

```js
// https://api.3846masa.ml/phone/battery
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
