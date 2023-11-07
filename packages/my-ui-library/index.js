import { init } from 'snabbdom'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'

const patch = init([classModule, propsModule, styleModule, eventListenersModule])

export function Template(state, props, updateState) {
  const vnode = h('div', [
    h('h1', state.count),
    h('button', { on: { click: () => updateState(state.count + 1) } }, 'Add'),
  ])
  return vnode
}

export function createComponent(container, state, props) {
  let vnode = Template(state, props, updateState)
  let elm = patch(container, vnode)

  function updateState(newState) {
    state.count = newState
    vnode = Template(state, props, updateState)
    patch(elm, vnode)
  }
}
