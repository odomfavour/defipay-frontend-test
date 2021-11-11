import {FC, useRef, useEffect, useState} from 'react'
import {shallowEqual, useSelector, connect, useDispatch, ConnectedProps} from 'react-redux'
import * as merchantactions from './MerchantActions'
import {LayoutSplashScreen} from '../../../../shared/layout/core'
import {RootState} from '../../../../setup'
import {getBusinessType, getIndustry} from '..'

const mapState = (state: RootState) => ({merchant: state.merchant})
const connector = connect(mapState, merchantactions.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const AuthInit: FC<PropsFromRedux> = (props) => {
  const didRequest = useRef(false)
  const dispatch = useDispatch()
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const accessToken = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)

  // We should request user by authToken before rendering the application
  useEffect(() => {
    const requestUser = async () => {
      try {
        if (!didRequest.current) {
          const {data: industry} = await getIndustry()
          const {data: businesstype} = await getBusinessType()
          dispatch(props.fulfilindustry(industry.data))
          dispatch(props.fulfilbusinesstypes(businesstype.data))
        }
      } catch (error) {
        console.error(error)
        // if (!didRequest.current) {
        //     dispatch(props.logout())
        // }
      } finally {
        // setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (accessToken) {
      requestUser()
    } else {
      // dispatch(props.logout())
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{props.children}</>
}

export default connector(AuthInit)
