import { h, ref } from '../../lib/yui-mini-vue3.esm.js';

export const App = {
  name: 'App',
  setup() {
    const count = ref(0);

    const onClick = () => {
      count.value++;
    };

    const props = ref({
      foo: 'foo',
      bar: 'bar',
    });

    const onChangePropsDemo1 = () => {
      props.value.foo = 'new-foo';
    };

    const onChangePropsDemo2 = () => {
      props.value.foo = undefined;
    };

    const onChangePropsDemo3 = () => {
      props.value = {
        foo: 'foo',
      };
    };

    return {
      count,
      props,
      onClick,
      onChangePropsDemo1,
      onChangePropsDemo2,
      onChangePropsDemo3,
    };
  },
  render() {
    return h(
      'div',
      {
        id: 'root',
        foo: this.props.foo,
        bar: this.props.bar,
      },
      [
        h('div', {}, `count: ${this.count}`),
        h(
          'button',
          {
            onClick: this.onClick,
          },
          'click',
        ),
        h(
          'button',
          {
            onClick: this.onChangePropsDemo1,
          },
          'changeProps - 值改变了 - 修改',
        ),
        h(
          'button',
          {
            onClick: this.onChangePropsDemo2,
          },
          'changeProps - 值变成了undefined - 删除',
        ),
        h(
          'button',
          {
            onClick: this.onChangePropsDemo3,
          },
          'changeProps - key在新的里面没有了 - 删除',
        ),
      ],
    );
  },
};
