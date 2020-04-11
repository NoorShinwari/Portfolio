import 'package:flutter/material.dart';
import 'package:registration/Widget/agree.dart';
import 'package:registration/Widget/gender.dart';
import 'package:registration/Widget/input.dart';

import 'Login.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue[50],
      body: Padding(
        padding: EdgeInsets.all(0.0),
        child: Card(
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
          elevation: 1.6,
          child: Container(
            child: Row(
              children: <Widget>[
                Container(
                  width: MediaQuery.of(context).size.width / 3,
                  height: MediaQuery.of(context).size.height,
                  color: Colors.lightBlue[600],
                  child: Padding(
                    padding: EdgeInsets.only(top: 60, right: 0, left: 0),
                    child: Align(
                      alignment: Alignment.centerRight,
                      child: Column(
                        children: <Widget>[
                          SizedBox(
                            height: 20.0,
                          ),
                          Container(
                            padding: EdgeInsets.only(top: 2, bottom: 2),
                            child: Text(
                              "Let's get you set up",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 10.0,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                          SizedBox(
                            height: 1.6,
                          ),
                          Container(
                            padding: EdgeInsets.only(top: 3.0, bottom: 3.0),
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
                            height: 10.0,
                          ),
                          FlatButton(
                            color: Colors.lightBlue,
                            onPressed: () {
                              Navigator.push(context,
                                  MaterialPageRoute(builder: (context) {
                                return new Login();
                              }));
                            },
                            child: Text(
                              "Login",
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
                    top: 5.0,
                    right: 10.0,
                    left: 10.0,
                    bottom: 3.0,
                  ),
                  child: Column(
                    children: <Widget>[
                      Text(
                        "Sign up",
                        style: TextStyle(
                            color: Colors.lightBlue,
                            fontWeight: FontWeight.w600,
                            fontSize: 30.0,
                            fontFamily: "Merriweather"),
                      ),
                      const SizedBox(height: 2.0),
                      InputField(label: "Username", content: "Noor"),
                      SizedBox(height: 2.0),
                      Gender(),
                      SizedBox(height: 2.0),
                      InputField(label: "Date of birth", content: "05/03/1990"),
                      SizedBox(height: 2.0),
                      InputField(label: "Email", content: "anything@site.com"),
                      SizedBox(height: 2.0),
                      InputField(label: "Password", content: "********"),
                      SizedBox(height: 2.0),
                      Agreement(),
                      SizedBox(
                        height: 10.0,
                      ),
                      Row(
                        children: <Widget>[
                          SizedBox(
                            width: 40.0,
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
                              "Create Account",
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
