import React from 'react'
import { Title } from '../global/title'
import { TextStyling } from '../TextStyling'

const TextList = () => {
    return (
        <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
            <Title title="Text Effects" />
            <div className='flex gap-8 flex-wrap'>
                <TextStyling type="text1" />
                <TextStyling type="text2" />
                <TextStyling type="text3" />
            </div>
        </div>
    )
}

export default TextList