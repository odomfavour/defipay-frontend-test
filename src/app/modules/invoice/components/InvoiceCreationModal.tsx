import {Modal} from 'react-bootstrap-v5'
import {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {InvoiceDtoModel} from '..'
import './invoice-analysis.css'
import {CustomerViewModel} from '../../customer'
import InvoiceRequestModal from './InvoiceRequestModel'
const initialValues = {
  notes: '',
  customerId: '',
  amount: 0,
  type: 0,
}

const invoiceSchema = Yup.object().shape({
  notes: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(500, 'Maximum 500 symbols')
    .required('Note is required'),
  type: Yup.string().required('Who Pays for the charge is required'),
  amount: Yup.string().required('Amount is required'),
  customerId: Yup.string().required('Customer is required'),
})

const InvoiceCreationModal = (props: {
  show: boolean
  customers: CustomerViewModel[] | undefined
  handleClose: () => void
  openSuccess: () => void
  onCreateSuccess: () => void
}) => {
  const [loading, setLoading] = useState(false)
  const [showfinal, setFinalShow] = useState(false)
  const [custEmail, setCustomerEmail] = useState('')
  const [invoicedata, setInvoiceData] = useState<InvoiceDtoModel | undefined>(undefined)
  const handleCloseFinal = () => setFinalShow(false)
  const handleEditShow = () => props.show
  const handleSuccess = () => props.onCreateSuccess()
  const formik = useFormik({
    initialValues,
    validationSchema: invoiceSchema,
    onSubmit: (values, {setStatus, setSubmitting, resetForm}) => {
      setLoading(true)
      setTimeout(() => {
        let data = {
          notes: values.notes,
          customerId: values.customerId,
          amount: values.amount,
          type: values.type,
        } as InvoiceDtoModel
        setInvoiceData(data)
        setFinalShow(true)
        setLoading(false)
        const dem = props.customers?.filter((x) => x.customerId.toString() === values.customerId)[0]
        setCustomerEmail(dem?.emailAddress as string)
        props.handleClose()
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
            <h5 className='modal-title justify-content-center' id='exampleModalLabel'>
              What type of invoice you want to create?
            </h5>
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
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        id='inlineRadio1'
                        value='1'
                        // onChange={formik.handleChange}
                        onChange={(event) => {
                          formik.setFieldValue('type', event.currentTarget.value)
                        }}
                        defaultChecked={formik.values.type === 1}
                        name='type'
                      />
                      <label className='form-check-label invoice-type' htmlFor='inlineRadio1'>
                        Simple Invoice
                        <i className='invoice-type-desc'>
                          {' '}
                          Set amount, Notes, and Request payment from a customer
                        </i>
                      </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='type'
                        id='inlineRadio2'
                        value='2'
                        // onChange={formik.handleChange}
                        onChange={(event) => {
                          formik.setFieldValue('type', event.currentTarget.value)
                        }}
                        // onChange={formik.handleChange}
                        defaultChecked={formik.values.type === 2}
                      />
                      <label className='form-check-label invoice-type' htmlFor='inlineRadio1'>
                        Detailed Invoice
                        <i className='invoice-type-desc'>
                          {' '}
                          This page will be deleted and the link will be freed for use
                        </i>
                      </label>
                    </div>

                    {formik.touched.type && formik.errors.type && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.type}</span>
                      </div>
                    )}
                  </div>
                  <span style={{fontSize: '16px', lineHeight: '20px', fontWeight: 600}}>
                    {formik.values.type.toString() === '1'
                      ? 'Simple Invoice'
                      : formik.values.type.toString() === '2'
                      ? 'Detailed Invoice'
                      : ''}
                  </span>
                  <hr />
                  <div className='mb-5'>
                    <label style={{fontSize: '16px', lineHeight: '20px', fontWeight: 600}}>
                      Select Customer
                    </label>
                    <select
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.customerId && formik.errors.customerId},
                        {
                          'is-valid': formik.touched.customerId && !formik.errors.customerId,
                        }
                      )}
                      {...formik.getFieldProps('customerId')}
                    >
                      <option key='0' value='0'>
                        Choose One
                      </option>
                      {props.customers &&
                        props.customers.map((x) => (
                          <option key={x.customerId.toString()} value={x.customerId.toString()}>
                            {x.lastName + ' ' + x.firstName}
                          </option>
                        ))}
                    </select>
                    {formik.touched.customerId && formik.errors.customerId && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.customerId}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-5'>
                    <div className='row'>
                      <div
                        className='col-md-2'
                        style={{fontSize: '16px', lineHeight: '20px', fontWeight: 600}}
                      >
                        Amount
                      </div>
                      <div className='col-md-3'></div>
                      <div className='col-md-7'>
                        <div className='input-group mb-5'>
                          <span
                            className='input-group-text'
                            style={{fontSize: '14px', lineHeight: '24px', fontWeight: 500}}
                            id='basic-addon1'
                          >
                            DFC
                          </span>
                          <input
                            type='number'
                            min='1'
                            className={clsx(
                              'form-control form-control-lg form-control-solid',
                              {'is-invalid': formik.touched.amount && formik.errors.amount},
                              {
                                'is-valid': formik.touched.amount && !formik.errors.amount,
                              }
                            )}
                            placeholder='How Much?'
                            aria-label='How Much?'
                            aria-describedby='basic-addon1'
                            {...formik.getFieldProps('amount')}
                          />
                        </div>
                        {formik.touched.amount && formik.errors.amount && (
                          <div className='fv-plugins-message-container'>
                            <span role='alert'>{formik.errors.amount}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='mb-5'>
                    <div className='row'>
                      <div
                        className='col-md-2'
                        style={{fontSize: '16px', lineHeight: '20px', fontWeight: 600}}
                      >
                        Notes
                      </div>
                      <div className='col-md-3'></div>
                      <div className='col-md-7'>
                        <textarea
                          placeholder='Tell your customer why you are requesting this amount'
                          className={clsx(
                            'form-control form-control-lg form-control-solid',
                            {'is-invalid': formik.touched.notes && formik.errors.notes},
                            {
                              'is-valid': formik.touched.notes && !formik.errors.notes,
                            }
                          )}
                          {...formik.getFieldProps('notes')}
                        ></textarea>
                        {formik.touched.notes && formik.errors.notes && (
                          <div className='fv-plugins-message-container'>
                            <span role='alert'>{formik.errors.notes}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='text-end my-5'>
                    {/* <button
                      className='btn btn-light'
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      Cancel
                    </button> */}
                    <button
                      className='btn btn-warning'
                      type='submit'
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      {!loading && <span className='indicator-label'>Send</span>}

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
      <InvoiceRequestModal
        customerEmail={custEmail}
        show={showfinal}
        invoicedetails={invoicedata}
        handleClose={handleCloseFinal}
        handleEdit={handleEditShow}
        handleSuccess={handleSuccess}
      />
    </>
  )
}

export default InvoiceCreationModal
