import Image from "next/image"
import Hero from "@/components/Hero"
import SectionTitle from "@/components/SectionTitle"

/*
  Homepage Component
  -------------------
  This page contains:

  1. Hero Section
  2. About Section
  3. What We Do Section (with images)

  All sections are mobile responsive using Tailwind grid.
*/

export default function HomePage() {
  return (
    <main>

      {/* ---------------- HERO SECTION ---------------- */}
      <Hero />



      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-6">
          About Sansthita
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Sansthita is a registered non-profit organization run primarily by
          women. We stand against violence and injustice and work to support
          vulnerable communities. Through education programs, community
          outreach and social initiatives we strive to build a safer and more
          compassionate society.
        </p>

      </section>



      {/* ---------------- WHAT WE DO SECTION ---------------- */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <SectionTitle
            title="What We Do"
            subtitle="Sansthita works across multiple areas to support vulnerable communities and empower individuals."
          />



          {/* Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            {/* ---------------- WOMEN PROTECTION ---------------- */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

              {/* Image */}
              <Image
                src="/images/women/Womes day celeb 01.jpg"
                alt="Women empowerment program"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-black">
                  Women Protection
                </h3>

                <p className="text-gray-600 text-sm">
                  Supporting women facing domestic violence through legal
                  guidance, emotional counselling and community support.
                </p>
              </div>

            </div>



            {/* ---------------- EDUCATION PROGRAMS ---------------- */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

              <Image
                src="/images/education/Rintu khara donation.jpeg"
                alt="Children education program"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">

                <h3 className="font-semibold text-lg mb-3 text-black">
                  Education Programs
                </h3>

                <p className="text-gray-600 text-sm">
                  Organizing drawing competitions, cultural activities and
                  educational support for underprivileged children.
                </p>

              </div>

            </div>



            {/* ---------------- COMMUNITY RELIEF ---------------- */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

              <Image
                src="/images/impact/Cloth distribution puja 01.jpg"
                alt="Community relief distribution"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">

                <h3 className="font-semibold text-lg mb-3 text-black">
                  Community Relief
                </h3>

                <p className="text-gray-600 text-sm">
                  Distributing clothes, food and essential supplies to
                  families in need across different communities.
                </p>

              </div>

            </div>



            {/* ---------------- CHILD DEVELOPMENT ---------------- */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

              <Image
                src="/images/children/Children play 01.jpg"
                alt="Children development activities"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">

                <h3 className="font-semibold text-lg mb-3 text-black">
                  Child Development
                </h3>

                <p className="text-gray-600 text-sm ">
                  Recreational activities and events that build confidence,
                  creativity and joy among children.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>



    </main>
  )
}