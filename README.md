Cozy Winter Quiz-
The winter Quiz game is basically a Winding down christmas themed game , built around a warm theme for relaxing users. 
User collects stars whith each succesfull round where they get a trophee for it to be collected on their digital shelf , and the website has a to do list to do for christmas in winter, like suggestion for a eventful winter
Design mvp of the website(figma design)-https://www.figma.com/design/E9bPZPjm2DzDflrh9YnwLf/Cozy-Winter-Quyz?m=auto&t=QSDGJu22WzIMtqMK-6


04:28PM,27 October 2026
Goal- Setting up coding tools , creating the foundational framework for my winter quiz website.
Accomplishments- 1. Downloaded Vs cODE
                 2. Plugged in Hackatime  by powershell
                 3.Organized Project files - as I creared winter-quiz folder on my dektop
                 4. Wrote my first structural Elements- Drafting the intial head structural tags  tittle I learned from youtube videonamed- learn Html in 12minutes.
                 5. Resolved a file system error -where there was issue with this journal file which was genr=erated as coding folder so  I created plain text document mentioning .txt particularly
Coding terms learned today-
1. tags- fundamental strcutual components
Ai help with - Guidance on how to plugin hackatime 

10:50 PM ,27 oCT 2026
goal- How to bring background of the website
Accomplishments-
Understood what Emmet means- through the yt channel cozy olive studios. i understood that emmet is the basic framework need for every website 
rel stands for relationship and that its an attribute , as well as type and href which stands for hypertext reference - its the pathway adress that tells computer where to find ur image file. on the other hand type  is an attribute which tells brouser what format the file it is. 
I used CDN fonts for fonts
I understood what a comment tag means - <!--x--!>, - its a comment for the deceloper to keep a note of.
title is used as a label , so if i want to change the colour of text i can directly name the elemnt an dhcnage its colour.
Mistake (ai help in identfying the mistake)
 - writing the colons in headings confuses the browser<h1: 
 
 03 pm ,28oct 2026

 Accomplishments-
 -understood that <main class ="maib"> is used for holding everything on page so later it can easily centre the quiz in middle with on command
 class is like alabel or variable .
 -  <a href="#" class="logo">Quiz.</a> | The Welcome Sign: The <a> tag creates a clickable link. it is used to create main title logo of the website
 - heavy jav scripts enginges are to be put int he end so that website won't be frozen or blank.
 - Learnt that for websites to be uniform in different screen size u can't use <h1>tag but have to use <main> and <header> for keeping it organised.
- na.navbar is an emmet  shortcut for navgation block.
  nav is a  Tag used for holding navigation tools nav.navbar itself is not an attribute. It is a text abbreviation.
  <nav class="navbar"></nav>, the word class is the attribute, and navbar is its value.also that 
   web developers used the # symbol as a bookmark tool, officially called a fragment identifier
 sources-
 - codehal - how to make quiz website using html css for understanding what needs to be used and why .
.-mistake- My image link was written before the naviagtion texts.
-note- whenever there is a white dot beside ur index.html it means its unsaved. to solve that bug u need to-> ctrl+S on code editor and refresh the microsoft edge

10 pm -1am,28oct 2026
GOAL-to learn about selectors
source- css for beginners (girlcode yt)
notes- Every single line in style.css has the same pattern 
selector{property:value;}
 Simple selectors 
 class selectors(reusable) - start with .
 id delectors(non reusable) - start with #
 grouping selectors
 universal selector
