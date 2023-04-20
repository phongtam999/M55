
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {getSum}  from "react";


Enzyme.configure({ adapter: new Adapter() })

describe('kiem thu chi app component', () => {
  it('kiem tra xem ham có tra ve dung tong cua 2 so ko', () => {
    
    expect(getSum(1,1)).toEqual(2);
  })
})
