import React from 'react'

const Teachers = () => {
    const card = [
        {
            // img: img1,
            name: 'Ijaz Liaqat',
            title: 'Web Designer'
        },
        {
            name: 'Wajahat',
            title: 'Development'
        },
        {
            name: 'Muzammil',
            title: 'UI/UX Designer'
        }
    ]
    return (
        <div className='container'>
            <div className='text-center pt-5 pb-3'>
                <h4>  TEACHERS</h4>
                <h1 style={{ color: '#44425A', fontWeight: 'bold' }}>Meet Our Teachers</h1>
            </div>
            <div className='row'>
                {
                    card.map((i) => {
                        return (
                            <>
                                <div className='col col-md-4 pt-4'>
                                    <h5>{i.name}</h5>
                                    <p>{i.title}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Teachers
