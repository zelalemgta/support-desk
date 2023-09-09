'use client'

import { useState } from 'react'
import WizardFooter from '../../molecules/WizardFooter'

const Address = ({ previousStep, goToStep, currentStep, handleMemberAddress, handleCloseModal }) => {
    const [formData, setFormData] = useState({})

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleADChange = (currentNode, selectedNodes) => {
        setFormData({
            ...formData,
            AdministrativeDivisionId: selectedNodes[0] ? selectedNodes[0].value : ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleMemberAddress(formData)
        goToStep(6)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-3 relative px-6 pt-2 pb-6 flex-auto mt-2">
                <div>
                    Col 1
                </div>
                <div>
                    Col 2
                </div>
            </div>
            <WizardFooter
                className="mt-4"
                isWizard={true}
                currentStep={currentStep}
                handlePrev={previousStep}
                handleCancelBtn={handleCloseModal}
                submitBtnTitle="Next"
            />
        </form>
    )
}

export default Address;