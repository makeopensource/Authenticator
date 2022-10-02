import 'package:flutter/material.dart';

class UserGuide extends StatelessWidget {
  const UserGuide({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("User Guide"),
          centerTitle: true,
        ),
        body: Center(
          child: ListView(
            shrinkWrap: true,
            children: <Widget>[
              const Text("\nStep 1. Tap the add application button.\n",
                  style: TextStyle(fontSize: 19)),
              Image.asset("lib/assets/step1.png"), //Place holder image
              const Text("\nStep 2. Scan the QR code with your camera.\n",
                  style: TextStyle(fontSize: 19)),
              Image.asset("lib/assets/step2.png"), //Place holder image
              const Text("\nStep 3. Press the save button.\n",
                  style: TextStyle(fontSize: 19)),
              Image.asset("lib/assets/step3.png"), //Place holder image
              const Text("\nStep 4. View your codes on the home screen.\n",
                  style: TextStyle(fontSize: 19))
            ],
          ),
        )
    );
  }
}