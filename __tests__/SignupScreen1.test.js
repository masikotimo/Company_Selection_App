import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import SignupScreen1 from '../src/screens/SignupScreen1';

const mockedStore = configureMockStore()({});
const testProps = createTestProps({});

describe('SignupScreen1', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SignupScreen1 {...testProps} store={mockedStore} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
