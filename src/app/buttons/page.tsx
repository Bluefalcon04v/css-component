import { Button } from '@/src/components'
import { Title } from '@/src/components/title'
import React from 'react'

const Buttons = () => {
    return (
        <div className=" mx-auto px-8 py-8 w-11/12 glass-container">
            <Title title="Buttons" />
            <div className="flex gap-8 flex-wrap">
                <Button type="button1" btnTitle="button 1" />
                <Button type="button2" btnTitle="button 2" />
                <Button type="button3" btnTitle="button 3" />
                <Button type="button4" btnTitle="button 4" />
                <Button type="button5" btnTitle="button 5" />
            </div>
        </div>
    )
}

export default Buttons