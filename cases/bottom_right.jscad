function board_right_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[420,-146.9377044],[420,-66.5]]).appendPoint([381.0471611,-66.5]).appendArc([379.0585428,-64.7130662],{"radius":2,"clockwise":true,"large":false}).appendPoint([378.6914572,-61.2869338]).appendArc([376.7028389,-59.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([362.2223748,-59.5]).appendArc([360.2445021,-57.796681],{"radius":2,"clockwise":true,"large":false}).appendPoint([360.0054979,-56.203319]).appendArc([358.0276252,-54.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([339.5155645,-54.5]).appendArc([337.5310087,-56.2519306],{"radius":2,"clockwise":false,"large":false}).appendPoint([337.2189913,-58.7480694]).appendArc([335.2344355,-60.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([320.5615023,-60.5]).appendArc([318.6212325,-62.0148678],{"radius":2,"clockwise":false,"large":false}).appendPoint([318.2499,-63.5]).appendPoint([302.1438821,-63.5]).appendArc([300.1468507,-65.391071],{"radius":2,"clockwise":false,"large":false}).appendPoint([299.6031493,-75.358929]).appendArc([297.6061179,-77.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([250.5,-77.25]).appendArc([248.5,-79.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([248.5,-135.3891902]).appendArc([248.3739198,-136.088064],{"radius":2,"clockwise":true,"large":false}).appendPoint([241.6090459,-154.2270034]).appendArc([241.6581608,-155.7444656],{"radius":2,"clockwise":false,"large":false}).appendPoint([244.9011479,-162.9737621]).appendArc([244.993902,-163.1551737],{"radius":2,"clockwise":false,"large":false}).appendPoint([264.4428986,-196.8418239]).appendArc([267.1749494,-197.5738747],{"radius":2,"clockwise":false,"large":false}).appendPoint([288.7282291,-185.1300829]).appendArc([288.9286265,-185.02893],{"radius":2,"clockwise":true,"large":false}).appendPoint([349.6678633,-158.5358262]).appendArc([349.8350103,-158.4716632],{"radius":2,"clockwise":true,"large":false}).appendPoint([361.5372196,-154.5709268]).appendArc([361.9732052,-154.4779669],{"radius":2,"clockwise":true,"large":false}).appendPoint([418.19647,-148.9280309]).appendArc([420,-146.9377044],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function bottom_right_case_fn() {
                    

                // creating part 0 of case bottom_right
                let bottom_right__part_0 = board_right_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let bottom_right__part_0_bounds = bottom_right__part_0.getBounds();
                let bottom_right__part_0_x = bottom_right__part_0_bounds[0].x + (bottom_right__part_0_bounds[1].x - bottom_right__part_0_bounds[0].x) / 2
                let bottom_right__part_0_y = bottom_right__part_0_bounds[0].y + (bottom_right__part_0_bounds[1].y - bottom_right__part_0_bounds[0].y) / 2
                bottom_right__part_0 = translate([-bottom_right__part_0_x, -bottom_right__part_0_y, 0], bottom_right__part_0);
                bottom_right__part_0 = rotate([0,0,0], bottom_right__part_0);
                bottom_right__part_0 = translate([bottom_right__part_0_x, bottom_right__part_0_y, 0], bottom_right__part_0);

                bottom_right__part_0 = translate([0,0,0], bottom_right__part_0);
                let result = bottom_right__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_right_case_fn();
            }

        