extendContent(GenericCrafter, "lava-extractor", {
	draw(tile){
		Draw.rect(this.region, tile.drawx(), tile.drawy());
		
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.color(this.outputLiquid.liquid.color);
		Draw.alpha(tile.entity.liquids.get(this.outputLiquid.liquid) / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
    generateIcons(){
        return [
            Core.atlas.find(this.name),
            Core.atlas.find(this.name + "-bottom"),
            Core.atlas.find(this.name + "-top")
        ];
    }
});