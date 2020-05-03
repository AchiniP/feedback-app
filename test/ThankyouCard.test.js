import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import ThankYouCard from '../src/views/ThankYouCard';

describe('Should Render ThankYouCard without Crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const onCLoseFn = jest.fn;
    ReactDOM.render(<ThankYouCard onClose={() => {}} showIcon content="Thank You" />, div);
  });
});

describe('Snapshot testing ThankYouCard first view', () => {
  const component = mount(
    <ThankYouCard onClose={() => {}} showIcon content="Thank You" />,
  );
  expect(component.html()).toMatchSnapshot();
});

describe('Snapshot testing ThankYouCard second view', () => {
  const component = mount(
    <ThankYouCard onClose={() => {}} content="Thank You" subContent="test sub content" />,
  );
  expect(component.html()).toMatchSnapshot();
});
