<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Angular Test</title>
	<script src="bower_components/angular/angular.js"></script>
	<script src="app/app.js"></script>
	<script src="app/controllers/password.controller.js"></script>
</head>
<body ng-app="angular-test">
	<div ng-controller="passwordController">
		<input type="password" ng-model="password" ng-change="grade()">
		<p>your password is {{strength}}.</p>
	</div>
</body>
</html>