'use client'

import WizardFooter from '../../molecules/WizardFooter'

const ReviewForm = ({ data, previousStep, currentStep, handleSubmit }) => {
    return (
        <div className="my-3">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-3">
                    <div className=''>
                        <div className="my-3 text-sm pb-1 font-semibold border-b border-b-lightgray">Employee Information</div>
                        <div className="flex mb-1">
                            <div className="w-[120px] whitespace-nowrap overflow-ellipsis text-fontgray text-sm">Full Name</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                        <div className="flex mb-1">
                            <div className="w-[120px] whitespace-nowrap overflow-ellipsis text-fontgray text-sm">Gender</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                        <div className="flex mb-1">
                            <div className="w-[120px] whitespace-nowrap overflow-ellipsis text-fontgray text-sm">Date of Birth</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                        <div className="flex mb-1">
                            <div className="w-[120px] whitespace-nowrap overflow-ellipsis text-fontgray text-sm">SHI ID</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                        <div className="flex mb-1">
                            <div className="w-[120px] whitespace-nowrap overflow-ellipsis text-fontgray text-sm">Organization ID</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                        <div className="flex mb-1">
                            <div className="w-[120px] whitespace-nowrap overflow-ellipsis text-fontgray text-sm">Phone No.</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="my-3 text-sm pb-1 font-semibold border-b border-b-lightgray">Employment Record</div>
                        <div className="flex mb-2">
                            <div className="w-[110px] overflow-ellipsis text-fontgray text-sm">Employment Date</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                        <div className="flex mb-2">
                            <div className="w-[110px] whitespace-nowrap overflow-ellipsis text-fontgray text-sm">Salary</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                        <div className="flex mb-1 items-center">
                            <div className="w-[110px] overflow-ellipsis text-fontgray text-sm">Membership Status</div>
                            <div className="text-sm text-fontgray font-medium">
                                {/* Display Data */}
                            </div>
                        </div>
                    </div>
                </div>
                <WizardFooter
                    className="mt-4"
                    currentStep={currentStep}
                    handlePrev={previousStep}
                    handleCancelBtn={() => null}
                    submitBtnTitle="Save"
                />
            </form>
        </div>
    )
}

export default ReviewForm