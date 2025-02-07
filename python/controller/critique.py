import request.request as req

def get_all_critique():
    json = req.select_from_db("SELECT * FROM critique")
    return json
  

def get_critiques_by_attraction(attraction_id):
  cur, conn = req.get_db_connection()
  query = "SELECT * FROM critique WHERE attraction_id = %s"
  cur.execute(query, (attraction_id,))
  critiques = cur.fetchall()
  conn.close()

  result = []
  for critique in critiques:
      result.append({
          "critique_id": critique[0],
          "attraction_id": critique[1],
          "name": critique[2],
          "first_name": critique[3],
          "text": critique[4],
          "mark": critique[5],
          "isAnonym": critique[6],
      })

  return result
  
def get_average_rating(attraction_id):
  cur, conn = req.get_db_connection()
  query = "SELECT AVG(mark) FROM critique WHERE attraction_id = %s"
  cur.execute(query, (attraction_id,))
  average = cur.fetchone()[0]
  conn.close()

  return average if average is not None else 0

