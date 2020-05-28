// Task 3. Accordion
// An HTML file is given and your task is to show more/ less information by clicking a button (it is not an actual button,
// but a span that has an onlick event attached to it). When [More] link is clicked, it reveals the contents of a hidden
// div and change the text of the link to [Less]. When the same link is clicked again (now reading Less), hide the div
// and change the text of the link back. Link action should be toggleable (you should be able to click the button infinite
// amount of times).

function toggle() {
    let button = document.getElementsByClassName(`button`)[0];
    let item = document.getElementById('extra');

    if(button.innerHTML === 'More'){
        button.innerHTML = 'Less';
        item.style.display = 'block';
    }
    else{
        button.innerHTML = 'More';
        item.style.display = 'none';
    }
    
}