"use client"
import { Title } from '../../components/title';
import { usePathname } from 'next/navigation';
import { Button } from '../../components';
import React from 'react'
import TabsComp from './tabsComp';

interface IProps {
    url: string;
}

const Tabs = ({ url = '' }: IProps) => {
    const pathname = usePathname()
    return (
        <div className="mx-auto px-8 py-8 w-11/12 glass-container ">
            <Title title="Tabs Style" />
            <div className="flex flex-wrap w-full gap-4 ">
                <TabsComp type="tabComp1"/>
            </div>
            {pathname !== '/cards' && <Button url={url} />}
        </div>
    )
}

export default Tabs