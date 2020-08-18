import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-dom';
import Select from '../components/Select';
import './index.css';

function Demo() {
  return (
    <div className="nu_hello">
      <p>
        <Select
          className="_l"
          onChange={(e) => {
            console.log(e.currentTarget.value);
          }}
        >
          <option value="1">large</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <Select>
          <option value="1">default</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <Select className="_danger">
          <option value="1">danger</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <Select className="_s">
          <option value="1">small</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <Select className="_xs">
          <option value="1">x-small</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <select
          onChange={(e) => {
            console.log(e.currentTarget.value);
          }}
        >
          <option value="1">vanilla</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </select>
      </p>
      <p>
        <Select disabled className="_l">
          <option value="1">large:disabled</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <Select disabled className="nu_select">
          <option value="1">default:disabled</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <Select disabled className="_s">
          <option value="1">small:disabled</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <Select disabled className="_xs">
          <option value="1">x-small:disabled</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </Select>
        <select disabled>
          <option value="1">vanilla:disabled</option>
          <option value="2">option2</option>
          <option value="3">option3</option>
        </select>
      </p>
      <Select className="_block">
        <option value="1">block</option>
        <option value="2">option2</option>
        <option value="3">option3</option>
      </Select>
    </div>
  );
}
render(<Demo />, document.querySelector('#demo'));
