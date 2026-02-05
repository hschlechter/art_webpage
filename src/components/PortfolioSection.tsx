import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

const artworks = [
  {
    id: 1,
    title: "title",
    year: "year",
    medium: "tecnica",
    dimensions: "dim",
    image: artwork1,
    featured: true,
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="gallery-title text-3xl md:text-4xl mb-4">
            Portafolio
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="gallery-card"
            >
              <div className="relative overflow-hidden aspect-square mb-4">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1">
                  {artwork.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {artwork.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
