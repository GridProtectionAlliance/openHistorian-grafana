var myApp = angular.module( "myApp", [ "angular-multi-select" ]);

myApp.controller('DemoController', ['$scope', function($scope) {
	$scope.input_data = [
		{
			"text": "A",
			"value": "a",
			"id": 1,
			"open": false,
			"checked": false
		},
		{
			"text": "B",
			"value": "b",
			"id": 2,
			"open": true,
			"children": [
				{
					"text": "C",
					"value": "c",
					"id": 3,
					"checked": true,
					"open": false
				}
			]
		},
		{
			"text": "D",
			"value": "d",
			"id": 4,
			"children": [
				{
					"text": "E",
					"value": "e",
					"id": 5,
					"open": false,
					"checked": false
				},
				{
					"text": "F",
					"value": "f",
					"id": 6,
					"checked": true,
					"open": false
				}
			],
			"open": false
		},
		{
			"text": "G",
			"value": "g",
			"id": 7,
			"children": [
				{
					"text": "H",
					"value": "h",
					"id": 8,
					"open": false,
					"checked": false
				},
				{
					"text": "I",
					"value": "i",
					"id": 9,
					"children": [
						{
							"text": "J",
							"value": "j",
							"id": 10,
							"open": false,
							"checked": false
						},
						{
							"text": "K",
							"value": "k",
							"id": 11,
							"open": false,
							"checked": false
						}
					],
					"open": false
				},
				{
					"text": "L",
					"value": "l",
					"id": 12,
					"open": false,
					"checked": false
				},
				{
					"text": "M",
					"value": "m",
					"id": 13,
					"open": false,
					"checked": false
				}
			],
			"open": false
		},
		{
			"text": "N",
			"value": "n",
			"id": 14,
			"open": true,
			"children": [
				{
					"text": "O",
					"value": "o",
					"id": 15,
					"open": false,
					"checked": false
				},
				{
					"text": "P",
					"value": "p",
					"id": 16,
					"open": true,
					"children": [
						{
							"text": "Q",
							"value": "q",
							"id": 17,
							"open": true,
							"children": [
								{
									"text": "R",
									"value": "r",
									"id": 18,
									"children": [
										{
											"text": "S",
											"value": "s",
											"id": 19,
											"checked": true,
											"open": false
										}
									],
									"open": false
								},
								{
									"text": "T",
									"value": "t",
									"id": 20,
									"open": false,
									"checked": false
								}
							]
						},
						{
							"text": "U",
							"value": "u",
							"id": 21,
							"open": false,
							"checked": false
						}
					]
				},
				{
					"text": "V",
					"value": "v",
					"id": 22,
					"open": false,
					"checked": false
				}
			]
		},
		{
			"text": "W",
			"value": "w",
			"id": 23,
			"open": false,
			"checked": false
		},
		{
			"text": "X",
			"value": "x",
			"id": 24,
			"children": [
				{
					"text": "Y",
					"value": "y",
					"id": 25,
					"checked": true,
					"open": false
				},
				{
					"text": "Z",
					"value": "z",
					"id": 26,
					"checked": true,
					"open": false
				}
			],
			"open": false
		}
	];

    $scope.output_data = [];
}]);
