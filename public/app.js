(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBH7HoVZVUvb8tKCciWgCpzyIyqM1LHSOM",
    authDomain: "brand-mbc.firebaseapp.com",
    databaseURL: "https://brand-mbc.firebaseio.com",
    storageBucket: "brand-mbc.appspot.com",
    messagingSenderId: "309605723890"
  };
  firebase.initializeApp(config);

angular
    .module('app', ['firebase'])
    .controller('MyCtrl', function($firebaseObject){
        const rootRef = firebase.database().ref().child('angular');
        const ref = rootRef.child('object');
        this.object = $firebaseObject(ref);
    });
}());