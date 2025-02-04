import React, { useState } from 'react'

const TabsComp = ({ type }: any) => {
    const [activeTab, setActiveTab] = useState('tab1')

    const tabsOptions = [
        { title: 'Tab 1', value: 'tab1' },
        { title: 'Tab 2', value: 'tab2' },
        { title: 'Tab 3', value: 'tab3' },
        { title: 'Tab 4', value: 'tab4' }
    ];

    if (type === "tabComp1") {
        return (
            <div id="tab-comp1" className="" >
                <div className="flex flex-row ">
                    {tabsOptions?.map(({ title, value }) => {
                        return (
                            <button
                                key={value}
                                className={`min-w-fit px-4 text-xs pb-2 mx-0.5 starting_comp cursor-pointer font-semibold tab-animation hover:text-indigo-50 ${value === activeTab
                                    ? "border-solid relative transition-all ease-in-out duration-300 -bottom-1 active  text-indigo-400"
                                    : "relative -bottom-1 text-slate-50 font-medium "
                                    }`}
                                onClick={() => { setActiveTab(value); }}>
                                {title}
                            </button>
                        );
                    })}
                </div>
            </div>
        )
    }

}

export default TabsComp