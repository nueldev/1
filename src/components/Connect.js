import React, { Component } from 'react';
import NewWindow from 'react-new-window'
import Logo from "../images/logo-3.png";
import mailchimp from '../images/mailchimp-logo_2x.png'
import hubspot from '../images/hubspot-logo_2x.png'
import campaign from '../images/campaignmonitor-logo_2x.png'
import customerio from '../images/customerio-logo_2x.png'
import activecampaign from '../images/activecampaign-logo_2x.png'
import facebook from '../images/facebook-logo_2x.png'
import adwords from '../images/adwords-logo_2x.png'
class Auth extends Component {
  render() {
        return (
        <div className="w-100">
  <div className="view-container registrations new">
    <main className="w-100">
      <div className="row">
        <div className="col-lg-8 scrollable">
          <header className="p-t-50 p-l-50 p-r-50 p-b-20 dis-flex dis-flex-between m-r-0">
            <div className="logo">
              <a href="/"><img src={Logo} alt="react" width={90}/> </a>
            </div>
          </header>
          <div className="container mw-590 m-b-100 p-0 pos-rel">
            <h2 className="great-things-await m-b-15">Let’s bring tools together</h2>
            <p className="quokka-connects-apps m-b-65">Nice to meet you! Now, connect your ESP’s to retargeting placement.</p>
            <hr className="pos-abs t-105 m-0 separator" />
            <div>
              <div className="connected-ballons dis-flex dis-flex-between m-b-40">
                <div className="connected-providers-ballon pos-rel">
                  <div className="ballon-icon m-b-15 dis-flex dis-flex-middle dis-flex-center"><span>+</span></div><span>email provider</span>
                  <div className="dashed-line pos-abs t-39 l-80" />
                </div>
                <div className="quokka-ballon pos-rel">
                  <div className="ballon-icon m-b-15" /><span>nuel</span>
                  <div className="dashed-line pos-abs t-39 l-80" />
                </div>
                <div className="connected-retargeting-ballon pos-rel">
                  <div className="ballon-icon m-b-15 dis-flex dis-flex-middle dis-flex-center"><span>+</span></div><span>retargeting placement</span></div>
              </div>
              <div className="row pos-rel">
                <div className="col-sm-12">
                  <h5 id="email-providers-block" className="gary-text m-b-20">Connect email provider you're relying on</h5></div>
              </div>
              <div className="row pos-rel">
                <div className="col-sm-12 dis-flex m-b-36 dis-flex-wrap">
                  <div className="square-card-wrap">
                    <div className="card bg-white integration-card card-body square-card">
                      <div className="height-100 dis-flex dis-flex-column dis-flex-middle p-t-30">
                        <div className="width-100p h-34 dis-flex dis-flex-middle dis-flex-start dis-flex-row m-b-10 p-l-35"><img src={mailchimp} width={108} /></div>
                        <div className="card-description m-b-30">Connect Mailchimp to Nuel and re-engage your email audience.</div>
                        <div className="width-100p dis-flex dis-flex-middle dis-flex-center"><span><button className="btn btn-primary integration-connect-btn" onClick="connect()">Connect</button></span></div>

                        
                        <div className="learn-more pos-abs dis-flex l-0 b-0 p-l-30"><span>secure integration</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="square-card-wrap">
                    <div className="card bg-white integration-card card-body square-card">
                      <div className="height-100 dis-flex dis-flex-column dis-flex-middle p-t-30">
                        <div className="width-100p h-34 dis-flex dis-flex-middle dis-flex-start dis-flex-row m-b-10 p-l-35"><img src={hubspot} width={103} /></div>
                        <div className="card-description m-b-30">Connect Hubspot to Nuel and re-engage your email audience.</div>
                        <div className="width-100p dis-flex dis-flex-middle dis-flex-center"><span><button className="btn btn-primary integration-connect-btn">Connect</button></span></div>
                        <div className="learn-more pos-abs dis-flex l-0 b-0 p-l-30"><span>secure integration</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="square-card-wrap">
                    <div className="card bg-white integration-card card-body square-card">
                      <div className="height-100 dis-flex dis-flex-column dis-flex-middle p-t-30">
                        <div className="width-100p h-34 dis-flex dis-flex-middle dis-flex-start dis-flex-row m-b-10 p-l-35"><img src={campaign} width={163} /></div>
                        <div className="card-description m-b-30">Connect Campaign Monitor to Nuel and re-engage your email audience.</div>
                        <div className="width-100p dis-flex dis-flex-middle dis-flex-center"><span><button className="btn btn-primary integration-connect-btn">Connect</button></span></div>
                        <div className="learn-more pos-abs dis-flex l-0 b-0 p-l-30"><span>secure integration</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="square-card-wrap">
                    <div className="card bg-white integration-card card-body square-card">
                      <div className="height-100 dis-flex dis-flex-column dis-flex-middle p-t-30">
                        <div className="width-100p h-34 dis-flex dis-flex-middle dis-flex-start dis-flex-row m-b-10 p-l-35"><img src={customerio} width={160} /></div>
                        <div className="card-description m-b-30">Connect Customer.io to Nuel and re-engage your email audience.</div>
                        <div className="width-100p dis-flex dis-flex-middle dis-flex-center"><span><a href="mailto:mikk@nuel.io" className="btn btn-primary dis-flex dis-flex-middle dis-flex-center">Contact us</a></span></div>
                        <div className="learn-more pos-abs dis-flex l-0 b-0 p-l-30"><span>secure integration</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="square-card-wrap">
                    <div className="card bg-white integration-card card-body square-card">
                      <div className="height-100 dis-flex dis-flex-column dis-flex-middle p-t-30">
                        <div className="width-100p h-34 dis-flex dis-flex-middle dis-flex-start dis-flex-row m-b-10 p-l-35"><img src={activecampaign} width={160} /></div>
                        <div className="card-description m-b-30">Connect ActiveCamapign to Nuel and re-engage your email audience.</div>
                        <div className="width-100p dis-flex dis-flex-middle dis-flex-center"><span><button className="btn btn-primary integration-connect-btn">Connect</button></span></div>
                        <div className="learn-more pos-abs dis-flex l-0 b-0 p-l-30"><span>secure integration</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pos-rel">
                <div className="col-sm-12">
                  <h5 id="retargeting-placements-block" className="gary-text m-b-20">Connect retargeting placement</h5></div>
              </div>
              <div className="row pos-rel m-b-140">
                <div className="col-sm-12 dis-flex m-b-36 dis-flex-wrap">
                  <div className="square-card-wrap">
                    <div className="card bg-white integration-card card-body square-card">
                      <div className="height-100 dis-flex dis-flex-column dis-flex-middle p-t-30">
                        <div className="width-100p h-34 dis-flex dis-flex-middle dis-flex-start dis-flex-row m-b-10 p-l-40"><img src={facebook} width={160} /></div>
                        <div className="card-description m-b-30">Connect Facebook to Nuel and re-engage your email audience.</div>
                        <div className="width-100p dis-flex dis-flex-middle dis-flex-center"><span><span style={{transition: 'opacity 0.5s ease 0s'}}><button type="button" className="btn btn-primary integration-connect-btn metro">Connect</button></span></span>
                        </div>
                        <div className="learn-more pos-abs dis-flex l-0 b-0 p-l-30"><span>secure integration</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="square-card-wrap">
                    <div className="card bg-white integration-card card-body square-card">
                      <div className="height-100 dis-flex dis-flex-column dis-flex-middle p-t-30">
                        <div className="width-100p h-34 dis-flex dis-flex-middle dis-flex-start dis-flex-row m-b-10 p-l-40"><img src={adwords} width={112} /></div>
                        <div className="card-description m-b-30">Connect AdWords to Nuel and re-engage your email audience.</div>
                        <div className="width-100p dis-flex dis-flex-middle dis-flex-center"><span><button className="btn btn-primary integration-connect-btn">Connect</button></span></div>
                        <div className="learn-more pos-abs dis-flex l-0 b-0 p-l-30"><span>secure integration</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 continue-block">
          <div className="col-sm-12 m-0-auto mw-650 p-t-30 p-l-40">
            <div className="t-left dis-flex">
              <button className="btn btn-lg btn-primary m-r-30 p-0" >CONTINUE</button><span className="your-privacy-is-valu m-t-20"><i className="fa fa-lock m-r-10" />Secured by Paddle. You won’t be charged now.</span></div>
          </div>
        </div>
        <div className="col-4 right-bg dis-flex dis-flex-column illustartion-container"><img className="illustartion" src="https://res.cloudinary.com/dihf7bvka/image/upload/v1531420606/integrations-ill_2x.png" />
          <div className="p-l-60 p-r-60">
            <h3 className="h21">21%</h3>
            <p className="is-the-awerage-email m-b-100">is the average email open rate according to Mailchimp Research. Nuel helps you show your message to everyone else.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>

        );
      }
    }

export default Auth;
