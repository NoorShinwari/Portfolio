import 'dart:io';

import 'package:SQLite_flutter/model/user_model.dart';
import 'package:path/path.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';

class DBProvider {
  static final DBProvider db = DBProvider._();
  DBProvider._();

  static Database _database;

  String userTable = 'user_table';
  String colId = 'id';
  String colName = 'name';
  String colEmail = 'email';
  String colPassword = 'password';
  String colDate = 'date';

  Future<Database> get database async {
    if (_database != null) return _database;
    _database = await initDB();
    return _database;
  }

  Future<Database> initDB() async {
    Directory documentsDirectory = await getApplicationDocumentsDirectory();
    String path = join(documentsDirectory.path, 'TestDB.db');
    final userListDb =
        await openDatabase(path, version: 1, onCreate: _createDb);
    return userListDb;
  }

  void _createDb(Database database, int version) async {
    await database.execute(
      'CREATE TABLE $userTable( $colId INTEGER PRIMARY KEY AUTOINCREMENT, $colName TEXT,$colEmail TEXT,$colPassword TEXT, $colDate TEXT)',
    );
  }

  Future<List<Map<String, dynamic>>> getAllUsers() async {
    Database db = await this.database;

    final List<Map<String, dynamic>> list = await db.query(userTable);
    return list;
  }

  Future<List<User>> getUser() async {
    final List<Map<String, dynamic>> userMapList = await getAllUsers();
    final List<User> userList = [];
    userMapList.forEach((userMap) {
      userList.add(User.fromMap(userMap));
    });
    return userList;
  }

  Future<int> newUser(User newUser) async {
    Database db = await this.database;
    final int res = await db.insert(userTable, newUser.toMap());
    return res;
  }

  Future<int> updateUser(User newUser) async {
    Database db = await this.database;
    final int res = await db.update(userTable, newUser.toMap(),
        where: "$colId =?", whereArgs: [newUser.id]);
    return res;
  }

  Future<int> deleteUser(int id) async {
    Database db = await this.database;
    final int res =
        await db.delete(userTable, where: "$colId = ?", whereArgs: [id]);
    return res;
  }
}
