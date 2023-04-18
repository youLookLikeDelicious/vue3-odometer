# vue3 + ts + odometer

该组件基于[HubSpot/odometer](https://github.com/HubSpot/odometer)

## 使用

```js
import { Odometer } from "@blog1997/odometer"
import "@blog1997/odometer/style.css"

const app = createApp(App)
app.use(Odometer)

<odommeter>500</odometer>
```

## props
theme?: "default" | "car" | "plaza" | "slot-machine" | "digital"  

format?: ''

Format    -  Example
(,ddd)    -  12,345,678
(,ddd).dd -  12,345,678.09
(.ddd),dd -  12.345.678,09
( ddd),dd -  12 345 678,09
d         -  12345678