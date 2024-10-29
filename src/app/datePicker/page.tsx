import React from 'react'
import DatePickerComp from './components/datePickerComp'
import { Title } from '@/src/components/title'

const DatePicker = () => {
    return (
        <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
            <Title title="Date Picker" />
            <div className='flex gap-8 flex-wrap h-full'>
                <DatePickerComp />
            </div>
        </div>
    )
}

export default DatePicker