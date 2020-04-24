import 'package:flutter/material.dart';
import 'package:my_app/ui/inputField.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: LogIn(),
    );
  }
}

class LogIn extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          color: Colors.blue,
          child: Stack(
            children: <Widget>[
              Align(
                alignment: Alignment.bottomRight,
                heightFactor: 0.5,
                widthFactor: 0.5,
                child: Material(
                  borderRadius: BorderRadius.all(Radius.circular(200)),
                  color: Colors.blue[800],
                  child: Container(
                    width: 400,
                    height: 400,
                  ),
                ),
              ),
              Center(
                  child: Container(
                width: 400,
                height: 400,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      Material(
                        elevation: 10.0,
                        borderRadius: BorderRadius.all(Radius.circular(50.0)),
                        child: Padding(
                          padding: const EdgeInsets.all(6.0),
                          child: Image.asset(
                            'images/logo.png',
                            width: 80,
                            height: 80,
                          ),
                        ),
                      ),
                      CustomTextFormField(
                          Icon(Icons.email, color: Colors.white),
                          "Email",
                          TextInputType.emailAddress),
                      CustomTextFormField(Icon(Icons.lock, color: Colors.white),
                          "Password", TextInputType.number),
                      CustomTextFormField(
                          Icon(Icons.calendar_today, color: Colors.white),
                          "Date of Birth",
                          TextInputType.datetime),
                      Container(
                        width: 150,
                        child: RaisedButton(
                          shape: RoundedRectangleBorder(
                              borderRadius:
                                  BorderRadius.all(Radius.circular(10))),
                          onPressed: () {},
                          color: Colors.deepOrangeAccent,
                          textColor: Colors.white,
                          child: Text("Register",
                              style: TextStyle(fontSize: 20.0)),
                        ),
                      )
                    ]),
              )),
            ],
          )),
    );
  }
}
