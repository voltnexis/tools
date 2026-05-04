import osData from './data/all-os.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    const osGrid = document.getElementById('osGrid');
    const osSearch = document.getElementById('osSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const resultsCount = document.getElementById('resultsCount');
    const osModal = document.getElementById('osModal');
    const closeModal = document.querySelector('.close-modal');

    let currentFilter = 'all';
    let searchQuery = '';

    // Modal Selection State
    let activeOS = null;
    let selectedType = null;
    let selectedEdition = null;
    let selectedArch = null;

    // Render OS Cards
    function renderCards() {
        const filteredData = osData.filter(os => {
            const matchesSearch = os.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                os.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                os.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = currentFilter === 'all' || os.category === currentFilter;
            return matchesSearch && matchesFilter;
        });

        resultsCount.textContent = `Found ${filteredData.length} operating systems`;

        if (filteredData.length === 0) {
            osGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                    <i data-lucide="search-x" style="width: 48px; height: 48px; color: var(--text-dim); margin-bottom: 1rem;"></i>
                    <p style="color: var(--text-dim); font-size: 1.2rem;">No systems found matching your search.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        osGrid.innerHTML = filteredData.map(os => {
            const typeCount = Object.keys(os.types).length;
            return `
                <div class="os-card" data-id="${os.id}">
                    ${os.verified ? '<i data-lucide="shield-check" class="verified-badge"></i>' : ''}
                    <div class="card-category">${os.category}</div>
                    <img src="${os.icon}" alt="${os.name}" class="card-icon">
                    <h3>${os.name}</h3>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem; align-items: center;">
                        <div class="card-rating">
                            <i data-lucide="star" style="width: 14px; height: 14px; fill: #fbbf24;"></i>
                            ${os.rating}
                        </div>
                        <span style="font-size: 0.8rem; color: var(--text-dim);">${os.downloads} downloads</span>
                    </div>
                    <p>${os.description}</p>
                    <div class="card-footer">
                        <span class="species-count">
                            <i data-lucide="layers" style="width: 16px; height: 16px;"></i>
                            ${typeCount} ${typeCount > 1 ? 'Types' : 'Type'}
                        </span>
                        <button class="btn btn-primary view-species" data-id="${os.id}">
                            View Hub
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        if (window.lucide) window.lucide.createIcons();

        document.querySelectorAll('.view-species').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const osId = e.currentTarget.getAttribute('data-id');
                openOSHub(osId);
            });
        });
    }

    // Modal Logic
    function openOSHub(osId) {
        activeOS = osData.find(item => item.id === osId);
        if (!activeOS) return;

        // Reset selection state
        selectedType = Object.keys(activeOS.types)[0];
        selectedEdition = Object.keys(activeOS.types[selectedType].editions)[0];
        const archs = activeOS.types[selectedType].editions[selectedEdition].architectures;
        selectedArch = Object.keys(archs)[0];

        renderModalContent();

        osModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function renderModalContent() {
        document.getElementById('modalIcon').src = activeOS.icon;
        document.getElementById('modalName').textContent = activeOS.name;
        document.getElementById('modalBrand').textContent = activeOS.brand;

        const speciesList = document.getElementById('speciesList');
        
        // Build Selection UI
        const typeKeys = Object.keys(activeOS.types);
        const editionKeys = Object.keys(activeOS.types[selectedType].editions);
        const archKeys = Object.keys(activeOS.types[selectedType].editions[selectedEdition].architectures);
        const downloadFiles = activeOS.types[selectedType].editions[selectedEdition].architectures[selectedArch];

        speciesList.innerHTML = `
            <div class="selection-container">
                <!-- Type Selection -->
                <div class="selection-group">
                    <h4>Select Environment / Type</h4>
                    <div class="chip-group">
                        ${typeKeys.map(type => `
                            <div class="chip ${type === selectedType ? 'active' : ''}" data-type="${type}">${type}</div>
                        `).join('')}
                    </div>
                </div>

                <!-- Edition Selection -->
                <div class="selection-group">
                    <h4>Select Edition</h4>
                    <div class="chip-group">
                        ${editionKeys.map(edition => `
                            <div class="chip ${edition === selectedEdition ? 'active' : ''}" data-edition="${edition}">${edition}</div>
                        `).join('')}
                    </div>
                </div>

                <!-- Architecture Selection -->
                <div class="selection-group">
                    <h4>Select Architecture</h4>
                    <div class="chip-group">
                        ${archKeys.map(arch => `
                            <div class="chip ${arch === selectedArch ? 'active' : ''}" data-arch="${arch}">${arch}</div>
                        `).join('')}
                    </div>
                </div>

                <!-- Download Table -->
                <div class="selection-group">
                    <h4>Available Downloads</h4>
                    <table class="download-table">
                        ${Object.entries(downloadFiles).map(([format, data]) => `
                            <tr class="download-row">
                                <td>
                                    <div class="file-info">
                                        <span class="file-name">${format} - ${data.file}</span>
                                        <span class="file-meta">${data.size} • Secured Link</span>
                                    </div>
                                </td>
                                <td>
                                    <a href="${data.url}" target="_blank" class="btn-download">
                                        <i data-lucide="download" style="width: 16px; height: 16px;"></i>
                                        Download
                                    </a>
                                </td>
                            </tr>
                        `).join('')}
                    </table>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();

        // Add Listeners to Chips
        speciesList.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
                if (chip.dataset.type) {
                    selectedType = chip.dataset.type;
                    selectedEdition = Object.keys(activeOS.types[selectedType].editions)[0];
                    selectedArch = Object.keys(activeOS.types[selectedType].editions[selectedEdition].architectures)[0];
                } else if (chip.dataset.edition) {
                    selectedEdition = chip.dataset.edition;
                    selectedArch = Object.keys(activeOS.types[selectedType].editions[selectedEdition].architectures)[0];
                } else if (chip.dataset.arch) {
                    selectedArch = chip.dataset.arch;
                }
                renderModalContent();
            });
        });
    }

    closeModal.addEventListener('click', () => {
        osModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    osModal.addEventListener('click', (e) => {
        if (e.target === osModal) {
            osModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Search Logic
    osSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderCards();
    });

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderCards();
        });
    });

    // Initial Render
    renderCards();
});
