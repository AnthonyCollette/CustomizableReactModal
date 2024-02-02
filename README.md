# customizable-react-modal

> Highly customizable react modal

[![NPM](https://img.shields.io/npm/v/customizable-react-modal.svg)](https://www.npmjs.com/package/customizable-react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save customizable-react-modal
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'customizable-react-modal'
import 'customizable-react-modal/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Options
| Props | Type | Description |
|-------|------|-------------|
| color | String | Main color |
| title | String | Title text |
| text | String | Paragraph text |
| textAlign | String | Paragraph text alignement |
| titleAlign | String | Title alignement |
| border | Number | Modal border thickness |
| btnFilled | Boolean | Add a filled button |
| btnOutline | Boolean | Add an outline button |
| btnCross | Boolean | Add a cross button |
| crossColor | String | Cross button background color |
| btnText | String | Button text |
| btnBorderRadius | Number | Button border radius |
| btnPadding | String | Button padding |
| btnAlign | String | Button alignement |
| handleModalBtn | Function | Function to manage button |
| handleCrossBtn | Function | Function to manage cross button click |

## License

MIT © [AnthonyCollette](https://github.com/AnthonyCollette)
