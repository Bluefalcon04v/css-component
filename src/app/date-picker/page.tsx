'use client'
import DatePickerComp from './components/datePickerComp'
import { Title } from '@/src/components/title'
import { usePathname } from 'next/navigation';
import { Button } from '@/src/components';
import React from 'react'
interface IProps {
    url: string;
}
const DatePicker = ({ url = '' }: IProps) => {
    const pathname = usePathname()

    return (
        <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
            <Title title="Date Picker" />
            <div className='flex gap-8 flex-wrap h-full'>
                <DatePickerComp />
            </div>
            {pathname !== '/date-picker' && <Button url={url} />}

        </div>
    )
}

export default DatePicker