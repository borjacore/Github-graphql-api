import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// Set up for browser and global listeners
global.matchMedia = global.matchMedia
  // eslint-disable-next-line func-names
  || function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test('It renders correctly', () => {
  render(<App />);
  const home = screen.getByTestId('homePage');
  expect(home).toBeInTheDocument();
});

test('It switches bewteen dark mode correctly', () => {
  render(<App />);
  const switcherToDark = screen.getByText('Switch to dark theme');
  expect(switcherToDark).toBeInTheDocument();

  fireEvent.click(switcherToDark);

  const switcherToLight = screen.getByText('Switch to light theme');
  expect(switcherToLight).toBeInTheDocument();
});
