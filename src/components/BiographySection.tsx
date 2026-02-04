import artistPortrait from "@/assets/artist-portrait.jpg";

const BiographySection = () => {
  return (
    <section id="biografia" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={artistPortrait}
                alt="XXX"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" />
          </div>

          {/* Biography content */}
          <div className="lg:pl-8">
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Sobre el Artista
            </p>
            <h2 className="gallery-title text-3xl md:text-4xl lg:text-5xl mb-8">
              Hans Schlechter
            </h2>
            <div className="space-y-6 gallery-body">
              <p>
                Lorem ipsum.
              </p>
              <p>
                Lorem ipsum.
              </p>
              <p>
                Lorem ipsum.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-accent">xxx</span>
                <span className="font-sans text-sm text-muted-foreground">xxx</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-accent">xxx</span>
                <span className="font-sans text-sm text-muted-foreground">xxx</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-accent">xxx</span>
                <span className="font-sans text-sm text-muted-foreground">xxx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
