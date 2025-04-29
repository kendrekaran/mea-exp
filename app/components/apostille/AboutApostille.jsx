'use client';

import { StampIcon, Globe2Icon } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import Head from 'next/head';

export default function AboutApostille() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Apostille Document Services",
        "description": "Official document attestation service recognized by Hague Convention countries",
        "provider": {
            "@type": "Organization",
            "name": "MEA Expert"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "serviceType": "Document Attestation"
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(jsonLd);
        document.head.appendChild(script);
        return () => document.head.removeChild(script);
    }, []);

    return (
        <>
            <Head>
                <title>Apostille Services in India - Document Attestation | MEA Expert</title>
                <meta name="description" content="Professional Apostille services for document legalization. MEA-authorized attestation valid across 100+ Hague Convention countries." />
                <meta name="keywords" content="apostille services, document attestation, MEA legalization, Hague Convention, international documents" />
            </Head>

            <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto" aria-label="About Apostille Services">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <article className="flex flex-col">
                        <h2 className="text-3xl md:text-4xl md:px-4 poppins-medium mb-8">
                            What Is Apostille?
                        </h2>

                        <figure className="relative w-full h-[400px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="https://i.pinimg.com/474x/52/af/be/52afbe09cbdcda34aa23d616b9a032db.jpg"
                                alt="Official Apostille attestation document with MEA stamp and verification"
                                fill
                                className="object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </figure>
                    </article>

                    <article className="flex flex-col mt-0 md:mt-[90px]">
                        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
                            The <b>Apostille</b> meaning refers to a type of attestation where documents are legalized by the Ministry of External Affairs (MEA), Government of India. An apostille is a square-shaped sticker with a unique identification number — accepted by all Hague Convention member countries.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-cyan-100 p-3 rounded-full">
                                    <StampIcon className="text-[#0A9DB2] h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg mb-1">Official Certification</h4>
                                    <p className="text-gray-600">MEA-authorized sticker that validates your documents internationally</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cyan-100 p-3 rounded-full">
                                    <Globe2Icon className="text-[#0A9DB2] h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg mb-1">Global Acceptance</h4>
                                    <p className="text-gray-600">Valid across 100+ Hague Convention countries without embassy legalization</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
