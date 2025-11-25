        let compteur = 0;

        document.getElementById("bouton").addEventListener("click", function() {
            compteur++;
            document.getElementById("affichage").textContent = compteur;
        });