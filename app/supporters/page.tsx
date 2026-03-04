import SectionTitle from "@/components/SectionTitle";

export default function SupportersPage() {
  return (
    <main className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Our Supporters"
          subtitle="Kind-hearted individuals and families who stand beside Sansthita in our mission."
        />

        <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
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
      </div>
    </main>
  );
}
