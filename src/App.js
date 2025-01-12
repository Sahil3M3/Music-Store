import './App.css';
import { Row} from "react-bootstrap"
import MusicList from './components/MusicList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


let App=()=> {
  return (
<>
<NavBar/>
<div
        style={{
          backgroundColor: "rgb(119, 119, 119)",
          color: "white",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <h1 style={{ fontSize: "5rem", fontWeight: "bolder", margin: "0 50px 0px 50px",paddingTop:"0px 50px 0px 50px" }}>
          The Generics
        </h1>
      </div>
      <Row style={{fontFamily:"fantasy", textAlign:"center"}}>
        <h1>Music</h1>
      </Row>
<MusicList/>
<Footer></Footer>
</>
  );
}

export default App;

