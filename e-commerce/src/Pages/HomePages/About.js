import React from 'react'
import Navebar from '../../Component/Navebar'
import Headers from '../../Component/header'
import Footer from '../../Component/Footer'
import Service from '../../Component/Service'
import CardCastum from '../../Component/CardCastum'
import CompanyCard from '../../Component/companycard'
import Images from '../../utilis/images'
import { Bag, Dollar, Doller, Home} from '../../asset/images/svg'


const card2 = [{ img: <Home />, value: "10.5K", value1: "Sallers active our site" },
{ img: <Doller />, value: "33K", value1: "Mopnthly Produduct Sale", bgcolor: "#DB4444", bgcolorround: '#fff', colortext: "#fff" },
{ img: <Dollar />, value: "45.5K", value1: "Customer active in our site" },
{ img: <Bag />, value: "25K", value1: "Anual gross sale in our site" }
]


const About = () => {
    return (
        <div>
          <Navebar />
          <Headers />
          <div className='our'>
            <div className='container'>
              <div className='story'>
                <h3>Our Story</h3>
                <div className='exclusivesouth'>
                  <span>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</span>
                  <span>
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
                  </span>
                </div>
              </div>
            <div className='imgstory'>
              <img src={Images.ourstory} height={650} width={750} alt='' />
            </div>
            </div>
          </div>
          <div className='container'>
            <div className='row w-100'>
              {card2.map((items, index) => {
                return (
                  <CardCastum items={items} />
    
                );
    
              })}
            </div>
          </div>
          <CompanyCard />
              {/* <Test /> */}
          <Service mt-4 />
          <Footer />
        </div>
      )
}

export default About
