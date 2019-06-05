var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'box',x:100,y:200},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
       
        
        function createSawBladw(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = -5;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            myObstacle.rotationalVelocity = 5;
            myObstacle.onPlayerCollision = function() {
                console.log('The saws have hit Halle' + ' Intergraty down by 5!');
                myObstacle.fadeOut(-10, -10);
            }; myObstacle.onProjectileCollision = function() {
                console.log('Halle has hit the enemy!');
                game.increaseScore(10);
                myObstacle.fadeOut(-10, -10);
            };
        }
        
        function createEnemy1(x,y) {
            var hitZoneSize = 25;
            var damageFromEnemy = -15;
            var myEnemy = game.createObstacle(hitZoneSize,damageFromEnemy);
            myEnemy.x = x;
            myEnemy.y = y;
            game.addGameItem(myEnemy);
            var enemyImage = draw.bitmap('img/water.png');
            myEnemy.addChild(enemyImage);
            enemyImage.x = -50;
            enemyImage.y = -127;
            myEnemy.onPlayerCollision = function() {
                console.log('The water has rusted Halle' + ' Intergraty down by 15!');
                myEnemy.fadeOut(-10, -10);
            }; 
            myEnemy.onProjectileCollision = function() {
                console.log('Halle has vasperised the water!');
                game.increaseScore(15);
                myEnemy.fadeOut(-10, -10);
            };
        }
        
        function createEnemy2(x,y) {
            var hitZoneSize = 25;
            var damageFromEnemy = -10;
            var myEnemy = game.createObstacle(hitZoneSize,damageFromEnemy);
            myEnemy.x = x;
            myEnemy.y = y;
            game.addGameItem(myEnemy);
            var enemyImage = draw.bitmap('img/looters.png');
            myEnemy.addChild(enemyImage);
            enemyImage.x = -100;
            enemyImage.y = -125;
            myEnemy.onPlayerCollision = function() {
                console.log('The looter scarped some Halle' + ' Intergraty down by 10!');
                myEnemy.fadeOut(-10, -10);
            }; 
            myEnemy.onProjectileCollision = function() {
                console.log('Halle has knocked out the looter!');
                game.increaseScore(10);
                myEnemy.fadeOut(-10, -10);
            };
        }
        
        function createHealthItem(x,y) {
            var hitZoneSize = 25;
            var healthFromItem = 5;
            var myHealth = game.createObstacle(hitZoneSize,healthFromItem);
            myHealth.x = x;
            myHealth.y = y;
            game.addGameItem(myHealth);
            var healthImage = draw.bitmap('img/oil.png');
            myHealth.addChild(healthImage);
            healthImage.x = -35;
            healthImage.y = -25;
            myHealth.onPlayerCollision = function() {
                console.log('Halle has been healed!');
                myHealth.fadeOut(-10, -10);
                game.increaseScore(10);
            };
        }
        
        
         for (var i=0; i<levelData.gameItems; i++){
         createSawBladw();
         createEnemy1();
         createEnemy2();
         createHealthItem();
        }
        console.log(levelData.gameItems);
        
        createSawBladw(600, 325);
        createSawBladw(700, 250);
        createSawBladw(900, 325);
        createSawBladw(1300, 375);
        createSawBladw(1900, 250);
        createSawBladw(2400, 375);
        createSawBladw(2600, 375);
        
        createEnemy1(1500, 325);
        createEnemy2(1700, 325);
        createEnemy1(1800, 325);
        createEnemy2(2000, 325);
        createEnemy2(2400, 325);
        createEnemy1(2800, 325);
        createEnemy2(2900, 325);
        createEnemy1(3000, 325);
        createEnemy1(3300, 325);
        
        createHealthItem(1000, 300);
        createHealthItem(2200, 300);
        createHealthItem(2950, 300);
        createHealthItem(3500, 300);
        createHealthItem(4000, 300);
        
        function createEndGameCrown(x,y) {
            var hitZoneSize = 50;
            var healthFromItem = 10000;
            var myCrown = game.createObstacle(hitZoneSize,healthFromItem);
            myCrown.x = x;
            myCrown.y = y;
            game.addGameItem(myCrown);
            var crownImage = draw.bitmap('img/endGameCrown.png');
            myCrown.addChild(crownImage);
            crownImage.x = -207.5;
            crownImage.y = -275;
            myCrown.onPlayerCollision = function() {
                console.log('Halle has beeten the game!');
                myCrown.fadeOut(-10, -10);
                game.increaseScore(10000);
            };
        }
        createEndGameCrown(20000, 330);
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}