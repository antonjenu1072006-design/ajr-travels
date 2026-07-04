import { useParams } from "react-router-dom";
import Footer from "../components/Footer"
import {
  Clock3,
  BadgeDollarSign,
  FileText,
  Phone,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

import visaData from "../data/visaData";
function VisaDetails() {
  const { country } = useParams();

  const visa = visaData[country];

  if (!visa) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-5xl font-bold text-red-600">
          Visa Information Not Found
        </h1>
      </div>
    );
  }
return (
  <>
    {/* ================= HERO ================= */}

    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{
  backgroundImage: `url(/visa-banners/${visa.banner}.jpg)`,
}}
    >
      <div className="absolute inset-0 bg-[#003B95]/70"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-8">

        <div>

          <p className="uppercase tracking-[6px] mb-4 font-semibold">
            AJR Travels Pvt Ltd
          </p>

          <h1 className="text-6xl lg:text-7xl font-black mb-6">
            {visa.name} Visa
          </h1>

          <p className="text-xl max-w-3xl mx-auto leading-9">
            Fast, Secure and Professional Visa Assistance
            for your next journey.
          </p>

        </div>

      </div>
    </section>

    {/* ================= PACKAGES ================= */}

  <section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

      <h2 className="text-4xl lg:text-5xl font-bold text-[#003B95]">
        Visa Packages
      </h2>

      <p className="text-gray-500 mt-3 text-lg">
        Select the package that suits your travel needs.
      </p>

    </div>
        {visa.sections.map((section, sectionIndex) => (

          <div
            key={sectionIndex}
            className="mb-20"
          >

          <h3 className="text-3xl font-bold text-[#003B95] mb-8 border-l-4 border-[#003B95] pl-4">

              {section.title}

            </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {section.items.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-6"
                >

                  <BadgeDollarSign
                    size={40}
                    className="text-[#003B95] mb-6"
                  />

                  <h4 className="text-2xl font-bold mb-4">
                    {item.name}
                  </h4>

                  <p className="text-4xl font-black text-[#003B95]">

                    {item.price}

                  </p>

                  {item.processing && (

                    <div className="flex items-center gap-3 mt-8 text-gray-600">

                      <Clock3 size={20} />

                      {item.processing}

                    </div>

                  )}

                  {item.validity && (

                    <p className="mt-4">

                      <strong>Validity:</strong>

                      {" "}

                      {item.validity}

                    </p>

                  )}

                  {item.stay && (

                    <p>

                      <strong>Stay:</strong>

                      {" "}

                      {item.stay}

                    </p>

                  )}

                  {item.note && (

                    <div className="bg-blue-50 rounded-xl mt-6 p-4 text-sm">

                      {item.note}

                    </div>

                  )}

                  {item.includes && (

                    <div className="mt-6">

                      <h5 className="font-bold mb-3">
                        Includes
                      </h5>

                      <ul className="space-y-2">

                        {item.includes.map((include, i) => (

                          <li
                            key={i}
                            className="flex items-center gap-2"
                          >

                            <CheckCircle
                              size={18}
                              className="text-green-600"
                            />

                            {include}

                          </li>

                        ))}

                      </ul>

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

    {/* ================= DOCUMENTS ================= */}

    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#003B95]">

            Required Documents

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {visa.documents.map((doc, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 shadow"
            >

              <div className="flex items-center gap-4">

                <FileText
                  className="text-[#003B95]"
                />

                <span className="text-lg">

                  {doc}

                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

          {/* ================= CONTACT ================= */}

    <section className="py-24 bg-[#003B95]">

      <div className="max-w-5xl mx-auto px-8 text-center text-white">

        <h2 className="text-5xl font-bold mb-6">
          Need Assistance?
        </h2>

        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-9">
          Our experienced visa consultants are ready to help you with your
          application, document preparation and visa processing.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <a
            href="https://wa.me/94XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-white text-[#003B95] px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            <MessageCircle size={22} />
            WhatsApp Us
          </a>

          <a
            href="tel:+94XXXXXXXXX"
            className="flex items-center gap-3 border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#003B95] transition"
          >
            <Phone size={22} />
            Call Now
          </a>

        </div>

      </div>

    </section>
<Footer />
  </>
);
}

export default VisaDetails;