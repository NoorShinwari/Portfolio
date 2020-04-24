class User {
  int id;
  String _name;
  String _email;
  String _dob;

  User(this._name, this._email, this._dob);

  User.map(dynamic obj) {
    this._name = obj['name'];
    this._email = obj['email'];
    this._dob = obj['dob'];
  }

  String get name => _name;
  String get email => _email;
  String get dob => _dob;

  Map<String, dynamic> toMap() {
    var map = new Map<String, dynamic>();
    map['name'] = _name;
    map['email'] = _email;
    map['dob'] = _dob;
    return map;
  }

  void setUserId(int id) {
    this.id = id;
  }
}
