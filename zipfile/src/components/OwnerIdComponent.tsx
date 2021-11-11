import React from 'react';

type Props = {
  setActiveStep: Function;
  activeStep: number;
}

const OwnerIdComponent: React.FC<Props> = ({setActiveStep, activeStep}) =>  {
  return (
    <section>
      <h4 className='mb-3'>Owner Identification</h4>
      <form action=''>
        <div className='row'>
          <div className='col-md-6'>
            <div className="mb-5">
              <input type="tel" className="form-control" id="exampleFormControlInput1"
                     placeholder="First Name"/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="mb-5">
              <input type="tel" className="form-control" id="exampleFormControlInput1"
                     placeholder="Last Name"/>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <input type="tel" className="form-control" id="exampleFormControlInput1"
                 placeholder="Nationality"/>
        </div>
        <div className="mb-5">
          <input type="tel" className="form-control" id="exampleFormControlInput1"
                 placeholder="Identification Documents"/>
        </div>
        <div className="mb-5">
          <input type="tel" className="form-control" id="exampleFormControlInput1"
                 placeholder="Enter the number on the identification documents"/>
        </div>
        <div className="mb-5 text-center">
          <p className='fw-bold'>Upload a copy of the selected ID</p>
          <button className='btn-light btn'>Add file</button>
        </div>
        <div className="mb-5">
          <input type="tel" className="form-control" id="exampleFormControlInput1"
                 placeholder="Enter the number on the identification documents"/>
        </div>
        <div className="mb-5">
          <input type="tel" className="form-control" id="exampleFormControlInput1"
                 placeholder="Enter the number on the identification documents"/>
        </div>
        <div className="mb-5 text-center">
          <p className='fw-bold'>Upload a copy of the selected file</p>
          <button className='btn-light btn'>Add file</button>
        </div>
        <small>To learn more about what other documents that can be used as proof of address learn more</small>
        <div className="mb-5 text-center">
          <button className='btn-learning btn btn-warning' onClick={() => setActiveStep(activeStep + 1)}>Save</button>
        </div>
      </form>
    </section>
  )
}

export default OwnerIdComponent