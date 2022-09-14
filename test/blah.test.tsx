import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TimeSelector from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimeSelector time={{hour:8,minute:30,round:1}} onChange={(time)=>{
      console.log(time);
    }}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
