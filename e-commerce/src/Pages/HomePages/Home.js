import React, { useEffect, useState } from 'react'
// import Images from '../../utils/images'
import Navbar from '../../Component/Navbar'
import Header from '../../Component/header'
import Footer from '../../Component/Footer'
import Iphone from '../../Component/Iphone'
import ToDays from '../../Component/ToDays'
import Categories from '../../Component/Categories'
import Products from '../../Component/Products'
import OurProducts from '../../Component/OurProducts'
import Music from '../../Component/Music'
import Featured from '../../Component/Featured'
import Service from '../../Component/Service'
import '../../asset/style/Style.scss';
import '../../asset/style/footer.scss';
import '../../asset/style/_header.scss';
import '../../asset/style/CustomCard.scss';
import '../../asset/style/CustomCard2.scss';
import '../../asset/style/iphone.scss';
import axios from 'axios'
import { useSelector } from 'react-redux'


const Home = () => {

  const [posts, setPosts] = useState([])
  const {  advocaat, } = useSelector((state) => state.Auth)
  useEffect(() => {
    axios.get('https://mocki.io/v1/e93df3d3-714f-47c5-a223-e12112899cdd')
      .then(response => {
        const data = response.data.map(item => {
          // console.log('response', response);
          const finite = advocaat.length > 0 ? advocaat.find(o => {
            return o.id === item.id
          }) : { profundity: 1 }

          return ({
            profundity: finite?.profundity || 1,
            ...item
          })
        }
        )

        setPosts(data)

        console.log('data', data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [advocaat])


  return (
    <>

      <Navbar />
      {posts && <Header posts={posts} />}
      <div className='container mt-0  '>
        <hr className='w-100' />
      </div>
      <Iphone />
      {posts && <ToDays posts={posts} />}

      <div className='container '>
        <hr className='w-100' />
      </div>
      <Categories />
      <div className='container '>
        <hr className='w-100' mt-2 mb-2 />
      </div>
      {posts && <Products posts={posts} />}
      <Music />
      {posts && <OurProducts posts={posts} />}
      <Featured />
      <Service />
      <Footer />
    </>
  )
}

export default Home
