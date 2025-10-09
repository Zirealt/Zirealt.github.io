// ----- Constants

const modalHTML = `<div id="modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"
                        aria-describedby="modalDesc">
                        <div class="modal-content">
                            <span class="close-btn" aria-label="Fermer la fenêtre" onclick="closeModal();">&times;</span>
                            <h2 id="modalTitle">[name]</h2>
                            <p id="modalDesc">[description]</p>
                            <p><strong>Famille :</strong> [family]</span></p>
                            <p><strong>Habitat :</strong> [habitat]</p>
                        </div>
                    </div>`


// ----- Methods

function openModal(plantKey) {
    const plant = plantsInfo[plantKey];
    if (!plant) return;
    modalToShow = modalHTML;
    modalToShow = modalToShow.replace("[name]", plant.title);
    modalToShow = modalToShow.replace("[description]", plant.description);
    modalToShow = modalToShow.replace("[family]", plant.family);
    modalToShow = modalToShow.replace("[habitat]", plant.habitat);
    document.body.innerHTML += modalToShow;

    console.log("coucou")
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