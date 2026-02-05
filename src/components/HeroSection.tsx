import artwork1 from "@/assets/artwork-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={artwork1}
          alt="Featured artwork"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground mb-4">
          Artista Visual
        </p>
        <h1 className="gallery-title text-foreground mb-6">
          Hans Schlechter
        </h1>
        <p className="gallery-subtitle mb-8 text-base">
          Obras de arte contemporáneo
        </p>
        <a
          href="#portfolio"
          className="inline-flex items-center justify-center px-8 py-3 font-sans text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Ver Portafolio
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
