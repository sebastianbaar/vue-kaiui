# Components

## API

### kaiui-button 

The `<kaiui-button>` component. 

- **author** - Sebastian Baar 
- **license** - MIT 

#### props 

- `softkeys` ***Object*** (*optional*) `default: [object Object]` 

- `title` ***String*** (*required*) 

- `icon` ***String*** (*optional*) 

- `icon-right` ***Boolean*** (*optional*) 

#### events 

- `softLeft` 

- `softRight` 

- `softCenter` 

- `update-softkeys-register` 

- `update-softkeys-unregister` 

- `set-element-selected` 

### kaiui-checkbox 

The `<kaiui-checkbox>` component. 

- **author** - Sebastian Baar 
- **license** - MIT 

#### props 

- `softkeys` ***Object*** (*optional*) `default: [object Object]` 

- `primary-text` ***String*** (*required*) 

- `secondary-text` ***String*** (*optional*) 

#### data 

- `isChecked` 

**initial value:** `false` 

- `refId` 

**initial value:** `[object Object]` 

#### events 

- `softLeft` 

- `softRight` 

- `softCenter` 

- `update-softkeys-register` 

- `update-softkeys-unregister` 

- `set-element-selected` 

#### methods 

- `handleFocusChange(isNowFocused)` 

- `onClick()` 

### kaiui-content 

#### slots 

- `default` 

#### props 

- `with-softkeys` ***Boolean*** (*optional*) `default: true` 

#### data 

- `softkeys` 

**initial value:** `[object Object]` 

- `currentSoftkeyComponent` 

**initial value:** `null` 

- `hasHeader` 

**initial value:** `false` 

- `showSoftkeys` 

**initial value:** `false` 

#### methods 

- `onKeyDown(event)` 

- `handleUpdateSoftkeyText(softkeys)` 

- `handleUpdateSoftkeyUnregister()` 

- `showToast(title, time)` 

### kaiui-header 

#### props 

- `title` ***String*** (*required*) 

#### events 

- `update-header-registered` 

### kaiui-input 

#### props 

- `placeholder` ***String*** (*optional*) 

- `label` ***String*** (*required*) 

#### data 

- `value` 

**initial value:** `''` 

- `refId` 

**initial value:** `[object Object]` 

#### events 

- `input` 

- `set-element-selected` 

#### methods 

- `onInput()` 

- `onClick()` 

### kaiui-input-float 

#### props 

- `label` ***String*** (*required*) 

#### data 

- `value` 

**initial value:** `''` 

- `refId` 

**initial value:** `[object Object]` 

#### events 

- `input` 

- `set-element-selected` 

#### methods 

- `onInput()` 

- `onClick()` 

### kaiui-input-multi 

#### props 

- `softkeys` ***Object*** (*optional*) `default: [object Object]` 

- `placeholder` ***String*** (*optional*) 

- `label` ***String*** (*required*) 

#### data 

- `value` 

**initial value:** `''` 

- `refId` 

**initial value:** `[object Object]` 

#### events 

- `softLeft` 

- `softRight` 

- `input` 

- `update-softkeys-register` 

- `update-softkeys-unregister` 

- `set-element-selected` 

#### methods 

- `onInput()` 

- `handleFocusChange(isNowFocused)` 

- `onClick()` 

### kaiui-list-item 

#### props 

- `softkeys` ***Object*** (*optional*) `default: [object Object]` 

- `primary-text` ***String*** (*required*) 

- `secondary-text` ***String*** (*optional*) 

- `tertiary-text` ***String*** (*optional*) 

- `icon-left` ***String*** (*optional*) `default: 'none'` 

- `icon-right` ***String*** (*optional*) `default: 'kai-icon-arrow'` 

#### data 

- `refId` 

**initial value:** `[object Object]` 

#### events 

- `softLeft` 

- `softRight` 

- `softCenter` 

- `update-softkeys-register` 

- `update-softkeys-unregister` 

- `set-element-selected` 

#### methods 

- `handleFocusChange(isNowFocused)` 

- `onClick()` 

### kaiui-separator 

#### props 

- `title` ***String*** (*required*) 

### kaiui-slider 

#### props 

- `softkeys` ***Object*** (*optional*) `default: [object Object]` 

- `title` ***String*** (*required*) 

- `start-value` ***Number*** (*optional*) 

- `step` ***Number*** (*required*) `default: 1` 

- `min-value` ***Number*** (*required*) `default: 1` 

- `max-value` ***Number*** (*required*) `default: 10` 

#### data 

- `value` 

**initial value:** `0` 

- `refId` 

**initial value:** `[object Object]` 

#### events 

- `softLeft` 

- `softRight` 

- `softCenter` 

- `update-softkeys-register` 

- `update-softkeys-unregister` 

- `change` 

- `set-element-selected` 

#### methods 

- `handleFocusChange(isNowFocused)` 

- `onInputChanged(newValue)` 

- `onClick()` 

### kaiui-softkeys 

#### props 

- `softkeys` ***[object Object]*** (*optional*) 

- `component` ***Object*** (*required*) `default: null` 

#### events 

- `softkey-left-pressed` 

- `softkey-right-pressed` 

- `softkey-center-pressed` 

#### methods 

- `onKeyDown(event)` 

### kaiui-tab-item 

#### slots 

- `default` 

#### props 

- `name` ***String*** (*required*) 

- `selected` ***Boolean*** (*optional*) `default: false` 

#### data 

- `isActive` 

**initial value:** `false` 

### kaiui-tabs 

#### slots 

- `default` 

#### data 

- `tabs` 

**initial value:** `[object Object]` 

- `refId` 

**initial value:** `[object Object]` 

#### events 

- `set-tab-element-selected` 

#### methods 

- `selectTab(selectedTab)` 

- `onClick(tab, index)` 

### kaiui-text 

#### props 

- `text` ***String*** (*required*) 

### kaiui-toast 

#### data 

- `title` 

**initial value:** `''` 

- `shouldShow` 

**initial value:** `false` 

#### methods 

- `show(title, time)` 
