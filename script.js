 const destinations = [

    {
        id: 1,
        name: "Ilha de Moçambique",
        location: "Nampula",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
        rating: "4.8 ⭐",
        description: "Património Mundial da UNESCO, rica em história e arquitetura colonial portuguesa.",
        coordinates: [-15.0355, 40.7311],
        details: {
            moto: { route: "Nampula → EN1 → Lumbo → Ponte → Ilha de Moçambique", time: "2h 30min", cost: "150-200 MT", tips: "Use capacete e cuidado na ponte. Combustível disponível em Lumbo." },
            taxi: { route: "Transfer direto de Nampula via Lumbo", time: "2h 15min", cost: "800-1200 MT", tips: "Negocie preço antes. Muitos táxis fazem este trajeto diariamente." },
            carro: { route: "Nampula → EN1 Norte → Lumbo → Ponte da Ilha", time: "2h 00min", cost: "300-400 MT (combustível)", tips: "Estrada em bom estado. Estacionamento disponível na ilha." }
        }
    },
    {
        id: 2,
        name: "Malema",
        location: "Nampula",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop",
        rating: "4.6 ⭐",
        description: "Área natural conhecida por suas paisagens verdes, cachoeiras e cultura local vibrante.",
        coordinates: [-15.0123, 39.6578],
        details: {
            moto: { route: "Nampula → EN1 → Malema", time: "1h 40min", cost: "100-150 MT", tips: "Estrada de terra em alguns trechos. Combustível disponível em Malema." },
            taxi: { route: "Transfer direto de Nampula", time: "1h 30min", cost: "600-900 MT", tips: "Negocie o preço antes de sair." },
            carro: { route: "Nampula → EN1 Norte → Malema", time: "1h 30min", cost: "200-300 MT", tips: "Boa estrada na maior parte do percurso. 4x4 recomendado em época de chuva." }
        }
    },
    {
        id: 3,
        name: "Monapo",
        location: "Nampula",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=300&fit=crop",
        rating: "4.7 ⭐",
        description: "Região tranquila com planícies verdes e locais ideais para caminhadas e aventuras na natureza.",
        coordinates: [-15.2500, 39.4500],
        details: {
            moto: { route: "Nampula → EN13 → Monapo", time: "2h 10min", cost: "120-180 MT", tips: "Alguns trechos de estrada de terra. Levar água e lanche." },
            taxi: { route: "Transfer de Nampula", time: "2h", cost: "700-1000 MT", tips: "Negocie preço antes." },
            carro: { route: "Nampula → EN13 → Monapo", time: "2h", cost: "250-350 MT", tips: "4x4 recomendado na estação chuvosa." }
        }
    },
    {
        id: 4,
        name: "Namialo",
        location: "Nampula",
        image: "https://images.unsplash.com/photo-1526401485004-0e9c867e4b62?w=500&h=300&fit=crop",
        rating: "4.5 ⭐",
        description: "Pequena vila conhecida pelo seu ambiente calmo e belas paisagens naturais.",
        coordinates: [-15.3500, 39.7000],
        details: {
            moto: { route: "Nampula → EN1 → Namialo", time: "1h 20min", cost: "80-120 MT", tips: "Estrada parcialmente de terra. Viagem tranquila." },
            taxi: { route: "Transfer direto de Nampula", time: "1h 10min", cost: "500-700 MT", tips: "Combine preço antecipadamente." },
            carro: { route: "Nampula → EN1 → Namialo", time: "1h 10min", cost: "150-200 MT", tips: "Boa estrada, carro comum serve." }
        }
    },
    {
        id: 5,
        name: "Ilha de Moçambique",
        location: "Nampula",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
        rating: "4.8 ⭐",
        description: "Património Mundial da UNESCO, rica em história e arquitetura colonial portuguesa.",
        coordinates: [-15.0355, 40.7311],
        details: {
            moto: { route: "Nampula → EN1 → Lumbo → Ponte → Ilha de Moçambique", time: "2h 30min", cost: "150-200 MT", tips: "Use capacete e cuidado na ponte. Combustível disponível em Lumbo." },
            taxi: { route: "Transfer direto de Nampula via Lumbo", time: "2h 15min", cost: "800-1200 MT", tips: "Negocie preço antes. Muitos táxis fazem este trajeto diariamente." },
            carro: { route: "Nampula → EN1 Norte → Lumbo → Ponte da Ilha", time: "2h 00min", cost: "300-400 MT (combustível)", tips: "Estrada em bom estado. Estacionamento disponível na ilha." }
        }
    }
];



        let currentDestination = null;
        let selectedTransport = null;

        function renderDestinations(destinationsToShow = destinations) {
            const grid = document.getElementById('destinationsGrid');
            grid.innerHTML = '';

            destinationsToShow.forEach(destination => {
                const card = document.createElement('div');
                card.className = 'destination-card';
                card.innerHTML = `
                    <div class="card-image" style="background-image: url('${destination.image}')">
                        <div class="card-overlay"></div>
                        <div class="card-rating">${destination.rating}</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${destination.name}</h3>
                        <div class="card-location">📍 ${destination.location}</div>
                        <p class="card-description">${destination.description}</p>
                        <div class="card-actions">
                            <button class="btn btn-primary" onclick="showDirections(${destination.id})">
                                🧭 Como chegar
                            </button>
                            <a href="#" class="btn btn-secondary">
                                ℹ️ Mais info
                            </a>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function searchDestinations() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const filtered = destinations.filter(dest => 
                dest.name.toLowerCase().includes(searchTerm) ||
                dest.location.toLowerCase().includes(searchTerm) ||
                dest.description.toLowerCase().includes(searchTerm)
            );
            renderDestinations(filtered);
        }

        function showDirections(destinationId) {
            currentDestination = destinations.find(d => d.id === destinationId);
            if (!currentDestination) return;

            document.getElementById('modalTitle').textContent = `Como chegar a ${currentDestination.name}`;
            document.getElementById('directionsModal').style.display = 'block';
            
            // Reset transport selection
            selectedTransport = null;
            document.querySelectorAll('.transport-card').forEach(card => {
                card.classList.remove('selected');
            });
            document.getElementById('transportDetails').style.display = 'none';
        }

        function selectTransport(transport) {
            selectedTransport = transport;
            
            // Update UI
            document.querySelectorAll('.transport-card').forEach(card => {
                card.classList.remove('selected');
            });
            document.querySelector(`[data-transport="${transport}"]`).classList.add('selected');
            
            // Show transport details
            const details = currentDestination.details[transport];
            const detailsDiv = document.getElementById('transportDetails');
            
            document.getElementById('transportTitle').textContent = getTransportName(transport);
            document.getElementById('routeDescription').textContent = details.route;
            document.getElementById('timeEstimate').textContent = details.time;
            document.getElementById('costEstimate').textContent = details.cost;
            document.getElementById('tips').textContent = details.tips;
            
            detailsDiv.style.display = 'block';
        }

        function getTransportName(transport) {
            const names = {
                moto: '🏍️ Viagem de Moto',
                taxi: '🚕 Viagem de Taxi', 
                carro: '🚗 Viagem de Carro'
            };
            return names[transport];
        }

        function openGoogleMaps() {
            if (!currentDestination) return;
            
            const [lat, lng] = currentDestination.coordinates;
            const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
            window.open(url, '_blank');
        }

        function closeModal() {
            document.getElementById('directionsModal').style.display = 'none';
        }

        // Event listeners
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchDestinations();
            }
        });

        window.onclick = function(event) {
            const modal = document.getElementById('directionsModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Initialize
        renderDestinations();



        