/*
 * @Author: your name
 * @Date: 2021-01-25 14:56:36
 * @LastEditTime: 2021-01-26 17:44:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常用代码\求顶上点.js
 */
let vertex = ComputeLPt(pts[0], middle, Math.tan(Math.PI / 5) * L01 / 2)  // L01为半径  pts[0] 为第一个确定的点
function ComputeLPt(pt1,pt2, dis)
{//ma add;
	return ComputeLRPt(pt1, pt2, dis)[0];
}

// 对三边重新排序  ,计算三边的长度
BezierCtrPointFs=(pointFs)=>{
	let D01 = this.radius(pointFs[0], pointFs[1]);  
	let D02 =  this.radius(pointFs[0], pointFs[2]);
	let D12 =  this.radius(pointFs[1], pointFs[2]);
	let points = []
	// 对坐标点重新排序
	if (D01 > D02 && D01 > D12){
		if (this.JudgePointPos(pointFs[2], pointFs[0], pointFs[1]) <= 0)
		{
			// points.append(pointFs);
			points = pointFs.concat()
		}
		else
		{
			points.push(pointFs[1]);
			points.push(pointFs[0]);
			points.push(pointFs[2]);
		}
	}else if(D02 > D12 && D02 > D01){
		if (this.JudgePointPos(pointFs[1], pointFs[0], pointFs[2]) <= 0){
			points.push(pointFs[0]);
			points.push(pointFs[2]);
			points.push(pointFs[1]);
		}
		else
		{
			points.push(pointFs[2]);
			points.push(pointFs[0]);
			points.push(pointFs[1]);
		}
	}else{
		if (this.JudgePointPos(pointFs[0], pointFs[1], pointFs[2]) <= 0)
		{
			points.push(pointFs[1]);
			points.push(pointFs[2]);
			points.push(pointFs[0]);
		}
		else
		{
			points.push(pointFs[2]);
			points.push(pointFs[1]);
			points.push(pointFs[0]);
		}
	}
	// 计算贝塞尔控制点
		//求排序后的三角形的三边长度
	let L01 = this.radius(points[0], points[1]);
	let L02 = this.radius(points[0], points[2]);
	let L12 = this.radius(points[1], points[2]);
	//求排序后的三个角的角度
	let angle0 = this.GetIntersectingAngle(points[0], points[1], points[2]);
	let angle1 = this.GetIntersectingAngle(points[1], points[0], points[2]);
	let angle2 = this.GetIntersectingAngle(points[2], points[1], points[0]);
	let middle = this.Mid((points[0].x + points[1].x )/ 2, (points[0].y + points[1].y) / 2);

	let MD = this.radius(points[2], middle);
	//计算贝塞尔控制点            
	let p1 = this.ComputeLeftPoint(points[0], points[1], L02 / 3);
	let p9 = this.ComputeRightPoint(points[0], points[1], L01 / 4);

	// let p19_0 = PointRotate(p1, points[0], (90 - angle0 / 2));
	// let p19_1 = PointRotate(p9, points[0], (90 - angle0 / 2));

	let p2 = this.ComputeRightPoint(points[2], points[0], L02 / 3);
	let p3 = this.ComputeLeftPoint(points[2], points[0], L12 / 3);

	// let p23_0 = PointRotate(p2, points[2], (90 - angle2 / 2));
	// let p23_1 = PointRotate(p3, points[2], (90 - angle2 / 2));
	let p4 = this.ComputeRightPoint(points[1], points[2], L12 / 3);
	let p5 = this.ComputeLeftPoint(points[1], points[2], L01 / 4);

	// let p45_0 = PointRotate(p4, points[1], (90 - angle1 / 2));
	// let p45_1 = PointRotate(p5, points[1], (90 - angle1 / 2));
	let B7 = this.ComputeLeftPoint(middle, points[2], MD / 10);
	let p = this.ComputeLeftPoint(middle, points[0], L01 / 6);
	let offsetX = B7.x - middle.x;
	let offsetY = B7.y - middle.y;
	let B6 = this.Mid(p[0].x + offsetX, p[0].y + offsetY);
	let B8 = this.Mid(p[1].x + offsetX, p[1].y + offsetY);

	let  pBezier = [];
	pBezier.push(B7);
	pBezier.push(B8);
	pBezier.push(p1);
	pBezier.push(points[0]);
	pBezier.push(p9);
	pBezier.push(p2);
	pBezier.push(points[2]);
	pBezier.push(p3);
	pBezier.push(p4);
	pBezier.push(points[1]);
	pBezier.push(p5);
	pBezier.push(B6);
	pBezier.push(B7);
	return pBezier;
}

// 左控制点
ComputeLeftPoint=(pt1,pt2,length) =>
{//ma change;置换x ,y 值 ;
	let point = {};
	let p1x, p1y, p2x, p2y;

	if (this.EqualFuzzy(pt1.y, pt2.y))
	{
		p1x = pt1.y;
		p1y = pt1.x - length;
		p2x = pt1.y;
		p2y = pt1.x + length;
	}
	else
	{
		let k = (pt1.x - pt2.x) / (pt1.y - pt2.y);
		p1x = Math.sqrt(length * length / (k * k + 1)) + pt1.y;
		p1y = pt1.x + k * (p1x - pt1.y);
		p2x = - Math.sqrt(length * length / (k * k + 1)) + pt1.y;
		p2y = pt1.x + k * (p2x - pt1.y);
	}
	if (((p1x - pt2.y) * (p1x - pt2.y) + (p1y - pt2.x) * (p1y - pt2.x)) < ((p2x - pt2.y) * (p2x - pt2.y) + (p2y - pt2.x) * (p2y - pt2.x)))
	{
		point = {x:p2y,y:p2x} 
	}
	else
	{
		point = {x:p1y,y:p1x}
	}
	return point;
}

