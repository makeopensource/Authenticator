import 'package:authenticator/api/secure_store.dart';
import 'package:flutter/material.dart';
import 'package:authenticator/view/home.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final SecureStore store = SecureStore(const FlutterSecureStorage());

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Home(store: store),
        appBar: AppBar(
          title: const Text("Authenticator"),
          centerTitle: true,
        ),
      ),
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
    );
  }
}
