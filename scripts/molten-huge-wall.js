health = 8400;
const repair = (health * 6) / 100;
const timer = 240;
const largeReWall = extendContent(Wall, "molten-huge-wall", {
	update(tile) {
		if (tile.entity.health() < tile.entity.maxHealth() & tile.entity.timer.get(0, timer)) {
			tile.entity.healBy(repair);
			Effects.effect(Fx.healBlockFull, Tmp.c1.set(Color.valueOf("fd8b26")), tile.drawx(), tile.drawy(), tile.block().size);
		}
	}
});