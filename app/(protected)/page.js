import Image from "next/image"
import waveHand from "@/public/wave-hand.png"
import NewTicketWizard from "../components/organisms/NewTicketWizard"

export default function Page() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-800 w-full shadow-md shadow-blue-950">
        <div className="pt-6 px-4 mx-auto max-w-screen-xl text-center sm:pt-6">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-4xl text-white align-top">
            Hello <Image className="inline -mt-3" width={32} src={waveHand} alt="Hi!" />, how may we help you today?
          </h1>
          <p className="mb-8 text-sm font-normal sm:px-16 lg:px-48 text-gray-400">Please fill out the form below to report an issue.
            This form is intended only for tech/IT support therefore if you have any issues with your computer, softwares, printers, internet connection, or any other office systems, use this form to report to EHIS IT support staff.</p>
        </div>
      </section>
      <section className="max-w-xl mx-auto">
        <NewTicketWizard currentUser={null} />
      </section>
    </main>
  )
}
