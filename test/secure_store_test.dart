import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:authenticator/api/secure_store.dart';
import 'package:authenticator/model/account.dart';

class FlutterSecureStorageMock extends FlutterSecureStorage {
  final Map<String, String> storage = {};

  @override
  Future<String?> read({required String key, IOSOptions? iOptions, AndroidOptions? aOptions, LinuxOptions? lOptions, WebOptions? webOptions, MacOsOptions? mOptions, WindowsOptions? wOptions}) async {
    String? value = storage[key];
    return value;
  }

  @override
  Future<void> write({required String key, required String? value, IOSOptions? iOptions, AndroidOptions? aOptions, LinuxOptions? lOptions, WebOptions? webOptions, MacOsOptions? mOptions, WindowsOptions? wOptions}) async {
    if (value != null) {
      storage[key] = value;
    }
  }
}

void main() {
  Account accountOne = Account(uuid: "12345");
  Account accountTwo = Account(uuid: "abcde");

  test('secure store starts empty', () async {
    SecureStore store = SecureStore(FlutterSecureStorageMock());

    List<Account> accounts = await store.getAccounts();

    expect(accounts.length, 0);
  });

  test('accounts can be added to secure store', () async {
    SecureStore store = SecureStore(FlutterSecureStorageMock());

    await store.addAccount(accountOne);
    await store.addAccount(accountTwo);

    List<Account> accounts = await store.getAccounts();

    expect(accounts.length, 2);
    expect(accounts[0].uuid, accountOne.uuid);
    expect(accounts[1].uuid, accountTwo.uuid);
  });

  test('duplicate accounts should throw an exception', () async {
    SecureStore store = SecureStore(FlutterSecureStorageMock());

    await store.addAccount(accountOne);
    expect(store.addAccount(accountOne), throwsA(isA<Exception>()));
    await store.addAccount(accountTwo);

    List<Account> accounts = await store.getAccounts();

    expect(accounts.length, 2);
  });

  test('accounts can be removed from secure store', () async {
    SecureStore store = SecureStore(FlutterSecureStorageMock());

    await store.addAccount(accountOne);
    await store.addAccount(accountTwo);

    await store.removeAccount(accountOne);

    List<Account> accounts = await store.getAccounts();

    expect(accounts.length, 1);
    expect(accounts[0].uuid, accountTwo.uuid);
  });
}
