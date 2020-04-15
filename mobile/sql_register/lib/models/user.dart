class User {
  int id;
  String name;
  String email;
  String password;

  User({this.id, this.name, this.email, this.password});

  Map<String, dynamic> toMap() => {
        'id': id,
        'name': name,
        'email': email,
      };

  factory User.fromMap(Map<String, dynamic> json) => new User(
        id: json['id'],
        name: json['name'],
        email: json['email'],
      );
}
