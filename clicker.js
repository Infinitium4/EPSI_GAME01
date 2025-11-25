let compteur = 0;

// Récupère l'affichage et le bouton
const affichage = document.getElementById('affichage');
const btn = document.getElementById('button');

// À chaque clic, on ajoute 1 et on met à jour le span
btn.addEventListener('click', () => {
  compteur += 1;
  affichage.textContent = compteur;
});
