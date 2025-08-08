
// Sample data - replace with your actual university locations
const locations = [
  {
    id: 1,
    name: "Edificio de Rectoría",
    description: "Oficinas administrativas principales de la universidad, incluyendo rectoría y secretaría académica.",
    location: "Zona central del campus, junto al jardín principal",
    category: "Administrativo",
    floor: "Planta baja - 3er piso",
    image: "images/decanato.test.jpg"
  },
  
  {
    id: 2,
    name: "Biblioteca Central",
    description: "Biblioteca principal con más de 50,000 volúmenes y áreas de estudio individual y grupal.",
    location: "Edificio B, al norte del estacionamiento principal",
    category: "Académico",
    floor: "2do y 3er piso",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d552676f-e7a4-4031-90d7-c45aa7ac48c0.png"
  },
  
  {
    id: 3,
    name: "Laboratorio de Computación 5",
    description: "Laboratorio equipado con 30 computadoras para clases de informática y programación.",
    location: "Edificio de Ciencias, ala este, piso 1",
    category: "Laboratorios",
    floor: "1er piso",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f97ce7b3-4741-468a-ab46-400d0f962c8b.png"
  },
  
  {
    id: 4,
    name: "Cafetería Principal",
    description: "Área de alimentos y bebidas con capacidad para 120 personas y zona de descanso.",
    location: "Entre el edificio A y B, frente a las canchas",
    category: "Servicios",
    floor: "Planta baja",
    image: "images/lobby.jpg"
  },
  
  {
    id: 5,
    name: "Auditorio Magno",
    description: "Espacio para eventos académicos con capacidad para 500 personas y equipo audiovisual completo.",
    location: "Edificio de Eventos, acceso por puerta norte",
    category: "Eventos",
    floor: "Planta baja",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/10938bad-fce0-4a7f-944b-3ebb4233bbfd.png"
  },
  {
    id: 6,
    name: "Gimnasio Universitario",
    description: "Instalaciones deportivas cubiertas con canchas múltiples y equipo de entrenamiento.",
    location: "Extremo oeste del campus",
    category: "Deportes",
    floor: "Planta baja",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/447e2955-e0e7-4060-a718-b041a3708ea5.png"
  }
];



// DOM elements
const locationsContainer = document.getElementById('locations-container');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const detailLocation = document.getElementById('detail-location');
const detailImage = document.getElementById('detail-image');
const locationDetails = document.getElementById('location-details');

// Display all locations initially
function displayLocations(locationsToDisplay = locations) {
  locationsContainer.innerHTML = '';
  
  locationsToDisplay.forEach(location => {
    const locationCard = document.createElement('div');
    locationCard.className = 'bg-white p-5 rounded-lg shadow cursor-pointer hover:shadow-md';
    locationCard.innerHTML = `
      <h3 class="font-semibold text-lg text-gray-800">${location.name}</h3>
      <p class="text-gray-600 line-clamp-2">${location.description}</p>
    `;
    
    locationCard.addEventListener('click', () => showLocationDetails(location));
    locationsContainer.appendChild(locationCard);
  });
}

// Show location details in the right panel
function showLocationDetails(location) {
  detailTitle.textContent = location.name;
  detailDescription.textContent = location.description;
  detailLocation.textContent = location.location;
  detailImage.src = location.image;
  
  locationDetails.classList.remove('hidden');
}

// Search functionality
function searchLocations() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm.trim() === '') {
    displayLocations();
    return;
  }
  
  const filtered = locations.filter(location => 
    location.name.toLowerCase().includes(searchTerm) || 
    location.description.toLowerCase().includes(searchTerm)
  );
  
  displayLocations(filtered);
}

// Event listeners
searchButton.addEventListener('click', searchLocations);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') searchLocations();
});

// Initialize
displayLocations();
