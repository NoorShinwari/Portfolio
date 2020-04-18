import 'package:SQLite_flutter/database/Database.dart';
import 'package:SQLite_flutter/model/user_model.dart';
import 'package:flutter/material.dart';

import 'package:intl/intl.dart';
import 'package:rflutter_alert/rflutter_alert.dart';

class AddUser extends StatefulWidget {
  final Function updateUser;
  final User user;

  AddUser({this.updateUser, this.user});
  @override
  _AddUserState createState() => _AddUserState();
}

class _AddUserState extends State<AddUser> {
  final GlobalKey<FormState> _formKey = new GlobalKey<FormState>();
  bool _validate = false;
  String _name = '';
  String _email = '';
  String _password = '';
  DateTime _dateOfBirth = DateTime.now();
  final TextEditingController _controller = new TextEditingController();
  final DateFormat _dateFormatter = DateFormat('MMM dd, yyyy');

  @override
  void initState() {
    super.initState();

    if (widget.user != null) {
      _name = widget.user.name;
      _email = widget.user.email;
      _password = widget.user.password;
      _dateOfBirth = widget.user.date;
    }
    _controller.text = _dateFormatter.format(_dateOfBirth);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  _handleDatePicker() async {
    final DateTime date = await showDatePicker(
      context: context,
      initialDate: _dateOfBirth,
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
    );
    if (date != null && date != _dateOfBirth) {
      setState(() {
        _dateOfBirth = date;
      });
      _controller.text = _dateFormatter.format(date);
    }
  }

  _delete() {
    DBProvider.db.deleteUser(widget.user.id);
    widget.updateUser();
    Navigator.pop(context);
  }

  _register() {
    if (_formKey.currentState.validate()) {
      _formKey.currentState.save();
      Alert(
        context: context,
        title: "Registered",
        desc: "Thank you for registering.",
        image: Image.asset("assets/success.png"),
      ).show();
      print('$_name, $_email,$_password, $_dateOfBirth');
      User user = User(
          name: _name, email: _email, password: _password, date: _dateOfBirth);
      if (widget.user == null) {
        DBProvider.db.newUser(user);
      } else {
        user.id = widget.user.id;
        DBProvider.db.updateUser(user);
      }
      widget.updateUser();
      Navigator.pop(context);
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
          // title: new Text(widget.user),
          ),
      body: new SafeArea(
          top: false,
          bottom: false,
          child: new Form(
              key: _formKey,
              autovalidate: _validate,
              child: new ListView(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                children: <Widget>[
                  new TextFormField(
                    decoration: const InputDecoration(
                      icon: const Icon(Icons.person),
                      hintText: 'Enter your name please',
                      labelText: 'Name',
                    ),
                    onSaved: (String input) => _name = input,
                    initialValue: _name,
                  ),
                  new TextFormField(
                    decoration: const InputDecoration(
                      icon: const Icon(Icons.email),
                      hintText: 'Enter a email address',
                      labelText: 'Email',
                    ),
                    keyboardType: TextInputType.emailAddress,
                    onSaved: (String input) => _email = input,
                    validator: validateEmail,
                    initialValue: _email,
                  ),
                  new TextFormField(
                    decoration: const InputDecoration(
                      icon: const Icon(Icons.lock),
                      hintText: 'Enter your password',
                      labelText: 'Password',
                    ),
                    obscureText: true,
                    onSaved: (String input) => _password = input,
                    validator: validatePassword,
                    initialValue: _password,
                  ),
                  new TextFormField(
                    decoration: new InputDecoration(
                      icon: const Icon(Icons.calendar_today),
                      hintText: 'Enter your date of birth',
                      labelText: 'Date of birth',
                    ),
                    controller: _controller,
                    readOnly: true,
                    onTap: _handleDatePicker,
                  ),
                  new Container(
                      padding: const EdgeInsets.only(left: 40.0, top: 20.0),
                      child: new RaisedButton(
                        child: const Text('Register',
                            style: TextStyle(color: Colors.white)),
                        color: Colors.blue,
                        onPressed: _register,
                      )),
                  new Container(
                    padding: const EdgeInsets.only(left: 40.0, top: 20.0),
                    child: new RaisedButton(
                        onPressed: _delete, child: Text('Delete')),
                  )
                ],
              ))),
    );
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
}
