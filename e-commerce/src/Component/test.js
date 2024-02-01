import React from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
import Images from '../utilis/images'
import { Insta, Twiter } from '../asset/images/svg'
import { Link } from 'react-router-dom'


const card = [
    { img: Images.tomcruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emmawatson, valueone: "Tom Cruise", value: "Managing Director" },
    { img: Images.willsmith, valueone: "Tom Cruise", value: "Product Designer" },
    { img: Images.tomcruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emmawatson, valueone: "Tom Cruise", value: "Managing Director" },
    { img: Images.willsmith, valueone: "Tom Cruise", value: "Product Designer" },
    { img: Images.tomcruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emmawatson, valueone: "Tom Cruise", value: "Managing Director" },
    { img: Images.willsmith, valueone: "Tom Cruise", value: "Product Designer" },
    { img: Images.tomcruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emmawatson, valueone: "Tom Cruise", value: "Managing Director" },
    { img: Images.willsmith, valueone: "Tom Cruise", value: "Product Designer" },
    { img: Images.tomcruise, valueone: "Tom Cruise", value: "Founder & Chairman" },
    { img: Images.emmawatson, valueone: "Tom Cruise", value: "Managing Director" },
    { img: Images.willsmith, valueone: "Tom Cruise", value: "Product Designer" }

]

const Test = () => {
    return (
       
            <div className="container">
                <ReactElasticCarousel itemsToShow={3} showArrows={false}>
                    {card.map((item, index) => {
                        return <div className='company mt-2'>
                            <img src={item.img} alt='' />
                            <div className='postsofperson mt-3 d-flex flex-column'>
                                <div className='value d-flex flex-column' >
                                    {item.valueone}
                                </div>
                                <div className='value d-flex flex-column' >
                                    {item.value}
                                </div>
                                <div className='socialimg'>
                                    <Twiter />
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

export default Test
