interface Service {
    srcMainImage: string;
    alt: string;
    title: string;
    srcIconTitle: string;
    description: string;
    altIconTitle: string;
    estimatedTime: string;
}
export const servicesData:Service[] = [
    {
      srcMainImage: "/VeterinaryServices/ConsultasYPrevencionImagen.webp",
      alt: "Veterinario cuidando a un gato",
      title: "Consultas y prevención",
      srcIconTitle: "/Icons/Jeringilla.png",
      description:
        "Chequeos generales, vacunación, desparasitación y planes de prevención para mantener a tu mascota sana.",
      altIconTitle: "Icono de jeringilla",
      estimatedTime: "20 - 60 minutos (dependiendo del servicio).",
    },
    {
      srcMainImage: "/VeterinaryServices/CirugiasImagen.webp",
      alt: "Imagen de veterinario preparando a un perro para cirugía",
      title: "Cirugías y procedimientos",
      srcIconTitle: "/Icons/CamillaIcon.png",
      description:
        "Servicios quirúrgicos y procedimientos especializados, desde esterilización hasta cirugías menores.",
      altIconTitle: "Icono de camilla",
      estimatedTime: "1 - 2 horas (dependiendo del procedimiento).",
    },
    {
      srcMainImage: "/VeterinaryServices/CuidadoDentalImagen.webp",
      alt: "Veterinario revisando la boca de un gato",
      title: "Odontología veterinaria",
      srcIconTitle: "/Icons/OdontologiaGatoIcon.png",
      description:
        "Cuidado dental profesional para prevenir enfermedades bucales y mantener una sonrisa saludable en tu mascota.",
      altIconTitle: "Icono de odontología en animales",
      estimatedTime: "45 - 60 minutos.",
    },
    {
      srcMainImage: "/VeterinaryServices/PeluqueriaParaMascotas.webp",
      alt: "Veterinario peinando a un perro",
      title: "Peluquería y estética",
      srcIconTitle: "/Icons/PerroPeinadoIcon.png",
      description:
        "Servicios de belleza y cuidado para que tu mascota luzca y se sienta bien.",
      altIconTitle: "Icono de un perro peinado",
      estimatedTime: "1 - 2 horas (dependiendo del tamaño y tipo de mascota).",
    },
  ];