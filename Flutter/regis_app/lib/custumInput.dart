import 'package:flutter/material.dart';

class CustomTextFormField extends StatefulWidget {
  final Icon fieldIcon;
  final dynamic inputForm;

  @override
  CustomTextFormField(this.fieldIcon, this.inputForm);

  @override
  _CustomTextFormFieldState createState() => _CustomTextFormFieldState();
}

class _CustomTextFormFieldState extends State<CustomTextFormField> {
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
              child: widget.fieldIcon,
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
                child: widget.inputForm,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
