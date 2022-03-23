import { render, screen } from '@testing-library/react';
import Repositories, { IRepositoriesListProps } from './Repositories';

const mockData: IRepositoriesListProps = {
  data: {
    name: 'test',
    stargazerCount: 1000,
    url: 'www.test.com',
    forkCount: 500,
  },
};

test('It should render correctly', () => {
  render(<Repositories data={mockData.data} />);
  const repo = screen.getByTestId('repo');
  expect(repo).toBeDefined();
});

test('It should render the values correclt', () => {
  render(<Repositories data={mockData.data} />);
  const name = screen.getByText(mockData.data.name);
  const stargazerCount = screen.getByText(mockData.data.stargazerCount);
  const forkCount = screen.getByText(mockData.data.forkCount);

  expect(name).toBeInTheDocument();
  expect(stargazerCount).toBeInTheDocument();
  expect(forkCount).toBeInTheDocument();
});
