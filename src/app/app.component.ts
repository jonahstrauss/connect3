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
	  }
  }
  whosTurn = undefined
  togglePlayer() {
	  this.whosTurn = this.whosTurn == 'brown' ? 'purple' : 'brown'
  }
  a = this.togglePlayer()
  winnerDirection(r,c,player,orientation,remaining){
	  if(player && this.board[r][c] == player){
		  if(remaining > 0){
			  let newR = orientation == 'horizontal' ? r : r + 1
			  let newC = orientation == 'vertical' ? c : c + (orientation == 'diagonalUp' ? -1 : 1)
			  return this.winnerDirection(newR, newC, player, orientation, remaining - 1)
		  } else {
			  return true
		  }
	  } else {
		  return false
	  }
  }
  winner() {
	  for(var r = 0; r < this.size; r++){
		  for(var c = 0; c < this.size; c++) {
			  let player = this.board[r][c]
			  if(this.winnerOrientation(r,c,player,'horizontal') return player
			  if(this.winnerOrientation(r,c,player,'vertical') return player
			  if(this.winnerOrientation(r,c,player, 'diagonal') return player
			  if(this.winnerOrientation(r,c,player, 'diagonalUp') return player
		  }			  
	  }
	  return 'No winner yet.';
  }
  winnerOrientation(r,c,player,orientation){
	  return this.winnerDirection(r,c,player, orientation, this.size - 2)
  }
  
}
