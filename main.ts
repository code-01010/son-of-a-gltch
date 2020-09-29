scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.showLongText("well that was a glitch (a bug in the game)", DialogLayout.Bottom)
    lvl_start()
})
function lvl_start () {
    if (lvlc == 1) {
        tiles.setTilemap(tiles.createTilemap(hex`1000100003010101010101030303030303030303030101010101010300000000000000030301010101010103000000000000000303000000000000030000000000000003030000000000000300000000030000030300000000000003000000000300000303000000000000030000000003000003030000000000000300000000030000030300000000000000000000000300000303000000000000000000000003000003030303030303030300000000030000030000000000000003030303030300000300000000000000030000000000000003000000000000000302020202020202030000000000000003020202020202020300000000000000030303030303030303`, img`
            2 . . . . . . 2 2 2 2 2 2 2 2 2 
            2 . . . . . . 2 . . . . . . . 2 
            2 . . . . . . 2 . . . . . . . 2 
            2 . . . . . . 2 . . . . . . . 2 
            2 . . . . . . 2 . . . . 2 . . 2 
            2 . . . . . . 2 . . . . 2 . . 2 
            2 . . . . . . 2 . . . . 2 . . 2 
            2 . . . . . . 2 . . . . 2 . . 2 
            2 . . . . . . . . . . . 2 . . 2 
            2 . . . . . . . . . . . 2 . . 2 
            2 2 2 2 2 2 2 2 . . . . 2 . . 2 
            . . . . . . . 2 2 2 2 2 2 . . 2 
            . . . . . . . 2 . . . . . . . 2 
            . . . . . . . 2 . . . . . . . 2 
            . . . . . . . 2 . . . . . . . 2 
            . . . . . . . 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
        tiles.placeOnRandomTile(soul, myTiles.tile4)
    } else if (lvlc == 2) {
        tiles.placeOnRandomTile(soul, myTiles.tile4)
        tiles.setTilemap(tiles.createTilemap(hex`1000100001010000000000000000000002020202010100000000000000000000020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            2 2 2 2 2 2 2 2 . . 2 2 . . . . 
            . . . . . . . 2 . . 2 2 . . . . 
            . . . . . . . 2 . . 2 2 . . . . 
            . . . . . . . 2 . . 2 2 . . . . 
            . . . . . . . 2 . . 2 2 . . . . 
            . 2 2 2 . . . 2 . . 2 2 . . . . 
            2 2 2 2 2 2 2 2 . . 2 2 . . . . 
            . . . . 2 . . . . . 2 2 . . . . 
            . . . . 2 . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . 2 . . . . . 2 2 . . . . 
            . . . . 2 . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
    } else if (lvlc == 3) {
    	
    } else if (lvlc == 4) {
    	
    } else if (lvlc == 5) {
    	
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    lvlc += 1
    lvl_start()
})
let soul: Sprite = null
let lvlc = 0
lvlc = 1
game.splash("son of a glitch")
game.showLongText("hay you i have a story thats true!", DialogLayout.Bottom)
game.showLongText("did you know your comeing to life", DialogLayout.Bottom)
game.showLongText("to save the pepole of gm town", DialogLayout.Bottom)
game.showLongText("why well there is something called a giltch i comes from a game bug", DialogLayout.Bottom)
game.showLongText("so you see that big dot thats your soul that i made.", DialogLayout.Bottom)
soul = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 2 2 2 2 7 . . . . . 
    . . . . . 7 2 9 9 2 7 . . . . . 
    . . . . . 7 2 9 9 2 7 . . . . . 
    . . . . . 7 2 2 2 2 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
soul,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 . . . . . . . . . 7 . . . 
    . . 7 . 5 5 5 5 5 5 5 . 7 . . . 
    . . 7 . 5 2 2 2 2 2 5 . 7 . . . 
    . . 7 . 5 2 9 9 9 2 5 . 7 . . . 
    . . 7 . 5 2 9 9 9 2 5 . 7 . . . 
    . . 7 . 5 2 2 2 2 2 5 . 7 . . . 
    . . 7 . 5 5 5 5 5 5 5 . 7 . . . 
    . . 7 . . . . . . . . . 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 . . . . . . . . . 2 . . . 
    . . 2 . 5 5 5 5 5 5 5 . 2 . . . 
    . . 2 . 5 2 2 2 2 2 5 . 2 . . . 
    . . 2 . 5 2 9 9 9 2 5 . 2 . . . 
    . . 2 . 5 2 9 9 9 2 5 . 2 . . . 
    . . 2 . 5 2 2 2 2 2 5 . 2 . . . 
    . . 2 . 5 5 5 5 5 5 5 . 2 . . . 
    . . 2 . . . . . . . . . 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 . . . . . . . . . 7 . . . 
    . . 7 . 5 5 5 5 5 5 5 . 7 . . . 
    . . 7 . 5 2 2 2 2 2 5 . 7 . . . 
    . . 7 . 5 2 9 9 9 2 5 . 7 . . . 
    . . 7 . 5 2 9 9 9 2 5 . 7 . . . 
    . . 7 . 5 2 2 2 2 2 5 . 7 . . . 
    . . 7 . 5 5 5 5 5 5 5 . 7 . . . 
    . . 7 . . . . . . . . . 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 . . . . . . . . . 9 . . . 
    . . 9 . 5 5 5 5 5 5 5 . 9 . . . 
    . . 9 . 5 2 2 2 2 2 5 . 9 . . . 
    . . 9 . 5 2 9 9 9 2 5 . 9 . . . 
    . . 9 . 5 2 9 9 9 2 5 . 9 . . . 
    . . 9 . 5 2 2 2 2 2 5 . 9 . . . 
    . . 9 . 5 5 5 5 5 5 5 . 9 . . . 
    . . 9 . . . . . . . . . 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 . . . . . . . . . 5 . . . 
    . . 5 . 5 5 5 5 5 5 5 . 5 . . . 
    . . 5 . 5 2 2 2 2 2 5 . 5 . . . 
    . . 5 . 5 2 9 9 9 2 5 . 5 . . . 
    . . 5 . 5 2 9 9 9 2 5 . 5 . . . 
    . . 5 . 5 2 2 2 2 2 5 . 5 . . . 
    . . 5 . 5 5 5 5 5 5 5 . 5 . . . 
    . . 5 . . . . . . . . . 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile2], TileScale.Sixteen))
