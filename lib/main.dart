import 'package:authenticator/reusable_widgets/AppCardForm.dart';
import 'package:flutter/material.dart';
import 'pages/home_page.dart';
import 'pages/test_page.dart';
import 'pages/user_guide.dart';
import 'reusable_widgets/AppCardForm.dart';
import 'package:authenticator/api/secure_store.dart';
import 'package:authenticator/view/home.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

final SecureStore store = SecureStore(const FlutterSecureStorage());
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});
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
        body: StatefulWidget1(),
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

class StatefulWidget1 extends StatefulWidget {
  const StatefulWidget1({super.key});
  // SecureStore? HomePage;
  // StatefulWidget1(SecureStore HomePage) {
  //   this.HomePage = HomePage;
  // }
  @override
  State<StatefulWidget1> createState() => _StatefulWidget1State();
}

class _StatefulWidget1State extends State<StatefulWidget1> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static final List<Widget> _widgetOptions = <Widget>[
    Home(store: store),
    const AppCardForm(),
    const Text(
      'Settings',
      style: optionStyle,
    ),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.add_circle),
            label: 'Create',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings',
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
      ),
    );
  }
}
