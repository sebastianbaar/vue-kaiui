# kaiui-input-multi 

The `<kaiui-input-multi>` component. 

- **author** - Sebastian Baar 
- **license** - MIT 

## props 

- `softkeys` ***{ left: String, center: String, right: String }*** (*optional*) `default: { center: "Select" }` 

  The Softkeys Object 

- `placeholder` ***String*** (*optional*) 

  The Placeholder 

- `label` ***String*** (*required*) 

  The Input Label 

## data 

- `value` 

**initial value:** `''` 

## events 

- `softLeft` 

  Emit the event `softLeft` when left softkey is selected 

- `softRight` 

  Emit the event `softRight` when right softkey is selected 

- `softCenter` 

- `input` 

  Emit the event `input` with `value` when the input value changes 

- `update-softkeys-register` 

- `update-softkeys-unregister` 

- `set-element-selected` 

