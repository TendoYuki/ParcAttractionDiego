import request.request as req

def get_all_critique():
    json = req.select_from_db("SELECT * FROM critique")
    return json