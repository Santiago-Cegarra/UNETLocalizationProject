const locations = [
  {
    id: 1,
    name: "Edificio de Rectoría",
    description: "Oficinas administrativas principales de la universidad, incluyendo rectoría y secretaría académica.",
    location: "Zona central del campus, junto al jardín principal",
    category: "Administrativo",
    floor: "Planta baja",
    image: "images/decanato.test.jpg"
  },
  
  {
    id: 2,
    name: "Biblioteca Central",
    description: "Biblioteca principal con más de 50,000 volúmenes y áreas de estudio individual y grupal.",
    location: "Edificio B, al norte del estacionamiento principal",
    category: "Académico",
    floor: "3er piso",
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
    floor: "2do piso",
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
const locationDetailsPanel = document.getElementById('location-details'); // This is the fixed panel for desktop
const filterButtons = document.querySelectorAll('.filter-btn'); // Get all filter buttons

// New DOM elements for floor dropdown
const floorDropdownBtn = document.getElementById('floorDropdownBtn');
const floorDropdownMenu = document.getElementById('floorDropdownMenu');

let activeDetailCard = null; // To keep track of the currently open detail card

function displayLocations(locationsToDisplay = locations) {
  locationsContainer.innerHTML = '';
  
  if (locationsToDisplay.length === 0) {
    locationsContainer.innerHTML = '<p class="text-gray-600 text-center">No se encontraron ubicaciones para esta categoría.</p>';
    return;
  }

  locationsToDisplay.forEach(location => {
    const locationCard = document.createElement('div');
    locationCard.className = 'bg-white p-5 rounded-lg shadow cursor-pointer hover:shadow-md transition-all duration-300 hover:bg-gray-50 hover:border-l-4 hover:border-indigo-400';
    locationCard.innerHTML = `
      <h3 class="font-semibold text-lg text-gray-800">${location.name}</h3>
      <p class="text-gray-600 line-clamp-2">${location.description}</p>
    `;
    
    locationCard.addEventListener('click', () => toggleLocationDetails(location, locationCard));
    locationsContainer.appendChild(locationCard);
  });
}

// Toggle location details (show/hide)
function toggleLocationDetails(location, clickedCard) {
  if (activeDetailCard && activeDetailCard.previousElementSibling === clickedCard) {
    activeDetailCard.remove();
    activeDetailCard = null;
    return;
  }

  // Remove any previously active detail card
  if (activeDetailCard) {
    activeDetailCard.remove();
    activeDetailCard = null;
  }
  // Create the detail card dynamically
  const detailCard = document.createElement('div');
  detailCard.className = 'location-detail-card mt-4 bg-white p-6 rounded-lg shadow-md'; // Add a specific class for styling
  detailCard.innerHTML = `
    <h3 class="text-xl font-semibold mb-2">${location.name}</h3>
    <p class="text-gray-600 mb-4">${location.description}</p>
    <div class="flex items-center text-gray-500 mb-4">
      <span>${location.location}</span>
    </div>
    <img src="${location.image}" class="w-full h-auto rounded-lg" alt="Imagen de la ubicación" />
  `;
  
  clickedCard.parentNode.insertBefore(detailCard, clickedCard.nextSibling);
  activeDetailCard = detailCard;
  // Scroll to the newly opened detail card for better UX on mobile
  detailCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // For desktop, still show in the fixed panel
  if (window.innerWidth >= 1024) { // Tailwind's 'lg' breakpoint
    // This part needs to be adjusted if you want a fixed panel for details
    // For now, we'll just hide it as it's not fully implemented in the provided context
    locationDetailsPanel.classList.add('hidden'); 
  } else {
    locationDetailsPanel.classList.add('hidden'); // Hide the fixed panel on mobile
  }
}

// Search functionality
function searchLocations() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm.trim() === '') {
    displayLocations();
    // Hide any open detail card when search is cleared
    if (activeDetailCard) {
      activeDetailCard.remove();
      activeDetailCard = null;
    }
    // Show fixed panel on desktop if search is cleared
    if (window.innerWidth >= 1024) {
        // locationDetailsPanel.classList.remove('hidden'); // Re-enable if fixed panel is used
    }
    return;
  }
  
  const filtered = locations.filter(location => 
    location.name.toLowerCase().includes(searchTerm) || 
    location.description.toLowerCase().includes(searchTerm)
  );
  
  displayLocations(filtered);
  // Hide any open detail card when search results change
  if (activeDetailCard) {
    activeDetailCard.remove();
    activeDetailCard = null;
  }
  // Hide fixed panel on desktop when search results change
  if (window.innerWidth >= 1024) {
    locationDetailsPanel.classList.add('hidden');
  }
}

