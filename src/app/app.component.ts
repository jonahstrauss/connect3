import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  range = function(n) {
	return new Array(n);
  }
  size = 4
  abs = function(v) {
	  if (v > 0) {
		  return v
	  } else {
		  return -v
	  }
  }
  board = null
  getBoard = function(){
	  if(!this.board){
		  this.board = this.range(this.size)
		  for(var i = 0; i < this.size; i++){
			  this.board[i] = this.range(this.size)
		  }
	  }
	  return this.board
  }
  select(c, r){
	  if(!this.board[c][r]){
		this.board[c][r] = this.whosTurn
		this.togglePlayer()
		this.turn++
	  }
  }
  togglePlayer() {
	  this.whosTurn = this.whosTurn == 'brown' ? 'purple' : 'brown'
  }
  a = this.togglePlayer()
}
