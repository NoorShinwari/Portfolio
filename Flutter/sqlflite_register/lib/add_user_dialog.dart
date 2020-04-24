import 'dart:async';

import 'package:flutter/material.dart';
import 'package:sqlflite_register/database/database_helper.dart';
import 'package:sqlflite_register/database/model/user.dart';

class AddUserDialog {
  final teName = TextEditingController();
  final teEmail = TextEditingController();
  final tePassword = TextEditingController();
  final teDOB = TextEditingController();
  User user;

  static const TextStyle linkStyle = const TextStyle(
    color: Colors.blue,
    decoration: TextDecoration.underline,
  );

  Widget buildAboutDialog(
      BuildContext context, _myHomePageState, bool isEdit, User user) {
    if (user != null) {
      this.user = user;
      teName.text = user.name;
      teEmail.text = user.email;
      teDOB.text = user.dob;
    }

    return new AlertDialog(
      title: new Text(isEdit ? 'Edit' : 'Add new User'),
      content: new SingleChildScrollView(
          child: new Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          getTextField(
            'Enter name',
            teName,
            validate,
          ),
          getTextField(
            'Enter email',
            teEmail,
            validateEmail,
          ),
          getTextField('DD-MM-YYYY', teDOB, validate),
          new GestureDetector(
            onTap: () {
              addRecord(isEdit);
              _myHomePageState.displayRecord();
              Navigator.of(context).pop();
            },
            child: new Container(
              margin: EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 0.0),
              child: getAppBorderButton(isEdit ? "Edit" : "Add",
                  EdgeInsets.fromLTRB(0.0, 10.0, 0.0, 0.0)),
            ),
          )
        ],
      )),
    );
  }

  Widget getTextField(String inputBoxName,
      TextEditingController inputBoxController, _validator) {
    var loginBtn = new Padding(
        padding: const EdgeInsets.all(5.0),
        child: new TextFormField(
          validator: _validator,
          autovalidate: true,
          controller: inputBoxController,
          decoration: new InputDecoration(
            hintText: inputBoxName,
          ),
        ));
    return loginBtn;
  }

  Widget getAppBorderButton(String buttonLabel, EdgeInsets margin) {
    var loginBtn = new Container(
      margin: margin,
      padding: EdgeInsets.all(8.0),
      alignment: FractionalOffset.center,
      decoration: new BoxDecoration(
        border: Border.all(color: const Color(0xFF28324E)),
        borderRadius: new BorderRadius.all(const Radius.circular(6.0)),
      ),
      child: new Text(
        buttonLabel,
        style: new TextStyle(
          color: const Color(0xFF28324E),
          fontSize: 20.0,
          fontWeight: FontWeight.w300,
          letterSpacing: 0.3,
        ),
      ),
    );
    return loginBtn;
  }

  Future addRecord(bool isEdit) async {
    var db = new DatabaseHelper();
    var user = new User(teName.text, teEmail.text, teDOB.text);
    if (isEdit) {
      user.setUserId(this.user.id);
      await db.update(user);
    } else {
      await db.saveUser(user);
    }
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

  String validate(String input) {
    if (input.length == 0) {
      return "This field cannot be empty";
    } else {
      return null;
    }
  }
}
