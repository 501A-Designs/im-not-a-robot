import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RecaptchaModal from './RecaptchaModal'

function App() {
  let recaptchaContainer ={
    border:'1px solid #d3d3d3',
    background: '#f9f9f9',
    color: '#000',
    height: '74px',
    width: '300px',
    borderRadius: '3px',
    boxShadow: '0 0 4px 1px rgb(0 0 0 / 8%)',
    padding: '3px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  let recaptchaButton ={
    borderRadius: '2px',
    backgroundColor: '#fff',
    border: '2px solid #c1c1c1',
    height: '30px',
    width: '30px',
  }
  let recaptchaLogo ={
    background: 'url(https://www.gstatic.com/recaptcha/api2/logo_48.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '32px',
    height: '32px',
    // margin: '0 13px 0 13px',
    marginLeft: '50px',
    width: '32px'
  }
  let recaptchaLogoText = {
    cursor: 'default',
    fontFamily: 'Roboto,helvetica,arial,sans-serif',
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '10px',
    marginTop: '5px',
    textAlign: 'right',
    color: '#555',
  }
  let recaptchaSmallText = {
    fontFamily: 'Roboto,helvetica,arial,sans-serif',
    fontSize: '8px',
    display: 'inline',
    paddingLeft: '1px',
    paddingRight: '1px',
    paddingTop: '2px',
    paddingBottom: '2px',
    textAlign: 'right',
    textDecoration: 'none',
    color: '#555',
  }

  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  if (loading) {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >

      {showModal ? <RecaptchaModal/>:
      <>
        <h5>あなたはロボットですか？</h5>
        <div style={recaptchaContainer}>
          <div style={{display: 'flex', gap:10, alignItems: 'center', justifyContent: 'center'}}>
            <div>
              {
                loading ? 
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>:
                <button
                  style={recaptchaButton}
                  type="button"
                  onClick={() => setLoading(true)}
                />
              }
            </div>
            <span>私はロボットではあり<br/>ません</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={recaptchaLogo}/>
            <span style={recaptchaLogoText}>reCAPTCHA</span>
            <span style={recaptchaSmallText}>プライバシー - 利用規約</span>
          </div>
        </div>
      </>}
    </div>
  )
}

export default App
