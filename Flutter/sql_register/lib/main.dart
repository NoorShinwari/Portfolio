import 'package:flutter/material.dart';
import 'package:sql_register/db/database.dart';

import 'add_edit_user.dart';
import 'models/user.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Sqflite App',
      theme: new ThemeData(primarySwatch: Colors.teal),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  void didUpdateWidget(MyHomePage oldWidget) {
    super.didUpdateWidget(oldWidget);
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Flutter Sqlite'), actions: <Widget>[
        RaisedButton(
            color: Theme.of(context).primaryColor,
            onPressed: () {
              UserDatabaseProvider.db.deleteAllUsers();
              setState(() {});
            },
            child: Text('Delete All',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 14.0,
                    color: Colors.black)))
      ]),
      body: FutureBuilder<List<User>>(
        future: UserDatabaseProvider.db.getAllUsers(),
        builder: (BuildContext context, AsyncSnapshot<List<User>> snapshot) {
          if (snapshot.hasData) {
            return ListView.builder(
              physics: BouncingScrollPhysics(),
              itemCount: snapshot.data.length,
              itemBuilder: (BuildContext context, int index) {
                User item = snapshot.data[index];
                return Dismissible(
                  key: UniqueKey(),
                  background: Container(
                    color: Colors.red,
                  ),
                  onDismissed: (direction) {
                    UserDatabaseProvider.db.deleteUserWithId(item.id);
                  },
                  child: Column(
                    children: <Widget>[
                      ListTile(
                        title: Text(item.name),
                        subtitle: Text(item.email),
                        leading: CircleAvatar(child: Text(item.id.toString())),
                        onTap: () {
                          Navigator.of(context).push(
                            MaterialPageRoute(
                              builder: (context) => AddEditUser(
                                true,
                                user: item,
                              ),
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                );
              },
            );
          } else {
            return Center(child: CircularProgressIndicator());
          }
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          Navigator.of(context).push(
              MaterialPageRoute(builder: (context) => AddEditUser(false)));
        },
      ),
    );
  }
}
