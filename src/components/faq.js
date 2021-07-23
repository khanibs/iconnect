import '../styles/faq.scss'
const questions = [
    { id: '0', question: 'What do I have to do in the study?', answer: 'Participate in various study activities, such as a screening visit. eligibility review, and a treatment period, over the course of  about 3 months. This includes a 6-week treatment period where participants apply the study treatment 2x per day, send   weekly photos of their lower legs and have a weekly video visit with a study coach. The study will conclude with an in-home    visit when you end treatment and a video follow-up visit 4 weeks later. We will provide all instructions and devices needed    to participate in the study.' },
    { id: '1', question: 'How long is the study?', answer: 'ANswer' },
    { id: '2', question: 'Can I continue to wear compression socks during the study?', answer: 'Answer' },
    { id: '3', question: 'What is an at-home clinical study?', answer: 'Answer' },
]
var id='0'
function   setOpen(i_id){
    console.log(id);
    id=i_id
        }
function FAQ() {
 

    return (

        <div className="lg:w-600 faq-container rounded-sm  m-auto text-center" id={'faq'}>
            <p className="font-jost lg:text-xl sm:text-base font-bold pb-4 pt-2">
                Frequently Asked Questions.</p>
            <div className="text-left">
                {questions.map((item) => (
                    <div onClick={()=>setOpen(item.id)} key={item.id} className="text-left mt-3 mb-3">
                     <div className="flex flex-div">
                          <p className="text-base font-bold pb-2">{item.question}</p>
                   {item.id==id? <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" className="primary" ><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>

                    : <svg className="primary" width="22" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
                }
                     </div>
                     <div className="bg-lightGray lg:w-600 h-1 w-90"></div>
                   { item.id ==id ?<div className="pt-2 text-sm font-jost">
                    {item.answer}

                     </div>:<div></div>}
                     </div>
                ))}

            </div>
        </div>

    )
}
export default FAQ