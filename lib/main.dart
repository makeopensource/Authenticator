import 'package:authenticator/reusable_widgets/AppCardForm.dart';
import 'package:flutter/material.dart';
import 'pages/home_page.dart';
import 'pages/test_page.dart';
import 'pages/user_guide.dart';
import 'reusable_widgets/AppCardForm.dart';
import 'package:authenticator/api/secure_store.dart';
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
      routes: {
        '/': (context) => const HomePage(),
        '/testpage': (context) => const TestPage(),
        '/userguide': (context) => const UserGuide(),
        '/appcardform': (context) => const AppCardForm()
      },
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
