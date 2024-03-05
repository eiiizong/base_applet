import { ref, watch } from 'vue'
import { GLOB_COMPONENT_CLASS_PREFIX } from '../constant'
import { requestAnimationFrame } from '../common/utils'
import { isObj } from '../common/validator'

export const useTransition = (props: any, emit: any) => {
  const classes = ref(`enter-class enter-active-class enter-to-class leave-class leave-active-class leave-to-class `)
  const status = ref<'leave' | 'enter' | ''>('')
  const inited = ref(false)
  const display = ref(false)
  const transitionEnded = ref(true)
  const currentDuration = ref(300)
  const enterFinishedPromise = ref<Promise<boolean> | null>(null)

  const getClassNames = (name: string) => {
    const prefix = GLOB_COMPONENT_CLASS_PREFIX
    const { enterClass, enterActiveClass, enterToClass, leaveActiveClass, leaveClass, leaveToClass } = props
    return {
      enter: `${prefix}-${name}-enter ${prefix}-${name}-enter-active ${enterClass} ${enterActiveClass} `,
      'enter-to': `${prefix}-${name}-enter-to ${prefix}-${name}-enter-active ${enterToClass} ${enterActiveClass} `,
      leave: `${prefix}-${name}-leave ${prefix}-${name}-leave-active ${leaveClass} ${leaveActiveClass} `,
      'leave-to': `${prefix}-${name}-leave-to ${prefix}-${name}-leave-active ${leaveToClass} ${leaveActiveClass}  `,
    }
  }

  const enter = () => {
    if (enterFinishedPromise.value) return

    enterFinishedPromise.value = new Promise((resolve) => {
      const { duration, name = 'fade' } = props
      const classNames = getClassNames(name)
      const _currentDuration = isObj(duration) ? duration.enter : duration

      if (status.value === 'enter') {
        return
      }

      status.value = 'enter'
      emit('before-enter')

      requestAnimationFrame(() => {
        if (status.value !== 'enter') {
          return
        }

        emit('enter')

        inited.value = true
        display.value = true
        classes.value = classNames.enter
        currentDuration.value = _currentDuration as number

        requestAnimationFrame(() => {
          if (status.value !== 'enter') {
            return
          }

          transitionEnded.value = false
          classes.value = classNames['enter-to']

          resolve(true)
        })
      })
    })
  }

  const leave = () => {
    if (!enterFinishedPromise.value) return

    enterFinishedPromise.value.then(() => {
      if (!display.value) {
        return
      }

      const { duration, name = 'fade' } = props
      const classNames = getClassNames(name)
      const _currentDuration = isObj(duration) ? duration.leave : duration

      status.value = 'leave'
      emit('before-leave')

      requestAnimationFrame(() => {
        if (status.value !== 'leave') {
          return
        }

        emit('leave')

        classes.value = classNames.leave
        currentDuration.value = _currentDuration as number

        requestAnimationFrame(() => {
          if (status.value !== 'leave') {
            return
          }

          transitionEnded.value = false
          setTimeout(() => {
            onTransitionEnd()
            enterFinishedPromise.value = null
          }, _currentDuration as number)
          classes.value = classNames['leave-to']
        })
      })
    })
  }

  const onTransitionEnd = () => {
    if (transitionEnded.value) {
      return
    }

    transitionEnded.value = true
    if (status.value) {
      emit(`after-${status.value}`)
    }

    const { show } = props
    if (!show && display.value) {
      display.value = false
    }
  }

  watch(
    () => props.show,
    (newVal, oldVal) => {
      if (newVal === oldVal) {
        return
      }
      if (newVal) {
        nextTick(() => {
          enter()
        })
      } else {
        nextTick(() => {
          leave()
        })
      }
    }
  )

  return {
    classes,
    inited,
    display,
    currentDuration,
    onTransitionEnd,
  }
}
