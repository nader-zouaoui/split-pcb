function board_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[85,-146.9377044],[85,-66.5]]).appendPoint([123.9528389,-66.5]).appendArc([125.9414572,-64.7130662],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.3085428,-61.2869338]).appendArc([128.2971611,-59.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([142.7776252,-59.5]).appendArc([144.7554979,-57.796681],{"radius":2,"clockwise":false,"large":false}).appendPoint([144.9945021,-56.203319]).appendArc([146.9723748,-54.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([165.4844355,-54.5]).appendArc([167.4689913,-56.2519306],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.7810087,-58.7480694]).appendArc([169.7655645,-60.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([184.4384977,-60.5]).appendArc([186.3787675,-62.0148678],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.7501,-63.5]).appendPoint([202.8561179,-63.5]).appendArc([204.8531493,-65.391071],{"radius":2,"clockwise":true,"large":false}).appendPoint([205.3968507,-75.358929]).appendArc([207.3938821,-77.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([254.5,-77.25]).appendArc([256.5,-79.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([256.5,-135.3891902]).appendArc([256.6260802,-136.088064],{"radius":2,"clockwise":false,"large":false}).appendPoint([263.3909541,-154.2270034]).appendArc([263.3418392,-155.7444656],{"radius":2,"clockwise":true,"large":false}).appendPoint([260.0988521,-162.9737621]).appendArc([260.006098,-163.1551737],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.5571014,-196.8418239]).appendArc([237.8250506,-197.5738747],{"radius":2,"clockwise":true,"large":false}).appendPoint([216.2717709,-185.1300829]).appendArc([216.0713735,-185.02893],{"radius":2,"clockwise":false,"large":false}).appendPoint([155.3321367,-158.5358262]).appendArc([155.1649897,-158.4716632],{"radius":2,"clockwise":false,"large":false}).appendPoint([143.4627804,-154.5709268]).appendArc([143.0267948,-154.4779669],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.80353,-148.9280309]).appendArc([85,-146.9377044],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function bottom_left_case_fn() {
                    

                // creating part 0 of case bottom_left
                let bottom_left__part_0 = board_left_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let bottom_left__part_0_bounds = bottom_left__part_0.getBounds();
                let bottom_left__part_0_x = bottom_left__part_0_bounds[0].x + (bottom_left__part_0_bounds[1].x - bottom_left__part_0_bounds[0].x) / 2
                let bottom_left__part_0_y = bottom_left__part_0_bounds[0].y + (bottom_left__part_0_bounds[1].y - bottom_left__part_0_bounds[0].y) / 2
                bottom_left__part_0 = translate([-bottom_left__part_0_x, -bottom_left__part_0_y, 0], bottom_left__part_0);
                bottom_left__part_0 = rotate([0,0,0], bottom_left__part_0);
                bottom_left__part_0 = translate([bottom_left__part_0_x, bottom_left__part_0_y, 0], bottom_left__part_0);

                bottom_left__part_0 = translate([0,0,0], bottom_left__part_0);
                let result = bottom_left__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_left_case_fn();
            }

        