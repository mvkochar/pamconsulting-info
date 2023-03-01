import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import './Home.css'

const Home = () => {
    return (
        <main>
            <section>
                <div className="pam-relocating">
                    <div className="container">
                        <div className="pam-relocating-tags d-f">
                            <div className="relocating-tags-item">Investments</div>
                            <div className="relocating-tags-item">business relocation</div>
                            <div className="relocating-tags-item">family relocation</div>
                        </div>
                        <div className="pam-relocating-title">Relocating to Cyprus</div>
                        <div className="pam-relocating-subtitle">Seamless - Exceptional - Experience</div>
                        <p className="pam-relocating-desc">
                            The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community.
                            The strategic location that grants networking opportunities and the stability of being in the EU offers
                            entrepreneurs the abilities they need to thrive.
                        </p>
                        <ActionButton title='Find Out More' />
                        <div className="relocating-cities-title">Most popular cities</div>
                        <div className="pam-relocating-cities d-f">
                            <div className="relocating-cities-item">
                                <img src="images/cities1.png" alt="Nicosia" />
                                <div className="cities-item-title">Nicosia</div>
                            </div>
                            <div className="relocating-cities-item">
                                <img src="images/cities2.png" alt="Limassol" />
                                <div className="cities-item-title">Limassol</div>
                            </div>
                            <div className="relocating-cities-item">
                                <img src="images/cities3.png" alt="Paphos" />
                                <div className="cities-item-title">Paphos</div>
                            </div>
                            <div className="relocating-cities-item">
                                <img src="images/cities4.png" alt="Larnaka" />
                                <div className="cities-item-title">Larnaka</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="pam-services">
                    <div className="container">
                        <div className="pam-services-title">Our Services</div>
                        <div className="pam-services-box d-f">
                            <div className="pam-services-item">
                                <div className="services-item-img"><img src="images/services1.png" alt="services1" /></div>
                                <div className="services-item-title">Family Relocation</div>
                                <p className="services-item-desc">
                                    With strategic planning, we simplify the moving process so you and your family can feel safe and confident.
                                </p>
                                <ActionButton title='Find Out More' />
                            </div>
                            <div className="pam-services-item">
                                <div className="services-item-img"><img src="images/services2.png" alt="services2" /></div>
                                <div className="services-item-title">Business Relocation</div>
                                <p className="services-item-desc">
                                    We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.
                                </p>
                                <ActionButton title='Find Out More' />
                            </div>
                            <div className="pam-services-item">
                                <div className="services-item-img"><img src="images/services3.png" alt="services3" /></div>
                                <div className="services-item-title">Investment plans</div>
                                <p className="services-item-desc">
                                    Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.
                                </p>
                                <ActionButton title='Find Out More' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="pam-moving d-f jc-sb align-center">
                    <div className="pam-moving-img"><img src="images/paradise1.png" alt="paradise1" /></div>
                    <div className="pam-moving-info">
                        <h3 className="pam-moving-title">Moving to Paradise</h3>
                        <p className="pam-moving-desc">
                            Have you ever dreamed about the perfect place to live? Your definition of perfect may be different someone else’s.
                            Are you longing to live by the beach and listen to the soothing waves or are you a kind of person who enjoys
                            the bustling sounds of the city? Whatever lifestyle you desire, Cyprus has it all! Whether you’re traveling with your family,
                            your partner, or as a solo business entrepreneur, this exotic island can offer you a little bit of everything.
                        </p>
                        <p className="pam-moving-desc">
                            If you’ve made the decision to relocate to Cyprus, then you are expecting to find a safe place to settle.
                            With extremely low crime rate, stunning sandy beaches, and awe-inspiring mountain views, Cyprus is the place to be!
                        </p>
                        <ActionButton title='Find Out More' />
                    </div>
                    <div className="pam-moving-img"><img src="images/paradise2.png" alt="paradise2" /></div>
                </div>
            </section>
            <section>
                <div className="pam-choose">
                    <div className="container">
                        <h3 className="pam-choose-title">Why Choose Cyprus?</h3>
                        <p className="pam-choose-desc">
                            When you’re searching for the ideal home you want everything to be perfect.
                            This is why over the years more and more people from all around the world are choosing Cyprus as their
                            ultimate destination. This small Mediterranean mesmerizes millions of visitors every year.
                        </p>
                        <div className="pam-choose-box d-f">
                            <div className="pam-choose-item">
                                <div className="choose-item-img"><img src="images/choose1.png" alt="choose1" /></div>
                                <div className="choose-item-title">Progressive tax system</div>
                                <div className="choose-item-subtitle">Offering one of the most attractive tax regimes in Europe</div>
                            </div>
                            <div className="pam-choose-item">
                                <div className="choose-item-img"><img src="images/choose2.png" alt="choose2" /></div>
                                <div className="choose-item-title">Stunning weather and climate</div>
                                <div className="choose-item-subtitle">Enjoy a high quality of life with over 324 days of sun annually</div>
                            </div>
                            <div className="pam-choose-item">
                                <div className="choose-item-img"><img src="images/choose3.png" alt="choose3" /></div>
                                <div className="choose-item-title">Blooming expat community</div>
                                <div className="choose-item-subtitle">Become part of an increasingly diverse community</div>
                            </div>
                            <div className="pam-choose-item">
                                <div className="choose-item-img"><img src="images/choose4.png" alt="choose4" /></div>
                                <div className="choose-item-title">Family-oriented values</div>
                                <div className="choose-item-subtitle">Excellent education standards and extremely low crime rates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="pam-find"></div>
            </section>
            <section>
                <div className="pam-about d-f align-center">
                    <div className="pam-about-info">
                        <h3 className="pam-about-title">Who We Are</h3>
                        <p className="pam-about-desc">
                            PAM Consulting is built upon a team of motivated professionals aiming to provide families and businesses 
                            the services they need to relocate to the island of Cyprus.
                        </p>
                        <p className="pam-about-desc">
                            We understand the challenges of deciding to relocate and this is why we prioritize our clients’ needs 
                            by making sure that the whole relocation process is as smooth and simple as possible.
                        </p>
                        <ActionButton title='More about us'/>
                    </div>
                    <div className="pam-about-founder d-f">
                         <div className="about-founder-img"><img src="images/founder.png" alt="founder" /></div>
                         <div className="about-founder-info">
                             <div className="about-founder-title">Founder</div>
                             <div className="about-title-name">Anastasia Papaharidemou</div> 
                             <ActionButton title='Contact'/>
                         </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="pam-happen">
                    <div className="container">
                        <h3 className="pam-happen-title">How we make it happen</h3>
                        <div className="pam-happen-box d-f">
                            <div className="pam-happen-item">
                                <div className="happen-item-img"><img src="images/happen1.png" alt="happen1" /></div>
                                <div className="happen-item-title">We listen</div>
                                <p className="happen-item-desc">
                                    Our most prominent purpose is to understand and identify with your needs so we can 
                                    effectively find ways to provide solutions.
                                </p> 
                            </div>
                            <div className="pam-happen-item">
                                <div className="happen-item-img"><img src="images/happen2.png" alt="happen2" /></div>
                                <div className="happen-item-title">We strategize</div>
                                <p className="happen-item-desc">
                                    According to your requirements, our team designs a thorough series of steps that 
                                    will make the relocation process as smooth as possible.
                                </p> 
                            </div>
                            <div className="pam-happen-item">
                                <div className="happen-item-img"><img src="images/happen3.png" alt="happen3" /></div>
                                <div className="happen-item-title">We provide</div>
                                <p className="happen-item-desc">
                                    We implement our services that are based on efficient strategic planning 
                                    that respond to your family’s and business’s goals and ambitions.
                                </p> 
                            </div>
                            <div className="pam-happen-item">
                                <div className="happen-item-img"><img src="images/happen4.png" alt="happen4" /></div>
                                <div className="happen-item-title">We manage</div>
                                <p className="happen-item-desc">
                                    Once you are settled, we make sure that everything is according to your expectations 
                                    and your vision of the quality of our services.
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
            <section>
                <div className="pam-partners">
                    <div className="container">
                        <h3 className="pam-partners-title">Our Partners</h3>
                        <div className="pam-partners-box d-f">
                           <div className="pam-partners-item"><img src="images/partner1.png" alt="partner1" /></div>
                           <div className="pam-partners-item"><img src="images/partner2.png" alt="partner2" /></div>
                           <div className="pam-partners-item"><img src="images/partner3.png" alt="partner3" /></div>
                           <div className="pam-partners-item"><img src="images/partner4.png" alt="partner4" /></div>
                           <div className="pam-partners-item"><img src="images/partner5.png" alt="partner5" /></div>
                           <div className="pam-partners-item"><img src="images/partner6.png" alt="partner6" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="pam-questions">
                    <div className="container">
                        <h3 className="pam-questions-title">Frequently Asked Questions</h3>
                        <div className="pam-questions-box d-f">
                            <div className="pam-questions-item">
                                <div className="questions-item-cat"><span>Business</span></div>
                                <div className="questions-item-title">Question: How is the business environment in Cyprus?</div>
                                <p className="questions-item-desc">
                                    Answer: Cyprus is considered to be one of the most business-oriented countries of the EU, 
                                    offering business entrepreneurs a variety of opportunities to expand their corporate 
                                    dreams and ambitions.
                                </p>
                            </div>
                            <div className="pam-questions-item">
                                <div className="questions-item-cat"><span>Prices</span></div>
                                <div className="questions-item-title">Question: What is the cost of living in Cyprus?</div>
                                <p className="questions-item-desc">
                                    Answer: In comparison to other countries of the EU, the cost of living is relatively low. Of course, 
                                    the cost of living varies from city to city. For example, this means that living in 
                                    Paphos might be a bit cheaper than living in Limassol. 
                                </p>
                            </div>
                            <div className="pam-questions-item">
                                <div className="questions-item-cat"><span>Migration</span></div>
                                <div className="questions-item-title">Question: What are the best cities in Cyprus for expats?</div>
                                <p className="questions-item-desc">
                                    Answer: As Cyprus is among the most attractive destinations for people 
                                    from different parts of the globe, large and thriving expat communities 
                                    can be found in Paphos, Limassol, Larnaca, Nicosia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home