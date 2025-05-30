export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        About Code With Sanjay
      </h1>

      <section className="mb-12">
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          <strong className="text-white">Code With Sanjay</strong> is more than
          a platform — it's a community-driven space to empower developers and
          creators. Whether you're here to support, collaborate, or grow, you're
          in the right place.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          🌟 Why Support Matters
        </h2>
        <p className="text-gray-400">
          Your support keeps this platform alive — from buying coffee to funding
          open-source tools and educational content. Donations go toward
          building better tutorials, tools, and features for the dev community.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">
          🎯 Benefits for Supporters
        </h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>
            Get early access to tutorials, premium resources, and workshops
          </li>
          <li>Recognition on the website and social media shoutouts</li>
          <li>Exclusive supporter-only Q&A sessions</li>
          <li>Help shape the direction of future content</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">
          🧑‍💻 Benefits for Creators
        </h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Grow your audience by collaborating on tutorials or projects</li>
          <li>
            Access shared tools and templates to accelerate your development
          </li>
          <li>Get mentoring and feedback from an experienced developer</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-pink-400">
          🤝 Collaborations & Engagement
        </h2>
        <p className="text-gray-400 mb-2">
          Collaboration fuels innovation. Join hands to build exciting projects,
          exchange ideas, and push boundaries.
        </p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Work on open-source projects together</li>
          <li>Host live coding events or interviews</li>
          <li>Share your story with the community</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
          📚 Access to Resources
        </h2>
        <p className="text-gray-300">
          Get curated tools, roadmaps, templates, and checklists — whether
          you’re a beginner or an experienced dev.
        </p>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: `About - Code with Sanjay`,
  };
}
