import 'package:flutter/material.dart';

import '../model/account.dart';
import 'package:authenticator/reusable_widgets/AppCardForm.dart';
import 'package:faker/faker.dart';

class AccountTab extends StatefulWidget {
  final Account account;

  const AccountTab({required this.account, Key? key}) : super(key: key);

  @override
  State<AccountTab> createState() => _AccountTabState();
}

class _AccountTabState extends State<AccountTab> {
  //String code = "000000";
  var code = random.integer(99999, min: 5323).toString();

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: Theme.of(context).backgroundColor,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Image(
              height: 100,
              width: 100,
              image: NetworkImage(widget.account.imageUrl)),
          Column(
            children: [
              Text(widget.account.uuid),
              Text(code),
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
        ],
      ),
    );
  }
}
