import 'package:authenticator/api/secure_store.dart';
import 'package:authenticator/view/settings.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:authenticator/view/home.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

void main() {
  runApp(
      MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.orange,
        ),
        debugShowCheckedModeBanner: false,
        home: MyApp(),
      )
  );
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final SecureStore store = SecureStore(const FlutterSecureStorage());

  @override
  Widget build(BuildContext context) {
      return Scaffold(
        body: Home(store: store),
        appBar: AppBar(
          title: const Text("Authenticator"),
          centerTitle: true,
          actions: <Widget>[
            IconButton(
                onPressed: () {
                  Navigator.push(
                      context,
                      CupertinoPageRoute(builder: (context) => const SettingsPage()));
                },
                icon: Image.asset("lib/assets/gear.png"),
              padding: const EdgeInsets.only(right: 20.0),
            )
          ],
        )
      );
  }
}
