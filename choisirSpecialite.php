<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>choisir votre specialite</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <header class="header-user diminuerMarge">
        <span class="user"><a href="index.php"><svg class="logo-Youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg> &nbsp;&nbsp;Tutoriels</a></span>
    </header>
    <main class="container">
        <div class="choix">
            <h1>choisissez des cours</h1>
            <form action="">
                <label>
                    <input type="checkbox" name="analyseCombinatoire" value="analyse combinatoire">
                    <span class="checkbox-container"></span> 
                    analyse combinatoire
                </label>
                <label>
                    <input type="checkbox" name="probabilite" value="probabilite">
                    <span class="checkbox-container"></span>
                    probabilite
                </label>
                <label>
                    <input type="checkbox" name="trigonometrie" value="trigonometrie">
                    <span class="checkbox-container"></span> 
                    trigonometrie
                </label>
                <label>
                    <input type="checkbox" name="algebre" value="algebre">
                    <span class="checkbox-container"></span>
                     algebre
                </label>
                <label>
                    <input type="checkbox" name="mathDiscret" value="math discret">
                    <span class="checkbox-container"></span>
                    math discret
                </label>
                <h2>ajouter un justificatif</h2>
                <div>
                    <label class="fileUpload" for="inputFile"><i class="fa-solid fa-download"></i>  choisir un fichier...</label>
                    <input id="inputFile" name="certification" type="file">
                </div>
                <input type="submit" value="passer" class="passer"> 
            </form>
        </div>
    </main>
    <footer class="footer-student">
            <div class="motivation">
                <div class="entete">Ma motivation</div>
                <p>Chaque défi en mathématiques nous enseigne que derrière chaque problème complexe se cache une solution attendue,rappelle-toi que poursuivre tes rêves est un puzzle que tu es capable de résoudre, alors continue d'avancer, pas à pas, vers l'infini de tes possibilités.</p>
            </div>
            <div class="contact">
                <div class="entete">Me contacter</div>
                <p><i class="fa-solid fa-envelope"></i>   Par email</p>
                <div class="entete">Thème</div>
                <span class="champ" tabindex="0">
                    <span class="bouttonRond"><i class="fa-regular fa-sun"></i></span>
                </span>
            </div>
    </footer>
    <script src="https://kit.fontawesome.com/01cba61c97.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script src="script/script.js"></script>
</body>
</html>