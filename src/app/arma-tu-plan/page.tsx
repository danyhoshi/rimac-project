import Step from "../ui/components/Step";
import Accordion from "../ui/components/Accordion";
import Sum from "../ui/components/Sum";


export default function pageArmaTuPlan() {
  return (
    <article className="mt-[56px]">
      <p>Arma tu plan</p>
      
    <Accordion 
        title={"Llanta Robada"}
        description={"He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis"}
        src={"/llantaRobada.svg"}
    />

    </article>
  )
}
