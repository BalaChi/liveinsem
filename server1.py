from flask import Flask,render_template,url_for, request,redirect
import csv
from sender_email import send_email

app = Flask(__name__)



@app.route("/")
def index():
    return render_template('login.html')

@app.route("/chennai.html")
def index9():
    return render_template('chennai.html')



@app.route('/login.html')
def login_form():

    return render_template('ideathon.html')
@app.route("/madurai.html")
def index1():
    return render_template('madurai.html')
@app.route("/mumbai.html")
def index2():
    return render_template('mumbai.html')
@app.route("/trichy.html")
def index3():
    return render_template('trichy.html')
@app.route("/tanjavur.html")
def index4():
    return render_template('tanjavur.html')
@app.route("/kerala.html")
def index5():
    return render_template('kerala.html')

@app.route("/seemore.html")
def index6():

    return render_template('seemore.html')
@app.route("/withdraw.html")
def index7():
    return render_template('withdraw.html')
@app.route("/popoyes.html")
def index8():
    return render_template('popoyes.html')

@app.route("/earnings.html")
def index10():
    return render_template('earnings.html')










# def writing_in_csv(data):


#     global email
#     email = data['email']
   
#     with open('database.csv',mode='a', newline="") as database:
        
#         email = data['email']
#         password=data['password']
#         print(email)
#         print(password)
#         creds = [email, password]

#         csv_writer =csv.writer(database,delimiter=',',quotechar='|', quoting=csv.QUOTE_MINIMAL)
#         csv_writer.writerow(creds)

#         send_email(email_id=email)



# @app.route('/loginform',methods = ['POST', 'GET'])
# def login_form():

#     if request.method=="POST":
#         try:
#             data = request.form.to_dict()
#             writing_in_csv(data)

#             return redirect('ideathon.html')
#         except:
#             return 'not logged in'
#     else:
#         return 'something went wrong'


if __name__ == '__main__':
    app.run()
