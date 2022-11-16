import 'package:authenticator/reusable_widgets/AppCardForm.dart';
import 'package:flutter/material.dart';
import 'pages/home_page.dart';
import 'pages/test_page.dart';
import 'pages/user_guide.dart';
import 'reusable_widgets/AppCardForm.dart';
import 'package:authenticator/api/secure_store.dart';
import 'package:authenticator/view/home.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'widget/bottom_nav.dart';

void main() {
  runApp(MultiProvider(providers: [
    Provider(create: (context) => Counter()),
  ], child: MyApp()));
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
        body: pageWidgets[counter.pageIndex],
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

class Counter extends StatelessWidget {
  const Counter({super.key});
  static int pageIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
