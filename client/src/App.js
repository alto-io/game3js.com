import React from 'react';
import LiteGraphJS from 'litegraph.js/build/litegraph.js'
import 'litegraph.js/css/litegraph.css'

const Chess = require('react-chess')

//  require('./demo.css')

function App() {

  const [liteGraph, setLiteGraph] = React.useState();
  const [liteGraphCanvas, setLiteGraphCanvas] = React.useState();
  const [pieces, setPieces] = React.useState(Chess.getDefaultLineup());

  function useWindowSize() {
    let [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize([(window.clientWidth||window.scrollWidth||window.innerWidth),(window.clientHeight||window.scrollHeight||window.innerHeight)-8]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  let [width, height] = useWindowSize();

  React.useEffect(()=>{

    var graph = new LiteGraphJS.LGraph();

    //config
    LiteGraphJS.LiteGraph.debug = true

    var canvas = new LiteGraphJS.LGraphCanvas("#main", graph);

    graph.onAfterExecute = function() {
      canvas.draw(true);
    };

    setLiteGraph(graph)
    setLiteGraphCanvas(canvas)

    setInterval(()=>{
      //console.log(graph)
      graph.runStep()
    },250)

  },[])

  function handleMovePiece(piece, fromSquare, toSquare) {

    const newPieces = pieces
      .map((curr, index) => {
        if (piece.index === index) {
          return `${piece.name}@${toSquare}`
        } else if (curr.indexOf(toSquare) === 2) {
          return false // To be removed from the board
        }
        return curr
      })
      .filter(Boolean)

    setPieces(newPieces)
  }

  return (
    <div id="mainCanvas" style={{position:"relative",overflow:'hidden',background:"#222",width:'100%',height:"100%"}}>
      <canvas id='main' width={Math.max(100,width)} height={Math.max(100,height)} tabIndex={10} style={{background:"#111111",outline: 'none',borderBottom:'1px solid #666666'}}></canvas>
      <div id="reactElements"></div>
    </div>
  );
}

// <div className="demo">
//   <Chess pieces={pieces} onMovePiece={handleMovePiece} />
// </div>

export default App;
