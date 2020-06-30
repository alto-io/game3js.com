import React from 'react'

import Svg from 'shared/components/svg'
import opGamesSvg from './images/op_games.svg'
import etherGunSvg from './images/ether_gun.svg'
import takeBackTheWebSvg from './images/take_back_the_web.svg'
import bufficornSvg from './images/bufficorn.svg'

const feats = [
  {
    image: <Svg svg={ opGamesSvg } />,
    translationListIndex: 0
  },
  {
    image: <Svg svg={ etherGunSvg } />,
    translationListIndex: 1
  },
  {
    image: <Svg svg={ takeBackTheWebSvg } />,
    translationListIndex: 2
  },
  {
    image: <Svg svg={ bufficornSvg } />,
    translationListIndex: 3
  }
]

export default feats
