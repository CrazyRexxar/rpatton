import Header from "@/app/components/navbar/Header";
import TopHeader from "@/app/components/navbar/TopHeader";
import AllProjects from "../AllProjects";

export default function RootLayout({ children }) {

  return (
    <body>
      <Header />
      {children}

        <main >

            <div className="min-h-screen sm:grid xl:grid-cols-10 lg:px-32 xl:px-16 splashCard mb-20">
              
              <div className="xl:col-start-2 xl:col-span-8 ">
                  <AllProjects title="University Projects" type="uol" desc="Uni projects description"/>

              </div>

              <div className="xl:col-start-10 xl:col-span-1 hidden lg:block"> 
              </div>
            </div>
        </main>
      <TopHeader/>
    </body>
  )
}