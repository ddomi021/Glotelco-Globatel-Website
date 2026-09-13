export const company = {
  name: "Globatel",
  phoneDisplay: "(787) 497-0100",
  phoneTel: "+17874970100",
  email: "sb.glotelco@gmail.com",
  address: "90 Ave. Río Hondo, Bayamón, Puerto Rico",
  years: 30,
  endUsers: 3500,
} as const;

export const navLinks = [
  { href: "#cuadros-en-la-nube", label: "Cuadros en la nube" },
  { href: "#servicios", label: "Servicios" },
  { href: "#modelos", label: "Modelos" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const cloudFeatures = [
  {
    title: "Sistema 100% en la nube",
    body: "Instalamos su cuadro telefónico empresarial en la nube: sin servidores en la oficina y con espacio para crecer cuando su negocio lo necesite.",
  },
  {
    title: "Un número para toda su operación",
    body: "Extensiones de escritorio, traspasos y una imagen profesional para que cada llamada se atienda como debe en su empresa.",
  },
  {
    title: "Auto operador",
    body: "Menús, colas, transferencia y horarios a la medida de su negocio — para que cada llamada llegue a quien corresponde.",
  },
  {
    title: "Videollamadas y mensajería",
    body: "Más que voz: videollamadas, mensajes y coordinación del equipo en una sola plataforma de comunicaciones.",
  },
  {
    title: "Reportes y control",
    body: "Vea quién llamó, qué llamada se perdió y cómo responde cada departamento. Información clara para mejorar el servicio.",
  },
  {
    title: "Varias sucursales, una sola red",
    body: "Une locales en distintos pueblos o fuera de Puerto Rico bajo el mismo sistema — extensiones, traspasos y presencia en tiempo real.",
  },
] as const;

export const services = [
  {
    title: "Instalación de cuadros telefónicos",
    body: "Diseñamos e instalamos el sistema telefónico de su empresa: configuración, cableado si hace falta y puesta en marcha lista para trabajar.",
  },
  {
    title: "Auto operador",
    body: "Grabamos y configuramos un saludo y menú profesional que dirige las llamadas al departamento o a la persona correcta.",
  },
  {
    title: "Buzón de voz a correo",
    body: "Los mensajes llegan a la extensión y una copia va directo al correo de quien debe atenderlos.",
  },
  {
    title: "Monitoreo de llamadas",
    body: "Supervise llamadas de su personal cuando necesite cuidar la calidad del servicio — integrado al cuadro virtual.",
  },
  {
    title: "Contabilización de llamadas",
    body: "Reportes detallados y por departamento para ver productividad y tomar mejores decisiones.",
  },
  {
    title: "Soluciones de call center",
    body: "Colas, enrutamiento por teclado o voz, y herramientas para equipos con alto volumen de llamadas — sin depender del equipo viejo.",
  },
] as const;

export const phoneModels = [
  { src: "/phones/phone-1.png", name: "Panasonic KX-UTG300B" },
  { src: "/phones/phone-2.png", name: "Polycom VVX 500" },
  { src: "/phones/phone-3.png", name: "Polycom VVX 400" },
  { src: "/phones/phone-4.png", name: "Polycom SoundPoint IP 335" },
  { src: "/phones/phone-5.png", name: "Panasonic KX-HDV130" },
  { src: "/phones/phone-6.png", name: "Panasonic KX-HDV230" },
] as const;

export const clients = [
  { name: "CIC Construction", logo: "/clients/cic-construction.png", href: "https://www.cic-pr.com/" },
  { name: "AR Institute of Gastroenterology", logo: null, href: null },
  { name: "Tiger Med", logo: "/clients/tiger-med.png", href: "https://www.tigermedpr.com/" },
  { name: "All Animal Hospital", logo: null, href: null },
  { name: "EC Waste", logo: "/clients/ec-waste.jpg", href: "https://www.ecwaste.com/" },
  { name: "Faccio Pizza", logo: "/clients/faccio-pizza.png", href: "https://facciopizza.com/" },
  { name: "Tijuana Restaurant", logo: "/clients/tijuana.png", href: "https://www.tijuanasbarandgrill.com/" },
  { name: "Banco de Sangre Servicios Mutuos", logo: "/clients/banco-sangre.png", href: "https://www.bancodesangreserviciosmutuos.com/" },
  { name: "Lennon Insurance Agency", logo: null, href: null },
  { name: "Everett & Sons Insurance", logo: null, href: null },
  { name: "Bottles Restaurant", logo: "/clients/bottles.png", href: "https://www.bottlespr.com/" },
  { name: "Boutique Dental", logo: "/clients/boutique-dental.png", href: "https://www.boutiquedentalpr.com/" },
  { name: "Business Alliance Insurance Agency", logo: "/clients/baia.png", href: "https://www.baiapr.com/" },
  { name: "Caguas Auto Mall (CAM)", logo: null, href: "https://caguasauto.com/" },
  { name: "Charlie Car Rental", logo: "/clients/charlie-cars.png", href: "https://www.charliecars.com/" },
  { name: "Canyon Hotel Barranquitas", logo: "/clients/canyon.png", href: "https://canyonboutiquehotel.online/" },
  { name: "Colegio de Médicos de PR", logo: "/clients/colegio-medicos.png", href: "https://www.colegiomedicopr.org/" },
  { name: "Municipio de Juncos", logo: "/clients/municipio-juncos.png", href: null },
  { name: "Comfort Pedic", logo: "/clients/comfort-pedic.png", href: "https://comfortpedic.com/" },
  { name: "Turabo Pizza", logo: "/clients/turabo-pizza.png", href: null },
  { name: "Empresas Óptica Nacional", logo: null, href: null },
  { name: "Euro Piezas Auto Parts", logo: "/clients/euro-piezas.png", href: "https://www.europiezasautoparts.com/" },
  { name: "Expert Accounting", logo: "/clients/expert-accounting.png", href: "https://www.serviciocpa.com/" },
  { name: "Ferrari Law PSC", logo: "/clients/ferrari-law.png", href: "http://www.ferrarilawpr.com/" },
  { name: "VIP Botox", logo: "/clients/vip-botox.jpg", href: "https://www.vipbotox.com/" },
] as const;
