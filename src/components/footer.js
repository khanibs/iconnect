import '../styles/footer.scss'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {  BrowserRouter as Router  } from 'react-router-dom';
function Footer() {


    return (
<Router>
        <div className="w-90   m-auto lg:pl-20 sm:pl-10" >
            <div className="flex sm:pl-5">
                <div className="address">
                    <div className="pt-5 pb-3">
                        <p className="text-base font-jost font-bold">Address</p>
                        <p className="text-sm font-jost">
                            350 5th Ave, New York, NY <br/>
                            10118, USA </p>
                    </div>
                    <div>
                        <p className="text-base font-jost font-bold">Contacts</p>
                        <p className="text-sm font-jost">

                            support@iconnect.com<br/>

                            +1 (0) 000 0000 001<br/>
                            +1 (0) 000 0000 002 </p>
                    </div>
                </div>
                <div className="links pt-5 pl-20">
<p className="text-base font-jost font-bold pb-2">Links</p>
<div>
    <NavLink to="/#study" className="text-xs text-primary font-jost pb-2">About</NavLink> <br/>
    <NavLink to="/#faq" className="text-xs text-primary font-jost pb-2" >FAQ</NavLink><br/>
    <NavLink to="/#eligible" className="text-xs text-primary font-jost pb-2">Eligibility</NavLink><br/>
    <NavLink to="/#features" className="text-xs text-primary font-jost pb-2">Features</NavLink><br/>
    <NavLink to="/#journey" className="text-xs text-primary font-jost pb-2">Journey</NavLink>


</div>

                </div>
            </div>
<div className ="w-90 py-10" >
    <p className="text-base font-jost text-gray"> Copyright 2021 iConnect - All right reserved</p>
</div>
        </div>
</Router>
    )
}
export default Footer