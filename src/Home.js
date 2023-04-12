import React from 'react'
import Banner from './banner/Banner'
import Video from './banner/Video'
import WeAre from './what/WeAre'
import Services from './Services'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Video/>
        <WeAre/>
       <Services/>
    </div>
  )
}

export default Home