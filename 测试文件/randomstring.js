let that = this
if(this.markFile != data.properties.id){
  var endIcon =  new AMap.Icon({
	  size: new AMap.Size(24,24),
	  image: this.industry,
	  imageSize: new AMap.Size(24, 24),
	  // imageOffset: new AMap.Pixel(-95, -3)
  })
  markerIocn = new AMap.Marker({
	map:map,
	position:data.geometry.coordinates,
	icon:endIcon,
	clickable:true,
	extData:data.properties.id
  })
  this.markerIocns.push(markerIocn)
  markerIocn.content = `<div class="info">${data.properties.name}</div>`
  markerIocn.on('click', positionResult => {
	let deg  = positionResult.target.getPosition()
	let content = positionResult.target.content
	IconsName = positionResult.target.getIcon().Ce.image
	positionResult.target.hide()
	map.setCenter(deg); 
	if(bigIcons != undefined){
		bigIcons.show()
		bigIcons = undefined
	}
	if (bigIcon) {
		// 删除点标记
		bigIcon.setMap(null);
		bigIcon = null;
	}
	var icons = new AMap.Icon({
		size: new AMap.Size(50,56),
		image:IconsName,
		imageSize: new AMap.Size(50,56),
	})
	bigIcon = new AMap.Marker({
		map:map,
		position:deg,
		icon:icons,
		zIndex:150
	})
	bigIcon.setLabel({
		offset: new AMap.Pixel(0,0),  //设置文本标注偏移量,第一位左右偏移量，第二位为上下偏移量
		content:content, //设置文本标注内容
		direction: 'bottom' //设置文本标注方位
	})
	bigIcon.setMap(map);
	bigIcons = positionResult.target
	let id = positionResult.target.getExtData()
	this.markFile = id
	that.child = id
  })
  }