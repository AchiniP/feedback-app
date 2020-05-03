import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import ButtonHover from '../src/views/ButtonHover';
import RatingCard from '../src/views/RatingCard';

describe('Should Render ButtonHover without Crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonHover />, div);
  });
});

describe('Snapshot testing', () => {
  const component = renderer.create(
    <ButtonHover />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Test clicks', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <ButtonHover />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display button after mouse entering', () => {
    expect(wrapper.find('button[id="initButton"]').exists).toBeTruthy();
    const svgIcon = wrapper.find(SentimentSatisfiedTwoToneIcon);
    const subDiv = wrapper.find('div[id="subDiv"]');
    expect(svgIcon.exists()).toEqual(true);
    expect(wrapper.find('button[id="initButton"]').exists()).toEqual(false);
    subDiv.simulate('mouseenter');
    wrapper.update();
    const Button = wrapper.find('button[id="initButton"]');
    expect(Button.exists()).toEqual(true);
  });

  it('should display Rate Card after button click', () => {
    const Button = wrapper.find('button[id="initButton"]');
    expect(Button.exists()).toEqual(true);
    expect(wrapper.find(RatingCard).exists()).toEqual(false);
    Button.simulate('click');
    const rateCard = wrapper.find(RatingCard);
    expect(rateCard.exists()).toEqual(true);
  });

  it('should call Rate card component with correct props', () => {
    const rateCard = wrapper.find(RatingCard);
    expect(rateCard.props().open).toEqual(true);
  });
});
