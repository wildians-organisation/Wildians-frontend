import React from 'react';
import { render, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import ConnectedButton from './ConnectedButton';

test('truncate function should truncate the address correctly', () => {
  const address = 'tz1ip6QZpQU2UTALMAAfyDhWLY87hFiCfeCN';
  const { getByText } = render(<ConnectedButton walletAdress={address} />);
  const truncatedAddress = getByText(/tz1ip...CfeCN/i);
  expect(truncatedAddress).toBeInTheDocument();
});

test('connected button should render with the provided address', () => {
  const address = 'tz1ip6QZpQU2UTALMAAfyDhWLY87hFiCfeCN';
  const { getByText } = render(<ConnectedButton walletAdress={address} />);
  const buttonElement = getByText(/tz1ip...CfeCN/i);
  expect(buttonElement).toBeInTheDocument();
});

test('logout button should be rendered', async () => {
  const address = 'tz1ip6QZpQU2UTALMAAfyDhWLY87hFiCfeCN';
  const { getByText } = render(<ConnectedButton walletAdress={address} />);
  const connectButton = getByText(/tz1ip...CfeCN/i);

  // Click on the button to open the dropdown
  fireEvent.click(connectButton);

  // Wait for the component to update with the logout button
  await waitFor(() => getByText('Logout'));

  // Check if the logout button is rendered
  const logoutButton = getByText('Logout');
  expect(logoutButton).toBeInTheDocument();
});