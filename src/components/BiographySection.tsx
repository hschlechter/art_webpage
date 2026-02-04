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
                alt="Elena Mendoza en su estudio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" />
          </div>

          {/* Biography content */}
          <div className="lg:pl-8">
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Sobre la Artista
            </p>
            <h2 className="gallery-title text-3xl md:text-4xl lg:text-5xl mb-8">
              Elena Mendoza
            </h2>
            <div className="space-y-6 gallery-body">
              <p>
                Nacida en Barcelona en 1978, Elena Mendoza es una artista visual 
                cuya obra explora la intersección entre la memoria colectiva y 
                la experiencia individual. Su trabajo se caracteriza por el uso 
                audaz del color y la textura, creando composiciones que invitan 
                al espectador a una reflexión profunda.
              </p>
              <p>
                Formada en la Escuela de Bellas Artes de Barcelona y con estudios 
                complementarios en el Royal College of Art de Londres, Elena ha 
                desarrollado un lenguaje visual único que combina técnicas 
                tradicionales con experimentación contemporánea.
              </p>
              <p>
                Su obra ha sido exhibida en galerías y museos de renombre 
                internacional, incluyendo el Museo de Arte Contemporáneo de 
                Barcelona, la Galería Serpentine de Londres y el Museum of 
                Modern Art de Nueva York. Ha recibido numerosos reconocimientos, 
                entre ellos el Premio Nacional de Artes Plásticas en 2019.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-accent">25+</span>
                <span className="font-sans text-sm text-muted-foreground">Años de carrera</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-accent">150+</span>
                <span className="font-sans text-sm text-muted-foreground">Exposiciones</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-accent">40+</span>
                <span className="font-sans text-sm text-muted-foreground">Colecciones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
