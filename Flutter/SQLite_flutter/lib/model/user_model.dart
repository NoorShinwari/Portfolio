class User {
  int id;
  String name;
  String email;
  String password;
  DateTime date;
  User({this.name, this.email, this.password, this.date});
  User.withId({this.id, this.name, this.email, this.password, this.date});

  Map<String, dynamic> toMap() {
    final map = Map<String, dynamic>();
    if (id != null) {
      map['id'] = id;
    }
    map['name'] = name;
    map['email'] = email;
    map['password'] = password;
    map['date'] = date.toIso8601String();
    return map;
  }

  factory User.fromMap(Map<String, dynamic> map) {
    return User.withId(
        id: map['id'],
        name: map['name'],
        email: map['email'],
        password: map['password'],
        date: DateTime.parse(map['date']));
  }
}
