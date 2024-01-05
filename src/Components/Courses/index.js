import React from 'react'
import './Course.css'
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import img3 from '../../Images/img3.jpg'
import img4 from '../../Images/img4.webp'
import img5 from '../../Images/img5.webp'
import img6 from '../../Images/img6.jpg'
import img7 from '../../Images/img7.jpg'
import img8 from '../../Images/img8.webp'
import img9 from '../../Images/img9.webp'
const Courses = () => {
    const data = [
        {
            img: img1,
            heading: 'Web Design',
        },
        {
            img: img2,
            heading: 'Development',
        },
        {
            img: img3,
            heading: 'Game Design',
        },
        {
            img: img4,
            heading: 'Video Editing',
        },
        {
            img: img5,
            heading: 'App Design',
        },
        {
            img: img6,
            heading: 'UI/UX Design',
        },
        {
            imgu: img7,
            headings: 'Web design course for beginner',
            time: '01h 30m',
            price: '75$'
        },
        {
            imgu: img8,
            headings: 'Video Editing course for beginner',
            time: '01h 30m',
            price: '75$'
        },
        {
            imgu: img9,
            headings: 'UI/UX Design course for beginner',
            time: '01h 30m',
            price: '75$'
        }


    ]
    return (
        <div>
            <div className='text-center pt-5'>
                <h4>Subjects</h4>
                <h1 style={{ color: '#44425A', fontWeight: 'bold' }}>Explore Top Subjects</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        data.map((i) => {
                            return (
                                <>
                                    <div className='col-6 col-md-4 pt-3'>
                                        <div className='position-relative image'>
                                            <img src={i.img} alt='' className='img-fluid' />
                                            <div className='position-absolute start-50 top-50 translate-middle text-white text-center'>
                                                <h3 style={{ fontWeight: 'bold' }}>{i.heading}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>


                <div className='text-center'>
                    <h4>COURSES</h4>
                    <h1 style={{ color: '#44425A', fontWeight: 'bold' }}> Our Popular Courses</h1>
                </div>
                <div className='row'>
                    {
                        data.map((i) => {
                            return (
                                <>
                                    <div className='col-6 col-md-4'>
                                        <div>
                                            <img src={i.imgu} alt='' className='img-fluid' />
                                            <h5 className='text-center'>{i.headings}</h5>
                                            <div className='d-flex justify-content-between'>
                                                <p>{i.time}</p>
                                                <p>{i.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Courses
