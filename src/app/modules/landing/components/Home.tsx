/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import React from 'react'
import { Modal } from 'react-bootstrap-v5'
import './Home.css'
import { toAbsoluteUrl } from '../../../../shared/helpers'
import TransactionForm from './TransactionForm'
export function Home() {
  const [show, setShow] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleSuccessClose = () => {
    setShowAlert(false)
    document.location.href = `https://defipay.tech/home`
  }
  // const handleSuccessShow = () => setShowAlert(true)
  let main = 612;
  let countries = [
    'Afganistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua & Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bonaire',
    'Bosnia & Herzegovina',
    'Botswana',
    'Brazil',
    'British Indian Ocean Ter',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Canary Islands',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Channel Islands',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos Island',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote DIvoire',
    'Croatia',
    'Cuba',
    'Curaco',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Ter',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Great Britain',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guinea',
    'Guyana',
    'Haiti',
    'Hawaii',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'Indonesia',
    'India',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea North',
    'Korea Sout',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malaysia',
    'Malawi',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Midway Islands',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Nambia',
    'Nauru',
    'Nepal',
    'Netherland Antilles',
    'Netherlands',
    'Nevis',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau Island',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Phillipines',
    'Pitcairn Island',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of Montenegro',
    'Republic of Serbia',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'St Barthelemy',
    'St Eustatius',
    'St Helena',
    'St Kitts-Nevis',
    'St Lucia',
    'St Maarten',
    'St Pierre & Miquelon',
    'St Vincent & Grenadines',
    'Saipan',
    'Samoa',
    'Samoa American',
    'San Marino',
    'Sao Tome & Principe',
    'Saudi Arabia',
    'Senegal',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tahiti',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad & Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks & Caicos Is',
    'Tuvalu',
    'Uganda',
    'United Kingdom',
    'Ukraine',
    'United Arab Erimates',
    'United States of America',
    'Uraguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City State',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (Brit)',
    'Virgin Islands (USA)',
    'Wake Island',
    'Wallis & Futana Is',
    'Yemen',
    'Zaire',
    'Zambia',
    'Zimbabwe',
  ]

  useEffect(() => {
    handleClose()
    setShowSuccessModal(false)
    if (document.location.href === `https://defipay.tech/home?thankyou`) {
      console.info(performance.navigation.type)
      if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        console.info('This page is reloaded')
        document.location.href = `https://defipay.tech/home`
      } else {
        setShowAlert(true)
        setShowSuccessModal(false)
        console.info('This page is not reloaded')
      }
    }
  }, [])

  return (
    <section className='welcome-area' data-bg={toAbsoluteUrl('/media/images/photos/welcome.png')}>
      {/* <div className='welcome-bg'> */}
        {/* <img src={toAbsoluteUrl('/media/images/bg.svg')} alt='' /> */}
      {/* </div> */}
      <div className='hero-section'>
        {/* <div className='col-lg-6 col-md-6 col-12 align-self-centerX'>
              <h1>
                <strong>
                  DEFIPAY helps you make seamless transactions with{' '}
                  <span className='Defipayyellow'>cryptocurrency</span>
                </strong>
              </h1>
              <p>
                Defipay Payments are processed through a private network of computers linked through
                a shared ledger. Each transaction is simultaneously recorded in a "blockchain"
              </p>
              <button
                className='btn-yellow-line'
                type='button'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
                onClick={handleShow}
              >
                Subscribe
              </button>
            </div>
            <div className='offset-lg-1 col-lg-5 col-md-6 col-12 align-self-center'>
              <div className='apps'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-10'>
                      <a href='#' className='app-item'>
                        <div className='icon'>
                          <img
                            src={toAbsoluteUrl('/media/images/icons/apps/defipay_lady.png')}
                            className='img-fluid img-first'
                            alt=''
                          />
                        </div>
                      </a>
                    </div>

                    <div className='col-lg-2 col-md-2 col-sm-2 col-2 img-second'></div>

                    <div
                      className='col-lg-6 col-md-6 col-sm-6 col-6 img-third'
                      style={{marginTop: '-50px', marginLeft: '-20px'}}
                    >
                      <a href='#' className='app-item'>
                        <div className='icon'>
                          <img
                            src={toAbsoluteUrl('/media/images/icons/apps/defipay_lady2.png')}
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </a>
                    </div>

                    <div
                      className='col-lg-4 col-md-4 col-sm-4 col-4'
                      style={{marginTop: '-50px', marginLeft: '-20px'}}
                    >
                      <a href='#' className='app-item'>
                        <div className='icon'>
                          <img
                            src={toAbsoluteUrl('/media/images/icons/apps/defipay_guy.png')}
                            className='img-fluid img-four'
                            alt=''
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

        <h3 className='text-center top-text'>Send money from <span className='text-warning'>anywhere</span> in the world to <span className='text-warning'>anyone</span> in <span className='text-warning'>Africa</span></h3>

        <div className="container">
          <div className="mb-3 mx-auto p-3 hero-part">
            <div>
              <div className='d-flex justify-content-between text-center mx-auto align-items-center mb-3 p-3 top-equivalent align-items-center'>
                <h4 className='mb-0'>1 USD</h4>
                <i className="bi bi-list mx-4 text-success"></i>
                <h4 className='mb-0'>{main}.00 NGN</h4>
              </div>
              <TransactionForm main={main} />
            </div>

          </div>
        </div>
        {/* Modal */}
        {showSuccessModal && (<div></div>)}
        <Modal
          className='modal fade'
          id='exampleModal'
          aria-labelledby='exampleModalLabel'
          size='lg'
          centered
          aria-hidden='true'
          show={show}
          onHide={handleClose}
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
              onClick={handleClose}
            ></button>
          </div>
          <div className='modal-lg'>
            <div className='modal-content'>
              <div className='modal-body'>
                <h3 className='text-center'>
                  Subscribe now to get first hand update on Defipay.
                </h3>
                <form
                  action='https://app.getresponse.com/add_subscriber.html'
                  accept-charset='utf-8'
                  method='post'
                >
                  <div className='mb-3'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <label className='form-label'> First Name/ Last Name </label>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          aria-describedby='emailHelp'
                          name='name'
                        />
                      </div>
                    </div>
                    <div className='mb-3'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <label htmlFor='email' className='form-label'>
                            Email address
                          </label>
                          <input
                            type='email'
                            className='form-control'
                            id='email'
                            aria-describedby='emailHelp'
                            name='email'
                          />
                          <div id='emailHelp' className='form-text'>
                            We'll never share your email with anyone else.
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <label className='form-label'>Country</label>
                          <select
                            className='form-select'
                            aria-label='Default select example'
                            name='custom_country'
                          >
                            <option selected disabled>
                              Select your country
                            </option>
                            {countries.map((country, index) => (
                              <option value={country} key={index}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Industry</label>
                    <select className='form-select' name='custom_company'>
                      <option selected disabled>
                        Select your Industry
                      </option>
                      <option value='Agriculture'>Agriculture</option>
                      <option value='Commerce'>Commerce</option>
                      <option value='Education'>Education</option>
                      <option value='Financial Services'>Financial Services</option>
                      <option value='Gaming'>Gaming</option>
                      <option value='Hospitality'>Hospitality</option>
                      <option value='Health'>Health</option>
                      <option value='Leisure and Entertainment'>
                        Leisure &amp; Entertainment
                      </option>
                      <option value='Logistics'>Logistics</option>
                      <option value='Non-profits'>Non-profits</option>
                      <option value='Travel'>Travel</option>
                      <option value='Utilities'>Utilities</option>
                    </select>
                  </div>
                  <div>
                    {/*Get the token at: https://app.getresponse.com/campaign_list.html*/}
                    <input type='hidden' name='campaign_token' value='zsM3y' />
                    {/*Thank you page (optional) */}
                    <input
                      type='hidden'
                      name='thankyou_url'
                      value='https://defipay.tech/home?thankyou'
                    />
                    {/*Add subscriber to the follow-up sequence with a specified day (optional)*/}
                    <input type='hidden' name='start_day' value='0' />
                    {/*Subscriber button*/}
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      onClick={() => setShowSuccessModal(true)}
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          className='modal fade'
          id='exampleModal'
          aria-labelledby='exampleModalLabel'
          size='sm'
          centered
          aria-hidden='true'
          show={showAlert}
          onHide={handleSuccessClose}
        >
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Subscription
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={handleSuccessClose}
            ></button>
          </div>
          <div className='modal-lg'>
            <div className='modal-content'>
              <div className='modal-body'>
                <p>Your subscription was successful. Check your mail for more information</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}
