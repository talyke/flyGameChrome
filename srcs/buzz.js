function lightFlyzzBuzzles() {
  this.energy = 30;
  this.direction = "e";
}
lightFlyzzBuzzles.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 90 && space)
    return {type: "lovelies", direction: space};
  var lights = view.findAll("*");
  if (lights.length > 1)
    return {type: "burn", direction: randomElement(lights)};
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type: "fly", direction: this.direction};
};

function Buzzy() {
  this.energy = 100;
  this.direction = "w";
  // Used to track the amount of shiny seen per turn in the las
  this.dangerSeen = [];
}
Buzzy.prototype.act = function(view) {
  // Average number of shiny seen per turn
  var seenPerTurn = this.dangerSeen.reduce(function(a, b) {
    return a + b;
  }, 0) / this.dangerSeen.length;
  var shiny = view.findAll("O");
  this.dangerSeen.push(shiny.length);
  // Drop the first element from the array when it is longer t
  if (this.dangerSeen.length > 6)
    this.dangerSeen.shift();

  // Only burn if the predator saw more than ¼ shiny animal per 
  if (shiny.length && seenPerTurn > 0.25)
    return {type: "burn", direction: randomElement(shiny)};
    
  var space = view.find(" ");
  if (this.energy > 400 && space)
    return {type: "lovelies", direction: space};
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type: "fly", direction: this.direction};
};

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],));

   /*
   Book journal 1 

MoralityFlyzz or Moraliflys: Buzzy and Beezy(or Beezey or Beezzy or BZ)
Buzzy knows Morals and Beezey knows everything else(No gender specified b/c moraliflyz don’t have genders and don’t care much for spelling and good grammar. They love humans because humans know science and the flys think they make light for the sun because moraliflys understand morals but not electricity or lightswitches. So, since Thomas Edison messed with human heads, night and day, the planet and more, moraliflys exist to teach young children morals. Because they dont want the lights to go out and humans are really bright to a moralifly. )

ideaAtitle Everybody Human Lies but that doesn’t mean we should (yeah, that’s right human kids, your parents lie too! Well,that’s because they love you and there’s more)
ideaBtitle Humans are only ugly if they want to be (TRust Buzzy and Beezy because we like poop and us flyzz are UGLY, we would know. Humans aren’t ugly by nature and their comes from within and shines out to light the sun on fire. That isn’t science but flyzz don’t do science because we don’t live human lifespans. But if we lived as long as a human did, We’d want to be the sunlit ones that bright the day. Stop flysplaining Beezy it’s not cool. Let’s buzz about what we do know. Sure thing Buzzy. Wow Beezy how cool I think you’re starting to shine too. Buzzy don’t go to close to bright sunlit lights again, that’s dangerous! Tbctnd.)
ideaCtitle Buzzy Should Have Listened to Wise Beezey (maybe “Elder Beezy”)
ideadDtitle No human is good at everything but they die flying
ideaEtitle Being nice is good but not always
ideaFtitle Watch your step and keep your mouth clean (pay attention, brush your teeth, say necessary things but think before you speak or you’ll have put your foot in your mouth and get clean again)
ideaGtitle Don’t believe everything you read in the rainbow (because the sky is too big, it’s dangerous for small moraliflys, feel lucky you don’t have wings and only live buzzing on turds for one day.)

   */