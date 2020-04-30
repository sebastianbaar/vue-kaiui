# kaiui-list-item 

The `<kaiui-list-item>` component. 

- **author** - Sebastian Baar 
- **license** - MIT 

## props 

- `softkeys` ***{ left: String, center: String, right: String }*** (*optional*) `default: { center: "Select" }` 

  The Softkeys Object 

- `primary-text` ***String*** (*required*) 

  The Primary Text 

- `secondary-text` ***String*** (*optional*) 

  The Secondary Text 

- `tertiary-text` ***String*** (*optional*) 

  The Tertiary Text 

- `icon-left` ***String*** (*optional*) `default: 'none'` 

  The Left Icon CSS class 

- `icon-right` ***String*** (*optional*) `default: 'kai-icon-arrow'` 

  The Right Icon CSS class 

## events 

- `softLeft` 

  Emit the event `softLeft` when left softkey is selected 

- `softRight` 

  Emit the event `softRight` when right softkey is selected 

- `softCenter` 

  Emit the event `softCenter` when center softkey is selected 

- `update-softkeys-register` 

- `update-softkeys-unregister` 

- `set-element-selected` 

