import React from 'react'

import Svg from 'shared/components/svg'
import oursToHackSvg from './images/ours_to_hack.svg'
import metagovSvg from './images/metagov.svg'

const feats = [
  {
    image: <Svg svg={ oursToHackSvg } />,
    translationListIndex: 0
  },
  {
    image: <Svg svg={ metagovSvg } />,
    translationListIndex: 1
  }
]

export default feats
