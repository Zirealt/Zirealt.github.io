// ----- Constants

const modalHTML = `<div id="modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"
                        aria-describedby="modalDesc">
                        <div class="modal-content">
                            <span class="close-btn" aria-label="Fermer la fenêtre" onclick="closeModal();">&times;</span>
                            <div id=modal-grid>
                                <div id=modal-wiki-infos>
                                    <p><strong>Nom Vernaculaire :</strong><br>      [name_common]</p>
                                    <p><strong>Nom Scientifique :</strong><br>      [name_scientific]</p>
                                    <p><strong>Famille :</strong><br>               [family]</span></p>
                                    <p><strong>Port :</strong><br>                  [port]</span></p>
                                    <p><strong>Status :</strong><br>                [status]</span></p>
                                    <p><strong>Cycle :</strong><br>                 [cycle]</span></p>
                                </div>
                                <div id=modal-descriptions-infos>
                                    <p><strong>Caractéristiques :</strong>      [characteristics]</p>
                                    <p><strong>Habitat :</strong>               [habitat]</p>
                                    <p><strong>Morphologie :</strong>           [morphology]</p>
                                    <p><strong>Reproduction :</strong>          [reproduction]</p>
                                    <p><strong>Physiologie :</strong>           [physiology]</p>
                                    <p><strong>Fonctionnement Écologique :</strong> [ecological_works]</p>
                                    <p><strong>Usage :</strong>                 [usage]</p>
                                    <p><strong>Menaces :</strong>               [threats]</p>
                                </div>
                            </div>
                        </div>
                    </div>`



// ----- Methods

function openModal(plantKey) {
    const plant = plantsInfo[plantKey];
    if (!plant) return;
    modalToShow = modalHTML;
    modalToShow = modalToShow.replace("[name_common]", plant.name_common);
    modalToShow = modalToShow.replace("[name_scientific]", plant.name_scientific);
    modalToShow = modalToShow.replace("[family]", plant.family);
    modalToShow = modalToShow.replace("[port]", plant.port);
    modalToShow = modalToShow.replace("[status]", plant.status);
    modalToShow = modalToShow.replace("[cycle]", plant.cycle);

    modalToShow = modalToShow.replace("[characteristics]", plant.characteristics);
    modalToShow = modalToShow.replace("[habitat]", plant.habitat);
    modalToShow = modalToShow.replace("[morphology]", plant.morphology);
    modalToShow = modalToShow.replace("[reproduction]", plant.reproduction);
    modalToShow = modalToShow.replace("[physiology]", plant.physiology);
    modalToShow = modalToShow.replace("[ecological_works]", plant.ecological_works);
    modalToShow = modalToShow.replace("[usage]", plant.usage);
    modalToShow = modalToShow.replace("[threats]", plant.threats);
    document.body.innerHTML += modalToShow;
}

function closeModal() {
    document.getElementById("modal").remove();
    addListenerToCards();
}

function addListenerToCards() {
    document.querySelectorAll(".plant-card").forEach(card => {
        card.addEventListener("click", () => {
            const plantKey = card.getAttribute("data-plant");
            openModal(plantKey);
        });
    });
}



// ----- Add Listeners to all plant cards

addListenerToCards();

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});