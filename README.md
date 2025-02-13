# ParcAttraction - Documentation Technique et Fonctionnelle

## 📌 Présentation de l'Application
L'application **ParcAttraction** est une solution de gestion des attractions et des critiques pour un parc d'attractions réalisée lors des cours de **Maintenance applicative** lors de la 3ème année de **BUT informatique** à **l'IUT de Saint-Dié-des-Vosges**. Elle est construite avec **Angular** pour le front-end et **Flask** avec **MariaDB** pour le back-end.

---

## 🛠️ Technologies Utilisées
### **Front-end (Angular)**
- **Framework** : Angular
- **Langages** : TypeScript, HTML, SCSS
- **Bibliothèques** : Angular Material
- **Gestion des routes** : Angular Router

### **Back-end (Flask & MariaDB)**
- **Framework** : Flask
- **Base de données** : MariaDB
- **Endpoints REST** : Flask-RESTful
- **Gestion des requêtes SQL** : PDO en Python

### **Autres Technologies**
- **Docker** : Conteneurisation
- **Postman** : Tester l'api
- **Git** : Versioning

---

## 🚀 Installation et Exécution

### **1️⃣ Mise en place du projet **
- Faite un clone du projet

### **2️⃣ Lancement du projet**
- Build le docker compose (dans le dossier du projet dans un terminal)
```bash
docker compose build
```
- Lancer le docker compose (dans le dossier du projet dans un terminal)
```bash
docker compose up
```

Si un problème survient, copier les lignes de copy.sh, effacer copy.sh et recréer un copy.sh où vous collerez les lignes copiées.


### **3️⃣ Lancement du script de la bd**
- Aller dans le container python (en console)
```bash
docker compose exec api sh
```
- Lancer le script python
```python
python3 init.py
```

Accéder à l'application : [http://localhost:4200](http://localhost:4200)

L'API est accessible sur : [http://localhost:5000](http://localhost:5000)


### **4️⃣ Accéder au site traduis en anglais**
- Lancer la traduction (dans le dossier du projet dans un terminal)
```bash
ng serve --configuration=en
```
Accéder à l'application traduite : [lien indiqué dans votre terminal]()

---

## 🔗 API Endpoints

### **Attractions**
- `POST /attraction` : Ajouter une attraction
- `GET /attraction` : Récupérer toutes les attractions
- `GET /attraction/{id}` : Récupérer une attraction
- `DELETE /attraction/{id}` : Supprimer une attraction

### **Critiques**
- `GET /critique` : Récupérer toutes les critiques
- `GET /critique/{id_attraction}` : Récupérer les critiques d'une attraction
- `GET /critique/moyenne/{id_attraction}` : Récupérer la note moyenne d'une attraction
- `POST /critique` : Ajouter une critique

### **Authentification**
- `POST /login` : Connexion

---

## 📌 Fonctionnalités
### **Utilisateurs**
✅ Consulter les attractions disponibles  
✅ Ajouter une critique sur une attraction  
✅ Naviguer entre les pages du site

### **Administrateurs**
✅ Ajouter / Supprimer des attractions  

---

## 📌 Améliorations Futures
- Implémenter un système de filtres pour les critiques
- Ajouter la gestion des utilisateurs
- Créer une interface d'administration plus avancée

---

## 📌 Ce qui a été fait
- Gérer l’état des attractions (visible / pas visible) sur l’écran des visiteurs
- Mise en place des critiques pour les attractions
- Amélioration de l’interface
- Différente langue
- Documentation

**Bonus**
- Crypter le mdp dans la base de donnée (ajout de bcrypt)
- Suppression des attractions

**Auteur** : [Riviere--Jombart]  
**Contact** : [diego.riviere--jombart@hotmail.com]

