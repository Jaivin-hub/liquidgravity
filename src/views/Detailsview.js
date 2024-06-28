import React from 'react';
import '../assets/css/detailsview.css';
import plus from '../assets/img/Group 1.png'

function Detailsview() {
  return (
    <div className='detailsview'>
      <div>
        <h3 className='detailheading'>Atom Details</h3>
        <div className="form-row">
          <div className='ium-input-container'>
            <label htmlFor="">Package</label>
            <div></div>
            {/* <select id="package" name="package">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select> */}
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className=''>
            <div className='trycontainer'>
            <div className='pluscontainer'><img src={plus} alt="" /><img src="" alt="" /></div>
              <button className='IUMbtn'>IUM</button>
              <button className='trybtn'>Try</button>
            </div>
            <div>
              {/* <button className='trybtn'>Try</button> */}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="">Z#</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">A#</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">MeV</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="">Half Life</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Decay</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div></div>
      <div className="secondlayer">
        <h3 className='detailheading'>Sponsors Details</h3>
        <div className="form-row">
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="">City</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-roww">
          <div>
            <button className='addbtn'>Add</button>
          </div>
          <div>
            <button className='cancelbtn'>Cancel</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Detailsview;