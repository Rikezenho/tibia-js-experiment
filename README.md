# Tibia JS Experiment

A funny experiment recreating Tibia with JavaScript and React.

## Demo

Use WASD keys to move character.

![](ss.png)

https://tibia-js.netlify.com

## Toggle debug mode

With debug mode, you can see more messages and console information, and even view SQM information (x, y and z axis) when hovering mouse through the map.

Simply execute on your DevTools console:
```
utils.toggleDebugMode();
```

## Roadmap

- [x] Walkable player (with CSS animation!)
- [x] CSS field animation
- [x] Name and life bars
- [x] Map system with z-index
- [x] Tibia things as components (with styled-components too!)
- [x] More ground tiles
- [x] Water tiles
- [x] Animated water tiles
- [x] Tile border system
- [x] Tile "randomizer" (e.g.: for more than one sprite for grass)
- [ ] Buildings
- [x] Not walkable SQMs
- [x] Field damage when walk into it
- [x] Game messages on screen
- [ ] Game HUD
- [ ] More field types
- [ ] First monster with basic AI
- [ ] Monster attacking player
- [ ] Attacking monsters
- [ ] Store items in backpack
- [ ] Use items
- [ ] Looting system
- [ ] Basic map editor
- [ ] Dying system
- [ ] Spells
- [ ] Chat
- [ ] Socket connection (for more than one player)
- [ ] Light system
- [ ] Map following character system
- [ ] Scripting system
- [ ] Leveling system
- [ ] Skills upgrade system
- [x] Walking speed depending on which SQM the character is going
- [ ] On screen HUD for character information