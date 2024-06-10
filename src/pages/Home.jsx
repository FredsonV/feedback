import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankyouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export function Home() {
    const [mostrarResultado, setMostrarResultado] = useState(false)
    const [feedbackNote, setFeedbackNote] = useState(0)

    function handleFeedbackButtonClick(event) {
        const feedback = Number(event.target.innerText)

        setFeedbackNote(feedback)
    }

    function handleSubmit() {
        if (feedbackNote === 0) return

        setMostrarResultado(true)
    }

  return (  
    mostrarResultado === false ? (
    <CardContainer>
        <IconContainer>
            <img src={iconStarImg} alt="icon de de estrela" />
        </IconContainer>

        <h1>Como foi o Atendimento?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podemos melhorar nosso atendimento!</p>
    
        <ButtonContainer>
            <button onClick={handleFeedbackButtonClick}>1</button>
            <button onClick={handleFeedbackButtonClick}>2</button>
            <button onClick={handleFeedbackButtonClick}>3</button>
            <button onClick={handleFeedbackButtonClick}>4</button>
            <button onClick={handleFeedbackButtonClick}>5</button>
        </ButtonContainer>

        <button onClick={handleSubmit}>Enviar</button>
    </CardContainer>
    ) : (
        <CardContainer>
            <img src={thankyouImg} alt="Imagem de Agradecimento" />

            <ResultContainer> <p>Você selecionou {feedbackNote} de 5 </p></ResultContainer>

            <h1>Obrigado</h1>

            <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
        </CardContainer>
    )
  )
}
