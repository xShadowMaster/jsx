import sss from "./sss.jpg";
import './App.css';

function App() {
  return (
    <div>
    <div style={{ border: 'solid 1px black', maxwidth: '100vw' }}>
<center>
      <h1 className="title red">skander</h1></center>

      <br />

      <img src={sss} alt="ffff"></img>

      <br />

      <img src="/lion.jpg" alt="vvvv"></img>

    </div>
    <video width={1320} height={240}   controls autoPlay>

    <source src="/a.mp4" type="video/mp4" />

        
        </video>
        </div>
  );
}


export default App;
