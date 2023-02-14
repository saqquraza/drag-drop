import logo from './logo.svg';
import Image from './Components/Image';
// import Droppable from './Components/Droppable';

function App() {
  // const images = [
  //   "https://via.placeholder.com/100x100",
  //   // "https://via.placeholder.com/100x100",
  //   // "https://via.placeholder.com/100x100"
  // ];

  return (
    <div >
      <Image/>
      {/* <div 
      style={{
        height: "100px",
        width: "100px",
        border: "1px solid black",
        backgroundColor:"red",
        margin:"20px"
      }}>
      {images.map(image => (
        <Image key={image} src={image} />
      ))}
      </div> */}
      {/* <div
      style={{
        height: "100px",
        width: "100px",
        border: "1px solid black",
        backgroundColor:"red"
      }}>
      <Droppable />
      </div> */}
    </div>
  );
}

export default App;
