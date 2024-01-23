# Checkers
This is a readme file

Issues
Some issues with connection prevent full project upload. 
Even before I started, I saw some things that were of concern, that had affected my earlier QC teams.  
Whom ever did the coding for the checkers game, didn’t include identifiers/selectors throughout.  
From table, row, and column identifiers, to selectors for each individual checker.  
When building a web app, and wanting to use any sort of automated testing, it is a best practice to include ID’s & selectors.  

There can be naming conventions to make it easier for the dev team, but the increase in development speed by ignoring/neglecting use of selectors is more than lost when a QC team member spends hours trying to find a way to select an object, or run a confirmation that an unnamed object is within an unnamed row or column. 
The fact that even the div rows were unnamed posed further challenges.

Even when using record to view each step, the lack of selectors prevented success in replay after the first action.
Trying to run a verification process, that the system had made it’s move proved especially challenging. 
The src varied from me1 to me2 and me3 but wasn’t contained within the cell.  So having a “Should Contain” didn’t work.

Instead of confirming the games token was on moved on the board, verification was confirming the message was updated after moves, including the double jump. 
This wasn’t a perfect choice, but it does confirm that action and result did occur.

=======================================================================
Notes writen during development of the Cypress Automation Testing 
First step
Select  src=”you1.gif” name=space02”   - becomes “you2.gif” name=”space02”
Click from space02 to space 24
	Img src changes to “https://www.gamesforthebrain.com/game/checkers/gray.gif”
Second – confirm game moved
Prior to next move, confirm that game moved img src=”me1.gif” moved into next row
Div class=”line” above img src=”me1.gif” name=”space15” becomes 
	Img src=https://www.gamesforthebrain.com/game/chekcers/gray.gif” name=”space15”
	To next row  img src=”https.gamesforthebrain.com/checkers/me2.gif” name=”space24” oneclick=”didClick(2,4)”
Third – move another 
click space 11 changes from you1 to you2
img src=”you2.gif” name=”space11” oneclick=didClick(1,1)
no way found to select or register the you2 or me2 source using Cypress- will have to hunt further.
