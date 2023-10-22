import logo from './logo.svg';
import './App.css';
import NoteArea from './components/NoteArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='scribble_title'>
          <div className='scribble_letter'> S</div>
          <div className='scribble_letter'> c</div>
          <div className='scribble_letter'> r</div>
          <div className='scribble_letter'> i</div>
          <div className='scribble_letter'> b</div>
          <div className='scribble_letter'> b</div>
          <div className='scribble_letter'> l </div>
          <div className='scribble_letter'> e </div>
        </div>
      </header>
        <NoteArea />
      <footer>

      </footer>
    </div>
  );
}

export default App;
