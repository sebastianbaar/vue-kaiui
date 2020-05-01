# kaiui-button 

The `<kaiui-button>` component. 

- **author** - Sebastian Baar 
- **license** - MIT 

## props 

- `softkeys` ***{ left: String, center: String, right: String }*** (*optional*) `default: { center: "Select" }` 

  The Softkeys Object 

- `title` ***String*** (*required*) 

  The Title 

- `icon` ***String*** (*optional*) 

  The Icon CSS class 

- `icon-right` ***Boolean*** (*optional*) 

  If the Icon should be displayed on the right side 

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

