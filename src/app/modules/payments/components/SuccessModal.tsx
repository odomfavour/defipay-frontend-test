import {Modal} from 'react-bootstrap-v5'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import {
  // EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  // HatenaShareButton,
  // InstapaperShareButton,
  // LineShareButton,
  // LinkedinShareButton,
  // LivejournalShareButton,
  // MailruShareButton,
  // OKShareButton,
  // PinterestShareButton,
  // PocketShareButton,
  // RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  // TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  // ViberShareButton,
  // VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  // WorkplaceShareButton,
} from 'react-share'
let path = ''
if (typeof window !== 'undefined') {
  path = window.location.protocol + '//' + window.location.host + '/otpls/' // (or whatever)
} else {
  // work out what you want to do server-side...
}
const SuccessModal = (props: {
  show: boolean
  link: string
  handleClose: () => void
  // openPersonal: () => void
}) => {
  return (
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
          <h5 className='modal-title' id='exampleModalLabel'>
            Subscribe
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
              <div className='p-5'>
                <div className='text-center'>
                  <img src={toAbsoluteUrl('../media/images/checkmark-circle.png')} alt='' />
                </div>
                <p className='text-center'>
                  Your page is successfully created. Share your page link to start receiving payment
                </p>
                <div className='mb-5'>
                  <input
                    type='text'
                    value={path + props.link}
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='https//defipay.com/pay/'
                  />
                </div>
                <div className='d-flex justify-content-between'>
                  <button className='btn btn-light'>Copy link </button>
                  <Link className='btn btn-warning' to={'/otpls/' + props.link}>
                    Visit your page
                  </Link>
                </div>
              </div>
              <div>
                <FacebookShareButton
                  url={path + props.link}
                  quote={'Defi One time Payment Link'}
                  className='Demo__some-network__share-button'
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={path + props.link}
                  title={'Defi One time Payment Link'}
                  className='Demo__some-network__share-button'
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <TelegramShareButton
                  url={path + props.link}
                  title={'Defi One time Payment Link'}
                  className='Demo__some-network__share-button'
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton
                  url={path + props.link}
                  title={'Defi One time Payment Link'}
                  separator=':: '
                  className='Demo__some-network__share-button'
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SuccessModal
