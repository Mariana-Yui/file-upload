import { ref, h } from '../../lib/yui-mini-vue3.esm.js';
import Child from './Child.js';

export const App = {
  name: 'App',
  setup() {
    const msg = ref('123');
    const count = ref(1);

    window.msg = msg;

    const changeChildProps = () => {
      msg.value = '456';
    };

    const changeCount = () => {
      count.value++;
    };

    return {
      msg,
      changeChildProps,
      changeCount,
      count,
    };
  },

  render() {
    return h('div', {}, [
      h('div', {}, '你好'),
      h(
        'button',
        {
          onClick: this.changeChildProps,
        },
        'changed child props',
      ),
      h(Child, {
        msg: this.msg,
      }),
      h(
        'button',
        {
          onClick: this.changeCount,
        },
        'change self count',
      ),
      h('p', {}, 'count: ' + this.count),
    ]);
  },
};
