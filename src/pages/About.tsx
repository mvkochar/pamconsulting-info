import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import './About.css'

const About = () => {
  return (
    <main>
        <section>
            <div className="pmabout-main d-f jc-sb align-center">
                <h3 className="pmabout-main-title">Who we are</h3>
                <div className="pmabout-main-img"><img src="images/about-main.png" alt="about-main" /></div>
             </div>
        </section>
        <section>
            <div className="pmabout-team">
                <p>
                    PAM Consulting is a team of dedicated professionals, located in Cyprus. Our services rely upon the idea 
                    that the sunny island of Cyprus can be the solution families and businesses are searching for. 
                </p>
                <p>
                    We understand the challenges that come with moving from one location to another and the difficulties that may arise. 
                    For this reason, we aim to transform family and business relocation into a hassle-free experience for you and yours.
                </p>
            </div>
        </section>
        <section>
            <div className="pmabout-what d-f jc-sb align-center">
                <div className="pmabout-what-info">
                    <h3 className="pmabout-what-title">What we do</h3>
                    <p className="pmabout-what-desc">
                        We provide solutions based on strategic planning that responds to your needs.  Our business relocation services prioritize 
                        your business goals and ambitions. Changing your businesses’ location is a big step towards progress and it is essential 
                        that everything goes as smooth as possible. While you focus on boosting your company’s strategies, we take care of everything else.
                    </p>
                    <p className="pmabout-what-desc">
                        The decision to move from one place to another with your family is life-changing. 
                        As you expect this change to be for the better, our family relocation services make sure 
                        to consider every aspect of your family’s requirements.  As you settle in Cyprus, we also offer you the opportunity 
                        to discover different investment plans that can further enable you to expand your financial and business horizons. 
                    </p>
                </div>
                <div className="pmabout-what-img"><img src="images/about-what.png" alt="about-what" /></div>
            </div>
        </section>
        <section>
            <div className="pmabout-why">
                <div className="container">
                    <h3 className="pmabout-why-title">Why We Do It - Our Values</h3>
                    <div className="pmabout-why-box d-f jc-sb">
                        <div className="pmabout-why-item">
                          <div className="why-item-img"><img src="images/pmabout-why1.png" alt="why1" /></div>
                          <div className="why-item-title">Time Efficiency</div>
                          <p className="why-item-desc">
                            As our team works efficiently and strategically, the whole relocation process is completed in a short amount 
                            of time so you can have more time to focus on setting up your life in Cyprus.
                          </p>
                        </div>
                        <div className="pmabout-why-item">
                          <div className="why-item-img"><img src="images/pmabout-why2.png" alt="why2" /></div>
                          <div className="why-item-title">Gratifying Experience</div>
                          <p className="why-item-desc">
                            Moving can be intimidating and demanding experience for anyone. Our team makes sure to come up 
                            with the best relocation strategy, offering you a piece of mind and a sense of security.
                          </p>
                        </div>
                        <div className="pmabout-why-item">
                          <div className="why-item-img"><img src="images/pmabout-why3.png" alt="why3" /></div>
                          <div className="why-item-title">Safety & Reliability</div>
                          <p className="why-item-desc">
                            Once you are settled, we make sure that everything is according to your expectations and your 
                            vision of the quality of our services.
                          </p>
                        </div>
                        <div className="pmabout-why-item">
                          <div className="why-item-img"><img src="images/pmabout-why4.png" alt="why4" /></div>
                          <div className="why-item-title">Personalized Support</div>
                          <p className="why-item-desc">
                            Our services include providing you with any information you may need about living in Cyprus with your family.
                          </p>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
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
    </main>
  )
}

export default About