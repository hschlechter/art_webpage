import artistPortrait from "@/assets/artist-portrait.jpg";

const BiographySection = () => {
  return (
    <section id="biografia" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Portrait */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={artistPortrait}
              alt="Hans Schlechter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Biography content */}
          <div>
            <h2 className="gallery-title text-3xl md:text-4xl mb-6">
              Hans Schlechter
            </h2>
            <div className="space-y-4 gallery-body text-base leading-relaxed">
              <p>
                Artista visual contemporáneo dedicado a la exploración de nuevas formas de expresión visual.
              </p>
              <p>
                Su trabajo busca crear un diálogo entre la forma y el espacio, generando experiencias visuales que invitan a la reflexión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
