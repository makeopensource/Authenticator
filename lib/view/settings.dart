import 'package:flutter/material.dart';

class SettingsPage extends StatelessWidget {
  const SettingsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Settings"),
        centerTitle: true,
      ),
      body: ListView(
          shrinkWrap: true,
          padding: const EdgeInsets.fromLTRB(15, 25, 15, 10),
          children: <Widget>[
            const Text("Customization", style: TextStyle(fontSize: 23)),
            //Themes
            Padding(padding: const EdgeInsets.fromLTRB(0, 15, 0, 15),
              child: ElevatedButton(
                onPressed: () {
                  debugPrint('Themes worked');
                },
                style: ElevatedButton.styleFrom(
                    minimumSize: const Size.fromHeight(48),
                    alignment: Alignment.center,
                ),
                child: const Text("Themes"))),
            const Text("Information", style: TextStyle(fontSize: 23)),
            //Privacy Page
            Padding(padding: const EdgeInsets.fromLTRB(0, 15, 0, 7),
                child: ElevatedButton(
                onPressed: () {
                  debugPrint('Privacy Page worked');
                },
                style: ElevatedButton.styleFrom(
                  minimumSize: const Size.fromHeight(48),
                  alignment: Alignment.center,
                ),
                child: const Text("Privacy Page"),
              )
            ),
            //License
            Padding(padding: const EdgeInsets.only(bottom: 7),
                child: ElevatedButton(
                  onPressed: () {
                    debugPrint('License worked');
                  },
                  style: ElevatedButton.styleFrom(
                    minimumSize: const Size.fromHeight(48),
                    alignment: Alignment.center,
                  ),
                  child: const Text("License"),
                )
            ),
            Padding(padding: const EdgeInsets.only(bottom: 7),
                child: ElevatedButton(
                  onPressed: () => Navigator.of(context).pushNamed('/userGuide'),
                  style: ElevatedButton.styleFrom(
                    minimumSize: const Size.fromHeight(48),
                    alignment: Alignment.center,
                  ),
                  child: const Text("User Guide"),
                )
            ),
          ],
        ),
      );
  }
}