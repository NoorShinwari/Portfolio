import 'package:flutter/material.dart';

import 'Screens/home.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  final title = 'Registration Form';
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '$title',
      debugShowCheckedModeBanner: false,
      home: Home(),
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
    );
  }
}
