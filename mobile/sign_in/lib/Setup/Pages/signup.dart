import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:sign_in/Setup/signIn.dart';

class SignUpPage extends StatefulWidget {
  @override
  _SignUpPageState createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  @override
  String _email, _password, _dateOfBirth;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(),
        body: Form(
            key: _formKey,
            child: Column(
              children: <Widget>[
                TextFormField(
                  validator: (input) {
                    if (input.isEmpty) {
                      return 'This field cannot be empty!';
                    } else if (!input.contains('@')) {
                      return 'Please type a valid email!';
                    }
                  },
                  onSaved: (input) => _email = input,
                  decoration: InputDecoration(
                      prefixIcon: Icon(Icons.email), labelText: 'Email'),
                ),
                TextFormField(
                    validator: (input) {
                      if (input.length < 6) {
                        return 'Too short, Minimum characters 6';
                      }
                    },
                    onSaved: (input) => _password = input,
                    decoration: InputDecoration(
                        prefixIcon: Icon(Icons.lock), labelText: 'password'),
                    obscureText: true),
                TextFormField(
                  validator: (input) {
                    if (input.isEmpty) {
                      return 'This field cannot be empty!';
                    }
                  },
                  onSaved: (input) => _dateOfBirth = input,
                  decoration: InputDecoration(
                      prefixIcon: Icon(Icons.calendar_today),
                      labelText: 'Date of birth'),
                ),
                RaisedButton(
                  onPressed: signUp,
                  child: Text('Sign up'),
                )
              ],
            )));
  }

  Future<void> signUp() async {
    if (_formKey.currentState.validate()) {
      _formKey.currentState.save();
    }
    try {
      await FirebaseAuth.instance
          .createUserWithEmailAndPassword(email: _email, password: _password);

      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (context) => LoginPage()));
    } catch (e) {
      print(e.messege);
    }
  }
}
