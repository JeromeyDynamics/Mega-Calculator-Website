let pythagoreanSolver = document.getElementById("pythagoreanForm");

pythagoreanSolver.addEventListener("submit", (e) => {
    //prevents default
    e.preventDefault();

    //variables
    let p1V = document.getElementById("SLA");
    let p2V = document.getElementById("SLB");
    let p3V = document.getElementById("SLC");

    //checking
    try {
        //variables for the sidelength answers
        var p1 = 0;
        var p2 = 0;
        var p3 = 0;
        
        //gets the pythagorean theorum answer paragraph
        var paragraph = document.getElementById("pythagoreanTheoremAnswer");

        //NEW LINE NO WORKY
        //appends the side lengths
        var text = document.createTextNode("Side Length A: " + p1.toString());
        paragraph.appendChild(text);

        text = document.createTextNode("Side Length B: " + p2.toString());
        paragraph.appendChild(text);

        text = document.createTextNode("Side Length C: " + p3.toString());
        paragraph.appendChild(text);

    } catch(err) {
        alert("make sure to only put in numbers for the side lengths and no spaces!!! :)");
        console.log(err);
    }
});