let gameboard = document.getElementById("GameBoard")

//BAD PRACTICE!!!
//8x8

for(let y=0;y<5;y++)
{
   for(let x=0;x<5;x++)
   {
    let box = document.createElement("div")
    box.classList.add("GridBlock")
    gameboard.appendChild(box)
   }
}