import Head from 'next/head';
import { CheckCircle, DollarSign, Info, CreditCard, FileText } from "lucide-react";
import Link from "next/link";

const PricingSection = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Transparent MEA attestation fees and pricing. No hidden charges and special discounts available for bulk documents." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "MEA Attestation Services",
            "offers": {
              "@type": "Offer",
              "description": "Transparent pricing with no hidden charges",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Head>
      <section 
        className="py-20 px-4 bg-white"
        aria-labelledby="pricing-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-14">
            <p className="text-[#0A9DB2] font-semibold tracking-wider mb-3">PRICING</p>
            <h1 
              id="pricing-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              MEA Attestation Fees
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
          </header>

          <div className="gap-8 max-w-fit mx-auto">
            <article 
              className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-[#0A9DB2] hover:shadow-xl transition-shadow"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="rounded-full bg-cyan-100 p-3">
                  <CreditCard className="text-[#0A9DB2] w-8 h-8" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-center" itemProp="name">Service Fees</h2>
              <ul 
                className="space-y-4 mb-8"
                role="list"
                aria-label="Service features"
              >
                <li className="flex items-start">
                  <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>No hidden charges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Discounts on bulk documents</span>
                </li>
              </ul>

              <Link 
                href="/contact"
                aria-label="Contact us for pricing details"
              >
                <button className="w-full py-4 rounded-3xl text-lg mb-4 bg-[#0A9DB2] text-white hover:bg-cyan-700 transition-colors">
                  Contact Now
                </button>
              </Link>
              <p className="text-sm text-gray-500 text-center">Contact us for a quick quote tailored to your requirements.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;