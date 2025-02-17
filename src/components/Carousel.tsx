import { useState, useEffect } from "react";

const team = [
    {
      name: "Dra. Ana Gómez",
      role: "Veterinaria Principal",
      description:
        "Con más de 10 años de experiencia, la Dra. Ana lidera nuestro equipo con dedicación y pasión por el bienestar animal.",
      image: "/Personal/personaReferencia1.png",
      bgColor: "bg-pink-200",
    },
    {
      name: "Dr. Juan Pérez",
      role: "Especialista en Dermatología",
      description:
        "Experto en el tratamiento de enfermedades de la piel y alergias en mascotas, brindando soluciones efectivas y personalizadas.",
      image: "/Personal/personaReferencia2.png",
      bgColor: "bg-blue-200",
    },
    {
      name: "Dra. Laura Fernández",
      role: "Cirujana Veterinaria",
      description:
        "Realiza procedimientos quirúrgicos avanzados con precisión y cuidado, asegurando la mejor recuperación de cada paciente.",
      image: "/Personal/personaReferencia3.png",
      bgColor: "bg-green-200",
    },
    {
      name: "Dr. Carlos López",
      role: "Especialista en Medicina Interna",
      description:
        "Diagnostica y trata enfermedades complejas, proporcionando atención médica integral para la salud a largo plazo de las mascotas.",
      image: "/Personal/personaReferencia4.png",
      bgColor: "bg-yellow-200",
    },
    {
      name: "Dra. Sofía Méndez",
      role: "Especialista en Animales Exóticos",
      description:
        "Atiende a aves, reptiles y pequeños mamíferos con un enfoque especializado en sus necesidades únicas.",
      image: "/Personal/personaReferencia5.png",
      bgColor: "bg-purple-200",
    },
  ];

  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    const handleNext = () => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % team.length);
        setIsAnimating(false);
      }, 600);
    };
  
    return (
      <div className="w-full flex flex-col items-center mb-36">
        {/* Texto del Veterinario Activo */}
        <div className="text-center mb-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-800">{team[currentIndex].name}</h2>
          <p className="text-lg font-semibold text-gray-700">{team[currentIndex].role}</p>
          <p className="text-sm text-gray-600 max-w-xl">{team[currentIndex].description}</p>
        </div>
  
        {/* Contenedor del Carrusel */}
        <div className="relative flex justify-center items-center w-full h-80">
          {team.map((member, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + team.length) % team.length;
            const isNext = index === (currentIndex + 1) % team.length;
  
            return (
              <div
                key={index}
                className={`absolute flex items-center justify-center rounded-full overflow-hidden transition-all duration-700
                  ${isActive ? `w-72 h-72 ${member.bgColor} scale-110 shadow-xl rotate-0 opacity-100 z-10` : ""}
                  ${isPrev || isNext ? "w-48 h-48 bg-gray-200 scale-90 opacity-60 z-0" : "w-28 h-28 opacity-30 z-0"}
                  ${isAnimating ? "opacity-0" : ""}`}
                style={{
                  transform: isPrev
                    ? "translateX(-120%)"
                    : isNext
                    ? "translateX(120%)"
                    : "translateX(0)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full transition-opacity duration-500"
                  style={{
                    opacity: isActive ? 1 : 0.6, // Evita imágenes superpuestas
                  }}
                />
              </div>
            );
          })}
        </div>
  
  
      </div>
    );
  };
  export default Carousel;
