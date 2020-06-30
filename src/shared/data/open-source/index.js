import React from 'react'

import Svg from 'shared/components/svg'
import babylonSvg from './images/babylon.svg'
import phaserSvg from './images/phaser.svg'
import colyseusSvg from './images/colyseus.svg'

const feats = [
  {
    image: <Svg svg={ babylonSvg } />,
    translationListIndex: 0
  },
  {
    image: <Svg svg={ phaserSvg } />,
    translationListIndex: 1
  },
  {
    image: <Svg svg={ colyseusSvg } />,
    translationListIndex: 2
  }
]

export default feats
