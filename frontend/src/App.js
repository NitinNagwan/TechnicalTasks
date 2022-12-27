import logo from './logo.svg';
import './App.css';
import QrCode from './components/QrCode';
import Task from './components/task4';
import Ocr from './components/Ocr';
import ReadQr from './components/task1.2';

function App() {
  return (
    <div className='App'>
      <QrCode/>
    <Task/>
    <Ocr />
    <ReadQr/>

    </div>
  );
}

export default App;
