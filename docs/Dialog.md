# kaiui-dialog 

The `<kaiui-dialog>` component. 

- **author** - Sebastian Baar 
- **license** - MIT 

## slots 

- `default` Use this slot to include other UI components. 

## props 

- `should-show` ***Boolean*** (*required*) `default: false` 

  Use `v-model` to define a reactive value to hide/show the dialog 

- `softkeys` ***{ left: String, center: String, right: String }*** (*optional*) `default: { center: "Select" }` 

  The Softkeys Object 

- `title` ***String*** (*required*) 

  The Title 

## events 

- `softLeft` 

  Emit the event `softLeft` when left softkey is selected 

- `softRight` 

  Emit the event `softRight` when right softkey is selected 

## methods 

- `onKeyDown(event)` 

