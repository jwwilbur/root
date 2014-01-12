/*
Time machine is in basement. Door to basement is locked. Worker is on 3rd floor programming, hard time getting his attention.
Worker has key to basement. Time machine travels to one future. Time machine to past. Player has to figure out time to travel
to. Must be clues somewhere to help player. Object must be taken first to future then to past, Then back to present and given
to worker, which helps worker figure something out and player wins game and lives happily ever after.
*/
var locations = [];
locations[0] = "Inventory";
locations[1] = "Room 1";
locations[2] = "Room 2";
locations[3] = "Room 3";
locations[4] = "Stairwell";
var levels =  [];
levels[0] = "Basement";
levels[1] = "First Floor";
levels[2] = "Second Floor";
var objects = [];
objects[0] = "object 1";
var worker = [];
worker[0] = "worker 1";
var direction = [];
direction[4] = "Up";
direction[5] = "Down";
/*	Start
-------------------------*/
var current_object1_location = locations[1];
var current_player_location = locations[1];
var current_player_level = levels[0];
document.getElementById('level').innerHTML = levels[1];
document.getElementById('r1').innerHTML = "P #";
document.getElementById("output1").innerHTML = "You are in " + current_player_location;
document.getElementById("output2").innerHTML = "An object is in: " + current_object1_location;
/*	Player Direction to Move
-------------------------*/
function playerDirectionMove(dir) {	
	switch ( dir ) {
		case "N":	// R1 to R2
			if ( current_player_location == locations[1] ) {
				current_player_location = locations[2]; pDMoveCommonText();
			}  else { document.getElementById("output1").innerHTML = "Can't go that way."; };		
					// S4 to R3
			if ( current_player_location == locations[4] ) {
				current_player_location = locations[3]; pDMoveCommonText();
			}  else { document.getElementById("output1").innerHTML = "Can't go that way."; };						
			break;
		case "S":	// R2 to R1
			if ( current_player_location == locations[2] ) {
				current_player_location = locations[1]; pDMoveCommonText();
			} else { document.getElementById("output1").innerHTML = "Can't go that way."; };
					// R3 to Stairwell
			if ( current_player_location == locations[3] ) {
				current_player_location = locations[4]; pDMoveCommonText();
			} else { document.getElementById("output1").innerHTML = "Can't go that way."; };		
			break;	
		case "E":	// R3 to R2
			if ( current_player_location == locations[3] ) {
				current_player_location = locations[2]; pDMoveCommonText();
			} else { document.getElementById("output1").innerHTML = "Can't go that way."; };
			break;
		case "W":	// R2 to R3
			if ( current_player_location == locations[2] ) {
				current_player_location = locations[3]; pDMoveCommonText();
			} else { document.getElementById("output1").innerHTML = "Can't go that way."; };
			break;
		case "U":	// S4 to Second Floor
			document.getElementById("output1").innerHTML = "Can't go that way, yet.";
			break;
		case "D":	// S4 to Basement
			document.getElementById("output1").innerHTML = "Can't go that way, yet.";
			break;
		default:
			document.getElementById("output1").innerHTML = "Can't go that way.";
	};
};
/*	Player Direction to Move Common Text
-------------------------*/
function pDMoveCommonText() {
	document.getElementById("output1").innerHTML = "You are in " + current_player_location;
	document.getElementById("output2").innerHTML = "The object is in: " + current_object1_location;
	playerRoomGraphic( current_player_location );
};
/*	Player Room Graphic
-------------------------*/
function playerRoomGraphic ( playerLocation ) {
	// Room 1, First Floor
	if ( playerLocation == locations[1] ) {
		if ( playerLocation == current_object1_location ) {
			document.getElementById('r1').innerHTML = "P #";
		} else { document.getElementById('r1').innerHTML = "P"; };
	} else if ( current_object1_location == locations[1] ) {  
		document.getElementById('r1').innerHTML = "R1#";
	} else { document.getElementById('r1').innerHTML = "R1" };
	// Room 2, First Floor
	if ( playerLocation == locations[2] ) {
		if ( playerLocation == current_object1_location ) {
			document.getElementById('r2').innerHTML = "P #";
		} else { document.getElementById('r2').innerHTML = "P"; };
	} else if ( current_object1_location == locations[2] ){ 
		document.getElementById('r2').innerHTML = "R2#";
	} else { document.getElementById('r2').innerHTML = "R2" };
	// Room 3, First Floor
	if ( playerLocation == locations[3] ) {
		if ( playerLocation == current_object1_location ) {
			document.getElementById('r3').innerHTML = "P #";
		} else { document.getElementById('r3').innerHTML = "P"; };
	} else if ( current_object1_location == locations[3] ){ 
		document.getElementById('r3').innerHTML = "R3#";
	} else { document.getElementById('r3').innerHTML = "R3" };
	// Stairwell, First Floor- up, down, north, take level into consideration
	if ( playerLocation == locations[4] ) {
		if ( playerLocation == current_object1_location ) {
			document.getElementById('s4').innerHTML = "P #";
		} else { document.getElementById('s4').innerHTML = "P"; };
	} else if ( current_object1_location == locations[4] ){ 
		document.getElementById('s4').innerHTML = "S4#";
	} else { document.getElementById('s4').innerHTML = "S4" };	
};
/*	Take
-------------------------*/
function take() { 
	if ( current_player_location == current_object1_location ) {
		document.getElementById("output2").innerHTML = "You pick up object 1."
		current_object1_location = locations[0];
	} else { document.getElementById("output2").innerHTML = "There is nothing here to take." };	
};
/*	Drop
-------------------------*/
function drop() { 
	if (current_object1_location == locations[0]) {
		current_object1_location = current_player_location;
		document.getElementById("output2").innerHTML = "You drop object 1.";
	} else { document.getElementById("output2").innerHTML = "You have nothing to drop!"; };
};
/*	Inventory
-------------------------*/
function inventory() { 
	if( current_object1_location == locations[0] ) {
		document.getElementById("output2").innerHTML = "You have " + objects[0] + " in your inventory."
	} else { document.getElementById("output2").innerHTML = "You have nothing in your inventory."; }; 
};
/*	Help
-------------------------*/
function help() { 
	document.getElementById("output2").innerHTML = "I, as a computer, suggest you read the help at the bottom of the game.";	
};
/*	Fight-player/enemy health
-------------------------*/
function meet() { alert("in meet"); };
