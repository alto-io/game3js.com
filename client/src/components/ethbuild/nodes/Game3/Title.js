import React from 'react';
import ReactDOM from 'react-dom'
import Blockies from 'react-blockies';

import { Input, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Text() {
  this.properties =  {fontSize: 44,blockieSize: 50,placeholder:"",title:"Title",fontFamily:"'Rubik Mono One', sans-serif",color:"#dddddd"}
  this.size = [500, 0];
  this.interval = 1000;
  this.time = 0;
  this.last_interval = 1000;
  this.min = 38344562324;
  this.max = 62211353213;
  this.addInput("", -1);
  this.addInput("", -1);
  this.addInput("", -1);
  this.addOutput("", -1);
	this.horizontal = true;

  this.displayNum = Math.floor(Math.random() * (this.max - this.min) + this.min);
}

Text.title = "Title";
Text.title_color = "#222"
//Text.bgcolor ="#000"

Text.prototype.onExecute = function() {
  var dt = this.graph.elapsed_time * 1000; //in ms

  var trigger = this.time == 0;

  this.time += dt;
  this.last_interval = Math.max(
    1,
    this.getInputOrProperty("interval") | 0
  );

  if (
    !trigger &&
    (this.time < this.last_interval || isNaN(this.last_interval))
  ) {
    if (this.inputs && this.inputs.length > 1 && this.inputs[1]) {
      this.setOutputData(1, false);
    }
    return;
  }

  this.displayNum += 3521;

};

Text.prototype.onConnectionsChange = function(args){
  console.log("onConnectionsChange",args)
}

Text.prototype.getTitle = function() {
  if (this.flags.collapsed) {
    return this.value;
  }
  if(this.properties.title&&this.properties.title!="Watch"){
    return this.properties.title;
  }
  if(this.value){
    return (typeof this.value)
  }
  return this.title
};

Text.prototype.onDrawBackground = function(ctx) {

  if (this.flags.collapsed) {
    /*this.render(
      <div>

      </div>
    )*/
    this.destory()///SHOULD WE DESTORY THE ELEMENT FROM THE DOM OR
  }else{
    this.render(
      <div>
        <form className={"SOMECONTAINERCLASS"} noValidate autoComplete="off">
          <Input
            autoFocus
            style={{opacity:0.77,width:"100%",height:40,color:this.properties.color,fontSize:this.properties.fontSize,marginTop:10, fontFamily: this.properties.fontFamily}}
            id="outlined-name"
            label="Name"
            placeholder={'$' + this.displayNum}
            value={'$' + this.displayNum.toLocaleString()}
            margin="normal"
            disabled
            variant="outlined"
          />
        </form>
      </div>
    )
  }


};




export default Text
