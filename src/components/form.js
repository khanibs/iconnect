import '../styles/form.scss'



function Form() {
  return (
    <div className="wrapper mt-10">
      <div className="bg-section-study">
          <div className="  m-auto text-center text-fontLight lg:w-600 form-cont sm:p-10">
<p className="text-lg font-jost font-bold pt-10 pb-5">Got a question</p>
<div className="lg:flex justify-center  ">
<div class="mb-3 pt-0 lg:mr-10 ">
  <input type="text" placeholder="Name" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
</div>
<div class="mb-3 pt-0">
  <input type="text" placeholder="E-mail" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
</div>
</div>
<div class="mb-3 pt-0 lg:w-400 sm:w-full m-auto pb-10">
  <input type="text" placeholder="Question" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
</div>
          </div>
        </div>
    </div>
  )
}
export default Form