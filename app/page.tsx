import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ImpactSection from "@/components/ImpactSection";
import StoryCard from "@/components/StoryCard";
import SupportSection from "@/components/SupportSection";
import CallToAction from "@/components/CallToAction";

/*
  Homepage Component
  -------------------

  Sections included:

  1. Hero
  2. Impact Stories
  3. Gallery Preview
  4. Impact Statistics
  5. Call To Action
*/

export default function HomePage() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= SECTION DIVIDER ================= */}
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
      </div>

      {/* ================= IMPACT STORIES ================= */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Survivor's stories"
            subtitle="Real lives changed through the support and compassion of Sansthita."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <StoryCard
              title="Arpita's Journey"
              image="/images/women/Women violence.jpg"
              story="Arpita [name changed for privacy] came to Sansthita after facing severe domestic abuse. With legal assistance, emotional support and employment opportunities arranged by our members, she rebuilt her life."
            />

            <StoryCard
              title="Prerna's Story"
              image="/images/women/Women violence.jpg"
              story="Prerna [name changed for privacy] faced emotional torture in her marital home and approached Sansthita for help. Our members stood beside her and helped secure a job for her son."
            />

            <StoryCard
              title="Asha's Story"
              image="/images/women/Women violence.jpg"
              story="After being forced out of her home, Asha [name changed for privacy] wandered the streets for several days before Sansthita found her and helped secure a safe shelter."
            />
          </div>
        </div>
      </section>
      {/* ================= VIEW OUR WORK ================= */}

      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-black">
            See Our Work in Action
          </h2>

          <p className="text-gray-700 mb-8">
            Over the years, Sansthita has supported oppressed women, organized
            community programs, helped vulnerable individuals and worked closely
            with local communities. Explore some of our initiatives and
            activities.
          </p>

          <a
            href="/works"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            View Our Works
          </a>
        </div>
      </section>

      {/* ================= SECTION DIVIDER ================= */}
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
      </div>

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Our Activities"
            subtitle="A glimpse of our work and community programs."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div>
              <Image
                src="/images/children/Children draw compet 14.jpg"
                alt="Children drawing competition"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Children participating in a drawing competition organized by
                Sansthita.
              </p>
            </div>

            <div>
              <Image
                src="/images/children/Children play 01.jpg"
                alt="Children activities"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Children enjoying fun and learning activities organized by
                Sansthita.
              </p>
            </div>

            <div>
              <Image
                src="/images/relief/Covid 05.jpg"
                alt="Relief support"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Sansthita distributing relief support during the COVID pandemic.
              </p>
            </div>

            <div>
              <Image
                src="/images/events/Holi 02.jpg"
                alt="Holi celebration"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Children celebrating Holi together with joy and unity.
              </p>
            </div>

            <div>
              <Image
                src="/images/events/Independence day.jpeg"
                alt="Independence Day"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Independence Day celebration with community members and
                children.
              </p>
            </div>

            <div>
              <Image
                src="/images/all/Tree plant event.jpeg"
                alt="Tree plantation drive"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Tree plantation drive promoting environmental awareness.
              </p>
            </div>
          </div>

          {/* Gallery Button */}
          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION DIVIDER ================= */}
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
      </div>

      {/* ================= IMPACT SECTION ================= */}
      <ImpactSection />

      {/* ================= SECTION DIVIDER ================= */}
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
      </div>

      {/* ================= CALL TO ACTION ================= */}
      <CallToAction />
    </main>
  );
}
