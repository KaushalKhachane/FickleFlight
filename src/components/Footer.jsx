import React from 'react'
import "./Footer.css"
import logo from "../assets/FooterLogo.svg"
import Fb from "../assets/Facebook.svg"
import Insta from "../assets/Instagram.svg"
import Twitter from "../assets/Twitter.svg"
import TextField from "@mui/material/TextField";

const Footer = () => {
  return (
    <>
      <div className='footerimg'>
        <div style={{ paddingTop: '72px', paddingRight: '445px', paddingLeft: '445px', }}>
          <div style={{
            color: '#1262AE',
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal', // You can also use just `lineHeight: 'normal'`
            letterSpacing: '0.72px',
            textTransform: 'uppercase'
          }}>subscribe to our newsletter</div>
          <div style={{
            marginTop: '7px', color: '#434343',
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal'
          }}>Get weekly updates</div>
          <div style={{ marginTop: '30px', background: 'white', borderRadius: '7px' }}>
            <div style={{
              paddingTop: '28px', color: '#576074',
              fontFamily: 'Roboto',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '34px',
              paddingLeft: '30px'
            }}>Fill in your details to join the party!</div>
            <div style={{
              marginRight: '17px',
              marginBottom: '17px',
              paddingLeft: '30px', paddingRight: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              marginTop: '10px',
            }}>
              <TextField placeholder="Your name" fullWidth
                
                label="Your Name" style={{

                }} />
              <TextField label="Enter address" style={{
                
                marginBottom: '1px',
              }} />
              <div style={{ paddingBottom: '28px', }}>
                <div style={{
                
                  display: 'flex',
                  width: '164px',
                  height: '56px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '4px',
                  background: '#F99A0E',
                }}>
                  <button style={{
                    display: 'flex',
                    padding: '8px 22px',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '8px',
                    color: 'var(--Primary-Contrast, #FFF)',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: 'Roboto',
                    fontSize: '15px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '26px',
                    letterSpacing: '0.46px',
                    textTransform: 'uppercase',
                  }}>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className='footerbg'>
        <div className='px-24 py-8 text-white' style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderRight: '1px solid black' }} >
          <div style={{ paddingRight: '44px' }}>
            <div>
              <img style={{
                width: " 174px",
                height: "33px"
              }} src={logo} alt="" />
            </div>
            <div style={{
              marginTop: '14px',
              color: '#FFF',
              fontFamily: 'Roboto',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '27px',
            }}>Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop</div>
            <div style={{ marginTop: '14px', display: 'flex' }}>
              <div style={{ marginRight: '20px' }}><img src={Fb} alt="" /></div>
              <div style={{ marginRight: '20px' }}><img src={Insta} alt="" /></div>
              <div><img src={Twitter} alt="" /></div>
            </div>
          </div>

          {/* line */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingLeft: '44px' }}>

            <div>
              <p style={{
                color: '#FFF',
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '27px',
              }}>Company</p>
              <ul style={{
                marginTop: '20.76px', color: '#FFF',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}>
                <li style={{ marginTop: '12px' }}>About Us</li>
                <li style={{ marginTop: '12px' }}>News</li>
                <li style={{ marginTop: '12px' }}>Careers</li>
                <li style={{ marginTop: '12px' }}>How we Work</li>
              </ul>
            </div>

            <div>
              <p style={{
                color: '#FFF',
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '27px',
              }}>Support</p>
              <ul style={{
                marginTop: '20.76px', color: '#FFF',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}>
                <li style={{ marginTop: '12px' }}>Account</li>
                <li style={{ marginTop: '12px' }}>Support Center</li>
                <li style={{ marginTop: '12px' }}>FAQ</li>
                <li style={{ marginTop: '12px' }}>Accessibility</li>
              </ul>
            </div>
            <div>
              <p style={{
                color: '#FFF',
                fontFamily: 'Roboto',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '27px',
              }}>More</p>
              <ul style={{
                marginTop: '20.76px', color: '#FFF',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}>
                <li style={{ marginTop: '12px' }}>Covid Advisory</li>
                <li style={{ marginTop: '12px' }}>Airline Fees</li>
                <li style={{ marginTop: '12px' }}>Tips</li>
                <li style={{ marginTop: '12px' }}>Quarantine Rules</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
