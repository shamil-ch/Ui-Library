(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('snabbdom'), require('snabbdom/modules/class'), require('snabbdom/modules/props'), require('snabbdom/modules/style'), require('snabbdom/modules/eventlisteners')) :
  typeof define === 'function' && define.amd ? define(['exports', 'snabbdom', 'snabbdom/modules/class', 'snabbdom/modules/props', 'snabbdom/modules/style', 'snabbdom/modules/eventlisteners'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.UILibrary = {}, global.snabbdom, global["snabbdom/modules/class"], global["snabbdom/modules/props"], global["snabbdom/modules/style"], global["snabbdom/modules/eventlisteners"]));
})(this, (function (exports, snabbdom, _class, props, style, eventlisteners) { 'use strict';

  const patch = snabbdom.init([_class.classModule, props.propsModule, style.styleModule, eventlisteners.eventListenersModule]);
  function Template(state, props, updateState) {
    const vnode = h('div', [h('h1', state.count), h('button', {
      on: {
        click: () => updateState(state.count + 1)
      }
    }, 'Add')]);
    return vnode;
  }
  function createComponent(container, state, props) {
    let vnode = Template(state, props, updateState);
    let elm = patch(container, vnode);
    function updateState(newState) {
      state.count = newState;
      vnode = Template(state, props, updateState);
      patch(elm, vnode);
    }
  }

  exports.Template = Template;
  exports.createComponent = createComponent;

}));
