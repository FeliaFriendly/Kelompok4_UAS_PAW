<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Lavue</title>
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
  </head>
  <body style="background-image: url('/images/bg.jpg');">
    <div id="app">
      <app></app>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>
