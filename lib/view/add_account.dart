import 'package:authenticator/api/uri_parser.dart';
import 'package:authenticator/model/account.dart';
import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

class AddAccount extends StatelessWidget {
  final UriParser parser;

  const AddAccount({required this.parser, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Add Account'),
        centerTitle: true,
      ),
      body: Container(
        padding: const EdgeInsets.all(30.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            AspectRatio(
              aspectRatio: 1.0,
              child: MobileScanner(
                onDetect: (barcode, args) {
                  if (barcode.rawValue == null) {
                    return;
                  }

                  String uri = barcode.rawValue!;
                  Account account = parser.parseOtpUri(uri);
                  Navigator.of(context)
                      .pushNamed('/confirmAccount', arguments: account);
                },
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
                onPressed: () => Navigator.of(context).pushNamed('/confirmAccount'),
                child: const Text('Enter Manually'))
          ],
        ),
      ),
    );
  }
}
