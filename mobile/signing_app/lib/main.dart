import 'package:flutter/material.dart';
import 'package:signing_app/welcome.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  GlobalKey<FormState> _key = new GlobalKey();
  bool _validate = false;
  String email, password, dateOfBirth;
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: Text("Registration Form"),
      ),
      body: SingleChildScrollView(
        child: Container(
          child: Form(
            key: _key,
            autovalidate: _validate,
            child: FormUI(),
          ),
        ),
      ),
    ));
  }

  Widget FormUI() {
    return new Column(children: <Widget>[
      TextFormField(
        decoration: InputDecoration(hintText: "Email"),
        validator: validateEmail,
        keyboardType: TextInputType.emailAddress,
        onSaved: (String input) => email = input,
      ),
      TextFormField(
        decoration: InputDecoration(hintText: "Password"),
        validator: validatePassword,
        obscureText: true,
        onSaved: (String input) => password = input,
      ),
      TextFormField(
        decoration: InputDecoration(hintText: "Date of Birth"),
        // validator: validateDOB,
        onSaved: (String input) => dateOfBirth = input,
      ),
      SizedBox(height: 15.0),
      RaisedButton(onPressed: _register, child: Text("Register")),
    ]);
  }

  String validateEmail(String input) {
    if (input.length == 0) {
      return "This field cannot be empty";
    } else if (!input.contains('@')) {
      return "Enter a valid email adress";
    } else {
      return null;
    }
  }

  String validatePassword(String input) {
    if (input.length == 0) {
      return "This field cannot be empty";
    } else if (input.length < 8) {
      return "The Password must be 8 characters";
    } else {
      return null;
    }
  }

  // String validateDOB(input) {
  //   if (input.length == 0) {
  //     return "This field cannot be empty";
  //   } else if (input < 8) {
  //     return "The Password must be 8 characters";
  //   } else {
  //     return null;
  //   }
  // }

  _register() {
    if (_key.currentState.validate()) {
      _key.currentState.save();
      Navigator.push(
          context, MaterialPageRoute(builder: (context) => NextPage()));
    } else {
      setState(() {
        _validate = true;
      });
    }
  }
}