// Filter functionality
function filterLocations(type, value) {
  let filtered = [];
  if (value === 'all') {
    filtered = locations;
  } else if (type === 'category') {
    filtered = locations.filter(location => 
      location.category === value
    );
  } else if (type === 'floor') {
    filtered = locations.filter(location => 
      location.floor.toLowerCase().includes(value.toLowerCase())
    );
  }
  
  displayLocations(filtered);
  // Hide any open detail card when filter changes
  if (activeDetailCard) {
    activeDetailCard.remove();
    activeDetailCard = null;
  }
  // Clear search input when filter is applied
  searchInput.value = '';

  // Update active state for category buttons
  filterButtons.forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'active-filter');
    btn.classList.add('bg-gray-200', 'text-gray-800');
  });

  // Set active state for the clicked category button
  if (type === 'category' || type === 'all') {
    const activeButton = document.querySelector(`.filter-btn[data-filter="${value}"]`);
    if (activeButton) {
      activeButton.classList.remove('bg-gray-200', 'text-gray-800');
      activeButton.classList.add('bg-indigo-600', 'text-white', 'active-filter');
    }
  }
  // Reset floor dropdown button style
  floorDropdownBtn.classList.remove('bg-indigo-600', 'text-white');
  floorDropdownBtn.classList.add('bg-gray-200', 'text-gray-800');

  // If filtering by floor, set floor dropdown button style
  if (type === 'floor') {
    floorDropdownBtn.classList.remove('bg-gray-200', 'text-gray-800');
    floorDropdownBtn.classList.add('bg-indigo-600', 'text-white');
  }
}

// Populate floor dropdown
function populateFloorDropdown() {
  const floors = new Set();
  locations.forEach(location => {
    // Extract main floor number if range is given (e.g., "Planta baja - 3er piso" -> "Planta baja")
    const mainFloor = location.floor.split('-')[0].trim();
    if (mainFloor) {
      floors.add(mainFloor);
    }
  });

  const sortedFloors = Array.from(floors).sort((a, b) => {
    // Simple sorting for common floor names
    if (a === "Planta baja") return -1;
    if (b === "Planta baja") return 1;
    return a.localeCompare(b);
  });

  const dropdownContent = floorDropdownMenu.querySelector('div');
  dropdownContent.innerHTML = ''; // Clear existing options

  // Add "All Floors" option
  const allFloorsOption = document.createElement('a');
  allFloorsOption.href = "#";
  allFloorsOption.className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900";
  allFloorsOption.textContent = "Todos los pisos";
  allFloorsOption.addEventListener('click', (e) => {
    e.preventDefault();
    filterLocations('all', 'all'); // Filter all locations
    floorDropdownMenu.classList.add('hidden');
  });
  dropdownContent.appendChild(allFloorsOption);

  sortedFloors.forEach(floor => {
    const option = document.createElement('a');
    option.href = "#";
    option.className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900";
    option.textContent = floor;
    option.addEventListener('click', (e) => {
      e.preventDefault();
      filterLocations('floor', floor);
      floorDropdownMenu.classList.add('hidden');
    });
    dropdownContent.appendChild(option);
  });
}

// Event listeners
searchButton.addEventListener('click', searchLocations);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') searchLocations();
});

// Add event listeners for category filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterCategory = button.dataset.filter;
    filterLocations('category', filterCategory);
    // Hide floor dropdown if open
    floorDropdownMenu.classList.add('hidden');
  });
});

// Toggle floor dropdown visibility
floorDropdownBtn.addEventListener('click', () => {
  floorDropdownMenu.classList.toggle('hidden');
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
  if (!floorDropdownBtn.contains(event.target) && !floorDropdownMenu.contains(event.target)) {
    floorDropdownMenu.classList.add('hidden');
  }
});


// Initialize
filterLocations('all', 'all'); 
// Select "Todas" by default
populateFloorDropdown(); // Populate the floor dropdown on load

// Handle window resize to switch between mobile/desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    // If resizing to desktop, ensure the fixed panel is visible and dynamic card is hidden
    if (activeDetailCard) {
      activeDetailCard.remove();
      activeDetailCard = null;
    }
    // If a location was previously selected, show its details in the fixed panel
    // (This part would require storing the last selected location, which is not implemented here for simplicity)
    // locationDetailsPanel.classList.remove('hidden'); // Re-enable if fixed panel is used
  } else {
    // If resizing to mobile, hide the fixed panel
    locationDetailsPanel.classList.add('hidden');
  }
});
