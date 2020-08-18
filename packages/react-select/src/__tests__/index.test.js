import React from "react";
import { shallow } from 'enzyme';
import Hello  from "../index.js";
import { create } from 'react-test-renderer';

// step one 初始化
// describe("Hello",()=>{ 
//   it("snapshot initialize",()=>{
//     // https://reactjs.org/docs/test-renderer.html#testrendereract
//     const root = create(<Hello />)
//     expect(root.toJSON()).toMatchSnapshot();
//   });
// });


// https://enzymejs.github.io/enzyme/
// 利用enzyme，进行浅渲染
describe("Hello",()=>{ 
  it("shallow test props value",()=>{
    const cl = "youguess";
    const ShallowHello = shallow(<Hello className={cl} />);
    // 调试方式
    // console.log(ShallowHello.debug())
    // console.log(ShallowHello.html())
    // console.log(ShallowHello.props())
    expect(ShallowHello.props().className).toBe(cl);
    expect(ShallowHello.prop("className")).toBe(cl);
  });
  it("shallow test props function(recommend)",()=>{
    const func = jest.fn();
    const ShallowHello = shallow(<Hello triggerFunction={func} />);
    ShallowHello.invoke("triggerFunction")()
    expect(func).toHaveBeenCalled();
  });
  it("shallow test props function throw simulate action (has no choice)",()=>{
    const func = jest.fn();
    const ShallowHello = shallow(<Hello onClick={func} />);
    ShallowHello.simulate("click");
    expect(func).toHaveBeenCalled();
  });
});