import { Container, Box } from '@mui/material';
import StockDropdown from './components/StockDropdown';
import DurationSelector from './components/DurationSelector';
import StockGraph from './components/StockGraph';

function App() {
  return (
    <Container sx={{ bgcolor: '#121212', minHeight: '100vh', color: 'white', py: 4 }}>
      <Box my={4}>
        <StockDropdown />
      </Box>
      <Box my={4}>
        <DurationSelector />
      </Box>
      <Box my={4}>
        <StockGraph />
      </Box>
    </Container>
  );
}

export default App;
