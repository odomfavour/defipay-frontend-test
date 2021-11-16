import {Modal} from 'react-bootstrap-v5'
import {useState} from 'react'
import Swal, {SweetAlertOptions} from 'sweetalert2'
import {useFormik} from 'formik'
import {createInvoice, InvoiceDtoModel} from '..'
import './invoice-analysis.css'
const initialValues = {
  notes: '',
  customerId: '',
  amount: 0,
  type: 0,
}

const InvoiceRequestModal = (props: {
  show: boolean
  customerEmail: string | undefined
  invoicedetails: InvoiceDtoModel | undefined
  handleClose: () => void
  handleEdit: () => void
  handleSuccess: () => void
}) => {
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    onSubmit: (values, {setStatus, setSubmitting, resetForm}) => {
      setLoading(true)
      setTimeout(() => {
        let data = {
          notes: props.invoicedetails?.notes,
          customerId: props.invoicedetails?.customerId,
          amount: props.invoicedetails?.amount,
          type: props.invoicedetails?.type,
        } as InvoiceDtoModel
        console.log(data)
        createInvoice(data)
          .then((res) => {
            Swal.fire({
              title: 'Success!',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Ok',
            } as SweetAlertOptions).then(() => {
              setLoading(false)
              resetForm()
              props.handleSuccess()
              props.handleClose()
            })
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            if (e.response) {
              setStatus(e.response.data.message)
            } else if (e.request) {
              setStatus('The invoice page detail is incorrect')
            } else {
              setStatus('The invoice page detail is incorrect')
            }
          })
      }, 1000)
    },
  })
  return (
    <>
      <div>
        <Modal
          className='modal fade'
          id='exampleModal'
          aria-labelledby='exampleModalLabel'
          size='lg'
          centered
          aria-hidden='true'
          show={props.show}
          onHide={props.handleClose}
        >
          <div className='modal-header'>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={props.handleClose}
            ></button>
          </div>
          <div className='modal-lg'>
            <div className='modal-content'>
              <div className='modal-body'>
                {formik.status ? (
                  <div className='mb-lg-15 alert alert-danger'>
                    <div className='alert-text font-weight-bold'>{formik.status}</div>
                  </div>
                ) : (
                  <div></div>
                )}
                <form onSubmit={formik.handleSubmit} noValidate id='kt_login_signin_form'>
                  <div className='mb-5 d-flex justify-content-center' role='group'>
                    You’re making a request of DFC {props.invoicedetails?.amount} from{' '}
                    {props.customerEmail}
                  </div>
                  <div className='text-center my-5'>
                    <button
                      className='btn btn-light'
                      onClick={props.handleEdit}
                      type='button'
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      Edit Invoice
                    </button>
                    <button
                      className='btn btn-warning'
                      type='submit'
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      {!loading && <span className='indicator-label'>Send Invoice</span>}

                      {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
                          Please wait...
                          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div>
        {/* {showLink && <SuccessModal handleClose={handleClose} show={showLink} link={link} />} */}
      </div>
    </>
  )
}

export default InvoiceRequestModal
