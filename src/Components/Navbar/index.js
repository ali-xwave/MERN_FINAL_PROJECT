import React from 'react';
import Links from '../Links';
import './Navbar.css';
const Navbar = ({children}) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg d-flex justify-content-between px-5">
                <div class="container-fluid">
                    <h1 style={{ color: '#FF6600', fontWeight: 'bold' }}>Subjects</h1>
                    {/* <img src={Logo} className='img-fluid' style={{ width: '80px' }} /> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div className=''>
                        <ul class="navbar-nav fs-5">
                            <Links link={'/'} title={'Home'} />
                            <Links link={'/Courses'} title={'Courses'} />
                            <Links link={'/Teachers'} title={'Teachers'} />
                            <Links link={'/Addmission'} title={'Addmission'} />
                            <Links link={'/Login'} title={'Login'} />
                            <Links link={'/Register'} title={'Register'} />
                        </ul>
                    </div>
                </div>

            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Navbar