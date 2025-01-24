function clock(){
    var mois= ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    var jours= ["Dimanche", "Lundi","Mardi","Mercredi", "Jeudi","Vendredi", "Samedi"]

    var today = new Date();
    document.getElementById('Date').innerHTML = (jours[today.getDay()]+" "+ today.getDate() + " " + mois[today.getMonth()]+ " " + today.getFullYear());
    
    var h = today.getHours();
    var m= today.getMinutes();
    var s= today.getSeconds();
    var d= h<11 ? "AM" : "PM";
    h= h<10 ? "0"+h : h;
    m= m<10 ? "0"+m:m;
    s=s<10?"0"+s:s;

    document.getElementById('hours').innerHTML=h;
    document.getElementById('min').innerHTML=m;
    document.getElementById('sec').innerHTML=s;

    document.getElementById('btn1').addEventListener('click', function() {
        // Vérifier si la galerie est déjà affichée
        if (document.getElementById('gallery')) {
            return; // Éviter de recréer la galerie
        }
    
        // Créer un conteneur pour la galerie
        const gallery = document.createElement('div');
        gallery.id = 'gallery';
        gallery.style.position = 'absolute';
        gallery.style.top = '10%';
        gallery.style.left = '50%';
        gallery.style.transform = 'translate(-50%, -50%)';
        gallery.style.display = 'flex';
        gallery.style.gap = '10px';
        gallery.style.padding = '20px';
        gallery.style.backgroundColor = '#22222298';
        gallery.style.boxShadow = '0 4px 8px hsla(0, 0.00%, 100.00%, 0.20)';
        gallery.style.borderRadius = '20px';
        gallery.style.zIndex = '1000';
    
        // Liste des images disponibles dans le dossier "Imgs"
        const images = ["1.jpeg", "2.jpg", "3.png", "4.jpg", "5.png", "6.jpg", "7.png", "8.jpg", "9.png", "10.jpg", "11.png", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"]; // Modifier selon les images disponibles
    
        // Ajouter chaque image à la galerie
        images.forEach(imageName => {
            const img = document.createElement('img');
            img.src = `./Imgs/${imageName}`;
            img.alt = imageName;
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.objectFit = 'cover';
            img.style.cursor = 'pointer';
            img.style.border = 'none';
            img.style.borderRadius = '25px';
    
            // Ajouter un effet au survol
            img.addEventListener('mouseover', () => {
                img.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.6)';
                img.style.transform= 'scale(1.05)';
                img.style.transition='0.4s ease'
            });
            img.addEventListener('mouseout', () => {
                img.style.boxShadow = 'none';
                img.style.transform= 'scale(1)';
                img.style.transition='0.4s ease'
            });
    
            // Changer l'arrière-plan lorsqu'on clique sur une image
            img.addEventListener('click', () => {
                document.body.style.background = `url(./Imgs/${imageName})`;
                document.body.style.backgroundSize = 'cover';
    
                // Supprimer la galerie après le choix
                document.body.removeChild(gallery);
            });
    
            gallery.appendChild(img);
        });
    
        // Ajouter un bouton pour fermer la galerie
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.fontSize="2.5rem";
        closeButton.style.fontWeight="bolder";
        closeButton.style.marginTop = '10px';
        closeButton.style.padding = '5px 40px';
        closeButton.style.border = 'none';
        closeButton.style.backgroundColor = '#222222';
        closeButton.style.color = 'white';
        closeButton.style.cursor = 'pointer';
        closeButton.style.borderRadius = '5px';
    
        closeButton.addEventListener('mouseover', () => {
            closeButton.style.boxShadow = '0 10px 25px rgba(255, 0, 0, 0.6)';
            closeButton.style.transform= 'scale(1.05)';
            closeButton.style.transition='0.4s ease'
            closeButton.style.color='rgba(255, 0, 0, 0.6)'
        });
        closeButton.addEventListener('mouseout', () => {
            closeButton.style.boxShadow = 'none';
            closeButton.style.transform= 'scale(1)';
            closeButton.style.transition='0.4s ease'
            closeButton.style.color='white'
        });
    
        closeButton.addEventListener('click', () => {
            document.body.removeChild(gallery);
        });
    
        gallery.appendChild(closeButton);
    
        // Ajouter la galerie au corps de la page
        document.body.appendChild(gallery);
    });

    
}var inter= setInterval(clock, 400);
