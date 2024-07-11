import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Login from './Login';

test('renders login form', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  expect(getByPlaceholderText('Email')).toBeInTheDocument();
  expect(getByPlaceholderText('Password')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
});

test('handles form submission', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
  fireEvent.click(getByText('Login'));

});