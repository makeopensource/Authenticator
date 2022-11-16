import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import '../reusable_widgets/AppCardForm.dart';
import '../view/home.dart';
import '../main.dart';

class BottomNav extends StatelessWidget {
  static int pageIndex = 0;
  GlobalKey globalKey = new GlobalKey(debugLabel: 'bottomNav');
  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      key: globalKey,
      items: [
        new BottomNavigationBarItem(
          icon: Icon(Icons.home),
          label: 'Home',
        ),
        new BottomNavigationBarItem(
          icon: Icon(Icons.add_circle),
          label: 'Create',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.settings),
          label: 'Settings',
        ),
      ],
onTap: (int index) {
          setState(() {
            pageIndex = index;
            switch (pageIndex) {
              case 0:
                print("navigate to screen 1");
                break;
              case 1:
                print("navigate to screen 2");
                break;
              case 2:
                print("navigate to screen 3");
                break;
            }
    );
  }
}