// 右控制点
ComputeRightPoint=(p1,p2,length)=>
{//ma change置换x ,y 值;
	let point;
	let p1x, p1y, p2x, p2y;
	
	if (this.EqualFuzzy(p1.y, p2.y))
	{
		p1x = p1.y;
		p1y = p1.x + length;
		p2x = p1.y;
		p2y = p1.x - length;
	}
	else
	{
		let k = (p1.x - p2.x) / (p1.y - p2.y);
		p1x = Math.sqrt(length * length / (k * k + 1)) + p1.y;
		p1y = p1.x + k * (p1x - p1.y);
		p2x = -Math.sqrt(length * length / (k * k + 1)) + p1.y;
		p2y = p1.x + k * (p2x - p1.y);
	}
	if (((p1x - p2.y) * (p1x - p2.y) + (p1y - p2.x) * (p1y - p2.x)) < ((p2x - p2.y) * (p2x - p2.y) + (p2y - p2.x) * (p2y - p2.x)))
	{
		point = {x:p1y,y:p1x};
	}
	else
	{
		point = {x:p2y,y:p2x};
	}
	return point;
}

JudgePointPos=(p,p1,p2)=>{
	let f = (p2.y - p1.y) * (p.x - p1.x) - (p2.x - p1.x) * (p.y - p1.y);
	return f;
}	
// 计算角度
GetIntersectingAngle=(ptAnchor,ptOld,ptNew)=>{
	if ((this.EqualFuzzy(ptAnchor.x, ptOld.x) && this.EqualFuzzy(ptAnchor.y, ptOld.y))
	|| (this.EqualFuzzy(ptNew.x, ptAnchor.x) && this.EqualFuzzy(ptNew.y, ptAnchor.y))
	|| (this.EqualFuzzy(ptOld.x, ptNew.x) && this.EqualFuzzy(ptOld.y, ptNew.y)))
	return 0;

	let xAB = ptOld.x - ptAnchor.x;
	let yAB = ptOld.y - ptAnchor.y;
	let xAC = ptNew.x - ptAnchor.x;
	let yAC = ptNew.y - ptAnchor.y;
	let dAB = Math.sqrt(xAB * xAB + yAB * yAB);
	let dAC = Math.sqrt(xAC * xAC + yAC * yAC);
	let cos1 = (xAB * xAC + yAB * yAC) / (dAB * dAC);
	if (cos1 > 1) cos1 = 1;
	if (cos1 < -1) cos1 = -1;
	let A = 180 / Math.PI * Math.acos(cos1);
	//-------------------1104添加
	if ((xAB * xAB + yAB * yAB) * (xAC * xAC + yAC * yAC) < 0)
	{
		return 360 - A;
	}
	//-------------------1104添加

	return A;
}
EqualFuzzy=(x,y)=>{
	if(x === y){
		return true
	}else{
		return false
	}
}

ComputeBeizerPts(cpt)
{////ma;
	//section /= TheFlag ;
	let cptSize = cpt.length;

	let  bzPoints = [];
	if (cptSize <= 0)
		return bzPoints;

	let a0, a1, a2, a3, b0, b1, b2, b3;
	for (let i = 0; i < (cptSize - 3); i += 3)
	{
		a0 = cpt[i].y;
		a1 = -3 * cpt[i].y + 3 * cpt[i + 1].y;
		a2 = 3 * cpt[i].y - 6 * cpt[i + 1].y + 3 * cpt[i + 2].y;
		a3 = -cpt[i].y + 3 * cpt[i + 1].y - 3 * cpt[i + 2].y + cpt[i + 3].y;

		b0 = cpt[i].x;
		b1 = -3 * cpt[i].x + 3 * cpt[i + 1].x;
		b2 = 3 * cpt[i].x - 6 * cpt[i + 1].x + 3 * cpt[i + 2].x;
		b3 = -cpt[i].x + 3 * cpt[i + 1].x - 3 * cpt[i + 2].x + cpt[i + 3].x;

		//一段贝塞尔曲线的分段数
		if (section <= 0)
		{
			section = 1;
		}
		section = 40;

		let div = 1.0 / section;
		//for(float t = 0 ; t < 1.0 + div ; t += div)
		let t = 0;
		for (let k = 0; k < section; k++, t += div)
		{
			let bz;
			bz.y = a0 + a1*t + a2*t*t + a3*t*t*t;
			bz.x = b0 + b1*t + b2*t*t + b3*t*t*t;

			if (t > 1.0)
			{
				bz.y = a0 + a1 + a2 + a3;
				bz.x = b0 + b1 + b2 + b3;
				//continue;//剔除两段贝塞尔曲线的首位重合点
			}

			bzPoints.push(bz);
		}
	}
	return bzPoints;
}