import React from 'react'
import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'

export default props => (
    <PassoStack {...props} avancar="TelaC" voltar>
        <TextoCentral corFundo='#3b82c4'>
            Tela B
        </TextoCentral>
    </PassoStack>
)