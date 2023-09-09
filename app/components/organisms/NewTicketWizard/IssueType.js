'use client'

export default function IssueType({ goToStep, nextStep, issueTypeHandler }) {

    return (
        <div className='flex-auto my-5 p-5'>
            <div className='grid grid-cols-2 gap-16 pb-10'>
                <div className='hover:bg-secondarywhite shadow-md text-7xl text-secondarygray hover:text-black max-w-[250px] border border-lightgray rounded-md hover:border-black p-5'>
                    <button className='flex flex-col items-center' onClick={() => null}>
                        <div className='block text-base pb-5 font-semibold'>New Insurance Member</div>
                        {/* Icon Goes Here */}
                        <span className='block text-xs leading-4 text-secondarygray pt-5'>Please select this option if the employee is a <b>New Member</b> for the <b>Ethiopian Social Health Insurance</b>.</span>
                    </button>
                </div>
                <div className='hover:bg-secondarywhite shadow-md text-7xl text-secondarygray hover:text-black max-w-[250px] border border-lightgray rounded-md hover:border-black p-5'>
                    <button className='flex flex-col items-center' onClick={() => null}>
                        <div className='block text-base pb-5 font-semibold'>Existing Insurance Member</div>
                        {/* Icon Goes Here */}
                        <span className='block text-xs leading-4 text-secondarygray pt-5'>Please select this option if the employee is <b>already a member</b> of <b>Ethiopian Social Health Insurance</b>.</span>
                    </button>
                </div>
            </div>
        </div>
    )
}