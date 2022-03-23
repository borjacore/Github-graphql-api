import Link from './Repositories.style';

export interface IRepositoriesListProps {
  data: {
    name: string;
    stargazerCount: number;
    url: string;
    forkCount: number
  }
}

function Repositories(props: IRepositoriesListProps) {
  const {
    data: {
      name, stargazerCount, url, forkCount,
    },
  } = props;

  return (
    <span style={{ fontSize: '18px' }} data-testid="repo">
      <Link href={url} data-testid="repoLink">
        <span>{name}</span>
        {' '}
        ⭐️
        <span>{stargazerCount}</span>
        {' '}
        🍴
        <span>{forkCount}</span>
      </Link>
      <br />
    </span>
  );
}

export default Repositories;
