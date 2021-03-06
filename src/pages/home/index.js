import React from 'react'

import ScreenSizeProvider from 'shared/components/screen-size-provider'
import Hero from 'shared/components/hero-section'
import Identity from 'shared/components/identity-section'
import Data from 'shared/components/data-section'
import Ownership from 'shared/components/ownership-section'
import OpenSource from 'shared/components/open-source-section'
import PlatformCoop from 'shared/components/platform-coop-section'
/*
import GettingStarted from 'shared/components/getting-started-section'
import WhatYouCanBuild from 'shared/components/what-you-can-build-section'
import WhatArePeopleBuilding from 'shared/components/what-are-people-building-section'
import Gateway from 'shared/components/gateway-section'
import PublicationsAndTalks from 'shared/components/publications-and-talks-section'
import Community from 'shared/components/community-section'
*/

const Home = () => (
  <div>
    <ScreenSizeProvider>
      <Hero />
      <Identity />
      <Data />
      <Ownership />
      <OpenSource />
      <PlatformCoop />
      { 
      /*
      <GettingStarted />
      <Gateway />
      <WhatArePeopleBuilding />
      <WhatYouCanBuild />
      <PublicationsAndTalks />
      <Community />
      */
      }
    </ScreenSizeProvider>
  </div>
)

export default Home
