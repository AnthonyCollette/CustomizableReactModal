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
| Props | Type | Description | Example |
|-------|------|-------------|---------|
| color | String | Main color | ```#123456```
| title | String | Title text | ```What a super title !```
| text | String | Paragraph text | ```I love capybaras. They're calm and zen.```
| textAlign | String | Paragraph text alignement | ```left```
| titleAlign | String | Title alignement | ```center```
| border | Number | Modal border thickness | ```10```
| btnFilled | Boolean | Add a filled button | ```btnFilled```
| btnOutline | Boolean | Add an outline button | ```btnOutline```
| btnCross | Boolean | Add a cross button | ```btnCross```
| crossColor | String | Cross button background color | ```#123456```
| btnText | String | Button text | ```Here we go !```
| btnBorderRadius | Number | Button border radius | ```5```
| btnPadding | String | Button padding | ```10px 30px```
| btnAlign | String | Button alignement | ```right```
| handleModalBtn | Function | Function to manage button | ```mySuperFunction```
| handleCrossBtn | Function | Function to manage cross button click | ```myOtherSuperFunction```

## License

MIT © [AnthonyCollette](https://github.com/AnthonyCollette)
