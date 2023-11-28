import Accordion from "@/app/ui/components/Accordion";
import { dataMejora } from "@/app/lib/data"
import { option } from "@/app/lib/types"
export default function pageMejoraTuPlan() {
    return (
      <article>
        {
            dataMejora.map((opcion: option) => {
            return (
              <Accordion 
                title={opcion.title}
                description={opcion.description}
                src={opcion.src}
                key={ opcion.src }
              />
            )
        }
        )
      }
      </article>
  )
}