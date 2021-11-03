import React from 'react';

type Props = {
  setActiveStep: Function;
  activeStep: number;
}

const ProfileComponent: React.FC<Props> = ({setActiveStep, activeStep}) =>  {
  return (
    <section>
      <h3 className='my-4 fw-bold'>Profile</h3>
      <div className="mb-5">
        <input type="text" className="form-control" id="exampleFormControlInput1"
               placeholder="Business Name"/>
      </div>
      <div className="mb-5">
        <input type="text" className="form-control" id="exampleFormControlInput1"
               placeholder="What do you do? eg. I am a fashion designer"/>
      </div>
      <div className="mb-5">
        <select className="form-select" aria-label="Default select example">
          <option selected>Staff size</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-5">
        <input className="form-control" list="industrylistOptions" id="exampleDataList" placeholder="Industry"/>
        <datalist id="industrylistOptions">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist>
      </div>
      <div className="mb-5">
        <select className="form-select" aria-label="Default select example">
          <option selected>Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-5">
        <input className="form-control" list="businesslistOptions" id="exampleDataList" placeholder="Business Type"/>
        <datalist id="businesslistOptions">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist>
      </div>
      <div className='mb-5'>
        <div className='text-center'>
          <button className='btn btn-light'>Cancel</button>
          <button className='btn btn-light' onClick={() => setActiveStep(activeStep + 1)}>Next</button>
        </div>
      </div>
    </section>
  )
}

export default ProfileComponent