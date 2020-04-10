import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

import 'Pages/home.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => new _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String _email, _password, _dateOfBirth;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Sign in'),
        ),
        body: Form(
            key: _formKey,
            child: Column(
              children: <Widget>[
                TextFormField(
                  validator: (input) {
                    if (input.isEmpty) {
                      return 'Please type an email!';
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
                      return 'Please type an email!';
                    }
                  },
                  onSaved: (input) => _dateOfBirth = input,
                  decoration: InputDecoration(
                      prefixIcon: Icon(Icons.calendar_today),
                      labelText: 'Date of birth'),
                ),
                RaisedButton(
                  onPressed: signIn,
                  child: Text('Sign in'),
                )
              ],
            )));
  }

  Future<void> signIn() async {
    final formState = _formKey.currentState;
    if (formState.validate()) {
      formState.save();
      try {
        FirebaseUser user = (await FirebaseAuth.instance
                .signInWithEmailAndPassword(email: _email, password: _password))
            .user;

        Navigator.push(
            context, MaterialPageRoute(builder: (context) => Home(user: user)));
      } catch (e) {
        print(e.messege);
      }
    }
  }
}
