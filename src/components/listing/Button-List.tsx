import React from 'react'
import { Button } from '../Buttons'
import { Title } from '../global/title'

const ButtonList = () => {
    return (
        <div className=" mx-auto px-8 py-8 w-11/12 glass-container">
            <Title title="Buttons" />
            <div className="flex gap-8">
                <Button type="button1" btnTitle="button 1" />
                <Button type="button2" btnTitle="button 2" />
                <Button type="button3" btnTitle="button 3" />
            </div>
        </div>
    )
}

export default ButtonList