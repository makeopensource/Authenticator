import 'package:authenticator/reusable_widgets/AppCardForm.dart';
import 'package:flutter/material.dart';
import '../lib/pages/home_page.dart';
import '../lib/pages/test_page.dart';
import '../lib/pages/user_guide.dart';
import '../lib/reusable_widgets/AppCardForm.dart';
import 'package:authenticator/api/secure_store.dart';
import 'package:authenticator/view/home.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'bottom_nav_old.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});
  final SecureStore store = SecureStore(const FlutterSecureStorage());
  @override
  Widget build(BuildContext context) {
    final pageWidgets = [Home(store: store), AppCardForm(), TestPage()];
    return MaterialApp(
      routes: {
        '/homepage': (context) => HomePage(),
        '/testpage': (context) => const TestPage(),
        '/userguide': (context) => const UserGuide(),
        '/appcardform': (context) => const AppCardForm()
      },
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: pageWidgets[],
        appBar: AppBar(
          title: const Text("Authenticator"),
          centerTitle: true,
        ),
        bottomNavigationBar: const BottomNav(),
      ),
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
    );
  }
}

