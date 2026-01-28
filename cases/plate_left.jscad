function leftcutout_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[85,-146.9377044],[85,-66.5]]).appendPoint([123.9528389,-66.5]).appendArc([125.9414572,-64.7130662],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.3085428,-61.2869338]).appendArc([128.2971611,-59.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([142.7776252,-59.5]).appendArc([144.7554979,-57.796681],{"radius":2,"clockwise":false,"large":false}).appendPoint([144.9945021,-56.203319]).appendArc([146.9723748,-54.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([165.4844355,-54.5]).appendArc([167.4689913,-56.2519306],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.7810087,-58.7480694]).appendArc([169.7655645,-60.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([184.4384977,-60.5]).appendArc([186.3787675,-62.0148678],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.7501,-63.5]).appendPoint([202.8561179,-63.5]).appendArc([204.8531493,-65.391071],{"radius":2,"clockwise":true,"large":false}).appendPoint([205.3968507,-75.358929]).appendArc([207.3938821,-77.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([254.5,-77.25]).appendArc([256.5,-79.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([256.5,-135.3891902]).appendArc([256.6260802,-136.088064],{"radius":2,"clockwise":false,"large":false}).appendPoint([263.3909541,-154.2270034]).appendArc([263.3418392,-155.7444656],{"radius":2,"clockwise":true,"large":false}).appendPoint([260.0988521,-162.9737621]).appendArc([260.006098,-163.1551737],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.5571014,-196.8418239]).appendArc([237.8250506,-197.5738747],{"radius":2,"clockwise":true,"large":false}).appendPoint([216.2717709,-185.1300829]).appendArc([216.0713735,-185.02893],{"radius":2,"clockwise":false,"large":false}).appendPoint([155.3321367,-158.5358262]).appendArc([155.1649897,-158.4716632],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.4627804,-154.5709268]).appendArc([143.0267948,-154.4779669],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.80353,-148.9280309]).appendArc([85,-146.9377044],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[237.32986,-183.4315698],[244.32986,-171.3072142]]).appendPoint([232.2055044,-164.3072142]).appendPoint([225.2055044,-176.4315698]).appendPoint([237.32986,-183.4315698]).close().innerToCAG()
.union(
    new CSG.Path2D([[220.182557,-173.5315698],[227.182557,-161.4072142]]).appendPoint([215.0582014,-154.4072142]).appendPoint([208.0582014,-166.5315698]).appendPoint([220.182557,-173.5315698]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.7858984,-160.3121778],[200.910254,-167.3121778]]).appendPoint([207.910254,-155.1878222]).appendPoint([195.7858984,-148.1878222]).appendPoint([188.7858984,-160.3121778]).close().innerToCAG()
).union(
    new CSG.Path2D([[205.5,-96.75],[219.5,-96.75]]).appendPoint([219.5,-82.75]).appendPoint([205.5,-82.75]).appendPoint([205.5,-96.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[205.5,-114.5],[219.5,-114.5]]).appendPoint([219.5,-100.5]).appendPoint([205.5,-100.5]).appendPoint([205.5,-114.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[205.5,-132.25],[219.5,-132.25]]).appendPoint([219.5,-118.25]).appendPoint([205.5,-118.25]).appendPoint([205.5,-132.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.75,-83],[200.75,-83]]).appendPoint([200.75,-69]).appendPoint([186.75,-69]).appendPoint([186.75,-83]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.75,-100.75],[200.75,-100.75]]).appendPoint([200.75,-86.75]).appendPoint([186.75,-86.75]).appendPoint([186.75,-100.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.75,-118.5],[200.75,-118.5]]).appendPoint([200.75,-104.5]).appendPoint([186.75,-104.5]).appendPoint([186.75,-118.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.75,-136.25],[200.75,-136.25]]).appendPoint([200.75,-122.25]).appendPoint([186.75,-122.25]).appendPoint([186.75,-136.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-80],[182,-80]]).appendPoint([182,-66]).appendPoint([168,-66]).appendPoint([168,-80]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-97.75],[182,-97.75]]).appendPoint([182,-83.75]).appendPoint([168,-83.75]).appendPoint([168,-97.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-115.5],[182,-115.5]]).appendPoint([182,-101.5]).appendPoint([168,-101.5]).appendPoint([168,-115.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-133.25],[182,-133.25]]).appendPoint([182,-119.25]).appendPoint([168,-119.25]).appendPoint([168,-133.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-151],[182,-151]]).appendPoint([182,-137]).appendPoint([168,-137]).appendPoint([168,-151]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.25,-74],[163.25,-74]]).appendPoint([163.25,-60]).appendPoint([149.25,-60]).appendPoint([149.25,-74]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.25,-91.75],[163.25,-91.75]]).appendPoint([163.25,-77.75]).appendPoint([149.25,-77.75]).appendPoint([149.25,-91.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.25,-109.5],[163.25,-109.5]]).appendPoint([163.25,-95.5]).appendPoint([149.25,-95.5]).appendPoint([149.25,-109.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.25,-127.25],[163.25,-127.25]]).appendPoint([163.25,-113.25]).appendPoint([149.25,-113.25]).appendPoint([149.25,-127.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.25,-145],[163.25,-145]]).appendPoint([163.25,-131]).appendPoint([149.25,-131]).appendPoint([149.25,-145]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.5,-79],[144.5,-79]]).appendPoint([144.5,-65]).appendPoint([130.5,-65]).appendPoint([130.5,-79]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.5,-96.75],[144.5,-96.75]]).appendPoint([144.5,-82.75]).appendPoint([130.5,-82.75]).appendPoint([130.5,-96.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.5,-114.5],[144.5,-114.5]]).appendPoint([144.5,-100.5]).appendPoint([130.5,-100.5]).appendPoint([130.5,-114.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.5,-132.25],[144.5,-132.25]]).appendPoint([144.5,-118.25]).appendPoint([130.5,-118.25]).appendPoint([130.5,-132.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.75,-86],[125.75,-86]]).appendPoint([125.75,-72]).appendPoint([111.75,-72]).appendPoint([111.75,-86]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.75,-103.75],[125.75,-103.75]]).appendPoint([125.75,-89.75]).appendPoint([111.75,-89.75]).appendPoint([111.75,-103.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.75,-121.5],[125.75,-121.5]]).appendPoint([125.75,-107.5]).appendPoint([111.75,-107.5]).appendPoint([111.75,-121.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.75,-139.25],[125.75,-139.25]]).appendPoint([125.75,-125.25]).appendPoint([111.75,-125.25]).appendPoint([111.75,-139.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-86],[107,-86]]).appendPoint([107,-72]).appendPoint([93,-72]).appendPoint([93,-86]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-103.75],[107,-103.75]]).appendPoint([107,-89.75]).appendPoint([93,-89.75]).appendPoint([93,-103.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-121.5],[107,-121.5]]).appendPoint([107,-107.5]).appendPoint([93,-107.5]).appendPoint([93,-121.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-139.25],[107,-139.25]]).appendPoint([107,-125.25]).appendPoint([93,-125.25]).appendPoint([93,-139.25]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_left_case_fn() {
                    

                // creating part 0 of case plate_left
                let plate_left__part_0 = leftcutout_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate_left__part_0_bounds = plate_left__part_0.getBounds();
                let plate_left__part_0_x = plate_left__part_0_bounds[0].x + (plate_left__part_0_bounds[1].x - plate_left__part_0_bounds[0].x) / 2
                let plate_left__part_0_y = plate_left__part_0_bounds[0].y + (plate_left__part_0_bounds[1].y - plate_left__part_0_bounds[0].y) / 2
                plate_left__part_0 = translate([-plate_left__part_0_x, -plate_left__part_0_y, 0], plate_left__part_0);
                plate_left__part_0 = rotate([0,0,0], plate_left__part_0);
                plate_left__part_0 = translate([plate_left__part_0_x, plate_left__part_0_y, 0], plate_left__part_0);

                plate_left__part_0 = translate([0,0,0], plate_left__part_0);
                let result = plate_left__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_left_case_fn();
            }

        