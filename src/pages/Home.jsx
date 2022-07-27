import React from 'react'
import Footer from '../components/footer/Footer'
import Post from '../components/HomePost/Post'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
      
  <div>
  <div  className="shadow p-3 mb-3 bg-white rounded" >
         <Navbar />

          </div>   
          <Post />
         <Slider />
<Footer />


  </div>
  )
}

export default Home