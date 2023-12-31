import Accordion from "../ui/components/Accordion";
import { dataProtejeTuAuto } from "@/app/lib/data"
import { option } from "@/app/lib/types"
export default function pageArmaTuPlan() {
  return (
    <article>
      {
        dataProtejeTuAuto.map((opcion: option) => {
          return (
            <Accordion 
            title={ opcion.title }
            description={ opcion.description }
            src={ opcion.src }
            key={ opcion.src }
        />
          )
        }
        )
      }
   

    </article>
  )
}
