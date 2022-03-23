import { render, screen } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../App';
import Home from './Home';

// Set the provider to test component
function ComponentToTest() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

test('It should render correctly', () => {
  render(<ComponentToTest />);
  const home = screen.getByTestId('homePageComponent');
  expect(home).toBeDefined();
});

test('It should call the search when state updated', () => {
  render(<ComponentToTest />);
  const search = screen.getByTestId('search');
  expect(search).toBeDefined();
});
