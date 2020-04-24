import 'package:flutter/material.dart';

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text("Welcome"),
      ),
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        color: Colors.blue,
        child: Stack(
          children: <Widget>[
            Align(
              alignment: Alignment.bottomRight,
              heightFactor: 0.5,
              widthFactor: 0.5,
              child: Material(
                borderRadius: BorderRadius.all(Radius.circular(200)),
                color: Colors.blue[800],
                child: Container(
                  width: 400,
                  height: 400,
                ),
              ),
            ),
            Center(
              child: Container(
                  width: 400,
                  height: 400,
                  child: Column(children: <Widget>[
                    Text(
                      "Thank you for Registration",
                      style: TextStyle(fontSize: 24, color: Colors.white),
                    ),
                    SizedBox(width: 10),
                    RaisedButton(
                      shape: new RoundedRectangleBorder(
                          borderRadius: new BorderRadius.circular(18.0),
                          side: BorderSide(color: Colors.red)),
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      color: Colors.red,
                      child: Text(
                        'Go back!',
                        style: TextStyle(fontSize: 14),
                      ),
                    ),
                  ])),
            ),
          ],
        ),
      ),
    );
  }
}
