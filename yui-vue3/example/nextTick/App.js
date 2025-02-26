import { getCurrentInstance, h, nextTick, ref } from '../../lib/yui-mini-vue3.esm.js';

export const App = {
  name: 'App',
  setup() {
    const count = ref(1);
    const instance = getCurrentInstance();

    function onClick() {
      for (let i = 0; i < 100; i++) {
        console.log('update');
        count.value = i;
      }
    }

    nextTick(() => {
      console.log(instance);
    });

    return {
      onClick,
      count,
    };
  },
  render() {
    const button = h(
      'button',
      {
        onClick: this.onClick,
      },
      'update',
    );

    const p = h('p', {}, 'count: ' + this.count);

    return h('div', {}, [button, p]);
  },
};
