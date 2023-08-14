# Visit Card :
##  

### Presentation :

This web application is a business card manager,
the user creates an account by filling out a form and create his own business card
the main page displays other users' business cards.

### Technologies used :

- use of `express` to manage the server
- authentication with `jwt`
- the database is managed by `mongodb`
- the front is managed by `html` and `css` and `javascript` and `pug`
- cookies for authentication are managed by `cookie-parser`

### Test !!:

1. Project recovery:
to recover the project execute the following command:
```bash
git clone https://github.com/tayeb-hadjou/Visit-card

```
2. installation / launch of the server:
to install the server, place yourself in the `Visit-card` folder and execute the following commands:
```bash
npm install #installation
mkdir dbData && mongod --dbpath /dbData #launch the mongoBD server
npm run start #server launch
```
3. client launch:
retrieve the server post IP address and port and launch this url in two browsers: `http: <server IP address>: <port> /`.

4. start the application:
the first page is the `login` one,
to register click on the `register` link and fill out the form
in order you arrive in `login` page, login with your credentials
you arrive in the user page where you find your card and see other users' business cards

### dependencies :

- `node` is used to manage the server.
- `bcrypt` is used to encrypt the password.
- `cookie-parser` is used to manage cookies.
- `debug` is used to debug the application.
- `express` is used to manage the server.
- `jsonwebtoken` is used to manage authentication.
- `mongoose` is used to manage the database.
-`pug` is used to manage the front.
- `text-encoder` is used to manage the password.