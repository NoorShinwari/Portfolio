// import 'dart:io';

import 'package:flutter/material.dart';
// import 'package:image_picker/image_picker.dart';
import 'package:image_picker_web/image_picker_web.dart';
// import 'package:path/path.dart' as path;
// import 'package:path_provider/path_provider.dart' as syspaths;

class ImageInput extends StatefulWidget {
  final Function onSelectImage;

  ImageInput(this.onSelectImage);

  @override
  _ImageInputState createState() => _ImageInputState();
}

class _ImageInputState extends State<ImageInput> {
  Image _storedImage;
  // final _picker = ImagePicker();

  Future<void> _takePicture() async {
    Image fromPicker = await ImagePickerWeb.getImage(
      outputType: ImageType.widget,
    );
    // final imageFile = await ImagePicker.pickImage(
    //   source: ImageSource.camera,
    //   maxWidth: 600,
    // );
    if (fromPicker == null) {
      return;
    }
    setState(() {
      _storedImage = fromPicker;
    });
    // final appDir = await syspaths.getApplicationDocumentsDirectory();
    // final fileName = path.basename(fromPicker.path);
    // final savedImage = await fromPicker.copy('${appDir.path}/$fileName');
    widget.onSelectImage(fromPicker);
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          width: 150,
          height: 100,
          decoration: BoxDecoration(
            border: Border.all(
              width: 1,
              color: Colors.grey,
            ),
          ),
          child: _storedImage != null
              ? Container(
                  child: _storedImage,
                  width: double.infinity,
                )
              : Text(
                  'No Image Taken',
                  textAlign: TextAlign.center,
                ),
          alignment: Alignment.center,
        ),
        SizedBox(
          width: 10,
        ),
        Expanded(
          child: FlatButton.icon(
            icon: Icon(Icons.camera),
            label: Text(
              'Take Picture',
            ),
            textColor: Theme.of(context).primaryColor,
            onPressed: _takePicture,
          ),
        ),
      ],
    );
  }
}
