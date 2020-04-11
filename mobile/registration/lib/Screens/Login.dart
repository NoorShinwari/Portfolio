import 'package:flutter/material.dart';
import 'package:registration/Screens/home.dart';
import 'package:registration/Widget/agree.dart';
import 'package:registration/Widget/gender.dart';
import 'package:registration/Widget/input.dart';

class Login extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue[50],
      body: Padding(
        padding:
            EdgeInsets.only(top: 10.0, bottom: 10.0, left: 20.0, right: 20.0),
        child: Card(
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(13.0)),
          elevation: 1.6,
          child: Container(
            child: Row(
              children: <Widget>[
                Container(
                  width: MediaQuery.of(context).size.width / 5,
                  height: MediaQuery.of(context).size.height,
                  color: Colors.lightBlue[600],
                  child: Padding(
                    padding:
                        EdgeInsets.only(top: 28.0, right: 16.0, left: 16.0),
                    child: Align(
                      alignment: Alignment.centerRight,
                      child: Column(
                        children: <Widget>[
                          SizedBox(
                            height: 20.0,
                          ),
                          Container(
                            padding: EdgeInsets.only(top: 1.6, bottom: 1.6),
                            child: Text(
                              "Go ahead and Login",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 30.0,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                          SizedBox(
                            height: 1.6,
                          ),
                          Container(
                            padding: EdgeInsets.only(top: 1.6, bottom: 1.6),
                            child: Text(
                              "It should only take a couple of minutes to create your account",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 10.0,
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ),
                          SizedBox(
                            height: 16.0,
                          ),
                          FlatButton(
                            color: Colors.lightBlue,
                            onPressed: () {
                              Navigator.push(context,
                                  MaterialPageRoute(builder: (context) {
                                return new Home();
                              }));
                            },
                            child: Text(
                              "Create Account",
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                Container(
                  padding: EdgeInsets.only(
                      top: 5.0, right: 23.0, left: 23.0, bottom: 3.3),
                  child: Column(
                    children: <Widget>[
                      Text(
                        "Log In",
                        style: TextStyle(
                            color: Colors.lightBlue,
                            fontWeight: FontWeight.w600,
                            fontSize: 35.0,
                            fontFamily: "Merriweather"),
                      ),
                      const SizedBox(height: 21.0),
                      InputField(label: "Username", content: "Noor"),
                      SizedBox(height: 6.6),
                      Gender(),
                      SizedBox(height: 6.6),
                      InputField(label: "Date of birth", content: "05/03/1990"),
                      SizedBox(height: 6.6),
                      InputField(label: "Email", content: "anything@site.com"),
                      SizedBox(height: 6.6),
                      InputField(label: "Password", content: "********"),
                      SizedBox(height: 6.6),
                      Agreement(),
                      SizedBox(
                        height: 13.0,
                      ),
                      Row(
                        children: <Widget>[
                          SizedBox(
                            width: 56.0,
                          ),
                          FlatButton(
                            color: Colors.grey[200],
                            onPressed: () {},
                            child: Text("Cancel"),
                          ),
                          SizedBox(
                            width: 6.6,
                          ),
                          FlatButton(
                            color: Colors.lightBlue,
                            onPressed: () {},
                            child: Text(
                              "Log In",
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
