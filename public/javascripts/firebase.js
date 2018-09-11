// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxjcW_9hE-hsreuJ0h6Hw4mzz7jerhnQA",
    authDomain: "inmirror-master.firebaseapp.com",
    databaseURL: "https://inmirror-master.firebaseio.com",
    projectId: "inmirror-master",
    storageBucket: "inmirror-master.appspot.com",
    messagingSenderId: "470795147449"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // var a = firebase.database().ref('test').once('value').then(function(snapshot) {
  //   var username = snapshot.val();
  //   console.log(username);
  //   // ...
  // });
  
  // var starCountRef = firebase.database().ref('pushValue');
  // starCountRef.on('value', function(snapshot) {
  //   console.log( "Smartphone Push Message : " + snapshot.val() );
  // });

  var notification = 0;
  var fire_latitude = firebase.database().ref('latitude');
  fire_latitude.on('value', function(snapshot) {
      w.latitude = snapshot.val();
  });
  
  var fire_longitude = firebase.database().ref('longitude');
  fire_longitude.on('value', function(snapshot) {
      w.logitude = snapshot.val();
  });
  
  var fire_busStationId = firebase.database().ref('busStationId');
  fire_busStationId.on('value', function(snapshot) {
      window['myValues']['busStationId'] = snapshot.val();
  });
  
  var fire_busId = firebase.database().ref('busId');
  fire_busId.on('value', function(snapshot) {
      window['myValues']['busId'] = snapshot.val();
      bus.getBusStationData();
  });
  var fire_busStationId = firebase.database().ref('busStationId');
    fire_busStationId.on('value', function(snapshot) {
        window['myValues']['busStationId'] = snapshot.val();
        bus.getBusStationData();
    });

  var fire_notificationText = firebase.database().ref('notificationText');
  fire_notificationText.on('value', function(snapshot) {
    window['myValues']['fire_notificationText'] = snapshot.val();
    if(notification<1)notification++;
    else{
      pushMessage.create(window['myValues']['fire_notificationText'],window['myValues']['fire_notificationPackageName'],window['myValues']['fire_notificationTitle']);
    }
  });

  var fire_notificationTitle = firebase.database().ref('notificationTitle');
  fire_notificationTitle.on('value', function(snapshot) {
    window['myValues']['fire_notificationTitle'] = snapshot.val();
  });

  var fire_notificationPackageName = firebase.database().ref('notificationPackageName');
  fire_notificationPackageName.on('value', function(snapshot) {
    window['myValues']['fire_notificationPackageName'] = snapshot.val();
  });

  var fire_subwayName = firebase.database().ref('subwayName');
  fire_subwayName.on('value', function(snapshot) {
    window['myValues']['subwayName'] = snapshot.val();
    if(window['myValues']['subwayLine'])
      subway.getData(window['myValues']['subwayName'],window['myValues']['subwayLine']);
  });

  var fire_subwayLine = firebase.database().ref('subwayLine');
  fire_subwayLine.on('value', function(snapshot) {
    window['myValues']['subwayLine'] = snapshot.val();
    // if(window['myValues']['subwayLine'])
    //   subway.getData(window['myValues']['subwayName'],window['myValues']['subwayLine']);
  });
  
  var youtube_value = firebase.database().ref('uiValue/ui_youtube');
  youtube_value.on('value', function(snapshot) {
    var data = snapshot.val();
    var scale = data.scale;
    var position = data.position;
    window['youtube_scale'] = scale;
    window['youtube_position'] = position;
    addYoutubePlayer(window['youtube_scale'],window['youtube_position'],window['youtube_address']);  
  });
  
  var youtube_setting = firebase.database().ref('switch/ui_youtube');
  youtube_setting.on('value', function(snapshot) {
    if(window['youtube_scale'] == null)
      window['youtube_scale'] = 1;
    if(window['youtube_position'] == null)
      window['youtube_position'] = {x : 280, y : 157.5};
  
      window['youtube_switch'] = snapshot.val();
  
    if(window['youtube_switch'])
      addYoutubePlayer(window['youtube_scale'],window['youtube_position'],window['youtube_address']);
    else
      $('#youtube').remove();
  });
  
  var youtube_video = firebase.database().ref('youtube');
  youtube_video.on('value', function(snapshot) {
    var address = snapshot.val();
    window['youtube_address'] = address;
  
    if(window['youtube_switch'])
      addYoutubePlayer(window['youtube_scale'],window['youtube_position'],window['youtube_address']);
  });
  
  function addYoutubePlayer(scale,position,address){
    $('#youtube').remove();
    var youtube_width = Math.floor(560 * scale);
    var youtube_height = Math.floor(315 * scale);
    var youtube_x = position.y - (youtube_width - youtube_height) / 2 - youtube_height/2;
    var youtube_y = position.x - (youtube_height - youtube_width) / 2 - youtube_width/2;
    var youtube_address = address;
    $('body').append('<iframe id="youtube" style="position:absolute; left:'+ youtube_x +'px; bottom:'+ youtube_y +'px; transform: rotate(270deg);" width="'+ youtube_width +'" height="'+youtube_height+'" src="https://www.youtube.com/embed/'+ youtube_address +'?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
  }
  
  function addFirebaseEventForContainer(name){
    var path = 'switch/' + name;
    var event = firebase.database().ref(path);
    event.on('value', function(snapshot) {
        value = snapshot.val();
        window['containers'][name].setVisible(value);
    });
  
    var path = 'uiValue/' + name;
    var event = firebase.database().ref(path);
    event.on('value', function(snapshot) {
        value = snapshot.val();
        var scale = value.scale;
        window['containers'][name].setScale(scale);
        window['containers'][name].setPosition(value.position);
    });
  }