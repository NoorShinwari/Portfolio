import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:sql_register/db/database.dart';

import 'models/user.dart';

class AddEditUser extends StatefulWidget {
  final bool edit;
  final User user;

  AddEditUser(this.edit, {this.user}) : assert(edit == true || user == null);

  @override
  _AddEditUserState createState() => _AddEditUserState();
}

class _AddEditUserState extends State<AddEditUser> {
  TextEditingController nameEditingController = TextEditingController();
  TextEditingController emailEditingController = TextEditingController();

  final _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    super.initState();
    //if you press the button to edit it must pass to true,
    //instantiate the name and phone in its respective controller, (link them to each controller)
    if (widget.edit == true) {
      nameEditingController.text = widget.user.name;
      emailEditingController.text = widget.user.email;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.edit ? "Edit User" : "Add User"),
      ),
      body: Form(
        key: _formKey,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                FlutterLogo(
                  size: 300,
                ),
                //if it is new record, it asks to enter data, : but it paints the data brought in the item
                textFormField(nameEditingController, "Name", "Enter Name",
                    Icons.person, widget.edit ? widget.user.name : "name"),
                textFormFieldEmail(
                  emailEditingController,
                  "Email",
                  "Enter email",
                  Icons.email,
                  widget.edit ? widget.user.email : "email",
                ),

                // textFormFieldPassword(
                //     passwordEditingController,
                //     "Password",
                //     "Enter Enter",
                //     Icons.email,
                //     widget.edit ? widget.user.password : "password"),

                RaisedButton(
                  color: Colors.red,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10)),
                  child: Text(
                    'Register',
                    style: new TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 14.0,
                        color: Colors.white),
                  ),
                  onPressed: () async {
                    if (!_formKey.currentState.validate()) {
                      Scaffold.of(context).showSnackBar(
                          SnackBar(content: Text('Processing Data')));
                    } else if (widget.edit == true) {
                      UserDatabaseProvider.db.updateUser(new User(
                          name: nameEditingController.text,
                          email: emailEditingController.text,
                          // password: passwordEditingController.text,
                          id: widget.user.id));
                      Navigator.pop(context);
                    } else {
                      await UserDatabaseProvider.db.addUserToDatabase(new User(
                        name: nameEditingController.text,
                        email: emailEditingController.text,
                        // password: passwordEditingController.text
                      ));
                      Navigator.pop(context);
                    }
                  },
                )
              ],
            ),
          ),
        ),
      ),
    );
  }

  textFormField(TextEditingController t, String label, String hint,
      IconData iconData, String initialValue) {
    return Padding(
      padding: const EdgeInsets.only(
        top: 10,
      ),
      child: TextFormField(
        validator: (value) {
          if (value.isEmpty) {
            return 'Please enter some text';
          }
        },
        controller: t,
        //keyboardType: TextInputType.number,
        textCapitalization: TextCapitalization.words,
        decoration: InputDecoration(
            prefixIcon: Icon(iconData),
            hintText: label,
            border:
                OutlineInputBorder(borderRadius: BorderRadius.circular(10))),
      ),
    );
  }

  textFormFieldEmail(TextEditingController t, String label, String hint,
      IconData iconData, String initialValue) {
    return Padding(
      padding: const EdgeInsets.only(
        top: 10,
      ),
      child: TextFormField(
        keyboardType: TextInputType.emailAddress,
        validator: (value) {
          if (value.isEmpty) {
            return 'Please enter your email';
          } else if (!value.contains('@')) {
            return 'Enter a valid email address';
          }
        },
        controller: t,
        textCapitalization: TextCapitalization.words,
        decoration: InputDecoration(
            prefixIcon: Icon(iconData),
            hintText: label,
            border:
                OutlineInputBorder(borderRadius: BorderRadius.circular(10))),
      ),
    );
  }
}

// textFormFieldPassword(TextEditingController t, String label, String hint,
//     IconData iconData, String initialValue) {
//   return Padding(
//     padding: const EdgeInsets.only(
//       top: 10,
//     ),R
//     child: TextFormField(
//       validator: (value) {
//         if (value.isEmpty) {
//           return 'This field cannot be empty';
//         } else if (!value.contains('@')) {
//           return 'Password shold be 8 characters';
//         }
//       },
//       controller: t,
//       textCapitalization: TextCapitalization.words,
//       decoration: InputDecoration(
//           prefixIcon: Icon(iconData),
//           hintText: label,
//           border: OutlineInputBorder(borderRadius: BorderRadius.circular(10))),
//     ),
//   );
// }
