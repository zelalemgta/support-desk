import Image from "next/image"
import techSupport from '@/public/tech_support.png'
import LoginForm from './LoginForm'

export default async function Page() {
    return (
        <main className="h-screen">
            <section className="flex h-full">
                <div className="sm:py-8 px-4 m-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="hidden sm:flex sm:flex-col sm:justify-center">
                        <Image className="animate-pulse" alt="Tech Support" src={techSupport} />
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Revolutionizing Tech Support</h1>
                        <p className="mb-6 text-lg font-normal text-gray-400">The future is Technology and here the Ethiopian Health Insurance IT Directorate is redefining the tech (IT) support to resolve EHIS staff tech issues more efficiently.</p>
                        <p className="bg-gray-800 p-2 text-sm font-light w-fit text-white"><b>Note:</b> Please contact IT Directorate to get a verified account to access the system!</p>
                    </div>
                    <LoginForm />
                </div>
            </section>
        </main>
    )
}