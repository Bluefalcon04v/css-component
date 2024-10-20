import { TextStyling } from '@/src/components/TextStyling'
import { Title } from '@/src/components/title'
import React from 'react'

const Texts = () => {
    return (
        <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
            <Title title="Text Effects" />
            <div className='flex gap-8 flex-wrap'>
                <TextStyling type="text1" />
                <TextStyling type="text2" />
                <TextStyling type="text3" />
                <TextStyling type="text4" />
            </div>
        </div>
    )
}

export default Texts