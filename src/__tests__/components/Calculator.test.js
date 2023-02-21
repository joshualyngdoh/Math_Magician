import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Calculator from '../../components/Calculator';

it('Calculator should render correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Calculator should add two numbers', () => {
  // Arrange
  const { getByText, getByTestId } = render(<Calculator />);

  // Act
  userEvent.click(getByText('2'));
  userEvent.click(getByText('+'));
  userEvent.click(getByText('2'));
  userEvent.click(getByText('='));

  // Assert
  expect(getByTestId('result').textContent).toBe('4');
});

it('Calculator should subtract two numbers', () => {
  // Arrange
  const { getByText, getByTestId } = render(<Calculator />);

  // Act
  userEvent.click(getByText('2'));
  userEvent.click(getByText('-'));
  userEvent.click(getByText('2'));
  userEvent.click(getByText('='));

  // Assert
  expect(getByTestId('result').textContent).toBe('0');
});

it('Calculator should multiply two numbers', () => {
  // Arrange
  const { getByText, getByTestId } = render(<Calculator />);

  // Act
  userEvent.click(getByText('2'));
  userEvent.click(getByText('x'));
  userEvent.click(getByText('2'));
  userEvent.click(getByText('='));

  // Assert
  expect(getByTestId('result').textContent).toBe('4');
});

it('Calculator should divide two numbers', () => {
  // Arrange
  const { getByText, getByTestId } = render(<Calculator />);

  // Act
  userEvent.click(getByText('2'));
  userEvent.click(getByText('÷'));
  userEvent.click(getByText('2'));
  userEvent.click(getByText('='));

  // Assert
  expect(getByTestId('result').textContent).toBe('1');
});

it('Calculator should clear the display', () => {
  // Arrange
  const { getByText, getByTestId } = render(<Calculator />);

  // Act
  userEvent.click(getByText('2'));
  userEvent.click(getByText('÷'));
  userEvent.click(getByText('2'));
  userEvent.click(getByText('AC'));

  // Assert
  expect(getByTestId('result').textContent).toBe('');
});
