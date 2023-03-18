import style from '../src/App.module.scss'
import './App.css';
import { Button } from './components/basic_elements/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test
        </p>
        <div className={style.buttonContainer}>
        <Button title='推文' className={style.buttonOrange} />
        <Button title='推文' className={style.buttonWhite}/>
        </div>
      </header>
    </div>
  );
}

export default App;
