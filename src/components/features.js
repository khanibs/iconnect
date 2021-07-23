import i1 from '../assets/img-1.jpg';
import i2 from '../assets/img-2.jpg';
import i3 from '../assets/img-3.jpg'
import '../styles/features.scss';
function Features() {


    return (
        <div id={'features'}>
            <div className=" bg-section-1 h-310 bg-center-center mt-5" >
                <div className=" lg:w-800 cards-cont m-auto lg:flex justify-between items-center">
                    <div className="text pt-4">
                        <p className="text-xl font-bold font-jost py-2">  Research Facility</p>

                        <p className="text-sm font-jost py-2 pr-5">The research labs at our study sites use state-
                            of the-art equipment operated by highly
                            qualified technicians.</p>
                    </div>
                    <div>
                        <img src={i1} className="image" alt="i1" />
                    </div>
                </div>

            </div>
            <div className=" bg-b-2 h-310 bg-center-left lg:mt-40 mt-5" >
                <div className=" lg:w-800 cards-cont m-auto lg:flex justify-between items-center lg:bg-top-left">
                <div className="img-name">
                        <img src={i2} className="image" alt="i2" />
                    </div>
                    <div className="text pt-4 lg:pl-12">
                        <p className="text-xl font-bold font-jost py-2">  Monthly Check-ups</p>

                        <p className="text-sm font-jost py-2 pr-4">The study conducts patient check-up every
third weekend of the month to keep track of
patient's health and recovery.</p>
                    </div>
                    
                </div>

            </div>
            <div className=" bg-b-3 h-310 bg-center-left lg:mt-40 bg-center-center mt-5" >
                <div className=" lg:w-800 cards-cont m-auto lg:flex justify-between items-center">
                <div className="text pt-4 lg:pl-10">
                        <p className="text-xl font-bold font-jost py-2">  In-home Check-ups</p>

                        <p className="text-sm font-jost py-2 pr-5">Eligible candidates can choose for in-home
consultation every month from our trained
study professionals.
</p>
                    </div>
                <div className="img-name">
                        <img src={i3} className="image" alt="i3" />
                    </div>
                    
                    
                </div>

            </div>
            <div className="clearfix"></div>
        </div>


    )
}
export default Features