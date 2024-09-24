// In this context, "rebound" refers to the behavior when the movement causes the object to hit a wall of the rectangular boundary. Instead of stopping or staying at the boundary, the object "bounces back" by reversing its direction.

// Here's how the rebound works for each direction:

// Left (L): If moving left hits the left boundary (x_min), the next movement should be as if it were a move to the right (R), effectively reversing the direction.

// Right (R): If moving right hits the right boundary (x_max), the next movement should be as if it were a move to the left (L).

// Up (U): If moving up hits the top boundary (y_max), the next movement should be as if it were a move down (D).

// Down (D): If moving down hits the bottom boundary (y_min), the next movement should be as if it were a move up (U).

// Example of Rebounding:

// Initial Position: (1, 1)

// Rectangle Boundaries: x_min=0, y_min=0, x_max=3, y_max=3

// Movement String: "LLUR"

// Move Left (L): Position (0, 1) (hits the left boundary at x=0).

// Rebound (Next Left L becomes Right R): Position (1, 1).

// Move Up (U): Position (1, 2).

// Move Right (R): Position (2, 2).

// Final Position: (2, 2).

// In this example, the rebound after hitting the left boundary caused the left movement to turn into a right movement.

// 5 x 5

// (1, 1)


function solve() {
    let str = "LLLLLDUU"
    x = 3;
    y = 0;
    gridLen = 6;

    // 2, 1


    function traverseGrid(i) {
        if (i >= str.length) {
            // boundary detected go oppoiste
            return;
        }

        if (str[i] === 'L') {
            y = y - 1;
            if (y < 0) y = y + 2;
        } else if (str[i] === 'R') {
            y = y + 1;
            if (y >= gridLen) y = y - 2;
        } else if (str[i] === 'U') {
            x = x - 1;
            if (x < 0) x = x + 2

        } else if (str[i] === 'D') {
            x = x + 1;
            if (x >= gridLen) x = x - 2;
        }
        console.log("recur x"+x+"  y"+y+"    i"+i);

        traverseGrid(i+1);
        

    }
    traverseGrid(x, y, 0)
    console.log(x+'   '+y)

}
solve();

