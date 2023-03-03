import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'

const Services = () => {
  return (
    <main>
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
    </main>
  )
}

export default Services