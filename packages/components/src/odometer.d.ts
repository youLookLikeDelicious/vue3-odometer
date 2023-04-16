declare class Odometer {
  constructor(parameters: {
    el: HTMLElement, value: number | string,
    theme: OdeMeterThemeOption,
    format: string
  }); // 实例化odometer
  update(value: number | string); // 更新动画
}

export = Odometer

declare namespace Odometer {
  export type  OdeMeterThemeOption = 'default' | 'car' | 'plaza' | 'slot-machine' | '	digital'
}