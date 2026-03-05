import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function SupportersPage() {
  const donors = [
    {
      name: "Mr. Arpan & Mrs. Sayantini Basak",
      image: "/images/all/Arpan Sayanti.jpeg",
    },
    {
      name: "Mr. Krishnendu & Mrs. Rupa Gupta",
      image: "/images/all/Krishnendu Rupa.jpeg",
    },
    { name: "Mr. Subhash Basu", image: "/images/all/subhash.jpeg" },
    { name: "Mr. Gautam Saha", image: "/images/all/gautam.jpeg" },
    { name: "Ms. Banani Mukherjee", image: "/images/all/banani.jpeg" },
    { name: "Mr. Arjan Mukherjee", image: "/images/all/arjan.jpeg" },
    { name: "Ms. Shampa Mukherjee", image: "/images/all/shampa.jpeg" },
    {
      name: "Mr. Prasenjeet & Mrs. Saumi Ray",
      image: "/images/all/prasenjeet.jpeg",
    },
    {
      name: "Mr. Bidyut & Mrs. Pamira Mandal",
      image: "/images/all/bidyut.jpeg",
    },
    {
      name: "A group of Young Legal minds from Howrah",
      image: "/images/all/legal.jpeg",
    },
    { name: "Ms Chitra Ray", image: "/images/all/Chitra.jpeg" },
  ];

  return (
    <main className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Our Supporters"
          subtitle="Kind-hearted individuals and families who stand beside Sansthita in our mission."
        />

        {/* Gratitude Corner */}

        <h2 className="text-2xl font-semibold text-center mt-12 mb-6 text-black">
          Gratitude Corner
        </h2>

        {/* Description */}

        <div className="mt-6 space-y-6 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          <p>
            Many kind-hearted and compassionate individuals stand beside
            Sansthita in our mission to support vulnerable members of society.
          </p>

          <p>
            Their encouragement, generosity and moral support help us continue
            our work even with limited resources.
          </p>

          <p>
            We are especially thankful to a generous couple from Poland who,
            despite the distance, continue to remember and support the
            underprivileged members of our society.
          </p>

          <p className="font-medium">
            Together, we transform compassion into action and hope into reality.
          </p>
        </div>

        {/* Donor Images */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {donors.map((donor) => (
            <div
              key={donor.name}
              className="text-center bg-gray-50 rounded-lg p-4 shadow-sm"
            >
              <div className="relative w-full h-40 mb-4 bg-white rounded-md flex items-center justify-center">
                <Image
                  src={donor.image}
                  alt={donor.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <p className="text-sm font-medium text-gray-800">{donor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
