import React from 'react';
import ReactDOM from 'react-dom'
import Avatar from 'avataaars'

function Web2Player() {
  this.addProperty("interval", 3000);
  this.addProperty("event", "tick");
  this.addOutput("on_tick", -1);
  this.time = 0;
  this.last_interval = 3000;
  this.triggered = false;
  this.size[0] = 140
}

Web2Player.title = "Web 2.0 Player";
Web2Player.desc = "Player sending money and attention until it runs out";

Web2Player.prototype.onStart = function() {
  this.time = 0;
};

Web2Player.prototype.getTitle = function() {
  return "Web 2.0 Player";
};

Web2Player.on_color = "#AAA";
Web2Player.off_color = "#222";

Web2Player.prototype.onDrawBackground = function() {
  this.boxcolor = this.triggered
  ? Web2Player.on_color
  : Web2Player.off_color;
  this.triggered = false;

  if (this.flags.collapsed) {
    this.destory()///SHOULD WE DESTORY THE ELEMENT FROM THE DOM OR JUST NOT SHOW IT?! THIS SEEMS WEIRD
  }else{
    this.render(
      <div>
        <Avatar
          style={{width: '100px', height: '100px'}}
          avatarStyle='Circle'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />
        💸💸💸💸💸
      </div>
    )
  }
};

Web2Player.prototype.onExecute = function() {
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

  this.triggered = true;
  this.time = this.time % this.last_interval;
  this.trigger("on_tick", this.properties.event);
  if (this.inputs && this.inputs.length > 1 && this.inputs[1]) {
    this.setOutputData(1, true);
  }
  this.outputs[0].label = this.last_interval.toString()+"ms"
};

Web2Player.prototype.onGetInputs = function() {
  return [["interval", "number"]];
};

Web2Player.prototype.onGetOutputs = function() {
  return [["tick", "boolean"]];
};

export default Web2Player
