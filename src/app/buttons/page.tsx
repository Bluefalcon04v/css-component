'use client'
import { Title } from '@/src/components/title'
import { usePathname } from 'next/navigation'
import { ButtonsComp } from './buttonsComp'
import { Button } from '@/src/components'
import React from 'react'

interface IProps {
    url: string;
}

const Buttons = ({ url = "" }: IProps) => {
    const pathname = usePathname()
    return (
        <div className=" mx-auto px-8 py-8 w-11/12 glass-container">
            <Title title="Buttons" />
            <div className="flex gap-8 flex-wrap">
                <ButtonsComp type="button1" btnTitle="button 1" />
                <ButtonsComp type="button2" btnTitle="button 2" />
                <ButtonsComp type="button3" btnTitle="button 3" />
                <ButtonsComp type="button4" btnTitle="button 4" />
                <ButtonsComp type="button5" btnTitle="button 5" />
                <ButtonsComp type="button6" btnTitle="button 6" />
            </div>
            {pathname !== '/buttons' && <Button url={url}/>}
        </div>
    )
}

export default Buttons