from flask import Flask, request , jsonify , render_template
from calculator import calculate

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate_api():

    data = request.json
    num1 = float(data["num1"])
    num2 = float(data["num2"])
    operation = data["operation"]

    result = calculate(num1,num2,operation)

    return  jsonify({"result":result})

if __name__ ==  "__main__":
        app.run(debug=True)