import { Banknote, CreditCard, ShieldCheck, Building2, Briefcase, Globe } from "lucide-react";

export default function Partners() {
    return (
       <section id="partners" className="pt-20 bg-gray-100 py-16 flex flex-col items-center">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-2xl border border-blue-100 py-8 px-4 md:px-12">
                    {/* Heading */}
                    <h2 className="text-4xl font-extrabold text-stone-950 mb-8 md:mb-0 md:mr-12 whitespace-nowrap">
                         Partners
                    </h2>
                    {/* Partners Icons in a single horizontal flex row */}
                    <div className="flex flex-wrap md:flex-nowrap gap-8 w-full justify-center items-center">
                        <div className="flex flex-col items-center">
                            <Banknote className="h-20 w-20 text-black mb-2" />
                            <span className="text-lg font-semibold text-stone-800">Bank Partner</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <CreditCard className="h-20 w-20 text-black mb-2" />
                            <span className="text-lg font-semibold text-stone-800">Card Partner</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <ShieldCheck className="h-20 w-20 text-black mb-2" />
                            <span className="text-lg font-semibold text-stone-800">Security Partner</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Building2 className="h-20 w-20 text-black mb-2" />
                            <span className="text-lg font-semibold text-stone-800">Corporate Partner</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Briefcase className="h-20 w-20 text-black mb-2" />
                            <span className="text-lg font-semibold text-stone-800">Business Partner</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Globe className="h-20 w-20 text-black mb-2" />
                            <span className="text-lg font-semibold text-stone-800">Global Partner</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}