import React from 'react'




const CardCastum = (props) => {

    const { items } = props
    // console.log("items", items)


    return (
        <div className=' col-3'>
            <div className='anualgrross'style={{backgroundColor:items.bgcolor && items.bgcolor}}>
                
                    <div className='cardcastum' >
                        <div className='img-outter-leyer'>
                            <div className='img-leyer'style={{backgroundColor:items.bgcolorround && items.bgcolorround}} >
                                {items.img}
                            </div>
                        </div>
                        <div className='delivery d-flex flex-column align-items-center justify-content-center' >
                            <span className='fasttext'style={{color:items.colortext && items.colortext}}>
                                <h4 className='value'>
                                    {items.value}
                                </h4>
                            </span>
                            <span className='orders'style={{color:items.colortext && items.colortext}}>
                                <span className='value'>
                                    {items.value1}
                                </span>
                                </span>
                        </div>
                    </div>


                
            </div>
        </div>

    )
}

export default CardCastum
