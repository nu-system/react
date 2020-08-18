import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '../src/index.js';
// import { create } from "react-test-renderer";

// step one 初始化
// describe("button", () => {
//   it("snapshot initialize", () => {
//     // https://reactjs.org/docs/test-renderer.html#testrendereract
//     const root = create(<Button />);
//     expect(root.toJSON()).toMatchSnapshot();
//   });
// });

// step two api
describe('api test', () => {
  it('children is text', () => {
    const txt = 'aaa';
    const onClick = jest.fn();
    // https://enzymejs.github.io/enzyme/docs/api/mount.html
    const buttonMount = mount(<Button onClick={onClick}>{txt}</Button>);
    // https://jestjs.io/docs/en/expect
    expect(buttonMount.text()).toBe(txt);
    buttonMount.simulate('click');
    expect(onClick).toBeCalled();
  });
  it('children is html', () => {
    const onClick = jest.fn();
    const buttonMount = mount(
      <Button onClick={onClick}>
        <strong>aaa</strong>
      </Button>,
    );
    // console.log(buttonMount.html());
    expect(buttonMount.find('strong').length).toBe(1);
    buttonMount.simulate('click');
    expect(onClick).toBeCalled();
  });
  it('href', () => {
    const href = './';
    const buttonShallow = shallow(<Button href={href}>button</Button>);
    // console.log(buttonShallow.html());
    expect(buttonShallow.find('a').length).toBe(1);
    expect(buttonShallow.prop('href')).toBe(href);
  });
  it('Default Component', () => {
    const buttonShallowDefault = shallow(<Button>button</Button>);
    expect(buttonShallowDefault.find('button').length).toBe(1);
    expect(buttonShallowDefault.prop('role')).toBe(undefined);
  });
  it('Custom Component TagName', () => {
    const TagName = 'strong';
    const buttonShallow = shallow(<Button Component={TagName}>button</Button>);
    expect(buttonShallow.find(TagName).length).toBe(1);
    expect(buttonShallow.prop('role')).toBe('button');
    // console.log(buttonShallow.html());
  });
  it('disabled', () => {
    const onClick = jest.fn();

    // button
    const buttonShallow1 = shallow(<Button disabled>button</Button>);
    // console.log(buttonShallow1.html());
    expect(buttonShallow1.prop('disabled')).toBe(true);

    // link
    const buttonShallow2 = shallow(
      <Button href="./" disabled>
        button
      </Button>,
    );
    // console.log(buttonShallow2.html());
    expect(buttonShallow2.prop('disabled')).toBe(true);
    buttonShallow2.simulate('click');
    expect(onClick).not.toBeCalled();
  });
});
