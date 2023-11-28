import Step from "../ui/components/Step";
import Coverage from "../ui/components/Coverage";
import Sum from "../ui/components/Sum";
import NavLink from "../ui/components/NavLinks";
import IWant from "../ui/components/IWant";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className='flex flex-col lg:flex-row relative mt-[56px]'>  
            <Step />
            <div className="lg:w-[33.33%]">
              <Coverage />
              <Sum />
              <NavLink />
              {children}
            </div>
            <IWant />
        </div>
      
    )
  }