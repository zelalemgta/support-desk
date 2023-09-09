'use client'

import { useState, useEffect } from 'react'
import StepWizard from "react-step-wizard";
import IssueType from './IssueType'
import AdditionalInformation from './AdditionalInformation'
import DeviceDescription from './DeviceDescription'
import ReviewForm from './ReviewForm';
import IssueConfirmation from './IssueConfirmation';

export default function NewTicketWizard({ currentUser }) {
    const [isFormLoading, setIsFormLoading] = useState(false)

    const [data, setData] = useState({})

    const issueTypeHandler = (issueType) => {
    }

    const deviceDescriptionHandler = (formData) => {
        console.log(formData)
    }

    const additionalInformationHandler = (formData) => {
    }

    const resetFormHandler = () => {

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsFormLoading(true)
    }

    const issueConfirmationHandler = () => { }

    const TicketFormNav = ({ currentStep, totalSteps }) => {
        const progress = Math.floor((currentStep / totalSteps) * 100)
        return (
            <div className="border-b-lightgray border-b-2 py-4">
                <div className="uppercase tracking-wide text-xs font-bold text-gray mb-1 leading-tight">{`Step: ${currentStep} of ${totalSteps}`}</div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mr-10">
                        {{
                            1: <div>
                                <div className="text-lg font-bold text-secondarygray leading-tight">Issue Type</div>
                            </div>,
                            2: <div>
                                <div className="text-lg font-bold text-gray-700 leading-tight">Device Description</div>
                            </div>,
                            3: <div>
                                <div className="text-lg font-bold text-secondarygray leading-tight">Additional Information</div>
                            </div>,
                            4: <div>
                                <div className="text-lg font-bold text-gray-700 leading-tight">Review Form</div>
                            </div>,
                            5: <div>
                                <div className="text-lg font-bold text-gray-700 leading-tight">Issue Reported Successfully</div>
                            </div>
                        }[currentStep]}
                    </div>

                    <div className="flex items-center md:w-64">
                        <div className="w-full bg-white rounded-full mr-2">
                            <div className="rounded-full bg-blue text-xs leading-none h-2 text-center text-white" style={{ width: progress + "%" }}></div>
                        </div>
                        <div className="text-xs w-10 text-gray-600">{progress}%</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="ticket-fieldset">
            <StepWizard className='px-6' transitions={{}} nav={<TicketFormNav />}>
                <IssueType issueTypeHandler={issueTypeHandler} />
                <DeviceDescription data={data} resetFormHandler={resetFormHandler} deviceDescriptionHandler={deviceDescriptionHandler} />
                <AdditionalInformation data={data} additionalInformationHandler={additionalInformationHandler} resetFormHandler={resetFormHandler} />
                <ReviewForm data={data} handleSubmit={handleSubmit} resetFormHandler={resetFormHandler} />
                <IssueConfirmation data={data} issueConfirmationHandler={issueConfirmationHandler} resetFormHandler={resetFormHandler} />
            </StepWizard>
        </div>
    )
}