import { useState } from "react"
import AnswerIcon from "./AnswerIcon"

export default function Footer({ answers, total }) {

    return <footer>
        {answers.length}/{total} CONCLUÍDOS

        {answers.length === total && <>
            Terminou
        </>}

        <div className="answers-icons">
            {answers.map((answer, index) => <AnswerIcon key={index} type={answer} />)}
        </div>
    </footer>
}