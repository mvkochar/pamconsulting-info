import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'

const Contact = () => {
  return (
    <main>
        <section>
        <section>
                <div className="pam-contact">
                    <div className="container">
                        <h3 className="pam-contact-title">Contact us</h3>
                        <div className="pam-contact-phone">+357 9056759</div>
                        <div className="pam-contact-email">contact@pamrelocation.com</div>
                        <div className="pam-contact-send">
                            <h4 className="contact-send-title">Send inquiry</h4>
                            <form className="contact-send-fm">
                                <div className='input-block d-f'>                               
                                    <input type="text" name='userName' placeholder='Your Name' />
                                    <input type="email" name="email" placeholder='Email' />
                                </div>
                                <div className="input-block d-f">
                                    <input type="text" name="subject" placeholder='Subject' />
                                    <input type="tel" name="phone" placeholder='Phone' />    
                                </div>
                                <textarea name="message">Your message</textarea> 
                                <div className="check-block d-f align-center">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label htmlFor="terms">By clicking “Submit button” you accept our Terms & Conditions 
                                    and have read our Privacy Policy and Disclaimer</label>    
                                </div>
                                <ActionButton title='Submit'/>   
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </main>
  )
}

export default Contact