import FAQS from "@/components/faqs/page";
import { FAQITEMS } from "../../../constants";
export default function Faqsdisplay() {
    return (
        <div className="bg-[#EDF5F2] flex flex-col items-center justify-center pt-20 pb-20">
            {/* Main Container with Responsive Width */}
            <div className="w-full max-w-[1000px] space-y-10 p-5 md:px-10">
                {FAQITEMS.map((item, i) => (
                    <div key={i} className="space-y-5">
                        {/* FAQ Category Title */}
                        <h1 className="font-bold text-4xl text-gray-800 text-center">{item.category}</h1>
                        {/* FAQs under Each Category */}
                        <div className="space-y-3">
                            {item.items.map((faq, i) => (
                                <FAQS key={i} title={faq.title} content={faq.content} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}