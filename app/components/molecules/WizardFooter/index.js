
export default function WizardFooter({
    className = "",
    currentStep,
    handlePrev,
    handleCancelBtn,
    submitBtnTitle
}) {

    return (
        <div className={className + " p-6 border-t border-solid border-lightgray rounded-b"}>
            {
                currentStep === 1
                    ? <button
                        className="text-secondarygray hover:text-black px-5 py-1.5 text-sm border rounded-md mr-1 mb-1"
                        type="button"
                        onClick={() => handleCancelBtn()}
                    >Cancel</button>
                    : <button
                        className="text-secondarygray hover:text-black px-5 py-1.5 text-sm border rounded-md mr-1 mb-1"
                        type="button"
                        onClick={() => handlePrev()}>Previous</button>
            }
            <button
                className="bg-blue hover:bg-hoverblue text-white flex items-center text-sm px-4 py-2 rounded-md shadow hover:shadow-lg mr-1 mb-1 float-right"
                type="submit"
            >{submitBtnTitle}</button>
        </div>
    )
}