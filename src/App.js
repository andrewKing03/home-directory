import logo from './logo.svg';
import './App.css';
import {Button, Stack} from '@mui/material'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Select your tool
        </p>
    <Stack spacing={2}>
        <Button href="http://10.0.1.179:9117" variant='contained'> Jacket</Button>
        <Button href="http://10.0.1.179:8080" variant='contained'> Flood Torrent</Button>
        <Button href="https://10.0.1.179:9443" variant='contained'> Portainer</Button> 
    </Stack>
  
      </header>
    </div>
  );
}

export default App;
