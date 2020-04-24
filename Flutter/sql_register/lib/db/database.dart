import 'dart:io';
import 'package:path/path.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';
import 'package:sql_register/models/user.dart';
import 'package:sqflite/sql.dart';
import 'package:sqflite/sqlite_api.dart';

class UserDatabaseProvider {
  UserDatabaseProvider._();

  static final UserDatabaseProvider db = UserDatabaseProvider._();
  Database _database;

  //para evitar que abra varias conexciones una y otra vez podemos usar algo como esto..
  Future<Database> get database async {
    if (_database != null) return _database;
    _database = await getDatabaseInstanace();
    return _database;
  }

  Future<Database> getDatabaseInstanace() async {
    Directory directory = await getApplicationDocumentsDirectory();
    String path = join(directory.path, "User.db");
    return await openDatabase(path, version: 1,
        onCreate: (Database db, int version) async {
      await db.execute("CREATE TABLE User ("
          "id integer primary key,"
          "name TEXT,"
          "email TEXT,"
          ")");
    });
  }

  //Query
  //muestra todos los clientes de la base de datos
  Future<List<User>> getAllUsers() async {
    final db = await database;
    var response = await db.query("User");
    List<User> list = response.map((c) => User.fromMap(c)).toList();
    return list;
  }

  //Query
  //muestra un solo cliente por el id la base de datos
  Future<User> getUserWithId(int id) async {
    final db = await database;
    var response = await db.query("User", where: "id = ?", whereArgs: [id]);
    return response.isNotEmpty ? User.fromMap(response.first) : null;
  }

  //Insert
  addUserToDatabase(User user) async {
    final db = await database;
    var table = await db.rawQuery("SELECT MAX(id)+1 as id FROM User");
    int id = table.first["id"];
    user.id = id;
    var raw = await db.insert(
      "User",
      user.toMap(),
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
    return raw;
  }

  //Delete
  //Delete client with id
  deleteUserWithId(int id) async {
    final db = await database;
    return db.delete("User", where: "id = ?", whereArgs: [id]);
  }

  //Delete all clients
  deleteAllUsers() async {
    final db = await database;
    db.delete("User");
  }

  //Update
  updateUser(User user) async {
    final db = await database;
    var response = await db
        .update("User", user.toMap(), where: "id = ?", whereArgs: [user.id]);
    return response;
  }
}
