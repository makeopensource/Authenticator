import 'package:flutter/material.dart';

import '../model/account.dart';

class AccountTab extends StatefulWidget {
  final Account account;

  const AccountTab({required this.account, Key? key}) : super(key: key);

  @override
  State<AccountTab> createState() => _AccountTabState();
}

class _AccountTabState extends State<AccountTab> {
  String code = "000000";

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
          Image(height: 100, width: 100, image: NetworkImage(widget.account.imageUrl)),
          Column(
            children: [
              Text(widget.account.uuid),
              Text(code),
            ],
          ),
        ],
      ),
    );
  }
}
