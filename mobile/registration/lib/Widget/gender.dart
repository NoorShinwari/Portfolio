import 'package:flutter/material.dart';

class Gender extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {
        return Row(
          children: <Widget>[
            Container(
              width: 10.0,
              child: Text(
                "Gender",
                textAlign: TextAlign.left,
                style: TextStyle(color: Colors.lightBlue),
              ),
            ),
            SizedBox(
              width: 13.0,
            ),
            CircleAvatar(
              backgroundColor: Colors.blue[50],
              child: Icon(Icons.tag_faces, color: Colors.grey),
            ),
            SizedBox(
              width: 10.0,
            ),
            Container(
              width: 10.0,
              child: Text(
                "Male",
                textAlign: TextAlign.left,
              ),
            ),
            CircleAvatar(
              backgroundColor: Colors.blue[50],
              child: Icon(
                Icons.face,
                color: Colors.grey,
              ),
            ),
            SizedBox(
              width: 10.0,
            ),
            Container(
              width: 46.0,
              child: Text(
                "Female",
                textAlign: TextAlign.left,
              ),
            ),
          ],
        );
      },
    );
  }
}
