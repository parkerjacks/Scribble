import logo from './logo.svg';
import './App.css';
import NoteArea from './components/NoteArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='scribble_title'>
          <div className='scribble_letter'> S</div>
          <div className='scribble_letter'> C</div>
          <div className='scribble_letter'> R</div>
          <div className='scribble_letter'> I</div>
          <div className='scribble_letter'> B</div>
          <div className='scribble_letter'> B</div>
          <div className='scribble_letter'> B</div>
          <div className='scribble_letter'> L </div>
          <div className='scribble_letter'> E </div>
        </div>
      </header>
      <body>
        <NoteArea />
      </body>

      <footer>

      </footer>
    </div>
  );
}

export default App;
