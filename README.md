Assignment

/**
*
* On load:
    1. Create square div containerSize * containerSize size.
    2. Create inside it numberOfChildren square divs which:
        - do no overlap each other
        - are fully contained within the container div
        - do not stretch container and cause showing scroll
        - has size childSize * childSize
        - has random background color
        - when you hover it longer than 3 seconds it disappears
    3. Use only pure Javascript (no jQuery etc.).
    4. In case container cannot fit numberOfChildren,
    		render as much children as container can fit and show message
        for user about actual rendered number of children inside container.



	Example how it should look: https://goo.gl/ikveME
*/

function drawContainer(containerSize, childSize, numberOfChildren) {}

drawContainer(200, 50, 17);

/**
 * Test set
 *
 * drawContainer(310, 200, 4);
 * drawContainer(413, 42, 30);
 * drawContainer(200, 300, 2);
 */

Demo

![alt tag](https://raw.githubusercontent.com/mtalal16/js-generate-random-color-box/master/demo.png)
