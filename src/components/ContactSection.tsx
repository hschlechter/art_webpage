import { Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left column */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
              Contacto
            </h2>
            <p className="font-sans text-base leading-relaxed text-background/80 mb-8">
              Para consultas, encargos o colaboraciones.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="mailto:hwschlec@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-background/30 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-sans text-background/80 group-hover:text-background transition-colors">
                  hwschlec@gmail.com
                </span>
              </a>

              <a
                href="https://instagram.com/hansw.s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-background/30 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-sans text-background/80 group-hover:text-background transition-colors">
                  @hansw.s
                </span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-background/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-sans text-background/80">
                  Santiago, Chile
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Empty */}
          <div />
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-background/50">
            © 2026 Hans Schlechter. Todos los derechos reservados.
          </p>
          <nav className="flex gap-8">
            <a href="#" className="font-sans text-sm text-background/50 hover:text-background transition-colors">
              Aviso Legal
            </a>
            <a href="#" className="font-sans text-sm text-background/50 hover:text-background transition-colors">
              Privacidad
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
