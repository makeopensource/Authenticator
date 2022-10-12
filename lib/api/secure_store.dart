import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:authenticator/model/account.dart';

class SecureStore {
  final FlutterSecureStorage storage;

  SecureStore(this.storage);

  Future<List<Account>> getAccounts() async {
    String accountsValue = (await storage.read(key: "accounts")) ?? "[]";
    List<dynamic> accountsJson = jsonDecode(accountsValue);
    List<Account> accounts = List<Account>.from(accountsJson.map((json) => Account.fromJson(json)));

    return accounts;
  }

  Future<void> addAccount(Account account) async {
    List<Account> accounts = await getAccounts();

    // Do not add account if ID already used
    for (Account element in accounts) {
      if (element.uuid == account.uuid) {
        throw Exception("Account with ID ${account.uuid} already in secure store.");
      }
    }

    accounts.add(account);
    String accountsValue = jsonEncode(accounts);

    await storage.write(key: "accounts", value: accountsValue);
  }

  Future<void> removeAccount(Account account) async {
    List<Account> accounts = await getAccounts();
    accounts.removeWhere((element) => element.uuid == account.uuid);
    String accountsValue = jsonEncode(accounts);

    await storage.write(key: "accounts", value: accountsValue);
  }
}
