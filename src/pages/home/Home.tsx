import { Input, Spin } from 'antd';
import { useEffect, useState } from 'react';
import useGrapqhqlQuery from '../../hooks/useGraphqlQuery';
import Repositories from './components/Repositories';
import { SearchWrapper, Wrapper } from './Home.styles';

const { Search } = Input;

function Home() {
  // Endpoint from environmental variables
  // App state
  const [state, setState] = useState('');

  // Query Provider from ./App.tsx
  // Accepts sring as a parameter for searching repos
  const {
    data, error, isLoading, refetch, remove,
  } = useGrapqhqlQuery(
    state,
  );

  // Search function triggered onClick
  const onSearch = (ev: any) => {
    setState(ev);
  };

  // Clean the query cache and re-trigger query
  useEffect(() => {
    remove();
    refetch();
  }, [state]);

  // Encapsulate to avoid displaying empty component while loading results
  const renderComponent = () => {
    if (isLoading) {
      return <Spin />;
    }

    if (error) {
      return <h1>Ups...</h1>;
    }

    if (data.edges.length === 0) {
      return <h1>Ups... no repos!</h1>;
    }

    return (
      data.edges.map((i: any) => (
        <Repositories data={i.node} key={i.node.id} />
      ))
    );
  };

  return (
    <Wrapper data-testid="homePageComponent">
      <SearchWrapper>
        <Search
          placeholder="Look for repos!"
          allowClear
          enterButton="Search"
          size="middle"
          onSearch={onSearch}
          style={{ margin: '20px auto' }}
          data-testid="search"
        />
      </SearchWrapper>
      <div style={{ minHeight: '500px' }}>{renderComponent()}</div>
    </Wrapper>
  );
}

export default Home;
