import 'package:flutter/material.dart';

class Agreement extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {
        return Row(
          children: <Widget>[
            Container(
              width: 26.0,
              child: Text(
                "Agree to terms and conditions",
                textAlign: TextAlign.left,
                style: TextStyle(color: Colors.lightBlue),
              ),
            ),
            SizedBox(
              width: 13.0,
            ),
            CircleAvatar(
              backgroundColor: Colors.blue[50],
              child: Icon(Icons.done),
            ),
            SizedBox(width: 3.3),
            Container(
              width: 16.6,
              child: Text(
                "Agree",
                textAlign: TextAlign.left,
              ),
            ),
            CircleAvatar(
              backgroundColor: Colors.blue[50],
              child: Icon(Icons.clear),
            ),
            SizedBox(
              width: 3.3,
            ),
            Container(
              width: 16.6,
              child: Text(
                "Disagree",
                textAlign: TextAlign.left,
              ),
            ),
            SizedBox(width: 3.3),
            CircleAvatar(
              backgroundColor: Colors.blue[50],
              child: Icon(Icons.forward),
            ),
            SizedBox(width: 3.3),
            Container(
              width: 30.0,
              child: Text(
                "Not now",
                textAlign: TextAlign.left,
              ),
            ),
          ],
        );
      },
    );
  }
}
