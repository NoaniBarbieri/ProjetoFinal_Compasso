import React from "react"
import { TextResults } from './style'

export const TextSearch = (props) => {    
    const { userData } = props
    
    return (
        <TextResults>
            {
                !userData ?
                    <p>{
                        `O usuário buscado não existe,${'\n'} por favor tente novamente!`
                    }
                    </p>
                    :
                    <p>{`            
                        Nome: ${userData.name} ${'\n'}
                        DC: ${userData.dc} ${'\n'}
                        Inovation Istudio: ${userData.istudio} ${'\n'}
                        Idade: ${userData.age} ${'\n'}
                        Cargo: ${userData.position}
                    `}
                    </p>
            }
        </TextResults>
    )
}

export default TextSearch;