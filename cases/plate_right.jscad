function rightcutout_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[420,-146.9377044],[420,-66.5]]).appendPoint([381.0471611,-66.5]).appendArc([379.0585428,-64.7130662],{"radius":2,"clockwise":true,"large":false}).appendPoint([378.6914572,-61.2869338]).appendArc([376.7028389,-59.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([362.2223748,-59.5]).appendArc([360.2445021,-57.796681],{"radius":2,"clockwise":true,"large":false}).appendPoint([360.0054979,-56.203319]).appendArc([358.0276252,-54.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([339.5155645,-54.5]).appendArc([337.5310087,-56.2519306],{"radius":2,"clockwise":false,"large":false}).appendPoint([337.2189913,-58.7480694]).appendArc([335.2344355,-60.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([320.5615023,-60.5]).appendArc([318.6212325,-62.0148678],{"radius":2,"clockwise":false,"large":false}).appendPoint([318.2499,-63.5]).appendPoint([302.1438821,-63.5]).appendArc([300.1468507,-65.391071],{"radius":2,"clockwise":false,"large":false}).appendPoint([299.6031493,-75.358929]).appendArc([297.6061179,-77.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([250.5,-77.25]).appendArc([248.5,-79.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([248.5,-135.3891902]).appendArc([248.3739198,-136.088064],{"radius":2,"clockwise":true,"large":false}).appendPoint([241.6090459,-154.2270034]).appendArc([241.6581608,-155.7444656],{"radius":2,"clockwise":false,"large":false}).appendPoint([244.9011479,-162.9737621]).appendArc([244.993902,-163.1551737],{"radius":2,"clockwise":false,"large":false}).appendPoint([264.4428986,-196.8418239]).appendArc([267.1749494,-197.5738747],{"radius":2,"clockwise":false,"large":false}).appendPoint([288.7282291,-185.1300829]).appendArc([288.9286265,-185.02893],{"radius":2,"clockwise":true,"large":false}).appendPoint([349.6678633,-158.5358262]).appendArc([349.8350103,-158.4716632],{"radius":2,"clockwise":true,"large":false}).appendPoint([361.5372196,-154.5709268]).appendArc([361.9732052,-154.4779669],{"radius":2,"clockwise":true,"large":false}).appendPoint([418.19647,-148.9280309]).appendArc([420,-146.9377044],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[260.67014,-171.3072142],[267.67014,-183.4315698]]).appendPoint([279.7944956,-176.4315698]).appendPoint([272.7944956,-164.3072142]).appendPoint([260.67014,-171.3072142]).close().innerToCAG()
.union(
    new CSG.Path2D([[277.817443,-161.4072142],[284.817443,-173.5315698]]).appendPoint([296.9417986,-166.5315698]).appendPoint([289.9417986,-154.4072142]).appendPoint([277.817443,-161.4072142]).close().innerToCAG()
).union(
    new CSG.Path2D([[304.089746,-167.3121778],[316.2141016,-160.3121778]]).appendPoint([309.2141016,-148.1878222]).appendPoint([297.089746,-155.1878222]).appendPoint([304.089746,-167.3121778]).close().innerToCAG()
).union(
    new CSG.Path2D([[285.5,-96.75],[299.5,-96.75]]).appendPoint([299.5,-82.75]).appendPoint([285.5,-82.75]).appendPoint([285.5,-96.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[285.5,-114.5],[299.5,-114.5]]).appendPoint([299.5,-100.5]).appendPoint([285.5,-100.5]).appendPoint([285.5,-114.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[285.5,-132.25],[299.5,-132.25]]).appendPoint([299.5,-118.25]).appendPoint([285.5,-118.25]).appendPoint([285.5,-132.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[304.25,-83],[318.25,-83]]).appendPoint([318.25,-69]).appendPoint([304.25,-69]).appendPoint([304.25,-83]).close().innerToCAG()
).union(
    new CSG.Path2D([[304.25,-100.75],[318.25,-100.75]]).appendPoint([318.25,-86.75]).appendPoint([304.25,-86.75]).appendPoint([304.25,-100.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[304.25,-118.5],[318.25,-118.5]]).appendPoint([318.25,-104.5]).appendPoint([304.25,-104.5]).appendPoint([304.25,-118.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[304.25,-136.25],[318.25,-136.25]]).appendPoint([318.25,-122.25]).appendPoint([304.25,-122.25]).appendPoint([304.25,-136.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[323,-80],[337,-80]]).appendPoint([337,-66]).appendPoint([323,-66]).appendPoint([323,-80]).close().innerToCAG()
).union(
    new CSG.Path2D([[323,-97.75],[337,-97.75]]).appendPoint([337,-83.75]).appendPoint([323,-83.75]).appendPoint([323,-97.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[323,-115.5],[337,-115.5]]).appendPoint([337,-101.5]).appendPoint([323,-101.5]).appendPoint([323,-115.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[323,-133.25],[337,-133.25]]).appendPoint([337,-119.25]).appendPoint([323,-119.25]).appendPoint([323,-133.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[323,-151],[337,-151]]).appendPoint([337,-137]).appendPoint([323,-137]).appendPoint([323,-151]).close().innerToCAG()
).union(
    new CSG.Path2D([[341.75,-74],[355.75,-74]]).appendPoint([355.75,-60]).appendPoint([341.75,-60]).appendPoint([341.75,-74]).close().innerToCAG()
).union(
    new CSG.Path2D([[341.75,-91.75],[355.75,-91.75]]).appendPoint([355.75,-77.75]).appendPoint([341.75,-77.75]).appendPoint([341.75,-91.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[341.75,-109.5],[355.75,-109.5]]).appendPoint([355.75,-95.5]).appendPoint([341.75,-95.5]).appendPoint([341.75,-109.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[341.75,-127.25],[355.75,-127.25]]).appendPoint([355.75,-113.25]).appendPoint([341.75,-113.25]).appendPoint([341.75,-127.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[341.75,-145],[355.75,-145]]).appendPoint([355.75,-131]).appendPoint([341.75,-131]).appendPoint([341.75,-145]).close().innerToCAG()
).union(
    new CSG.Path2D([[360.5,-79],[374.5,-79]]).appendPoint([374.5,-65]).appendPoint([360.5,-65]).appendPoint([360.5,-79]).close().innerToCAG()
).union(
    new CSG.Path2D([[360.5,-96.75],[374.5,-96.75]]).appendPoint([374.5,-82.75]).appendPoint([360.5,-82.75]).appendPoint([360.5,-96.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[360.5,-114.5],[374.5,-114.5]]).appendPoint([374.5,-100.5]).appendPoint([360.5,-100.5]).appendPoint([360.5,-114.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[360.5,-132.25],[374.5,-132.25]]).appendPoint([374.5,-118.25]).appendPoint([360.5,-118.25]).appendPoint([360.5,-132.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[379.25,-86],[393.25,-86]]).appendPoint([393.25,-72]).appendPoint([379.25,-72]).appendPoint([379.25,-86]).close().innerToCAG()
).union(
    new CSG.Path2D([[379.25,-103.75],[393.25,-103.75]]).appendPoint([393.25,-89.75]).appendPoint([379.25,-89.75]).appendPoint([379.25,-103.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[379.25,-121.5],[393.25,-121.5]]).appendPoint([393.25,-107.5]).appendPoint([379.25,-107.5]).appendPoint([379.25,-121.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[379.25,-139.25],[393.25,-139.25]]).appendPoint([393.25,-125.25]).appendPoint([379.25,-125.25]).appendPoint([379.25,-139.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[398,-86],[412,-86]]).appendPoint([412,-72]).appendPoint([398,-72]).appendPoint([398,-86]).close().innerToCAG()
).union(
    new CSG.Path2D([[398,-103.75],[412,-103.75]]).appendPoint([412,-89.75]).appendPoint([398,-89.75]).appendPoint([398,-103.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[398,-121.5],[412,-121.5]]).appendPoint([412,-107.5]).appendPoint([398,-107.5]).appendPoint([398,-121.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[398,-139.25],[412,-139.25]]).appendPoint([412,-125.25]).appendPoint([398,-125.25]).appendPoint([398,-139.25]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_right_case_fn() {
                    

                // creating part 0 of case plate_right
                let plate_right__part_0 = rightcutout_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate_right__part_0_bounds = plate_right__part_0.getBounds();
                let plate_right__part_0_x = plate_right__part_0_bounds[0].x + (plate_right__part_0_bounds[1].x - plate_right__part_0_bounds[0].x) / 2
                let plate_right__part_0_y = plate_right__part_0_bounds[0].y + (plate_right__part_0_bounds[1].y - plate_right__part_0_bounds[0].y) / 2
                plate_right__part_0 = translate([-plate_right__part_0_x, -plate_right__part_0_y, 0], plate_right__part_0);
                plate_right__part_0 = rotate([0,0,0], plate_right__part_0);
                plate_right__part_0 = translate([plate_right__part_0_x, plate_right__part_0_y, 0], plate_right__part_0);

                plate_right__part_0 = translate([0,0,0], plate_right__part_0);
                let result = plate_right__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_right_case_fn();
            }

        