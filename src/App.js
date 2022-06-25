import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Gigih Andira Hidayat</h1>
        <h2>Kelompok Alphabet</h2>
        <p>Mahasiswa Poltekpos jurusan D3TI 2B yang berasal dari Purworejo </p>
        <a
          className="App-link"
          href="https://instagram.com/gigih_andi25?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          My Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
