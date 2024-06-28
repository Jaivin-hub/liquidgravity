import React from 'react'
import '../assets/css/style.css'
import user from '../assets/img/userblue.png'

function Subdetails() {
  return (
    
    <div className='col-lg-4 sideSpc'>
            <div className='subdetailsbox mb-3'>
                <div className='tophead'    >
                    <div><h3 className='detailheading'>Atom Details</h3></div>
                    <div><span className='viewtext'>View All</span></div>
                </div>
                <div className='listview scroll'>
                    <div className='firstset'>
                        <div className='setone'> 
                            <div className='imageavathar'>M</div>
                            <div className='text'>Magnesium</div>
                        </div>
                        <div><button className='viewbtn'>View</button></div>
                    </div>
                    <div className='firstset'>
                        <div className='setone'> 
                            <div className='imageavatharP'>P</div>
                            <div className='text'>Phosphorus</div>
                        </div>
                        <div><button className='viewbtn'>View</button></div>
                    </div>
                    <div className='firstset'>
                        <div className='setone'> 
                            <div className='imageavatharM'>M</div>
                            <div className='text'>Manganese</div>
                        </div>
                        <div><button className='viewbtn'>View</button></div>
                    </div>
                    <div className='firstset'>
                        <div className='setone'> 
                            <div className='imageavatharG'>G</div>
                            <div className='text'>Germanium</div>
                        </div>
                        <div><button className='viewbtn'>View</button></div>
                    </div>
                </div>  
            </div>
            <div className='subdetailsbox2 mb-3'>
                <div className='tophead'    >
                    <div><h3 className='detailheading'>Sponsors List</h3></div>
                    <div><span className='viewtext'>View All</span></div>
                </div>
                <div className='listview scroll'>
                    <div className='firstset'>
                        <div className='setone'> 
                            <div className='avatarbg'><img className='useravathar' src={user} alt="ee" /></div>
                            <div className='text'>Magnesium</div>
                        </div>
                        <div><button className='viewbtn'>View</button></div>
                    </div>
                    <div className='firstset'>
                        <div className='setone'> 
                            <div className='avatarbg'><img className='useravathar' src={user} alt="" /></div>
                            <div className='text'>Phosphorus</div>
                        </div>
                        <div><button className='viewbtn'>View</button></div>
                    </div>
                    <div className='firstset'>
                        <div className='setone'> 
                            <div className='avatarbg'><img className='useravathar' src={user} alt="" /></div>
                            <div className='text'>Manganese</div>
                        </div>
                        <div><button className='viewbtn'>View</button></div>
                    </div>
                    <div className='firstset'>
                        <div className='setone'> 
                            <div className='avatarbg'><img className='useravathar' src={user} alt="" /></div>
                            <div className='text'>Germanium</div>
                        </div>
                        <div><button className='viewbtn'>View</button></div>
                    </div>
                </div>  
            </div>
    </div>
    
  
  )
}

export default Subdetails