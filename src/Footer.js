import { useState } from "react"

export default function Footer(props) {
    const [qtdRespostas, setQtdRespostas] = useState(0)
    
    return <footer>
        {props.contador}/{props.total}
    </footer>
}