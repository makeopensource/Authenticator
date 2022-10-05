import 'package:authenticator/pages/home_page.dart';
import 'package:authenticator/reusable_widgets/AppCardForm.dart';
import 'package:flutter/material.dart';
import 'package:faker/faker.dart';

class AppCard extends StatefulWidget {
  // ignore: use_key_in_widget_constructors
  const AppCard({required this.appName, required this.username});
  final String appName;
  final String username;
  @override
  // ignore: no_logic_in_create_state, unnecessary_this
  State<AppCard> createState() => _AppCardState();
}

class _AppCardState extends State<AppCard> {
  _AppCardState();
  var randomID = random.integer(99999, min: 5323);
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Text(
                widget.appName,
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              Text(
                widget.username,
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              Text(
                randomID.toString(),
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
            ],
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const AppCardForm(),
                ),
              );
            },
            child: const Icon(
              Icons.settings,
              size: 35.0,
              color: Colors.white,
            ),
          ),
        ],
      ),
    );
  }
}
