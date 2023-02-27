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
                    <ActionButton title='Find Out More'/>
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
                            <ActionButton title='Find Out More'/>
                        </div>
                        <div className="pam-services-item">
                            <div className="services-item-img"><img src="images/services2.png" alt="services2" /></div>
                            <div className="services-item-title">Business Relocation</div>
                            <p className="services-item-desc">
                                We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.
                            </p>
                            <ActionButton title='Find Out More'/>
                        </div>
                        <div className="pam-services-item">
                            <div className="services-item-img"><img src="images/services3.png" alt="services3" /></div>
                            <div className="services-item-title">Investment plans</div>
                            <p className="services-item-desc">
                                Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.
                            </p>
                            <ActionButton title='Find Out More'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home