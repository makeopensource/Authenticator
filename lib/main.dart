import 'package:authenticator/api/secure_store.dart';
import 'package:authenticator/api/uri_parser.dart';
import 'package:authenticator/view/add_account.dart';
import 'package:authenticator/view/confirm_account.dart';
import 'package:flutter/material.dart';
import 'package:authenticator/view/home.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final SecureStore store = SecureStore(const FlutterSecureStorage());
  final UriParser parser = UriParser();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
      initialRoute: '/home',
      routes: {
        '/home': (context) => Home(store: store),
        '/addAccount': (context) => AddAccount(parser: parser),
        '/confirmAccount': (context) => const ConfirmAccount(),
      },
    );
  }
}
