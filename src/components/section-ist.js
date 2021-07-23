import '../styles/section-ist.scss'
import Header from './header'



 function SectionOne() {
  return (
    <div className="wrapper">
      <div className="bg-section-1 bg-cover  grid w-full lg:h-600 lg:bg-cen-top sm:h-450 sm:bg-center-center ">
        <Header />
        <div className="container lg:w-600 md:w-full">
          <div className="inner-div  lg:align-middle">
            <h1 className=" font-bold font-jost lg:text-3xl sm:text-2xl">A clinical research study for  people with myelodysplastic syndromes with anemia.</h1>
            <p className="text-sm font-jost description">The study is to compare the effectiveness of a study drug versus a standard-of-
              care therapy. Individuals will be evaluated to determine their eligibility to
              participate. Each person who qualifies will receive either the study drug or
              standard-of-care therapy, study-related medical exams, and study-related
              laboratory tests at no cost.</p>
          </div>
          <div>
            <button className="bg-primary text-xs font-jost text-fontLight px-3 py-2 mr-3">Check my eligibility</button>
            <button className="text-xs px-3 py-2 border text-primary font-jost font-medium border-primary rounded-sm"> Learn more</button>
          </div>
        </div>
      </div>

      <div className="paragraph-container lg:w-450">
        <p className="text-lg font-bold font-jost">  Are blood transfusions holding you back?</p>

        <p className="text-sm font-jost description">The purpose of the study is to compare the effectiveness of a study drug versus a standardof-care therapy.
          Individuals will be evaluated to determine their eligibility to participate. Each person who qualifies will receive
          either the study drug or standard-of-care therapy, study-related medical exams, and study-related laboratory tests
          at no cost.</p>
      </div>
    </div>
  )
}
export default SectionOne