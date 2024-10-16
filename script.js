document.getElementById("button").addEventListener('click', function(){
    document.querySelector(".share").style.display = 'flex';
    document.getElementById("button-close").style.display = 'inline-block';
    document.getElementById("button").style.display = 'none';
});

function init(){
    document.querySelector(".share").style.display = 'none';
    document.getElementById("button").style.display = 'inline-block';
    document.getElementById("button-close").style.display = 'none';
};

document.getElementById("button-close").addEventListener('click', init);
document.getElementById("button-closeone").addEventListener('click', init);