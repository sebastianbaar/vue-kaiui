![Logo of vue-kaiui](./screenshots/vue-kaios-logo.png)

> **Vue component library for KaiOS apps.**


- [Installation](#installation)
- [Usage](#usage)
  - [Components API](#components-api)
  - [Styles](#styles)
- [Status](#status)
  - [Components](#components)
  - [Navigation](#navigation)
  - [Typography](#typography)
  - [Miscellaneous](#miscellaneous)
- [Styling, Colors, Fonts](#styling-colors-fonts)
- [Icons](#icons)
- [Contributing](#contributing)

# Installation
```
npm install vue-kaiui
```
In your `main.js` add

```javascript
import Vue from 'vue'
import App from './App.vue'

import VueKaiUI from "vue-kaiui"; // !
Vue.use(VueKaiUI) // !

new Vue({
  render: h => h(App),
}).$mount('#app')
```

# Usage
Most importantly, put all the components in the `<kaiui-content>` root so that KaiUI can manage all the Softkeys and Header design elements for you.

## Components API

See the [Components API docs](https://github.com/sebastianbaar/vue-kaiui/tree/master/docs/) and the [Sample App](https://github.com/sebastianbaar/sample-vue-kaiui-app) for usage examples.

## Styles
You can simply override CSS variables in your styles using the `:root` scope. All theme CSS variables are found [here](https://github.com/sebastianbaar/vue-kaiui/tree/master/src/assets/css/theme.css).

```css
<style>

:root{
  --primary-color: red; 
  --primary-dark-color: darkred;
  ...
  --tabbar-tabs-selected-color: blue;
  ...
}

</style>
```

# Status
See [Contributing](#contributing).

## [Components](https://developer.kaiostech.com/design-guide/ui-component)
- [x] Header
- [x] Tab
- [x] Software Key
- [x] List Item
- [x] Separator
- [x] Checkbox
- [x] Button
- [x] Input
- [x] Multiple-line Input
- [x] Toast
- [x] Radio Button (Group)
- [ ] Progress
- [ ] Slider (update Design!)
- [ ] Date/Time Value Selector
- [x] Dialog / Value Selector / Option Menu
- [x] Notice
## [Navigation](https://developer.kaiostech.com/design-guide/basic-navigation)
- [x] List View
- [x] Tab View
- [ ] Grid View
## [Typography](https://developer.kaiostech.com/design-guide/typography)
- [x] Fonts
- [x] Ionicons icons
## Miscellaneous
- [ ] [Theming](https://developer.kaiostech.com/getting-started/build-your-first-package-app/sample-code#theme-apps)
- [ ] [Translation](https://developer.kaiostech.com/getting-started/build-your-first-package-app/sample-code#apps-with-translation--l10n)
- [ ] [LargeText](https://developer.kaiostech.com/api/largetext)
- [ ] [Portrait/Landscape Mode](https://developer.kaiostech.com/core-developer-topics/supporting-multiple)


# Styling, Colors, Fonts

Typography details can be found [here](https://developer.kaiostech.com/design-guide/typography).

Standardized stylings, colors and fonts are found in the [asset directory](https://github.com/sebastianbaar/vue-kaiui/tree/master/src/assets).

# Icons

Vue KaiUI uses the awesome [Ionicons](https://ionicons.com/) icons.

Icons are found in the [asset directory](https://github.com/sebastianbaar/vue-kaiui/tree/master/src/assets).

# Contributing

There's much work to be done on building out more UI components, writing tests, etc...

Please look at currently [open issues](https://github.com/sebastianbaar/vue-kaiui/issues?q=is%3Aopen+is%3Aissue) and our [Contributing Guide](https://github.com/sebastianbaar/vue-kaiui/blob/master/CONTRIBUTING.md).

To build & test the project run:

`npm install`

`npm run build`

To build the project and create API docs run:

`npm run release`

---

> Thanks [Adrian Machado](https://github.com/AdrianMachado) for the inspiration. Check out his awesome [KaiUI](https://github.com/AdrianMachado/KaiUI) (React component library for KaiOS apps).

---