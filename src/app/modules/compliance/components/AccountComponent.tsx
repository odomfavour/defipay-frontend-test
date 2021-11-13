import React from 'react'

type Props = {
  setActiveStep: Function
  activeStep: number
}

const AccountComponent: React.FC<Props> = ({setActiveStep, activeStep}) => {
  return (
    <section>
      <h4 className='mb-5 fw-bold'>Account</h4>
      <div className='mb-5'>
        <input
          type='tel'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='Personal Crypto Address'
        />
      </div>
      <div className='mb-5'>
        <input
          type='tel'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='Account Name'
        />
      </div>
      <div className='mb-5 text-center'>
        <button
          className='btn-learning btn btn-warning'
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Save
        </button>
      </div>
    </section>
  )
}

export default AccountComponent
