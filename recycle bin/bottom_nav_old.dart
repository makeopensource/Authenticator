import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import '../lib/reusable_widgets/AppCardForm.dart';
import '../lib/view/home.dart';
import 'main (old).dart';

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

            }
  }
