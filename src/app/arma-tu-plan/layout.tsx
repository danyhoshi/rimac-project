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
      <div className='relative mt-[56px]'>  
            <Step />
            <Coverage />
            <Sum />
            <NavLink />
            {children}
            <IWant />
        </div>
      
    )
  }