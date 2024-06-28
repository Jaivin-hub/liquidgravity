import React from 'react';
import '../assets/css/detailsview.css';
import plus from '../assets/img/Group 1.png'

function Detailsview() {
  return (


    <div className='col-lg-8'>
      <div className='detailsview wraper mb-3'>
        <div className='wraper'>
          <h3 className='detailheading'>Atom Details</h3>
          <div className="form-row row">
            <div className='ium-input-container col-md-4  mb-3'>
              <label htmlFor="">Package</label>
              <div></div>
              <select id="package" name="package">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              {/* <input type="text" /> */}
            </div>
            <div className='col-md-4  mb-3'>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className='col-md-4 mb-3'>
              <div className='trycontainer row'>
                <div className='col-sm-1 pr-0'>
                  <div className='pluscontainer'>
                    <img src={plus} alt="icon" />
                  </div>
                </div>
                <div className='col-sm-6 pl-3'>
                  <button className='IUMbtn'>IUM</button>
                </div>
                <div className='col-sm-5 pl-0'>
                  <button className='trybtn'>Try</button>
                </div>
              </div>
              <div>
                {/* <button className='trybtn'>Try</button> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col-md-4  mb-3'>
              <label htmlFor="">Z#</label>
              <input type="text" />
            </div>
            <div className='col-md-4  mb-3'>
              <label htmlFor="">A#</label>
              <input type="text" />
            </div>
            <div className='col-md-4  mb-3'>
              <label htmlFor="">MeV</label>
              <input type="text" />
            </div>
        
            <div className='col-md-4  mb-3'>
              <label htmlFor="">Half Life</label>
              <input type="text" />
            </div>
            <div className='col-md-4 mb-3'>
              <label htmlFor="">Decay</label>
              <input type="text" />
            </div>
          </div>
        </div>

        {/* <div></div> */}

        <div className="secondlayer wraper">
          <h3 className='detailheading'>Sponsors Details</h3>
          <div className="form-row row">
            <div className='col-md-4 mb-3'>
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className='col-md-4  mb-3'>
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
            <div className='col-md-4 mb-3'>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
          
            <div className='col-md-4 mb-3'>
              <label htmlFor="">City</label>
              <input type="text" />
            </div>
            <div className='col-md-4 mb-3'>
              <label htmlFor="">Country</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row row ">
            <div className='col-md-12 mb-1' style={{flexDirection: 'row'}}>
              <button className='addbtn'>Add</button>
              <button className='cancelbtn'>Cancel</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>

  );
}

export default Detailsview;