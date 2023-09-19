//import Image from 'next/image'

import { AiFillCheckCircle, AiFillPlusCircle } from "react-icons/ai";
import Header from "../components/navbar/Header";
import AlevelsDropDown from "../components/cv/AlevelsDropDown";
import TopHeader from "../components/navbar/TopHeader";
import Image from "next/image";
import Navigation from "../components/cv/Navigation";

//bg-base-100 shadow-xl

export default function RootLayout({ children }) {
  const skillsList = ["CAD", "Technical Drawing", "Engineering Standards", " GD&T", " Failure Investigation", " Verification & Validation", " Cost Analysis"]
  const skillsList2 = ["Problem solving", "Critical thinking", " Collaboration", " Communication", "Risk Management"]
  return (
    <body>
      <Header />
      {children}

        <main className="min-h-screen grid xl:grid-cols-10 md:px-32 px-6 xl:px-16 splashCard mb-40">
          <div className="xl:col-start-1 xl:col-span-2 shadow-md hidden lg:block"> 
            <Navigation/>
          </div>
          <div className="xl:col-start-3 xl:col-span-7">

            <div className="xl:col-start-3 xl:col-span-8">
            <div className=" shadow-md">
            <h1 className="mt-2 font-bold tracking-tight text-gray-900 text-4xl mb-1">Statement</h1>
            <div className="line mb-4"></div>
            <p className="mt-2 ">Final year master’s student (MEng) at the University of Leeds. Looking to apply my strong analytical and project management skills to solve complex problems in the Engineering Industry. Experience gained as a Design Engineer at Cummins has developed my ability to work as part of a global team to find data driven solutions that work for both client and business.</p>
            </div>

            <div id="uol" className=" shadow-md">
            <h1 className="mt-6 font-bold tracking-tight text-gray-900 text-4xl mb-1">Education</h1>
            <div className="line mb-0"></div>
            <div className="grid grid-cols-13">
            <div className="col-start-1 col-span-10 ">
            <h2 className="text-base font-semibold leading-7 text-gray-900 text-lg translate-y-2">University of Leeds</h2>
            <p className="text-base font-semibold leading-7 text-indigo-600 italic text-xs">MEng (Ind.) | Predicted 1st</p>
            </div>

            <div className="col-start-11 col-span-2 ">
            <p className="text-base text-right font-semibold leading-7 text-gray-900 text-lg translate-y-2">Leeds, UK</p>
            <p className="text-base text-right font-semibold leading-7 text-indigo-600 italic text-xs">09/2019 – Present</p>
            </div>
            </div>
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Exceptional academic performance (average 77%) accomplished whilst adapting to new teaching and team-working methods due to the COVID-19 pandemic</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Something else can go here with action verbs and stuff bust must be long enough to start a new line</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2"><strong>Dissertation: </strong>Something else can go here with action verbs and stuff bust must be long enough to start a new line</p>
            </li>
            </ul>

            <AlevelsDropDown />

            </div>


            <div className=" shadow-md">
            <h1 className="mt-6 font-bold tracking-tight text-gray-900 text-4xl mb-1">Industry Experience</h1>
            <div className="line mb-0"></div>
            <div className="grid grid-cols-13">
            <div className="col-start-1 col-span-10 ">
            <h2 className="text-base font-semibold leading-7 text-gray-900 text-lg translate-y-2">Cummins | Engineering</h2>
            <p className="text-base font-semibold leading-7 text-indigo-600 italic text-xs">Design Engineering Placement</p>
            </div>

            <div className="col-start-11 col-span-2 ">
            <p className="text-base text-right font-semibold leading-7 text-gray-900 text-lg translate-y-2">Darlington, UK</p>
            <p className="text-base text-right font-semibold leading-7 text-indigo-600 italic text-xs">07/2022 – Present</p>
            </div>
            </div>
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Exceptional academic performance (average 77%) in individual coursework and team projects, accomplished whilst adapting to new teaching and team-working methods due to the COVID-19 pandemic</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Something else can go here with action verbs and stuff bust must be long enough to start a new line</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2"><strong>Dissertation: </strong>Something else can go here with action verbs and stuff bust must be long enough to start a new line</p>
            </li>
            </ul>
            </div>


            <div className=" shadow-md">
            <h1 className="mt-6 font-bold tracking-tight text-gray-900 text-4xl mb-1">Leadership Activities</h1>
            <div className="line mb-2"></div>

            <h2 className="text-base font-semibold leading-7 text-gray-900 text-lg">Project Management | Cummins</h2>   
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Managed the project by defining strategy and workload, then scheduling and leading regular team meetings to discuss progress and roadblocks.</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Leveraged Mat-Lab and Simulink to optimise the vehicles suspension response. <strong>Achieved 86% in this coursework.</strong></p>
            </li>
            </ul>

            <h2 className="text-base font-semibold leading-7 text-gray-900 text-lg mt-2">Daring Dash Competition | UoL</h2>   
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Led a team that designed and manufactured an autonomous buggy.</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Managed the project by defining strategy and workload, then scheduling and leading regular team meetings to discuss progress and roadblocks.</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Leveraged Mat-Lab and Simulink to optimise the vehicles suspension response. <strong>Achieved 86% in this coursework.</strong></p>
            </li>
            </ul>

            <h2 className="text-base font-semibold leading-7 text-gray-900 text-lg mt-2">Volunteering in Tanzania</h2>   
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Organised several fund-raising activities over a 2 year period to fund a volunteering project</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Travelled to Tanzania to participate in several aid projects, including Civil Engineering work redirecting rainwater around a local school</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Opportunity to experience a different culture and harboured my love for travel.</p>
            </li>
            </ul>

            </div>


            <div className=" shadow-md">
            <h1 className="mt-6 font-bold tracking-tight text-gray-900 text-4xl mb-1">Employment History</h1>
            <div className="line mb-0"></div>
            <div className="grid grid-cols-13">
            <div className="col-start-1 col-span-10 ">
            <h2 className="text-base font-semibold leading-7 text-gray-900 text-lg translate-y-2">British Food Box</h2>
            <p className="text-base font-semibold leading-7 text-indigo-600 italic text-xs">Store Manager, Data Engineering</p>
            </div>

            <div className="col-start-11 col-span-2 ">
            <p className="text-base text-right font-semibold leading-7 text-gray-900 text-lg translate-y-2">Derby, UK</p>
            <p className="text-base text-right font-semibold leading-7 text-indigo-600 italic text-xs">04/2020 – 08/2020</p>
            </div>
            </div>
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Managed a farm-shop over lockdown that served the local area and supported 10-20 vulnerable members of the community per day by implementing a new food delivery service. Supervised day-to-day running, customer engagement and cashing-up</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2"><strong>Highlight: </strong>Automated the online targeting of new customers for the main wholesale business by employing self-taught computer programming and IT skills. Gathered information on 3000+ local small businesses, saving 120Hrs of company time</p>
            </li>
            </ul>

            <div className="grid grid-cols-13 ">
            <div className="col-start-1 col-span-10 ">
            <h2 className="text-base font-semibold leading-7 text-gray-900 translate-y-2">The Edge | Leisure Centre</h2>
            <p className="text-base font-semibold leading-7 text-indigo-600 italic text-xs">Lifeguard</p>
            </div>

            <div className="col-start-11 col-span-2 ">
            <p className="text-base text-right font-semibold leading-7 text-gray-900 translate-y-2">Leeds, UK</p>
            <p className="text-base text-right font-semibold leading-7 text-indigo-600 italic text-xs">09/2019 – 07/2022</p>
            </div>
            </div>
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Ensured customer safety by preventing and responding to accidents.</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Maintained professional qualifications through training and assessment</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Balanced University studies while working 10-15 hrs a week – developed organizational and time management skills.</p>
            </li>
            </ul>

            </div>

            </div>

            <div className="xl:col-start-8 xl:col-span-3 shadow-md"> 

            <div className=" shadow-md">
            <h1 className="mt-2 font-bold tracking-tight text-gray-900 text-4xl mb-1">Skills</h1>
            <div className="line mb-0"></div>
            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-2 translate-y-2">Technical</h2>
            <ul className="flex flex-wrap">
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-0 mr-1">Design</p>
            </li>
            {skillsList.map((name, index) => (
            <li key={index} className="flex">
                <AiFillCheckCircle className="m-1 bulletIcon" />
                <p className="ml-0 mr-1">{name}</p>
            </li>
            ))}
            </ul>

            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-2 translate-y-2">Project Management</h2>
            <ul className="flex flex-wrap">
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-0 mr-1">Leadership</p>
            </li>
            {skillsList2.map((name, index) => (
            <li key={index} className="flex">
                <AiFillCheckCircle className="m-1 bulletIcon" />
                <p className="ml-0 mr-1">{name}</p>
            </li>
            ))}
            </ul>
            </div>

            <div className=" shadow-md">
            <h1 className="mt-6 font-bold tracking-tight text-gray-900 text-4xl mb-1">Hobbies & Interests</h1>
            <div className="line mb-0"></div>
            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-2 translate-y-2">Technology</h2>
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Self-taught computer programmer with a passion for software and hardware integration.</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Created websites and games using: Python, Java, C#, JavaScript, HTML, CSS.</p>
            </li>
            </ul>

            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-2 translate-y-2">Sport</h2>
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Enjoy playing rugby and swimming competitively.</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Avid F1 fan – enjoy watching races and following technical development.</p>
            </li>
            </ul>

            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-2 translate-y-2">Music</h2>
            <ul>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Grade 8 Cornet, played as part of an orchestra for 10+ Years</p>
            </li>
            <li className="flex">
            <AiFillCheckCircle className="m-1 bulletIcon" />
            <p className="ml-2">Currently learning piano, would like to learn guitar in the future.</p>
            </li>
            </ul>
            </div>
            </div>

          </div>

          <div className="row-start-8 row-span-1 hidden lg:block">
            <div className="flex flex-col">
                <div className="m-8 mb-0"><Image src="/web.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/fire.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/next.svg" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/sql.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/cpp.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/cshrp.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/py.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/java.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/linux.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/office.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/mat.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0"><Image src="/sw.png" width={50} height={50}></Image></div>
                <div className="m-8 mb-0 ml-9"><Image src="/ad.png" width={44} height={44}></Image></div>
                <div className="m-8 mb-0 ml-9"><Image src="/creo.svg" width={44} height={44}></Image></div>
                <div className="m-8 mb-0 ml-9"><Image src="/lbv.svg" width={44} height={44}></Image></div>
                <div className="m-8 mb-0 ml-9"><Image src="/ad.png" width={44} height={44}></Image></div>
                <div className="m-8 mb-0 ml-9"><Image src="/asys.png" width={44} height={44}></Image></div>
            </div>
          </div>
        </main>

        <TopHeader/>
    </body>
  )
}
