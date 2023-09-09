'use client'

import { useState } from 'react'
import ModalFooter from '../../molecules/WizardFooter'
import InputField from '../../atoms/InputField'

const AdditionalInformation = ({ previousStep, nextStep, currentStep, data, handleAdditionalInformation, handleCloseModal }) => {
    const [formData, setFormData] = useState({})

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdditionalInformation(formData)
        nextStep()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex-auto mt-2'>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
                        Col 1
                    </div>
                    <div>
                        Col 2
                    </div>
                </div>
                <ModalFooter
                    className="mt-4"
                    isWizard={true}
                    currentStep={currentStep}
                    handlePrev={previousStep}
                    handleCancelBtn={handleCloseModal}
                    submitBtnTitle="Next"
                />
            </div>
        </form>
    )
}

export default AdditionalInformation;