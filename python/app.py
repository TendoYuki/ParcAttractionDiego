from flask import Flask, jsonify, request
from flask_cors import CORS

import request.request as req
import controller.auth.auth as user
import controller.attraction as attraction
import controller.critique as critique

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, Docker!'

# Attraction
@app.post('/attraction')
def addAttraction():
    print("okok", flush=True)
    # Fonction vérif token
    checkToken = user.check_token(request)
    if (checkToken != True):
        return checkToken

    json = request.get_json()
    retour = attraction.add_attraction(json)
    if (retour):
        return jsonify({"message": "Element ajouté.", "result": retour}), 200
    return jsonify({"message": "Erreur lors de l'ajout.", "result": retour}), 500

@app.get('/attraction')
def getAllAttraction():
    result = attraction.get_all_attraction()
    return result, 200

@app.get('/attraction/<int:index>')
def getAttraction(index):
    result = attraction.get_attraction(index)
    return result, 200

@app.delete('/attraction/<int:index>')
def deleteAttraction(index):

    # Fonction vérif token
    checkToken = user.check_token(request)
    if (checkToken != True):
        return checkToken

    json = request.get_json()
    
    if (attraction.delete_attraction(index)):
        return "Element supprimé.", 200
    return jsonify({"message": "Erreur lors de la suppression."}), 500

@app.post('/login')
def login():
    json = request.get_json()

    if (not 'name' in json or not 'password' in json):
        result = jsonify({'messages': ["Nom ou/et mot de passe incorrect"]})
        return result, 400
    
    cur, conn = req.get_db_connection()
    requete = f"SELECT * FROM users WHERE name = '{json['name']}' AND password = '{json['password']}';"
    cur.execute(requete)
    records = cur.fetchall()
    conn.close()

    result = jsonify({"token": user.encode_auth_token(list(records[0])[0]), "name": json['name']})
    return result, 200
  
  
  
# Partie ajouté par Diego

@app.get('/critique')
def getAllCritique():
    result = critique.get_all_critique()
    return result, 200
  
  
@app.get('/critique/<int:attraction_id>')
def getCritiquesForAttraction(attraction_id):
    result = critique.get_critiques_by_attraction(attraction_id)
    if result:
        return jsonify(result), 200
    return jsonify({"message": "Aucune critique trouvée."}), 404
  
  
@app.get('/critique/moyenne/<int:attraction_id>')
def getAverageRating(attraction_id):
    result = critique.get_average_rating(attraction_id)
    if result is not None:
        return jsonify({"average": result}), 200
    return jsonify({"message": "Aucune critique trouvée."}), 404
  
  

@app.post('/critique')
def addCritique():
  json_data = request.get_json()

  # Vérifie les champs nécessaires
  if not all(k in json_data for k in ("attraction_id", "name", "first_name", "text", "mark")):
      return jsonify({"message": "Données manquantes"}), 400

  # Ajoute la critique
  result = critique.add_critique(json_data)
  if result:
      return jsonify({"message": "Critique ajoutée avec succès"}), 201
  return jsonify({"message": "Erreur lors de l'ajout de la critique"}), 500


