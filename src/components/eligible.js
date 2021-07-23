import '../styles/eligibility.scss'



function Eligibility() {
  return (
    <div className="wrapper" id={'eligible'}>
      <div className="lg:w-600 elegible-container bg-primary text-fontLight lg:p-10 sm:p-5 rounded-sm ">
        <p className="font-jost lg:text-xl sm:text-base font-bold pb-4 pt-2">
Let's find out if you are eligible for this study.</p>

<p className="text-xs font-jost py-4 ">Take  up this questionnaire to help us determine if you have  symptoms that are common for MDS and anemia.
If you have the common symptoms, you may be eligible to take part in the study.</p> 
<button className="bg-fontLight text-primary text-xs font-medium mr-1 mt-5 px-2 py-2 rounded-sm button-answer"><span className="mr-2">Start  answering</span>
<svg width="25" fill="currentColor" height="18" xmlns="http://www.w3.org/2000/svg" ><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>  </button>
  </div>
    </div>
  )
}
export default Eligibility