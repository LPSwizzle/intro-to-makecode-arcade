controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say(randint(100, 600))
})
let mySprite: Sprite = null
scene.setBackgroundColor(4)
game.splash("LPSwizzle")
mySprite = sprites.create(img`
    . . . 3 3 e e e e e e e e e e e 
    . . . 3 4 4 4 4 4 4 e e e e e e 
    . . 3 3 3 3 4 4 3 3 4 4 e e e e 
    . . 3 1 f f 4 3 3 3 3 4 e e e e 
    . . 3 1 f f 4 3 1 f f 4 4 4 3 e 
    . . 3 1 1 1 4 3 1 f f 4 4 3 3 e 
    . . 3 1 1 1 4 3 1 1 1 4 4 3 3 e 
    . . 3 3 3 3 4 3 1 1 4 4 4 4 3 3 
    . . 3 4 4 4 4 3 3 3 4 4 4 4 4 3 
    . 3 3 4 4 4 4 4 4 4 4 4 4 4 4 3 
    . 3 4 4 4 4 4 4 4 4 4 4 4 3 3 3 
    . 3 4 4 4 4 4 4 4 4 4 4 3 3 3 . 
    . 3 4 3 3 3 3 4 4 4 4 4 3 . . . 
    . 3 3 3 3 3 4 4 4 4 4 3 3 . . . 
    . . . . . 3 3 3 3 4 4 3 . . . . 
    . . . . . . . . 3 4 4 3 . . . . 
    `, SpriteKind.Player)
