import artwork1 from "@/assets/artwork-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={artwork1}
          alt="Featured artwork"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Artista Contemporánea
        </p>
        <h1 className="gallery-title text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Elena Mendoza
        </h1>
        <p className="gallery-subtitle mb-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Explorando las fronteras entre lo abstracto y lo emocional
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            Ver Portafolio
          </a>
          <a
            href="#biografia"
            className="inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-wider uppercase border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Conocer Más
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
