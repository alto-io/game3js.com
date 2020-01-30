import React from 'react';
import ReactDOM from 'react-dom'
import Avatar from 'avataaars'

function Web2Player() {
  this.addProperty("interval", 3000);
  this.addProperty("avatarType", 0);
  this.addProperty("event", "tick");
  this.addOutput("", -1);
  this.horizontal = true;
  this.time = 0;
  this.cash = "💸💸💸💸💸"
  this.mouthType = 'Smile'
  this.last_interval = 3000;
  this.triggered = false;
  this.size[0] = 140;
  this.min = 2000;
  this.max = 5000;

  // avatar settings
  this.avatarSettings = {
  avatarStyle: 'Circle',
  topType: 'LongHairMiaWallace',
  accessoriesType: 'Prescription02',
  hairColor: 'BrownDark',
  facialHairType: 'Blank',
  clotheType: 'Hoodie',
  clotheColor: 'PastelBlue',
  eyeType: 'Happy',
  eyebrowType: 'Default',
  skinColor: 'Light'
  }

  this.setAvatarSettings = (value) => {
    switch (value) {
      case 1:
        this.avatarSettings = {
        avatarStyle: 'Circle',
        topType: 'ShortHairFrizzle',
        accessoriesType: 'Blank',
        hairColor: 'Blonde',
        facialHairType: 'BeardMedium',
        facialHairColor:'Blonde',
        clotheType: 'BlazerShirt',
        eyeType: 'Side',
        eyebrowType: 'SadConcerned',
        skinColor: 'Pale'
        }
      break;

      case 2:

      this.avatarSettings = {
        avatarStyle: 'Circle',
        topType: 'LongHairCurvy',
        accessoriesType: 'Blank',
        hairColor: 'PastelPink',
        facialHairType: 'Blank',
        clotheType: 'ShirtScoopNeck',
        clotheColor: 'PastelYellow',
        eyeType: 'Default',
        eyebrowType: 'RaisedExcitedNatural',
        skinColor: 'Black'
        }
      break;

      case 3:
      this.avatarSettings = {
        avatarStyle: 'Circle',
        topType: 'ShortHairShortFlat',
        accessoriesType: 'Round',
        hairColor: 'BrownDark',
        facialHairType: 'Blank',
        clotheType: 'CollarSweater',
        clotheColor: 'PastelGreen',
        eyeType: 'Default',
        eyebrowType: 'DefaultNatural',
        skinColor: 'Pale'
        }
      break;

      default:
      this.avatarSettings = {
        avatarStyle: 'Circle',
        topType: 'LongHairMiaWallace',
        accessoriesType: 'Prescription02',
        hairColor: 'BrownDark',
        facialHairType: 'Blank',
        clotheType: 'Hoodie',
        clotheColor: 'PastelBlue',
        eyeType: 'Happy',
        eyebrowType: 'Default',
        skinColor: 'Light'
        }
      break;
    }
  }


}


Web2Player.title = "Player";
Web2Player.desc = "Player sending money and attention until it runs out";

Web2Player.prototype.onStart = function() {
  this.time = 0;
  this.setAvatarSettings(this.properties.avatarType);
};

Web2Player.prototype.onPropertyChanged = function() {
  this.setAvatarSettings(this.properties.avatarType);
}

Web2Player.prototype.getTitle = function() {
  return this.title;
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
          mouthType={this.mouthType}
          {...this.avatarSettings}
        />
        {this.cash}
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
    this._last_v = Math.random() * (this.max - this.min) + this.min
    // this.getInputOrProperty("interval") | 0
  );

  if (
    !trigger &&
    (this.time < this.last_interval || isNaN(this.last_interval))
  ) {
    if (this.inputs && this.inputs.length > 1 && this.inputs[1]) {
      this.setOutputData(1, false);
    }

    if (this.time > 2000)
      this.mouthType = "Smile"

    return;
  }

  this.triggered = true;
  this.time = this.time % this.last_interval;
  this.trigger("", this.properties.event);
  if (this.inputs && this.inputs.length > 1 && this.inputs[1]) {
    this.setOutputData(1, true);
  }

  this.mouthType = "Sad"
  if (this.cash.length > 1) {
    this.cash = this.cash.substring(0, this.cash.length - 2)
  }
  else (this.cash = "💸💸💸💸💸")
  // this.outputs[0].label = this.last_interval.toString()+"ms"
};

Web2Player.prototype.onGetInputs = function() {
  return [["interval", "number"]];
};

Web2Player.prototype.onGetOutputs = function() {
  return [["tick", "boolean"]];
};

export default Web2Player
