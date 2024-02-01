import React, { Component } from 'react'
// import Images from '../../utilis/images'
import Navebar from '../../Component/Navebar'
import Header from '../../Component/header'
import Footer from '../../Component/Footer'
import Iphone from '../../Component/Iphone'
import ToDays from '../../Component/ToDays'
import Cayegories from '../../Component/Cayegories'
import Products from '../../Component/Products'
import Ourproduct from '../../Component/Ourproduct'
import Music from '../../Component/Music'
import Featured from '../../Component/Featured'
import Service from '../../Component/Service'
import '../../asset/style/Style.scss';
import '../../asset/style/footer.scss';
import '../../asset/style/_header.scss';
import '../../asset/style/cumstcard.scss';
import '../../asset/style/cumstcard2.scss';
import '../../asset/style/iphone.scss';
import axios from 'axios'


class Home extends Component {


  constructor(props) {
    super(props)

    this.state = {

    }
  }



  componentDidMount() {
    axios.get('https://mocki.io/v1/e93df3d3-714f-47c5-a223-e12112899cdd')
    

    //('https://fakestoreapi.com/products')
      .then(response => {
        // console.log("3333", response?.data)
        this.setState({ posts: response.data })

      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { posts } = this.state
    return (
      <>

        <Navebar />
       {posts && <Header posts={posts} /> }
        <div className='container mt-0  '>
          <hr className='w-100' />
        </div>
        <Iphone />
        {posts && <ToDays posts={posts} />}

        <div className='container '>
          <hr className='w-100' />
        </div>
        <Cayegories />
        <div className='container '>
          <hr className='w-100' mt-2 mb-2 />
        </div>
        {posts && <Products posts={posts} />}
        <Music />
        {posts &&<Ourproduct posts={posts}/>}
        <Featured />
        <Service />
        <Footer />
      </>
    )
  }
}
export default Home
