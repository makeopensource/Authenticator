// ignore_for_file: prefer_const_constructors

import 'package:authenticator/pages/user_guide.dart';
import 'package:flutter/material.dart';
import '../reusable_widgets/AppCard.dart';
import 'package:faker/faker.dart';
import '../reusable_widgets/AppCardForm.dart';

class TestPage extends StatelessWidget {
  const TestPage({super.key});

  @override
  Widget build(BuildContext context) {
    // int i = 0;
    // while (i < 15) {}
    var TestList = <Widget>[];
    int i = 0;
    // TestList.add(
    //   AppCardForm(),
    // );
    while (i < 12) {
      var faker = new Faker();
      TestList.add(AppCard(
          appName: faker.company.name(),
          username: '${faker.person.firstName()}@gmail.com'));
      i += 1;
    }

    TestList.add(ElevatedButton(
      child: const Text(
        'Go Back',
        style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
      ),
      onPressed: () {
        Navigator.pop(context);
      },
    ));
    return Scaffold(
      appBar: AppBar(
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          // children: const <Widget>[
          //   Text(
          //     "Test Page",
          //     style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25),
          //   ),
          // ],
        ),
        centerTitle: true,
      ),
      body: Center(
        child: ListView(shrinkWrap: true, children: TestList),
      ),
    );
  }
}
