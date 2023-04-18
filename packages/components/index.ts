import './style/odometer-theme-default.css'
import './style/odometer-theme-car.css'
import './style/odometer-theme-plaza.css'
import './style/odometer-theme-slot-machine.css'
import './style/odometer-theme-digital.css'
import './style/odometer-theme-minimal.css'

import OdometerVue from './src/index.vue'
import type { App } from 'vue'

OdometerVue.install = (app: App) => {
  app.component('odometer', OdometerVue)
}

const Odometer = OdometerVue as unknown as (typeof OdometerVue & { install: (app: App) => void })

export { Odometer, Odometer as default }
