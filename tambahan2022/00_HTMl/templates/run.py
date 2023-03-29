from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route("/")
def index():
	names = ["Ethan", "Kenzie", "Luigi", "Trisha"]

	return render_template("index.html", text=text)

if __name__=="__main__":
	app.run()