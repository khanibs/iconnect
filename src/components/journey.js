import '../styles/journey.scss'


function Journey() {


    return (

        <div className="lg:w-450 m-auto journey " id={'journey'}>
<p className="pt-6 font-josh text-xl font-medium text-center">Patient Journey</p>
            <div className="w-full py-6">
                <div className="flex">
                    <div className=" mb-2">
                        <div className=" rounded-full text-lg text-white flex items-center">
                            <span className=" w-26 mx-auto  text-center text-white w-full rounded-full border-solid  border border-gray-100">
                                1 </span>

                            <div className="pl-3 pt-6"><p className="font-jost text-base "> Check Eligibility</p>
                                <p className="font-jost lg:text-sm font-sm">Check your eligibility by taking up the eligibility test. If you are eligible, you can connect with the team at a study site of your
                                    choice.</p>
                            </div>

                        </div>

                    </div>
                    </div>
                    <div className="flex">
                        <div className=" mb-2">
                            <div className=" rounded-full text-lg text-white flex items-center">
                                <span className=" w-26 mx-auto  text-center text-white w-full rounded-full border-solid  border border-gray-100">
                                    2 </span>

                                <div className="pl-3 pt-6"><p className="text-base font-jost">Screening Period</p>
                                    <p className="font-jost lg:text-sm font-sm">
The team will connect with you and screen you with other preliminary tests. This can take up to 30-35 days which may be
extended.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="flex">
                        <div className=" mb-2">
                            <div className=" rounded-full text-lg text-white flex items-center">
                                <span className=" w-26 mx-auto  text-center text-white w-full rounded-full border-solid  border border-gray-100">
                                    3 </span>

                                <div className="pl-3 pt-6"><p className="text-base font-jost">Treatment Period</p>
                                    <p className="font-jost lg:text-sm font-sm">
                                    Eligible candidates will receive initial treatment for up to 24 weeks during which the health, sleep and physical activities will be
monitored.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="flex">
                        <div className=" mb-2">
                            <div className=" rounded-full text-lg text-white flex items-center">
                                <span className=" w-26 mx-auto  text-center text-white w-full rounded-full border-solid  border border-gray-100">
                                    4 </span>

                                <div className="pl-3 pt-6"><p className="text-base font-jost">Follow-up Period</p>
                                    <p className="font-jost lg:text-sm font-sm">
                                    Eligible candidates will receive initial treatment for up to 24 weeks during which the health, sleep and physical activities will be
monitored.</p>
                                </div>

                            </div>

                        </div>
                    </div>
            </div>
        </div>

    )
}
export default Journey