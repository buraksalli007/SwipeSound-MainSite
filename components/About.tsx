export default function About() {
  return (
    <section id="about-founder" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-900/20 via-orange-800/15 to-orange-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Built by a developer who gets it
        </h2>
        <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl p-8 md:p-12 border border-orange-500/20">
          <p className="text-xl text-orange-100 leading-relaxed mb-6">
            SwipeSound was founded and developed by <strong className="text-white">Burak Salli</strong>, 
            a developer passionate about helping people tame chaotic music libraries.
          </p>
          <p className="text-lg text-orange-200/90 leading-relaxed">
            After years of struggling with messy &ldquo;Liked Songs&rdquo; and cluttered playlists, 
            Burak built SwipeSound to make music organization as simple as swiping left or right.
          </p>
        </div>
      </div>
    </section>
  );
}

