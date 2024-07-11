import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from './Login';

const mockStore = configureStore([]);
const store = mockStore({});

test('renders login form', () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
});

test('submits login form', () => {
  const dispatch = jest.fn();
  store.dispatch = dispatch;

  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@test.com' } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });
  fireEvent.click(screen.getByText(/Sign In/i));

  expect(dispatch).toHaveBeenCalledTimes(1);
});