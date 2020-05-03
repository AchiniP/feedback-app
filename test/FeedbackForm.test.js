import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import FeedbackForm from '../src/views/FeedbackForm';
import ThankYouCard from '../src/views/ThankYouCard';

describe('Should Render FeedbackForm without Crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const onCLoseFn = jest.fn;
    ReactDOM.render(<FeedbackForm formOpen onClose={onCLoseFn} />, div);
  });
});

describe('Snapshot testing FeedbackForm', () => {
  const component = mount(
    <FeedbackForm formOpen onClose={() => {}} />,
  );
  expect(component.html()).toMatchSnapshot();
});

describe('Test clicks', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <FeedbackForm formOpen onClose={() => {}} />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update input fields', () => {
    const event = {
      preventDefault() {},
      target: { value: 'test', name: 'email' },
    };
    const email = wrapper.find('input[id="email"]');
    expect(email.exists()).toEqual(true);
    email.simulate('change', event);
    const updatedWrapper = wrapper.update();
    const updatedEmail = updatedWrapper.find('input[id="email"]');
    expect(updatedEmail.props().value).toEqual('test');
  });

  it('should simulate button click', () => {
    const event = {
      preventDefault() {},
    };
    const submitButton = wrapper.find('button[id="submit-button"]');
    expect(submitButton.exists()).toEqual(true);
    submitButton.simulate('click', event);
    const thanksCard = wrapper.find(ThankYouCard);
    expect(thanksCard.exists()).toEqual(true);
  });

  it('should call Thank you card component with correct props', () => {
    const thanksCard = wrapper.find(ThankYouCard);
    expect(thanksCard.props().content).toEqual('Thank you!');
    expect(thanksCard.props().subContent).toEqual('Your feedback is valueable to us.');
  });
});
