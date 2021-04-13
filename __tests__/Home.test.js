import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Home from '../src/screens/Home';

const mockedStore = configureMockStore()({});
const testProps = createTestProps({});

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Home {...testProps} store={mockedStore} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
