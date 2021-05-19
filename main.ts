controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . 5 2 2 2 5 5 . . . . . . 
        . . . 5 5 2 2 2 2 2 5 . . . . . 
        . . . 5 2 2 2 2 2 2 5 5 . . . . 
        . . . 5 2 2 2 2 2 2 2 5 . . . . 
        . . . 5 2 2 2 2 2 2 2 5 . . . . 
        . . . . 5 2 2 2 2 2 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 50, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    mySprite.setPosition(32, 35)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setTilemap(tilemap`level4`)
    mySprite.setPosition(53, 50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.over(false, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(10000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
    mySprite.destroy()
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . 5 . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . 5 8 4 4 4 8 5 . . . . . 
        . . . 8 8 5 f f f 5 8 8 . . . . 
        . . . 8 8 4 . . . 4 8 8 . . . . 
        . . . 2 2 4 . . . 4 2 2 . . . . 
        . . . 2 5 . . . . . 2 5 . . . . 
        . 5 . . . . . . . . . . . . . . 
        . . . 4 . . . . . . . . . . . . 
        . . . . . . . 2 . . 5 . 5 2 . . 
        . . . . 2 . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite2.setPosition(32, 35)
    scene.cameraFollowSprite(mySprite2)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . b . . . b . . . . . . 
    . . . . . . f c f . . . . . . . 
    . . . . b . c c c . b . . . . . 
    . . . . . b f f f b . . . . . . 
    . . . . . c . . . c . . . . . . 
    . . . . . b . . . b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
