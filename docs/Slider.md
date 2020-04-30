# kaiui-slider 

The `<kaiui-slider>` component. 

- **author** - Sebastian Baar 
- **license** - MIT 

## props 

- `softkeys` ***{ left: String, center: String, right: String }*** (*optional*) `default: { center: "Select" }` 

  The Softkeys Object 

- `title` ***String*** (*required*) 

  The Title 

- `start-value` ***Number*** (*optional*) 

  The Start Value 

- `step` ***Number*** (*required*) `default: 1` 

  The Step Value 

- `min-value` ***Number*** (*required*) `default: 1` 

  The Minimum Value 

- `max-value` ***Number*** (*required*) `default: 10` 

  The Maximum Value 

## events 

- `softLeft` 

  Emit the event `softLeft` when left softkey is selected 

- `softRight` 

  Emit the event `softRight` when right softkey is selected 

- `softCenter` 

  Emit the event `softCenter` when center softkey is selected 

- `update-softkeys-register` 

- `update-softkeys-unregister` 

- `change` 

  Emit the event `change` with `value` when the Slider input value changes 

- `set-element-selected` 

