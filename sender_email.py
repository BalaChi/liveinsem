import smtplib as smtp
# from server1 import writing_in_csv,data



# email_id = writing_in_csv.email

def send_email(email_id):
    print(f"email id is {email_id}")

    connection = smtp.SMTP_SSL('smtp.gmail.com', 465)

# mdpqvhtljubljwbd
    email_addr = 'balaztm@gmail.com'
    email_passwd = 'mdpqvhtljubljwbd'
    connection.login(email_addr, email_passwd)
    connection.sendmail(from_addr=email_addr, to_addrs=email_id, msg="#### HELOOO FROM AD'S ZONE####")
    print("all good sucessfulyy logeed in!!")
    connection.close()

    # writing_in_csv(data)

#     MODULE 1(Data collection):
# 		IT has user login and authorization with bank account details for payment process.Here the data’s like account details,user name,user parents name,user’s bank sibil scores .

# MODULE2(Hotel authorixation):
# 			In this module we authtorize hotels based and review given by Auhtorized reviewers and given star rating which was given only by certain crew members of ada zone 