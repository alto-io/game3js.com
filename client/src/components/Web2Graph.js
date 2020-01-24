import React from 'react';
import Backend from 'react-dnd-html5-backend'
//import TouchBackend from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'

import LiteGraphJS from 'litegraph.js/build/litegraph.js'
import 'litegraph.js/css/litegraph.css'



function Web2Graph() {

  const [liteGraph, setLiteGraph] = React.useState();
  const [liteGraphCanvas, setLiteGraphCanvas] = React.useState();
  const demoNodes = require('./graphs/graph.json')

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

    graph.configure(demoNodes)

    setLiteGraph(graph)
    setLiteGraphCanvas(canvas)

    setInterval(()=>{
      //console.log(graph)
      graph.runStep()
    },250)

  },[])

  return (

    <DndProvider backend={Backend}>
      <div id="mainCanvas" style={{position:"relative",overflow:'hidden',background:"#222",width:'100%',height:"100%"}}>
        <canvas id='main' width={Math.max(100,width)} height={Math.max(100,height)} tabIndex={10} style={{background:"#111111",outline: 'none',borderBottom:'1px solid #666666'}}></canvas>
        <div id="reactElements"></div>
      </div>
    </DndProvider>
  );
}


export default Web2Graph;
