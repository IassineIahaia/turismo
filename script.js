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
                    moto: {
                        route: "Nampula → EN1 → Lumbo → Ponte → Ilha de Moçambique",
                        time: "2h 30min",
                        cost: "150-200 MT",
                        tips: "Use capacete e cuidado na ponte. Combustível disponível em Lumbo."
                    },
                    taxi: {
                        route: "Transfer direto de Nampula via Lumbo",
                        time: "2h 15min", 
                        cost: "800-1200 MT",
                        tips: "Negocie preço antes. Muitos táxis fazem este trajeto diariamente."
                    },
                    carro: {
                        route: "Nampula → EN1 Norte → Lumbo → Ponte da Ilha",
                        time: "2h 00min",
                        cost: "300-400 MT (combustível)",
                        tips: "Estrada em bom estado. Estacionamento disponível na ilha."
                    }
                }
            },
            {
                id: 2,
                name: "Arquipélago das Quirimbas",
                location: "Cabo Delgado",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
                rating: "4.9 ⭐",
                description: "32 ilhas paradisíacas com praias pristinas e vida marinha exuberante.",
                coordinates: [-12.3717, 40.6215],
                details: {
                    moto: {
                        route: "Pemba → EN380 → Quissanga → Dhow para ilhas",
                        time: "3h + 1h barco",
                        cost: "200-300 MT + 500 MT barco",
                        tips: "Nem todas ilhas são acessíveis de moto. Combine transporte marítimo."
                    },
                    taxi: {
                        route: "Pemba → Quissanga → Transfer para barco",
                        time: "2h 30min + 1h barco",
                        cost: "1500-2000 MT + barco",
                        tips: "Muitos hotéis oferecem transfer completo incluindo barco."
                    },
                    carro: {
                        route: "Pemba → EN380 → Quissanga → Estacionamento seguro",
                        time: "2h + 1h barco",
                        cost: "400-600 MT + barco",
                        tips: "Estrada de terra em alguns trechos. 4x4 recomendado na época chuvosa."
                    }
                }
            },
            {
                id: 3,
                name: "Chocas Mar",
                location: "Nampula", 
                image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=500&h=300&fit=crop",
                rating: "4.7 ⭐",
                description: "Destino mundial para mergulho com tubarões-baleia e raias-manta.",
                coordinates: [-23.8500, 35.5667],
                details: {
                    moto: {
                        route: "Inhambane → EN1 Sul → Estrada do Tofo",
                        time: "45min",
                        cost: "50-80 MT",
                        tips: "Estrada asfaltada até Inhambane, depois terra batida 22km."
                    },
                    taxi: {
                        route: "Transfer direto Inhambane → Tofo",
                        time: "35min",
                        cost: "300-500 MT",
                        tips: "Táxis regulares fazem este percurso. Combine preço antecipadamente."
                    },
                    carro: {
                        route: "Inhambane → Estrada do Tofo (22km)",
                        time: "30min",
                        cost: "100-150 MT (combustível)",
                        tips: "Estrada de terra em bom estado. Carro normal adequado."
                    }
                }
            },
            {
                id: 4,
                name: "Parque Nacional da Gorongosa",
                location: "Sofala",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=300&fit=crop",
                rating: "4.6 ⭐", 
                description: "Um dos maiores parques de vida selvagem de África, lar de elefantes, leões e hipopótamos.",
                coordinates: [-18.9667, 34.3500],
                details: {
                    moto: {
                        route: "Beira → EN6 → Vila de Gorongosa → Parque",
                        time: "3h 30min",
                        cost: "250-350 MT",
                        tips: "Não é permitido motas dentro do parque. Deixe na entrada."
                    },
                    taxi: {
                        route: "Beira → Vila de Gorongosa → Entrada do Parque",
                        time: "3h",
                        cost: "1500-2500 MT",
                        tips: "Combine tour completo. Muitos operadores oferecem pacotes."
                    },
                    carro: {
                        route: "Beira → EN6 → Vila de Gorongosa → Portão principal",
                        time: "2h 45min",
                        cost: "400-600 MT + taxa parque",
                        tips: "4x4 recomendado para game drives. Combustível na vila."
                    }
                }
            },
            {
                id: 5,
                name: "Nampula",
                location: "Nampula Cidade",
                image: "https://images.unsplash.com/photo-1586216703108-6c1c95b5e9b7?w=500&h=300&fit=crop",
                rating: "4.5 ⭐",
                description: "Capital vibrante com arquitetura colonial, mercados coloridos e vida noturna animada.",
                coordinates: [-25.9686, 32.5804],
                details: {
                    moto: {
                        route: "Dentro da cidade - várias rotas disponíveis",
                        time: "Variável",
                        cost: "20-50 MT por trajeto",
                        tips: "Motas-táxi (txopelas) abundantes. Sempre negocie preço."
                    },
                    taxi: {
                        route: "Serviço urbano completo",
                        time: "Dependendo do trânsito",
                        cost: "100-300 MT por trajeto",
                        tips: "Use apps como Txiua ou Uber. Táxis convencionais também disponíveis."
                    },
                    carro: {
                        route: "Rede rodoviária urbana completa",
                        time: "Variável conforme trânsito",
                        cost: "Combustível + estacionamento",
                        tips: "Trânsito intenso nas horas de ponta. Estacionamentos seguros no centro."
                    }
                }
            },
            {
                id: 6,
                name: "Vilanculos",
                location: "Inhambane",
                image: "https://images.unsplash.com/photo-1571146015203-c4e3b9344b38?w=500&h=300&fit=crop",
                rating: "4.8 ⭐",
                description: "Portal de entrada para o Arquipélago do Bazaruto, com praias deslumbrantes.",
                coordinates: [-22.0167, 35.3167],
                details: {
                    moto: {
                        route: "EN1 a partir de Inhambane ou Maputo",
                        time: "4h de Maputo / 1h 30min de Inhambane",
                        cost: "300-400 MT de Maputo",
                        tips: "Estrada asfaltada em bom estado. Várias bombas de combustível no caminho."
                    },
                    taxi: {
                        route: "Transfer direto das principais cidades",
                        time: "3h 30min de Maputo",
                        cost: "2000-3000 MT de Maputo",
                        tips: "Muitos operadores turísticos fazem este trajeto diariamente."
                    },
                    carro: {
                        route: "EN1 → Vilanculos (estrada asfaltada)",
                        time: "3h 15min de Maputo",
                        cost: "500-700 MT (combustível)",
                        tips: "Viagem confortável. Hotéis oferecem estacionamento seguro."
                    }
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



        