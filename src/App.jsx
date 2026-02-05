import React, { useState } from 'react';
import { Instagram, Mail, ArrowUpRight, Grid, User, Image as ImageIcon } from 'lucide-react';

const PortfolioItem = ({ title, category, year, dimensions }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 mb-2">
      {/* Placeholder para la obra de arte - En producción usarías <img> reales */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
        <ImageIcon size={48} strokeWidth={1} />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
    </div>
    <div className="flex flex-col space-y-0.5">
      <h3 className="text-sm font-medium text-black leading-tight group-hover:underline">{title}</h3>
      <p className="text-xs text-gray-500 font-mono">{category} — {year}</p>
      <p className="text-xs text-gray-400">{dimensions}</p>
    </div>
  </div>
);

const InstagramPost = () => (
  <div className="aspect-square bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300 hover:bg-gray-100 cursor-pointer transition-colors">
    <Instagram size={20} />
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [filter, setFilter] = useState('todos');

  // Datos de ejemplo
  const works = [
    { id: 1, title: "Estudio de Luz Nº 4", category: "Pintura", year: "2024", dimensions: "120x100cm" },
    { id: 2, title: "Resistencia Material", category: "Escultura", year: "2023", dimensions: "Variable" },
    { id: 3, title: "Sin Título (Azul)", category: "Pintura", year: "2024", dimensions: "80x80cm" },
    { id: 4, title: "Fragmentos Urbanos", category: "Fotografía", year: "2023", dimensions: "Impresión Giclée" },
    { id: 5, title: "Estructura Ósea", category: "Dibujo", year: "2022", dimensions: "Papel Algodón" },
    { id: 6, title: "Intervención 01", category: "Instalación", year: "2024", dimensions: "Sitio Específico" },
  ];

  const filteredWorks = filter === 'todos' 
    ? works 
    : works.filter(work => work.category === filter);

  const categories = ['todos', 'Pintura', 'Escultura', 'Fotografía', 'Dibujo'];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* Header Compacto - Fijo a la izquierda en desktop o arriba en móvil */}
      <header className="px-4 py-6 md:px-8 md:py-8 border-b border-black md:border-b-0 md:fixed md:left-0 md:top-0 md:w-64 md:h-screen md:border-r md:flex md:flex-col justify-between z-10 bg-white">
        <div>
          <h1 className="text-xl font-bold tracking-tight mb-1">NOMBRE ARTISTA</h1>
          <p className="text-xs text-gray-500 font-mono mb-8">Ciudad, País — Est. 1995</p>

          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className={`block text-sm w-full text-left py-1 hover:pl-2 transition-all ${activeTab === 'portfolio' ? 'font-bold pl-2 border-l-2 border-black' : 'text-gray-600'}`}
            >
              Portafolio
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`block text-sm w-full text-left py-1 hover:pl-2 transition-all ${activeTab === 'about' ? 'font-bold pl-2 border-l-2 border-black' : 'text-gray-600'}`}
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`block text-sm w-full text-left py-1 hover:pl-2 transition-all ${activeTab === 'contact' ? 'font-bold pl-2 border-l-2 border-black' : 'text-gray-600'}`}
            >
              Contacto
            </button>
          </nav>
        </div>

        <div className="hidden md:block">
          <div className="text-xs text-gray-400 space-y-1">
            <a href="#" className="flex items-center gap-1 hover:text-black hover:underline">
              <Instagram size={12} /> @usuario_insta
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-black hover:underline">
              <Mail size={12} /> contacto@email.com
            </a>
          </div>
          <p className="text-[10px] text-gray-300 mt-4">© 2024. Todos los derechos reservados.</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen">
        
        {/* VISTA: PORTAFOLIO */}
        {activeTab === 'portfolio' && (
          <div className="p-4 md:p-8 animate-fade-in">
            {/* Filtros Minimalistas */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-sm sticky top-0 bg-white/90 backdrop-blur-sm py-2 z-10 w-full border-b border-gray-100 md:border-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`capitalize ${filter === cat ? 'text-black font-bold underline decoration-1 underline-offset-4' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid de Obras */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8">
              {filteredWorks.map(work => (
                <PortfolioItem key={work.id} {...work} />
              ))}
            </div>
          </div>
        )}

        {/* VISTA: SOBRE MÍ */}
        {activeTab === 'about' && (
          <div className="p-4 md:p-8 max-w-2xl animate-fade-in">
            <div className="aspect-video bg-gray-100 mb-6 flex items-center justify-center text-gray-400">
               <span className="text-xs uppercase tracking-widest">Retrato del Artista</span>
            </div>
            
            <h2 className="text-lg font-bold mb-4">Declaración de Artista</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-800 text-justify">
              <p>
                Mi trabajo explora la relación entre la estructura arquitectónica y la memoria orgánica. A través de la pintura y la instalación, investigo cómo los espacios que habitamos retienen fragmentos de historia personal y colectiva, creando una arqueología visual del presente.
              </p>
              <p>
                Utilizando materiales industriales en contraste con pigmentos naturales, busco generar una tensión visual que cuestione la permanencia. No busco representar la realidad, sino descomponerla en sus elementos fundamentales: luz, materia y vacío.
              </p>
            </div>

            <h2 className="text-lg font-bold mt-8 mb-4">Trayectoria</h2>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="grid grid-cols-[60px_1fr]">
                <span className="font-mono text-gray-400">2023</span>
                <span>Exposición Individual, "Ecos de Materia", Galería Central.</span>
              </li>
              <li className="grid grid-cols-[60px_1fr]">
                <span className="font-mono text-gray-400">2022</span>
                <span>Residencia Artística, Centro de Artes Contemporáneas, Ciudad de México.</span>
              </li>
              <li className="grid grid-cols-[60px_1fr]">
                <span className="font-mono text-gray-400">2021</span>
                <span>Selección Oficial, Bienal de Arte Joven.</span>
              </li>
               <li className="grid grid-cols-[60px_1fr]">
                <span className="font-mono text-gray-400">2019</span>
                <span>Licenciatura en Artes Visuales, Universidad Nacional.</span>
              </li>
            </ul>

             <div className="mt-8 pt-8 border-t border-gray-100">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                    Descargar CV Completo (PDF) <ArrowUpRight size={14} />
                </a>
            </div>
          </div>
        )}

        {/* VISTA: CONTACTO */}
        {activeTab === 'contact' && (
          <div className="p-4 md:p-8 h-[80vh] flex flex-col justify-center animate-fade-in">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Hablemos<br/>de proyectos.</h2>
             
             <div className="space-y-6">
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Consultas Generales</p>
                    <a href="mailto:hola@artista.com" className="text-xl hover:underline">hola@artista.com</a>
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Galería / Representación</p>
                    <p className="text-lg">Galería Ejemplo</p>
                    <a href="mailto:info@galeria.com" className="text-sm text-gray-600 hover:underline">info@galeria.com</a>
                </div>
                 <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Estudio</p>
                    <p className="text-sm text-gray-600">Calle del Arte 123, Of. 4B<br/>Santiago, Chile</p>
                </div>
             </div>
          </div>
        )}

        {/* MOCKUP FEED INSTAGRAM (Visible en todas las vistas al pie de página) */}
        <div className="border-t border-gray-100 mt-12 p-4 md:p-8">
            <div className="flex justify-between items-end mb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Instagram size={14} /> Último en Instagram
                </h3>
                <a href="#" className="text-xs text-gray-400 hover:text-black hover:underline">Ver todo</a>
            </div>
            {/* Grid 6 columnas en desktop, 3 en movil - Densidad alta */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
                {[1,2,3,4,5,6].map((i) => (
                    <InstagramPost key={i} />
                ))}
            </div>
        </div>

      </main>
    </div>
  );
};

export default App;