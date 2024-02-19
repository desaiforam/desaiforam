import React from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
import Images from '../utils/images'
import { Insta, Twier,Link } from '../asset/images/svg'



const card = [
    { img: Images.cruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emanation, valueone: "Emma Watson", value: "Managing Director" },
    { img: Images.wellsite, valueone: "Will Smith", value: "Product Designer" },
    { img: Images.cruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emanation, valueone: "Emma Watson", value: "Managing Director" },
    { img: Images.wellsite, valueone: "Will Smith", value: "Product Designer" },
    { img: Images.cruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emanation, valueone: "Emma Watson", value: "Managing Director" },
    { img: Images.wellsite, valueone: "Will Smith", value: "Product Designer" },
    { img: Images.cruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emanation, valueone: "Emma Watson", value: "Managing Director" },
    { img: Images.wellsite, valueone: "Will Smith", value: "Product Designer" },
    { img: Images.cruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emanation, valueone: "Emma Watson", value: "Managing Director" },
    { img: Images.wellsite, valueone: "Will Smith", value: "Product Designer" }

]

const companycard = () => {
    return (
       
            <div className="container">
                <ReactElasticCarousel itemsToShow={3} showArrows={false}>
                    {card.map((item, index) => {
                        return <div className='company mt-2'>
                            <img src={item.img} alt='' />
                            <div className='postsofperson mt-3 d-flex flex-column gap-1'>
                                <div className='value d-flex flex-column 'style={{fontSize:'32px',bottom:"0"}} >
                                    {item.valueone}
                                </div>
                                <div className='value d-flex flex-column'style={{fontSize:'16px', lineHeight:'24px'}} >
                                    {item.value}
                                </div>
                                <div className='socialimg'>
                                    <Twier />
                                    <Insta />
                                    <Link />
                                </div>
                            </div>

                        </div>

                    })}


                </ReactElasticCarousel>
            </div>
       
    )
}

export default companycard
