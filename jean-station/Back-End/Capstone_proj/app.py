from flask import Flask, request, redirect, jsonify
from flask_restful import Resource, Api, reqparse
from pymongo import MongoClient
from bson import ObjectId
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

client = MongoClient("mongodb://db:27017/")
db = client["total_items"]
men_products_collection = db["mens_wear"]
women_products_collection = db["womens_wear"]
collection = db.Admin_uses

bcrypt = Bcrypt(app)

parser = reqparse.RequestParser()
parser.add_argument("name", type=str, required=True, help="Product name is required")
parser.add_argument("size", type=str, required=True, help="size is required")
parser.add_argument("color", type=str, required=True, help="color is required")
parser.add_argument("price", type=float, required=True, help="Price is required")
parser.add_argument("Id", type=int, required=True, help="Product name is required")
parser.add_argument("image_url", type=str, required=True, help="image is required")

# ******************* LOGIN ****************
loginparser = reqparse.RequestParser()
loginparser.add_argument('username', type=str, required=True, help="Username can't be empty")
loginparser.add_argument('password', type=str, required=True, help="Password can't be empty")
loginparser.add_argument('email', type=str, required=True, help="Email can't be empty")


# ************************ MEN'S PRODUCTS **************************
class MenProducts(Resource):
    def get(self, product_id=None):
        if product_id:
            detail = men_products_collection.find_one({"_id": ObjectId(product_id)})
            if detail:
                detail['_id'] = str(detail['_id'])
                return detail, 200
            return {"message": "product not found!"}, 204
        else:
            all_men_products = list(men_products_collection.find())
            for product in all_men_products:
                product['_id'] = str(product['_id'])
            return all_men_products, 200

    def post(self):
        args = parser.parse_args()
        product_exist = men_products_collection.find_one({"Id": args['Id']})

        if product_exist:
            return {"message": "Product already exists"}, 409
        else:
            data = {
                "name": args["name"],
                "size": args["size"],
                "color": args["color"],
                "price": args["price"],
                "Id": args["Id"],
                "image_url": args["image_url"]
            }
            men_products_collection.insert_one(data)
            return {"message": "Men's product added successfully"}, 200

    def put(self, product_id):
        args = parser.parse_args()
        data = {
            "name": args["name"],
            "size": args["size"],
            "color": args["color"],
            "price": args["price"],
            "Id": args["Id"],
            "image_url": args["image_url"]
        }
        men_products_collection.update_one({"_id": ObjectId(product_id)}, {"$set": data})
        return {"mesaage": "Men's product updated successfully"}, 200

    def delete(self, product_id):
        men_products_collection.delete_one({"_id": ObjectId(product_id)})
        return {"message": "Men's product deleted successfully"}, 200


# ************************ WOMEN'S PRODUCTS **************************
class WomenProducts(Resource):
    def get(self, product_id=None):
        if product_id:
            detail = women_products_collection.find_one({"_id": ObjectId(product_id)})
            if detail:
                detail['_id'] = str(detail['_id'])
                return detail, 200
            return {"message": "product not found!"}, 204
        else:
            all_women_products = list(women_products_collection.find())
            for product in all_women_products:
                product['_id'] = str(product['_id'])
            return all_women_products, 200

    def post(self):
        args = parser.parse_args()
        product_exist = women_products_collection.find_one({"Id": args['Id']})

        if product_exist:
            return {"message": "Product already exists"}, 409
        else:
            # product details
            data = {
                "name": args["name"],
                "size": args["size"],
                "color": args["color"],
                "price": args["price"],
                "Id": args["Id"],
                "image_url": args["image_url"]
            }
            women_products_collection.insert_one(data)
            return {"message": "Women's product added successfully"}, 200

    def put(self, product_id):
        args = parser.parse_args()
        data = {
            "name": args["name"],
            "size": args["size"],
            "color": args["color"],
            "price": args["price"],
            "Id": args["Id"],
            "image_url": args["image_url"]
        }
        women_products_collection.update_one({"_id": ObjectId(product_id)}, {"$set": data})
        return {"mesaage": "Women's product updated successfully"}, 200

    def delete(self, product_id):
        women_products_collection.delete_one({"_id": ObjectId(product_id)})
        return {"message": "Women's product deleted successfully"}, 200


# ******************************** Login & Signup ******************************
class UserRegistration(Resource):
    def post(self):
        args = loginparser.parse_args()
        username = args['username']
        password = args['password']
        email = args['email']

        # Check if the user already exists
        if collection.find_one({"username": username}):
            return {"message": "User already exists"}, 400

        # Hash the password before storing it
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Store the user in the database
        collection.insert_one({"username": username, "password": hashed_password, "email": email})

        # Redirect to the login page
        # return redirect('/login')
        return {"message": "Registered Successful"}, 201


class UserLogin(Resource):
    def post(self):
        args = loginparser.parse_args()
        username = args['username']
        password = args['password']
        email = args['email']

        # Find the user in the database
        user = collection.find_one({"username": username, "email": email})

        if user and bcrypt.check_password_hash(user['password'], password):
            # Passwords match, the user is authenticated
            return {"message": "Login successful"}, 200
        else:
            return {"message": "Invalid credentials"}, 401


class RegistrationData(Resource):
    def get(self):
        # Retrieve and return the stored registration data from your MongoDB collection
        registration_data = list(collection.find({}))

        # Customize the response as needed, e.g., convert ObjectIds to strings
        for data in registration_data:
            data['_id'] = str(data['_id'])

        return jsonify(registration_data)


# **************************************************************

api.add_resource(MenProducts, "/men-products", "/men-products/<string:product_id>")
api.add_resource(WomenProducts, "/women-products", "/women-products/<string:product_id>")
api.add_resource(UserRegistration, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(RegistrationData, '/registration_data')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)


# docker-compose up --build               ----> to run the flask file
