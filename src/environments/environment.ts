// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA0BcUcu4V8aHT_gM-32BhRcmqji4z-lts",
    authDomain: "final-project-recording.firebaseapp.com",
    databaseURL: "https://final-project-recording.firebaseio.com",
    storageBucket: "final-project-recording.appspot.com",
    messagingSenderId: "290354329688"
  }
};
