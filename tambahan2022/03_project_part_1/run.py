from flask import Flask, render_template, url_for, redirect, flash
from flask_sqlalchemy import SQLAlchemy
 
from forms import RegistrationForm, LoginForm
 
from datetime import datetime
 
 
app = Flask(__name__)
app.config['SECRET_KEY'] = 'ILOVEYOU3000'
 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
 
db = SQLAlchemy(app)
 
 
#FLASK ORM - SQLAlchemy
class User(db.Model):
 
	id = None
	username = None
	email = None
	image_file = None
	password = None
 
 
class Tweet(db.Model):
 
	id = None
	date_posted = None
	content = None
	user_id = None
 
 
 
tweets = [
	{
		'author' : 'Budi Doremi',
		'content' : 'This is my first tweet',
		'date_posted' : 'May 10, 2022'
	},
	{
		'author' : 'Alex Chandra',
		'content' : 'Hello World',
		'date_posted' : 'May 11, 2022'
	}
]
 
 
@app.route("/") # 127.0.0.1:8000
@app.route("/home") # 127.0.0.1:8000/home
def home():
	return render_template('home.html', tweets=tweets)
 
@app.route("/register", methods=['GET', 'POST'])
def register():
	form = RegistrationForm()
	if form.validate_on_submit():
		flash(f"Account created for {form.username.data}!", "success")
		return redirect(url_for('login'))
	return render_template('register.html', title='Register', form=form)
 
 
@app.route("/login")
def login():
	form = LoginForm()
	return render_template('login.html', title='Login', form=form)
 
@app.route("/about")
def about():
	return render_template('about.html', title='About Us')
 
 
if __name__ == '__main__':
	app.run(debug=True)