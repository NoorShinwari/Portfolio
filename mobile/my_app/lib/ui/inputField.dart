import 'package:flutter/material.dart';

class CustomTextFormField extends StatelessWidget {
  final Icon fieldIcon;
  final String hintText;
  dynamic keyboardtype;

  @override
  CustomTextFormField(this.fieldIcon, this.hintText, this.keyboardtype);

  Widget build(BuildContext context) {
    return Container(
      width: 250,
      child: Material(
        elevation: 5,
        borderRadius: BorderRadius.all(Radius.circular(10.0)),
        color: Colors.deepOrangeAccent,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: fieldIcon,
            ),
            Container(
              decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.only(
                      topRight: Radius.circular(10.0),
                      bottomRight: Radius.circular(10.0))),
              width: 200.0,
              height: 60,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextFormField(
                  style: TextStyle(fontSize: 20.0, color: Colors.black),
                  keyboardType: keyboardtype,
                  decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: hintText,
                      fillColor: Colors.white,
                      filled: true),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
