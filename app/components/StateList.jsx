import React from 'react'
import clsx from 'clsx'
import { LicenseState, actionMap, backgroundMap } from '../utils/utility'


export const StateList = ({ states, onAction }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                Object.entries(states).map(([state, stateDetails], index) => {
                    return (
                        <div key={index} className={clsx("h-16 border-slate-300 px-4  space-y-2 bg-slate-50", index % 2 == 1 ? "border-r-2 border-l-2 md:border-l" : "border-l-2 border-r-2 md:border-r", index === 0 ? ' rounded-tl-lg rounded-tr-lg md:rounded-tr-none border-t-2' : (index === 1) ? " md:rounded-tr-lg border-t md:border-t-2" : 'border-t', index === Object.keys(states).length - 1 ? "rounded-bl-lg rounded-br-lg md:rounded-bl-none border-b-2 " : index === Object.keys(states).length - 2 ? "md:rounded-bl-lg border-b md:border-b-2" : "border-b")
                        }>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="h-16 flex items-center justify-start">
                                    <p className="text-sm text-slate-600">
                                        {state} License
                                    </p></div>



                                <div className="h-16 flex items-center justify-center">
                                    {
                                        actionMap[stateDetails.licensedState] ?
                                            <button onClick={() => onAction(state, stateDetails)} className={clsx("font-bold text-sm w-28 py-1 border rounded-md mx-auto border border-2 border-slate-200 bg-slate-100 text-slate-600")}>

                                                {actionMap[stateDetails.licensedState]}
                                            </button> :

                                            <p className="text-sm font-bold text-slate-600">Licensed</p>
                                    }
                                </div>


                                <div className="h-16 flex items-center justify-center">
                                    <div className={clsx("relative rounded-md w-full h-3 bg-slate-200")}>
                                        <div className={clsx("absolute bottom-0 top-0 left-0 rounded-md", stateDetails.licensedState == LicenseState.PENDING ? 'w-3/4' : 'w-full', backgroundMap[stateDetails.licensedState])}>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
