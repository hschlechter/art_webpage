import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

const artworks = [
  {
    id: 1,
    title: "Fragmentos del Alma",
    year: "2024",
    medium: "Óleo y hoja de oro sobre lienzo",
    dimensions: "180 × 240 cm",
    image: artwork1,
    featured: true,
  },
  {
    id: 2,
    title: "Dualidad Eterna",
    year: "2023",
    medium: "Escultura en bronce y mármol",
    dimensions: "95 × 45 × 45 cm",
    image: artwork2,
  },
  {
    id: 3,
    title: "Susurros del Tiempo",
    year: "2023",
    medium: "Acuarela sobre papel",
    dimensions: "76 × 76 cm",
    image: artwork3,
  },
  {
    id: 4,
    title: "Memoria Dorada",
    year: "2022",
    medium: "Técnica mixta y hoja de oro",
    dimensions: "120 × 100 cm",
    image: artwork4,
  },
  {
    id: 5,
    title: "Horizonte Interior",
    year: "2022",
    medium: "Óleo sobre lienzo",
    dimensions: "150 × 150 cm",
    image: artwork5,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Obras Seleccionadas
          </p>
          <h2 className="gallery-title text-3xl md:text-4xl lg:text-5xl mb-6">
            Portafolio
          </h2>
          <p className="gallery-body max-w-2xl mx-auto">
            Una selección de obras que representan la evolución artística y 
            la búsqueda constante de nuevas formas de expresión visual.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className={`gallery-card group ${
                artwork.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  artwork.featured ? "aspect-[16/10]" : "aspect-square"
                }`}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="gallery-card-overlay bg-gallery-charcoal/0 group-hover:bg-gallery-charcoal/40" />
                <div className="gallery-card-content group-hover:opacity-100">
                  <h3 className="font-serif text-xl md:text-2xl text-primary-foreground mb-1">
                    {artwork.title}
                  </h3>
                  <p className="font-sans text-sm text-primary-foreground/80">
                    {artwork.year} · {artwork.medium}
                  </p>
                  <p className="font-sans text-xs text-primary-foreground/60 mt-1">
                    {artwork.dimensions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
