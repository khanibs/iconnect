import '../styles/study.scss'



function Study() {
  return (
    <div className="wrapper" id={'study'}>
      <div className="bg-section-study bg-cover bg-center-center w-full h-310 rounded-md">
        <div className="inner-div w-full ">
          <p className="text-xl font-bold font-jost text-center text-fontLight pb-2">About the study.</p>
          <p className="text-sm font-light font-jost text-center text-fontLight">Here are some key highlights of our study.</p>
        </div>

      </div>
      <div className="cards-container lg:w-670 sm:w-full">
        <div className="cards-flex grid gap-5 ml-2  lg:grid-cols-2 sm:grid-cols-1 " >
          <div className="cards bg-lightGray">
            <p className="text-base font-bold font-jost  pb-2">Eligibility</p>
            <p className="text-xs font-jost">18 years or older participants with symptoms of MDS or anaemia. </p>
          </div>
          <div className="cards bg-lightGray">
            <p className="text-base font-bold font-jost   pb-2">Monthly Check-ups</p>
            <p className="text-xs font-jost">A check-up every third weekend of the month to keep
              track of patient's health and recovery. </p>
          </div>
          <div className="cards bg-lightGray">
            <p className="text-base font-bold font-jost  pb-2">Treatment Period</p>
            <p className="text-xs font-jost">The total treatement period of this study is about 20-24 weeks </p>
          </div>
          <div className="cards bg-lightGray">
            <p className="text-base font-bold font-jost  pb-2">Compensation</p>
            <p className="text-xs  font-jost">Participants might receive up to $300 for taking part in
              the study.
            </p>
          </div>

        </div>
      </div>
      <div className="clearfix"></div>
      <div className="lg:w-600 anemia-mds-description bg-lightGray border-l-2 border-primary rounded-sm">
        <div className="lg:p-10 p-5">
          <p className="font-jost lg:text-xl sm:text-base font-bold pb-4 pt-2">
            What is MDS and anemia?</p>
          <p className="text-sm font-jost ">MDS is a rare blood cancer in which blood cells in the bone marrow do not grow to become healthy red
            blood cells, white blood cells, or platelets — all the vital components of blood. Not being able to develop
            healthy red blood cells leads to anemia, which is common with MDS. Anemia has many of the same symptoms
            as MDS and causes even greater fatigue.</p>
          <p className="text-sm font-jost ">It can be exhausting to live with a condition that makes you feel like you're being held back. If you're caring
            for  a loved one with the condition. However, right now, research is underway on an
            investigational study drug to see if it may help alleviate anemic symptoms and better manage your MDS. And
            you may be able to take part in this study.</p>
        </div>

      </div>
    </div>
  )
}
export default Study