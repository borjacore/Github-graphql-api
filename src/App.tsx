import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Button, Row, Col } from 'antd';
import Home from './pages/home/Home';
import {
  darkTheme, GlobalStyles, lightTheme, Wrapper,
} from './styles.global';

// Query provider
export const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState<string>('light');
  const themeToggler = (): void => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Wrapper data-testid="homePage">
          <Row justify="center">
            <Col offset={1}>
              <Button type="primary" onClick={themeToggler} style={{ margin: '10px auto' }} data-testid="switcher">
                Switch to
                {' '}
                {theme === 'light' ? 'dark' : 'light'}
                {' '}
                theme
              </Button>
            </Col>
          </Row>
          <Row justify="center">
            <Col offset={1}>
              <Home />
            </Col>
          </Row>
        </Wrapper>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
