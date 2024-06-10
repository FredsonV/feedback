import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankyouImg from "../assets/illustration-thank-you.svg"

export function Home() {
  let aparecerResultado = true;

  return (  
    aparecerResultado=== false ? (
    <CardContainer>
        <IconContainer>
            <img src={iconStarImg} alt="icon de de estrela" />
        </IconContainer>

        <h1>Como foi o Atendimento?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podemos melhorar nosso atendimento!</p>
    
        <ButtonContainer>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </ButtonContainer>

        <button>Enviar</button>
    </CardContainer>
    ) : (
        <CardContainer>
            <img src={thankyouImg} alt="Imagem de Agradecimento" />

            <ResultContainer> <p>Você selecionou 4 de 5 </p></ResultContainer>

            <h1>Obrigado</h1>

            <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
        </CardContainer>
    )
  )
}
