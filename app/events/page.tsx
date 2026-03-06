import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function EventsPage() {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Events & Activities</h1>

        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          Sansthita organizes community programs, awareness drives, celebrations
          and support initiatives throughout the year.
        </p>
      </section>

      {/* ================= UPCOMING EVENTS ================= */}

      <section className="py-16 max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Upcoming Events"
          subtitle="Programs and activities planned in the near future."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Beautician Course */}

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2 text-black">
              Skill Development – Beautician Course
            </h3>

            <p className="text-gray-600 text-sm">
              A training program designed to help women learn beautician skills
              and create opportunities for self-employment and financial
              independence.
            </p>
          </div>

          {/* Tailoring Training */}

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2 text-black">
              Skill Development – Tailoring Training
            </h3>

            <p className="text-gray-600 text-sm">
              Tailoring and stitching training program aimed at empowering women
              with practical skills that can help them generate income and
              support their families.
            </p>
          </div>

          {/* Performing Arts */}

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2 text-black">
              Art & Cultural Activities – Performing Arts Classes
            </h3>

            <p className="text-gray-600 text-sm">
              Cultural and performing arts classes designed to nurture
              creativity, confidence and artistic expression among children and
              youth.
            </p>
          </div>

          {/* Civic Awareness */}

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2 text-black">
              Student Development – Civic Awareness Program
            </h3>

            <p className="text-gray-600 text-sm">
              Educational sessions helping students understand their rights,
              duties and responsibilities as responsible citizens of society.
            </p>
          </div>

          {/* {Weekly Drawing Classes} */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2 text-black">
              Weekly Drawing Classes
            </h3>

            <p className="text-gray-600 text-sm">
              Weekly drawing classes conducted for children to nurture
              creativity, build confidence and encourage positive learning
              through art and cultural expression.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PAST EVENTS ================= */}

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Past Events"
            subtitle="Some of the programs and activities conducted by Sansthita."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Tree Plantation */}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/all/Tree plant event.jpeg"
                alt="Tree Plantation Drive"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-black">
                  Tree Plantation Drive
                </h3>

                <p className="text-gray-600 text-sm">
                  Community initiative promoting environmental awareness and
                  encouraging green living.
                </p>
              </div>
            </div>

            {/* Women Empowerment */}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/all/Womes day celeb 02.jpg"
                alt="Women empowerment workshop"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-black">
                  Women Empowerment Workshop
                </h3>

                <p className="text-gray-600 text-sm">
                  Awareness and support program helping women understand their
                  legal rights and opportunities.
                </p>
              </div>
            </div>

            {/* Holi */}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/all/Holi 02.jpg"
                alt="Holi celebration"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-black">
                  Holi Celebration
                </h3>

                <p className="text-gray-600 text-sm">
                  Community celebration bringing joy and unity among families
                  and children.
                </p>
              </div>
            </div>

            {/* Independence Day */}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/all/Independence day.jpeg"
                alt="Independence day celebration"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-black">
                  Independence Day Program
                </h3>

                <p className="text-gray-600 text-sm">
                  Celebrating national pride through community gatherings and
                  children's activities.
                </p>
              </div>
            </div>

            {/* Children Drawing */}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/all/Children draw compet 05.jpg"
                alt="Children drawing competition"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-black">
                  Children's Drawing Competition
                </h3>

                <p className="text-gray-600 text-sm">
                  Creative activities encouraging children to express their
                  ideas through art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
