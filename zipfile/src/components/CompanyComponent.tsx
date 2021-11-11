import React from 'react';

type Props = {
  setActiveStep: Function;
  activeStep: number;
}

const CompanyComponent: React.FC<Props> = ({setActiveStep, activeStep}) =>  {
  return (
    <section>
      <h3 className='my-4 fw-bold'>Company</h3>
      <div className="mb-5">
        <input type="email" className="form-control" id="exampleFormControlInput1"
               placeholder="General Email"/>
      </div>
      <div className="mb-5">
        <input type="email" className="form-control" id="exampleFormControlInput1"
               placeholder="Support Email"/>
      </div>
      <div className="mb-5">
        <input type="email" className="form-control" id="exampleFormControlInput1"
               placeholder="Disputes Email"/>
      </div>
      <div className="mb-5">
        <input type="tel" className="form-control" id="exampleFormControlInput1"
               placeholder="Phone Number"/>
      </div>
      <div className="mb-5">
        <input type="tel" className="form-control" id="exampleFormControlInput1"
               placeholder="Website Link for your business"/>
      </div>

      <h4 className='mb-3'>Your business link on social media</h4>
      <small className='mb-3'>Where can your business be found on social networks</small>
      <div className="mb-5">
        <input type="tel" className="form-control mb-3" id="exampleFormControlInput1"
               placeholder="Phone Number"/>
        <input type="tel" className="form-control mb-3" id="exampleFormControlInput1"
               placeholder="Phone Number"/>
        <input type="tel" className="form-control mb-3" id="exampleFormControlInput1"
               placeholder="Phone Number"/>
      </div>
      <h4 className='mb-3'>Office Address</h4>
      <div className="mb-5">
        <input type="tel" className="form-control" id="exampleFormControlInput1"
               placeholder="Type address here"/>
      </div>
      <div className="mb-5">
        <select className="form-select" aria-label="Default select example">
          <option selected>Country</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-5">
        <input type="tel" className="form-control" id="exampleFormControlInput1"
               placeholder="State of Origin"/>
      </div>
      <div className='text-center'>
        <button className='btn btn-warning' onClick={() => setActiveStep(activeStep - 1)}>prev</button>
        <button className='btn btn-warning' onClick={() => setActiveStep(activeStep + 1)}>Next</button>
      </div>
    </section>
  )
}

export default CompanyComponent