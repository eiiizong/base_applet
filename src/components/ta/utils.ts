import { GLOB_COMPONENT_CLASS_PREFIX } from './constant'

const PREFIX = GLOB_COMPONENT_CLASS_PREFIX + '-'
const toString = Object.prototype.toString

const is = (val: unknown, type: string) => {
  return toString.call(val) === `[object ${type}]`
}

const isArray = (val: any): val is Array<any> => {
  return val && Array.isArray(val)
}

const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object')
}

const join = (name: string, mods: string[]) => {
  let newMods: string[] = []
  name = PREFIX + name
  newMods = mods.map((item) => name + '--' + item)
  newMods.unshift(name)

  console.log('newMods ===', newMods)

  return newMods.join(' ')
}

const traversing = (mods: string[], conf: unknown) => {
  if (!conf) {
    return
  }

  if (typeof conf === 'string' || typeof conf === 'number') {
    mods.push(conf + '')
  } else if (isArray(conf)) {
    conf.forEach((item) => {
      traversing(mods, item)
    })
  } else if (isObject(conf)) {
    Object.keys(conf).forEach((key) => {
      conf[key] && mods.push(key)
    })
  }
}

const bem = (name: string, conf: unknown) => {
  const mods: string[] = []
  traversing(mods, conf)
  console.log('mods ===', mods)
  return join(name, mods)
}

export { bem }
