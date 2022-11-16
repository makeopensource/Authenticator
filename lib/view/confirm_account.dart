import 'package:flutter/material.dart';

class ConfirmAccount extends StatelessWidget {
  const ConfirmAccount({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Confirm Account'),
        centerTitle: true,
      ),
      body: Container(
        padding: const EdgeInsets.all(30.0),
        child: const Center(
          child: Text("Confirm account!"),
        ),
      ),
    );
  }
}
