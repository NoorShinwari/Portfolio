import 'package:flutter/material.dart';

class TextInputFormPass extends StatefulWidget {
  @override
  _TextInputFormPassState createState() => _TextInputFormPassState();
}

class _TextInputFormPassState extends State<TextInputFormPass> {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      obscureText: true,
      style: TextStyle(fontSize: 20.0, color: Colors.black),
      validator: (String value) {
        if (value.length == 0) {
          print('is working');
          return "This field cannot be empty";
        } else if (value.length < 6) {
          return "Password too short, minimum characters 6";
        } else
          return 'ok';
      },
      decoration: InputDecoration(
          border: InputBorder.none,
          hintText: "Password",
          fillColor: Colors.white,
          filled: true),
    );
  }
}

class TextInputFormEmail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      style: TextStyle(fontSize: 20.0, color: Colors.black),
      keyboardType: TextInputType.emailAddress,
      decoration: InputDecoration(
          border: InputBorder.none,
          hintText: "Email",
          fillColor: Colors.white,
          filled: true),
    );
  }
}

class TextInputFormDOB extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      style: TextStyle(fontSize: 20.0, color: Colors.black),
      keyboardType: TextInputType.emailAddress,
      decoration: InputDecoration(
          border: InputBorder.none,
          hintText: "Date of Birth",
          fillColor: Colors.white,
          filled: true),
    );
  }
}
