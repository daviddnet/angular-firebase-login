// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyCaVZfjxHRqdm51zHtw28ow2SPwTIsJPKA',
    authDomain: 'jdm-angular-firebase-dev.firebaseapp.com',
    databaseURL: 'https://jdm-angular-firebase-dev.firebaseio.com',
    projectId: 'jdm-angular-firebase-dev',
    storageBucket: 'jdm-angular-firebase-dev.appspot.com',
    messagingSenderId: '137121333442'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
