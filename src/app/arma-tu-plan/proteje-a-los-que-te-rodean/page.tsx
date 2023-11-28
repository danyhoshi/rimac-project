
import Accordion from "@/app/ui/components/Accordion";
import { dataProtejeOtros } from "@/app/lib/data"
import { option } from "@/app/lib/types"
export default function pageProtejeLosTuyos() {
    return (
      <article>
        {
            dataProtejeOtros.map((opcion: option) => {
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