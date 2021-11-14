# Authenticator

An authenticator app is an application that acts as a secondary device to verify your identity when logging in to account-based platforms as another level of security. 2-factor authenticator apps utilize another device as an additional key to unlock accounts. An open-source authenticator app with additional quality-of-life features that easily integrates into existing applications and offers similar/better levels of security and convenience as paid alternatives.

## Tools

* React Native: Application development software
* Javascript: Programming Language (to be used in conjunction with React Native)
* Expo: Demoing platform
* MongoDB Realm React: Database storage and cloud sync platform

## Goals

- [ ] Complete secret-key scanning and secure storage functionality
- [ ] Develop thorough, secure, accurate, and approachable documentation
- [ ] Design a working, easy-to-navigate front-end interface
- [ ] Implement secure backup-key generation
- [ ] Add powerful and extensible application customization
	- [ ] Layout
	- [ ] Color
	- [ ] App order
	- [ ] App sorting
	- [ ] App icon

## Specifications

### Proposed Functionality

The authenticator app should have a number of features by its completion. First, is a fully functional, accessible user interface displaying a list of registered authenticator applications. The user interface must show all authenticator applications, with the option to change the order/layout of the screen from a simple list to a grid at any point. Those changes must persist after closing the app. A settings panel must be easy to reach and very customizable. Color, style, and layout must all have settings options to best fit the user's preferred visual style. Favorited authenticator apps must be included.

An essential component is code authentication from the application: the application will generate codes for an application when the client for the application requests one for the user to enter. The code must be copied with one tap, and easily accessed from any view/setting. The additional method of requesting an in-app notification should be implemented but is not necessary for this app to function. The secret keys for each authentication app must be stored within a local Realm React Database and encrypted using a modern, secure hash and salt, and any other modern security features deemed necessary to maintain the security of all application logins.

**A secure list of backup keys must be generated on the off-chance that something goes awry with a user's phone, has to switch devices, etc.**

### Additional Features 

* HOTP implementation
* Support for physical token authentication (Yubikey, etc.)
* Bluetooth → phone connection authentication
* NFC authentication + backup-key storage
* Customizable icons + images for application lists
* Backup Key Cloud Backups

## Resources

* https://datatracker.ietf.org/doc/html/rfc4226
* https://datatracker.ietf.org/doc/html/rfc6238
* https://github.com/jaredhanson/passport-totp (temporary testing alternative)
* https://pusher.com/tutorials/persisting-data-react-native/
* https://reactnative.dev/
* https://docs.mongodb.com/realm/

## Contact
Emil Kovacev Junior Computer Science BS – University at Buffalo
