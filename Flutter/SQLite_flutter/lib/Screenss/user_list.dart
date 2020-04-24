import 'package:SQLite_flutter/Screenss/add_user.dart';
import 'package:SQLite_flutter/database/Database.dart';
import 'package:SQLite_flutter/model/user_model.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class UserList extends StatefulWidget {
  @override
  _UserListState createState() => _UserListState();
}

class _UserListState extends State<UserList> {
  Future<List<User>> _userList;
  final DateFormat _dateFormatter = DateFormat('MMM dd, yyyy');

  @override
  void initState() {
    super.initState();
    _updateUserList();
  }

  _updateUserList() {
    setState(() {
      _userList = DBProvider.db.getUser();
    });
  }

  Widget _build(User user) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 30.0),
      child: Column(
        children: <Widget>[
          ListTile(
            title: Text(
              user.name,
            ),
            subtitle: Text('Email: ${user.email}' +
                '\n' +
                'Password: ${user.password}' +
                '\n' +
                'Date of Birth: ${_dateFormatter.format(user.date)}'),
            onTap: () => Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (_) => AddUser(
                          updateUser: _updateUserList,
                          user: user,
                        ))),
          ),
          Divider(),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        backgroundColor: Theme.of(context).primaryColor,
        child: Icon(Icons.add),
        onPressed: () => Navigator.push(
            context,
            MaterialPageRoute(
                builder: (_) => AddUser(
                      updateUser: _updateUserList,
                    ))),
      ),
      body: FutureBuilder(
          future: _userList,
          builder: (context, snapshot) {
            if (!snapshot.hasData) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }
            return ListView.builder(
              itemCount: 1 + snapshot.data.length,
              itemBuilder: (BuildContext context, int index) {
                if (index == 0) {
                  return Padding(
                    padding: EdgeInsets.symmetric(horizontal: 30.0),
                    child: Column(children: <Widget>[
                      Text('Users'),
                      SizedBox(
                        height: 10.0,
                      )
                    ]),
                  );
                }
                return _build(snapshot.data[index - 1]);
              },
            );
          }),
    );
  }
}
