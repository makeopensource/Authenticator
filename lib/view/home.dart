import 'package:flutter/material.dart';

import '../model/account.dart';
import '../widget/account_tab.dart';
import '../api/secure_store.dart';

class Home extends StatelessWidget {
  final SecureStore store;

  const Home({required this.store, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
        centerTitle: true,
      ),
      body: FutureBuilder<List<Account>>(
          future: store.getAccounts(),
          builder: (BuildContext context,
              AsyncSnapshot<List<Account>> snapshot) {
            if (snapshot.hasData) {
              List<Account> accounts = snapshot.data!;

              // Test data
              accounts.add(Account(uuid: "abc123"));
              accounts.add(Account(uuid: "jbc123"));
              accounts.add(Account(uuid: "lbc123"));
              accounts.add(Account(uuid: "bbc123"));
              accounts.add(Account(uuid: "nbc123"));
              accounts.add(Account(uuid: "tbc123"));
              accounts.add(Account(uuid: "wbc123"));

              return ListView(
                  children: accounts.map((Account account) =>
                      AccountTab(account: account)).toList()
              );
            } else if (snapshot.hasError) {
              return const Text("Error!");
            } else {
              return const Text("Waiting for data...");
            }
          }
      ),
    );
  }
}
