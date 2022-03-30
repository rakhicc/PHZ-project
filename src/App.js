import {ReactComponent as Close} from './assets/close-square.svg';
import {ReactComponent as Emoji1} from './assets/Emoji1.svg';
import {ReactComponent as Emoji2} from './assets/Emoji2.svg';
import {ReactComponent as Emoji3} from './assets/Emoji3.svg';
import {ReactComponent as Emoji4} from './assets/Emoji4.svg';
import {ReactComponent as Emoji5} from './assets/Emoji5.svg';
import {ReactComponent as Emoji6} from './assets/Emoji6.svg';
import {ReactComponent as Emoji7} from './assets/Emoji7.svg';
import {ReactComponent as Emoji8} from './assets/Emoji8.svg';
import {ReactComponent as Emoji9} from './assets/Emoji9.svg';
import {ReactComponent as Emoji10} from './assets/Emoji10.svg';
import './App.css';

function App() {
  return (
  <div className="App">
      <div class="box">
	      <a class="button" href="#popup1">Click here to open the survey</a>
      </div>

     <div id="popup1" class="overlay">
	    
      <div class="popup">
        <a class="close" href="#"><Close /></a>

        <div className="all-content">
          <div className="question">
		        <h2>How likely are you to recommend us to a friend or colleague?</h2>
            <h2>(1 = Not Likely, 10 = Very Likely)</h2>
		      </div>

		      <div class="content">
			<Emoji1/>
      <Emoji2 />
      <Emoji3/>
      <Emoji4/>
      <Emoji5/>
      <Emoji6/>
      <Emoji7/>
      <Emoji8/>
      <Emoji9/>
      <Emoji10/>
		      </div>

          <div className="question">
		        <h2>Please provide any comments to help explain your selection.</h2>
            <input type="text" id="answer"></input>
		      </div>

          <button>Submit</button>
        </div>
	    </div>

    </div>
  </div>
  );
}

export default App;
