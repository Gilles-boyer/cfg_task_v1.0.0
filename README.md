# cfg_task_v1.0.0

> Le CFG task est une application web de gestion de tache par dossier avec la possibilité d'attribué des prioritées au taches. Le projet a été initié pour comprendre les rudiments et Utilisations d'une base de données MongoDB avec NodeJS, en réalisant un CRUD basic qui gère un objet de notre choix.

## Technologie :
- MongoDb (bdd)
- ExpressJS (back)
- VueJS (front)
- Vuetify (css)

# Mise en place du projet
## Prérequis :
- Avoir Nodejs installer v16.13.1 ou +
- Un editeur de code (ex VisualStudioCode)
- Git
## Process :
- git clone du projet
- Ouvrir le dossier dans votre éditeur
- Créer un fichier .env
- A l'interieur défnir : 
```
#Database
DB_URI = 
DB_NAME = 
DB_USER = 
DB_PASSWORD = 

#Mail
MAIL_USER = 
MAIL_PASSWORD = 
MAIL_SERVICE = 
MAIL_HOST = 
MAIL_PORT = 

#token
TOKEN_SECRET = 
```
- Dans un terminal :
```
 cd cfg_task_v1.0.0
 npm install
 npm start
 npm seed
 ```
 # Detail du Projet :

 > Pour le projet une documentation est en cours avec Swagger
 
 > L'authentification entre le front et le back se fait grace à JWT

 > Les mails via le module "NodeMailer"

 ## MCD et Wireframe : 
 [Mcd et Wireframe link Figma](https://www.figma.com/file/qJJNhnx2822sudyd3JMdcR/Task_CFG_v1.0.0?node-id=0%3A1)

 ## Hébergement :
 [heroku](https://mytaskcfg.herokuapp.com/)

 # Difficultés

 > Apprentissage d'une nouvelle technologie

 # Pour aller plus loin:
- Optimisation du code,
- Documentation
- Amélioration de l'affichage
- Mise en place d'un store avec vueX
- Correction de bug