Accomplishments-
understood that files cant read stylesheets unless they end in .css- missing the extension breaks the connection between files and causes -ERR_FILE_NOT_FOUND error in broswer.(took my Ip teacher's help to solve the bug)
The Bug- My website text stayed pain white and the developer console spit out a ERR_FILE_NOT_FOUND errorin browser console
what i learnt about file names and typo- computers are specigic , my stylesheet file was name style.css.css due to which the website showed error and a single missing letter could break the whole website  without that the browser refused to conneect css to html.
my developer tools- I learned how to open the Devloper console to read error messages directly from the browser.
 
12:30PM , 29 Oct 2026

accomplishments-
what is semantic tag? - acts as a label
1.section tag
2.footer tag
3. Nav tag createslinks to either different web page or different section.
4. <a>(within a nav tag)- to specify the location of what we want to link using href attribrtue
(for linking external sites i need to use -url).
My gane website is spa (single page application)
<a target="_blank'>instagram</a> allows user to open that page on anothr and tab and not exit ur page.

types of Attributes -
1.src - for img
2.controls- for video and audio tags or they wont be able to play
3.autoplay
4.loop-allows audio to play over and over
5.muted-
6.<form>-where user can type or select information
7.<button>
8.<placeholder>- to give user a hint inside a box
9.<label>- title for form
10.<for> (withing label tag)
11.<action>
11.<method>- two methods- get or post

how did i apply the video to website -
i had to use z-index in css which is like the layers for each elemnt, so in order to see the headigns over the video i needed to set it to -1.
position :ffixed; glues the video to the screen 
Preventing Aspect Ratio Distortion: When creating full-screen video or image backgrounds, we use min-width: 100% and width: auto combined with object-fit: cover instead of a hardcoded width: 100%. This ensures the media covers the entire display without stretching, squishing, or losing its natural ratio.
object-fit:cover; this is how much the video should take space in the screen , i wanted it to cover the whole page so i used cover .
user inputs for<form> -
1. type="text"- text box for user to type anything
2.type"radio" - options in which user can only choose one option.
3. type="submit" +<button>- to submit a form



Bug encountered- even though i wrote auto play and loop in my code, the video was frozen as image on broswer.
the cause- modern broswers like edge which i was using  have security protocols to protect users from unprompted media.so if video attempts to autoplayw ithout being muted the browser pauses
the solution- i changed my html to include muted attribute  alongside autoplay and loop
 AI itergration - I used ai as a debugger  to understand why my video was frozen. and i broke down the mechanism suggested by the yt video by ai to understand what was used and why it was used.

 5pm,29 Oct 2026 "Luck follows to people who refuse to quit"
 GOAL- understand video and text alignment
  what is flexbox?- flexbox helpswitht the alignment for my elemnts. and the 
  <body>sergesmas canvas for css.
-3 UNITS USED- 
1. px(pixels)-used for textborders or buttons
2.vh and vw(viewpoint height/width)-used only for background boxes
3.rem

-nEW TERMS-
-margin is forecs others elemnts outside like margin-top 
-padding iis space inside an elemnt , to increase a button size  or make text appear bolder.

bug encountered-Because the text is long it is rwrapping tighly inside a narrow coloumn.
it was being aproblem to align the texts in centre.
solution- justify-content:center; fixed it .
Note- when u are using flexbox(display;flex;)-everything depends on flex direction
-align-items: center; - move elements horizontally to centre
-justify-content:center;-moves elemnts vertically 

Accomplishment-
alternative for flexbox is cssgrid which can be used by display:grid, as it has fewerlines of code
.container{
  display;grid;
  place-items: center; - command for centering horizontally and vertically
}
bug encountered- the video was zoomed no matter what i tried to zoom it out .
solution- I screenrecorded the video and replaced the previous video with it.

9am , 30 Oct 2026
GOAL- change the text format and make the home page look more like the ui design in mind for the web page
bugs encountered-
1.BUG-while aligning texts in right and left side the color was showing black instead of white for the text 
the reason-When a semicolon is missing, CSS gets confused and treats the next property as part of the previous one. This broke your transform and color properties, preventing them from doing their jobs.
2.BUG-initially all texts in html were mixed together in welcome container, because of which it was alignign proeprly.
the fix- To group the texts according to their side inside.
 seperate div , the browser perflectly algined them according to the codes
 notes-
 transform:translateY (-100) pulls the elemnt up by its entire height 
 and positive value is this are to push the element down the screen.
  
  11pm 31st oct 2026-
  marging-top -pushes the text down just a little bit more (px)
  negative-
  positive-
  any min height and width effect on it-
  achhievement- Was able to excute and fix design and text-alignment problems on my own:>
              -4hrs 15mins of coding done today!

1st nov 2pm, 2026
GOAL- create button 
#notes 
you use <a> anchor tag  whenevr u want o create a clicabkle link.

To remove the underline  of a link you use - text-decoration:none

1st nov 2026, 9pm-
goal- create quiz.html
for linking js we use <script>tag with src  in body.

5th nov,3PM using java sceipt to input the game questioons in an array.
accomplishments-
what is a <span> ? its an html tag it isolates a number from the sentence around it . it doesnt create a new line or spacing likr<P> or <div>
what is innertext?-  javascript property used to change text inside html tag snd overwrite it with  a new string.

#notes-
css has a inbuilt background img property  unlike for bg video, so i odnt have to write a code in html for it.

bug encountered-
without  using has() after body for background image in quiz.html the image wasn't displaying 


6nov 11pm
bug encountered- using margin left with flex box was ruining the design for backlink css.



shuffleQuestion is a custome js function 
• score = 0:  acts as A storage bucket to hold the player's total points.
• unction (Keyword)
	• What it means: "Hey computer, I am about to teach you a new custom recipe."
• shuffleQuestions (Custom Name)
	• What it means: The unique name tag you gave to this specific recipe so you can call it later.
  • { (Opening Curly Bracket)
	• What it means: "Start of the recipe instructions." Everything inside the matching closing bracket } belongs to this function.


9nov 2026
GOAL-  data modellin/to complete the main game architecture on java script
what i learnt:const- locks the variable forever it can never change
let- tells computer that specific value will flucutate like what we used for score
when ur setting a code for making a random string appear on screen from collection of arrays, its impossible for getting a greater nu. than the nu.s of index because math  random can never reach 1 , and if we multiply it to the array.length for eg 4 , so it will never get 4 as a random number ensuring only index avaible in the list appears.
innertext- is to choose what specific elemnt do u want to display from the object.
using userselction - facilitates for any data dropped by the user to be holded .
bug encountered in visuals: when clciking the true/false buttons, the quiz box container (q-box) refused to flash green or red, even tho colsole showed no errors
root cause:- since i used linear gradient for q box  , in css its technicallly considered as bg image and not color , so
fix- i change it froms style.background color to only style.background.


bug encountered- while creating the snowflakes behind the question box in css to save time , it kept on hindering button's functions.
bug encountered- the image of star wasn't getting minimised
fix- used display:block; which treats image like a solid building block instead of plain text.
 ---------------------------------------------------------------------------------THANK YOU---------------------------------------------------------------------------------------------------------------------
                                                          SNOWGLOBE FOR GIVING ME THIS OPPORTUNITY SINCE THIS WAS MY FIRST GAME
