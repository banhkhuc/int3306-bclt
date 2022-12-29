import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import RootLayout from './layouts/rootLayout';
import theme from './theme';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RootLayout />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
