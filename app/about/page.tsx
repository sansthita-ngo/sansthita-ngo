import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Sansthita
          </h1>

          <p className="text-lg text-gray-200">
            A voice for the voiceless — standing for justice, dignity and
            community empowerment.
          </p>
        </div>
      </section>

      {/* ================= MISSION ================= */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Standing for Justice and Dignity
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita stands against violence and injustice. We support
              vulnerable communities, empower women and protect human dignity.
              Through awareness, education and community outreach, we strive to
              build a safer and more compassionate society.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We are especially committed to supporting women facing domestic
              violence and hardship, helping them find safety, strength and
              confidence.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Womes day celeb 02.jpg"
              alt="Women empowerment event"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= OUR WORK ================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Children draw compet 03.jpg"
              alt="Children education activity"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Our Work</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We stand beside the vulnerable with compassion, dignity and
              commitment. Through awareness programs and outreach, we bring
              light where there is darkness.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our team works tirelessly to provide legal guidance, emotional
              support and crisis assistance to those in need.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through the support of our members and community, we also help
              individuals find employment opportunities and rebuild their lives.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              A Journey Rooted in a Humble Beginning
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita was not built inside permanent office walls. It was
              built on courage, compassion and commitment.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Many meetings take place under temporary structures, on footpaths,
              or inside the homes of our members — because service to society
              cannot wait for comfort or convenience.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Even without a permanent office, our mission continues with
              dedication and fearless hearts. With your support, we hope to
              create a stable space to serve society more effectively.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Sansthita office and members 01.jpg"
              alt="Sansthita members meeting"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
