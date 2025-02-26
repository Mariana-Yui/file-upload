import { h, ref } from '../../lib/yui-mini-vue3.esm.js';
const nextChildren = 'newChildren';
const prevChildren = 'oldChildren';

export default {
  name: 'TextToText',
  setup() {
    const isChange = ref(false);
    window.isChange = isChange;

    return {
      isChange,
    };
  },

  render() {
    return this.isChange === true ? h('div', {}, nextChildren) : h('div', {}, prevChildren);
  },
};
