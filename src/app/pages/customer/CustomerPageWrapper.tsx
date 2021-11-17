import React, {FC, useState, useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../shared/layout/core'
import {toAbsoluteUrl} from '../../../shared/helpers'
import {UserModel} from '../../modules/auth/models/UserModel'
import {RootState} from '../../../setup'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import CustomerGridView from '../../modules/customer/component/CustomerGridView'
import {CustomerViewModel} from '../../modules/customer'
import CustomerDefault from '../../modules/customer/component/CustomerDefault'
import CustomerCreationModal from '../../modules/customer/component/CustomerCreationModal'
import * as customerActions from '../../modules/customer/redux/CustomerActions'
import CustomerUpdateModal from '../../modules/customer/component/CustomerUpdateModal'
const CustomerPage: FC = () => {
  const dispatch = useDispatch()
  const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  const customers: CustomerViewModel[] = useSelector<RootState>(
    ({customer}) => customer.customers,
    shallowEqual
  ) as CustomerViewModel[]
  const [refereshkey, setRefreshkey] = useState(0)
  useEffect(() => {
    // if (prevAmount !== customers) {
    dispatch(customerActions.actions.getcustomers())
    // }
  }, [dispatch, refereshkey])
  const [show, setShow] = useState(false)
  const [editshow, seteditShow] = useState(false)
  const [editdata, seteditData] = useState<CustomerViewModel | undefined>(undefined)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleUpdateShow = () => seteditShow(true)
  const handleUpdateClose = () => seteditShow(false)
  const handleUpdateRefresh = () => setRefreshkey((o) => o + 1)

  const edit = (id: string) => {
    let e = id ? customers.filter((x) => x.customerId === Number(id))[0] : undefined
    seteditData(e)
    seteditShow(true)
    // this.setState({
    //   modal: true,
    //   updateKey: id,
    //   entity: e,
    // })
  }
  return (
    <>
      <div className='content-wrapper'>
        <div className='card px-4'>
          <div className='d-flex justify-content-between my-5'>
            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center'>
                <img src={toAbsoluteUrl('../media/images/file.svg')} alt='' />
                <h3 className='ms-3 me-5 mb-0'>Filter</h3>
              </div>
              <input type='text' className='form-control' placeholder='Search' />
            </div>
            <div className='text-center'>
              <button className='btn main-btn' onClick={handleShow}>
                + New Customer
              </button>
            </div>
          </div>
          {customers && customers.length > 0 ? (
            <CustomerGridView customers={customers} edit={edit} />
          ) : (
            <CustomerDefault handleShow={handleShow} businessname={user.businessname} />
          )}
        </div>
        <CustomerCreationModal
          show={show}
          handleClose={handleClose}
          openCustomerCreate={handleShow}
          onCreateSuccess={handleUpdateRefresh}
        />
        <CustomerUpdateModal
          show={editshow}
          handleClose={handleUpdateClose}
          openCustomerUpdate={handleUpdateShow}
          data={editdata}
          onUpdateSuccess={handleUpdateRefresh}
        />
      </div>
    </>
  )
}
const CustomerPageWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.CUSTOMERS'})}</PageTitle>
      <CustomerPage />
    </>
  )
}

export {CustomerPageWrapper}