tiles.placeOnRandomTile(soul, myTiles.tile2)
pause(5000)
game.showLongText("cool right that is your soul but even cooler is i am going to give you a body look", DialogLayout.Bottom)
animation.stopAnimation(animation.AnimationTypes.All, soul)
animation.runImageAnimation(
soul,
[img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff......7777777...
    ..............7.....7...
    ..............7.222.7...
    ..............7.292.7...
    ..............7.222.7...
    ..............7.....7...
    ..............7777777...
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.7777777.....
    ....ffffff..7.....7.....
    .....fff....7.222.7.....
    ............7.292.7.....
    ............7.222.7.....
    ............7.....7.....
    ............7777777.....
    ........................
    ........................
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f....9........
    ...f444455f.7777777.....
    ....ffffff..7.....7.....
    .....fff....7.222.7.....
    ............7.292.7.....
    ............7.222.7.....
    ............7.....7.....
    ............7777777.....
    ........................
    ........................
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee..9.........
    ...f2222e2f....9........
    ...f444455f.7777777.....
    ....ffffff..7.....7.....
    .....fff....7.222.7.....
    ............7.292.7.....
    ............7.222.7.....
    ............7.....7.....
    ............7777777.....
    ........................
    ........................
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde..9........
    ...f222244ee..9.........
    ...f2222e2f....9........
    ...f444455f.7777777.....
    ....ffffff..7.....7.....
    .....fff....7.222.7.....
    ............7.292.7.....
    ............7.222.7.....
    ............7.....7.....
    ............7777777.....
    ........................
    ........................
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc9.........
    ..ffee44e4dde..9........
    ...f222244ee..9.........
    ...f2222e2f....9........
    ...f444455f.7777777.....
    ....ffffff..7.....7.....
    .....fff....7.222.7.....
    ............7.292.7.....
    ............7.222.7.....
    ............7.....7.....
    ............7777777.....
    ........................
    ........................
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc.9........
    .feee4dddedccc9.........
    ..ffee44e4dde..9........
    ...f222244ee..9.........
    ...f2222e2f....9........
    ...f444455f.7777777.....
    ....ffffff..7.....7.....
    .....fff....7.222.7.....
    ............7.292.7.....
    ............7.222.7.....
    ............7.....7.....
    ............7777777.....
    ........................
    ........................
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `],
500,
false
)
pause(5000)
soul.setImage(img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
game.showLongText("lets get around a maze to see if you need training ", DialogLayout.Bottom)
controller.moveSprite(soul)
tiles.setTilemap(tiles.createTilemap(hex`1000100003030000000001010000000000000000030300000000010100000000000000000101010100000101000000000000000000000001000001010000000000000000000000010000010100000000000000000000000100000101000000000000000000000001000001000000000000000000000000010000010000000000000000000000000100000100000000000000000000000101000001000000000000000000000000010000010101010000000000000000000100000202020100000000000000000001000002020201000000000000000000010000010101010000000000000000000100000100000000000000000000000001010101000000000000000000`, img`
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    2 2 2 2 . . 2 2 . . . . . . . . 
    . . 2 2 . . 2 2 . . . . . . . . 
    . . . 2 . . 2 2 2 . . . . . . . 
    . . . 2 . . 2 2 2 . . . . . . . 
    . . . 2 . . 2 . . . . . . . . . 
    . . . 2 . . 2 . . . . . . . . . 
    . . . 2 . . 2 . . . . . . . . . 
    . . 2 2 . . 2 . . . . . . . . . 
    . . . 2 . . 2 2 2 2 . . . . . . 
    . . . 2 . . . . . 2 . . . . . . 
    . . . 2 . . . . . 2 . . . . . . 
    . . . 2 . . 2 2 2 2 . . . . . . 
    . . . 2 . . 2 . . . . . . . . . 
    . . . 2 2 2 2 . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
tiles.placeOnRandomTile(soul, myTiles.tile4)
scene.cameraFollowSprite(soul)
