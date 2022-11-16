// id, secret key,
import 'package:flutter/material.dart';

class AppCardForm extends StatefulWidget {
  const AppCardForm({super.key});

  @override
  State<AppCardForm> createState() => _AppCardFormState();
}

class _AppCardFormState extends State<AppCardForm> {
  final formKey = GlobalKey<FormState>();
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  @override
  Widget build(BuildContext context) {
    final double height = MediaQuery.of(context).size.height;
    return Container(
      padding: const EdgeInsets.only(left: 50, right: 50),
      child: Form(
        key: formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              height: height * 0.04,
            ),
            const Text(
              "Edit",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
              ),
            ),
            SizedBox(
              height: height * 0.04,
            ),
            TextFormField(
              decoration: const InputDecoration(
                labelText: 'Enter application name',
              ),
              validator: (value) {
                if (value!.isEmpty) {
                  return "Application name can't be empty";
                } else {
                  return null;
                }
              },
            ),
            SizedBox(
              height: height * 0.04,
            ),
            TextFormField(
              initialValue: '',
              decoration: const InputDecoration(
                labelText: 'Enter username',
              ),
              validator: (value) {
                if (value!.isEmpty) {
                  return "username can't be empty";
                } else {
                  return null;
                }
              },
            ),
            SizedBox(
              height: height * 0.04,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextButton(
                  onPressed: () {
                    if (formKey.currentState!.validate()) {
                      const snackBar = SnackBar(
                        content: Text(
                          'Saved',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 20),
                        ),
                      );
                      ScaffoldMessenger.of(context).showSnackBar(snackBar);
                    }
                  },
                  child: const Text(
                    'Save',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 20,
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: height * 0.04,
            ),
          ],
        ),
      ),
    );
  }
}
