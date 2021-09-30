import React from 'react'

const Experience = () => {
  return (
    <section className='counter-section section2 defipaybg2 p-t-80 p-b-80 p-t-md-160'>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-10'>
            <div className='row counter-items-v1 p-xl-5'>
              <div className='defipaytitle2'>
                <strong>This is your experience on Defipay</strong>
              </div>

              <div className='defipaytext2'>
                <p>
                  Defipay payments are processed through a private network of computers linked
                  through a shared ledger.Each transaction is simultaneouly recorded in a
                  "Blockchain"
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-9'>
            <div className='preview-galley-v3 m-b-md-100'>
              <img
                className='preview-image-2 animate-float-bob-y'
                src='assets/images/youDefipay.svg'
                alt=''
              />
              <img className='preview-image-1' src='assets/images/icons/apps/yello.png' alt='' />
              <img
                className='preview-image-3 animate-float-bob-y'
                src='assets/images/youDefipay.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
