 //Filtrage
    function FilterALL() {
     /*  var shoes=Array.from(document.querySelectorAll(".bags"));
for(let bag of shoes)

   bag.style.display = "flex";
var clothes = Array.from(document.querySelectorAll(".clothes"));
for (let cloth of clothes) cloth.style.display = "flex";

    var shoes = Array.from(document.querySelectorAll(".shoes"));
    for (let sho of shoes) sho.style.display = "flex";
      // location.reload();
    } */
     location.reload();}
 /*function FilterShoes(){
  //FilterALL();
  var refreshed=false;
  if (refreshed==false) {
    location.reload();
    refreshed = true;
  } 
  if ((refreshed == true)) {
    console.log(refreshed);
    var bags = Array.from(document.querySelectorAll(".bags"));
    for (let bag of bags) bag.style.display = "none";
    var clothes = Array.from(document.querySelectorAll(".clothes"));
    for (let cloth of clothes) cloth.style.display = "none";
  }
 }*/
function FilterShoes() {
  // Set a flag in sessionStorage to indicate filtering state
  sessionStorage.setItem("filterShoesApplied", "true");

  // Reload the page
  location.reload();
}
function FilterClothes() {sessionStorage.setItem("filterClothesApplied", "true");

// Reload the page
location.reload();}
function FilterBags() {
  sessionStorage.setItem("filterBagsApplied", "true");

  // Reload the page
  location.reload();
}
// Check if filtering was applied after page reload
window.onload = function () {
  var filterShoesApplied = sessionStorage.getItem("filterShoesApplied");
  if (filterShoesApplied === "true") {
    console.log("Filtering shoes and hiding elements...");

    // Example: Hide elements with specific classes
    var bags = document.querySelectorAll(".bags");
    bags.forEach((bag) => {
      bag.style.display = "none";
    });

    var clothes = document.querySelectorAll(".clothes");
    clothes.forEach((cloth) => {
      cloth.style.display = "none";
    });

    // Clear sessionStorage after filtering is applied
    sessionStorage.removeItem("filterShoesApplied");
  }
  var filterBagsApplied = sessionStorage.getItem("filterBagsApplied");
  if (filterBagsApplied === "true") {
    console.log("Filtering bags and hiding elements...");

    // Example: Hide elements with specific classes
    var shoes = document.querySelectorAll(".shoes");
    shoes.forEach((shoe) => {
      shoe.style.display = "none";
    });

    var clothes = document.querySelectorAll(".clothes");
    clothes.forEach((cloth) => {
      cloth.style.display = "none";
    });

    // Clear sessionStorage after filtering is applied
    sessionStorage.removeItem("filterBagsApplied");
  }
  var filterClothesApplied = sessionStorage.getItem("filterClothesApplied");
  if (filterClothesApplied === "true") {
    console.log("Filtering clothes and hiding elements...");

    // Example: Hide elements with specific classes
    var bags = document.querySelectorAll(".bags");
    bags.forEach((bag) => {
      bag.style.display = "none";
    });

    var shoes = document.querySelectorAll(".shoes");
    shoes.forEach((shoe) => {
      shoe.style.display = "none";
    });

    // Clear sessionStorage after filtering is applied
    sessionStorage.removeItem("filterClothesApplied");
  }
};


  /* function FilterClothes() {
   FilterALL();
    var bags = Array.from(document.querySelectorAll(".bags"));
    for (let bag of bags) bag.style.display = "none";
    var shoes = Array.from(document.querySelectorAll(".shoes"));
    for (let sho of shoes) sho.style.display = "none";

   }    
        function FilterBags() {
           FilterALL();
          var shoes = Array.from(document.querySelectorAll(".shoes"));
          for (let shoe of shoes) shoe.style.display = "none";
          var clothes = Array.from(document.querySelectorAll(".clothes"));
          for (let cloth of clothes) cloth.style.display = "none";
  } */
      // JavaScript pour le dropdown
      document
        .getElementById("dropdown-button")
        .addEventListener("click", function () {
          let dropdown = document.getElementById("dropdown");
          dropdown.classList.toggle("hidden");
        });


         const textLines = [
           "Discover Our Selection",
           "Summer 2024",
         ];
         const textDisplay = document.getElementById("text");
         const cursor = document.createElement("span");
         cursor.className = "cursor";
         cursor.textContent = "|";
        

         let currentLine = 0;
         let currentChar = 0;

         function displayText() {
           if (currentLine < textLines.length) {
             const line = textLines[currentLine];
             const lineElement = document.getElementById(
               `line${currentLine + 1}`
             );

             if (currentChar < line.length) {
               lineElement.textContent += line[currentChar];
               currentChar++;
               setTimeout(displayText, 50); // Adjust the delay (milliseconds) between letters
             } else {
               currentLine++;
               currentChar = 0;
               if (currentLine < textLines.length) {
                 setTimeout(displayText, 1000); // Delay between lines
               } else {
                 toggleCursor();
               }
             }
           }
         }

         function toggleCursor() {
             textDisplay.appendChild(cursor);
           cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
           setTimeout(toggleCursor, 500); // Toggle cursor every 500ms
         }

      
         displayText();
        
       var countItem1=0;
         var countItem2 = 0;
           var countItem3 = 0;
             var countItem4 = 0;
       function plusItem(id){
        console.log(id);
      switch (id) {
        case "1": {
          document.getElementById("numberItem1").innerHTML = ++countItem1;
          document.getElementById("soldeItem1").innerHTML =
            parseInt(document.getElementById("priceItem1").innerHTML) *
            parseInt(countItem1);
 document.getElementById("price").innerHTML =
   parseInt(document.getElementById("soldeItem1").innerHTML) +
   parseInt(document.getElementById("soldeItem2").innerHTML) +
   parseInt(document.getElementById("soldeItem3").innerHTML)+
   parseInt(document.getElementById("soldeItem4").innerHTML);
          break;
        }
        case "2": {
            document.getElementById("numberItem2").innerHTML = ++countItem2;
            document.getElementById("soldeItem2").innerHTML =
              parseInt(document.getElementById("priceItem2").innerHTML) *
              parseInt(countItem2);
              document.getElementById("price").innerHTML =
                parseInt(document.getElementById("soldeItem1").innerHTML) +
                parseInt(document.getElementById("soldeItem2").innerHTML) +
                parseInt(document.getElementById("soldeItem3").innerHTML) +
                parseInt(document.getElementById("soldeItem4").innerHTML);
          break;
        }
        case "3": {
            document.getElementById("numberItem3").innerHTML = ++countItem3;
            document.getElementById("soldeItem3").innerHTML =
              parseInt(document.getElementById("priceItem3").innerHTML) *
              parseInt(countItem3);
              document.getElementById("price").innerHTML =
                parseInt(document.getElementById("soldeItem1").innerHTML) +
                parseInt(document.getElementById("soldeItem2").innerHTML) +
                parseInt(document.getElementById("soldeItem3").innerHTML) +
                parseInt(document.getElementById("soldeItem4").innerHTML);
          break;
        }
        case "4": {
             document.getElementById("numberItem4").innerHTML = ++countItem4;
             document.getElementById("soldeItem4").innerHTML =
               parseInt(document.getElementById("priceItem4").innerHTML) *
               parseInt(countItem4);
              document.getElementById("price").innerHTML =
                parseInt(document.getElementById("soldeItem1").innerHTML) +
                parseInt(document.getElementById("soldeItem2").innerHTML) +
                parseInt(document.getElementById("soldeItem3").innerHTML) +
                parseInt(document.getElementById("soldeItem4").innerHTML);
          break;
        }
      }
        }
        function minusItem(id) {
        
              switch (id) {
                case "1": { if(countItem1>0)
        {
                    document.getElementById("numberItem1").innerHTML =
                      --countItem1;
                    document.getElementById("soldeItem1").innerHTML =
                      parseInt(
                        document.getElementById("priceItem1").innerHTML
                      ) * parseInt(countItem1);
                 document.getElementById("price").innerHTML =
                   parseInt(document.getElementById("soldeItem1").innerHTML) +
                   parseInt(document.getElementById("soldeItem2").innerHTML) +
                   parseInt(document.getElementById("soldeItem3").innerHTML) +
                   parseInt(document.getElementById("soldeItem4").innerHTML);
                    }
                  break;
                }
                case "2": {
                     if (countItem2 > 0) {
                        document.getElementById("numberItem2").innerHTML =
                          --countItem2;
                        document.getElementById("soldeItem2").innerHTML =
                          parseInt(
                            document.getElementById("priceItem2").innerHTML
                          ) * parseInt(countItem2);
                         document.getElementById("price").innerHTML =
                           parseInt(
                             document.getElementById("soldeItem1").innerHTML
                           ) +
                           parseInt(
                             document.getElementById("soldeItem2").innerHTML
                           ) +
                           parseInt(
                             document.getElementById("soldeItem3").innerHTML
                           ) +
                           parseInt(
                             document.getElementById("soldeItem4").innerHTML
                           );
                     }
                  break;
                }
                case "3": {
                     if(countItem3>0)
        {
                    document.getElementById("numberItem3").innerHTML =
                      --countItem3;
                    document.getElementById("soldeItem3").innerHTML =
                      parseInt(
                        document.getElementById("priceItem3").innerHTML
                      ) * parseInt(countItem3);
                     document.getElementById("price").innerHTML =
                       parseInt(
                         document.getElementById("soldeItem1").innerHTML
                       ) +
                       parseInt(
                         document.getElementById("soldeItem2").innerHTML
                       ) +
                       parseInt(
                         document.getElementById("soldeItem3").innerHTML
                       ) +
                       parseInt(
                         document.getElementById("soldeItem4").innerHTML
                       );}
                  break;
                }
                case "4": {
                     if(countItem4>0)
        {
                   document.getElementById("numberItem4").innerHTML =
                     --countItem4;
                   document.getElementById("soldeItem4").innerHTML =
                     parseInt(document.getElementById("priceItem4").innerHTML) *
                     parseInt(countItem4);
                   document.getElementById("price").innerHTML =
                     parseInt(document.getElementById("soldeItem1").innerHTML) +
                     parseInt(document.getElementById("soldeItem2").innerHTML) +
                     parseInt(document.getElementById("soldeItem3").innerHTML) +
                     parseInt(document.getElementById("soldeItem4").innerHTML);
                    }
                  break;
                }
              }
        }
        
        function heartItem(id) {console.log(id);
          switch (id) {
            case "1": {
              var x = document.getElementById("heart1");
             if (x.getAttribute("fill")=="red")
                 x.setAttribute("fill", "black");
                else
                 x.setAttribute("fill", "red");
              break;
            }
            case "2": {
              var x = document.getElementById("heart2");
               if (x.getAttribute("fill") == "red")
                 x.setAttribute("fill", "black");
               else x.setAttribute("fill", "red");
              break;
            }
            case "3": {
              var x = document.getElementById("heart3");
                if (x.getAttribute("fill") == "red")
                  x.setAttribute("fill", "black");
                else x.setAttribute("fill", "red");
              break;
            }
            case "4": {
              var x = document.getElementById("heart4");
               if (x.getAttribute("fill") == "red")
                 x.setAttribute("fill", "black");
               else x.setAttribute("fill", "red");
              break;
            }
          }
        }
             function deleteItem(id) {
               switch (id) {
                 case "1": {
                   var x = document.getElementById("Item1");
                   x.style.display = "none";
                    document.getElementById("price").innerHTML =
                    
                      parseInt(
                        document.getElementById("soldeItem2").innerHTML
                      ) +
                      parseInt(
                        document.getElementById("soldeItem3").innerHTML
                      ) +
                      parseInt(document.getElementById("soldeItem4").innerHTML);
                   break;
                 }
                 case "2": {
                   var x = document.getElementById("Item2");
                   x.style.display = "none";
                    document.getElementById("price").innerHTML =
                      parseInt(
                        document.getElementById("soldeItem1").innerHTML
                      ) +
                   
                      parseInt(
                        document.getElementById("soldeItem3").innerHTML
                      ) +
                      parseInt(document.getElementById("soldeItem4").innerHTML);
                   break;
                 }
                 case "3": {
                   var x = document.getElementById("Item3");
                   x.style.display = "none";
                    document.getElementById("price").innerHTML =
                      parseInt(
                        document.getElementById("soldeItem1").innerHTML
                      ) +
                      parseInt(
                        document.getElementById("soldeItem2").innerHTML
                      ) +
                     
                      parseInt(document.getElementById("soldeItem4").innerHTML);
                   break;
                 }
                 case "4": {
                   var x = document.getElementById("Item4");
                   x.style.display = "none";
                    document.getElementById("price").innerHTML =
                      parseInt(
                        document.getElementById("soldeItem1").innerHTML
                      ) +
                      parseInt(
                        document.getElementById("soldeItem2").innerHTML
                      ) +
                      parseInt(
                        document.getElementById("soldeItem3").innerHTML
                      ) 
                   break;
                 }
               }
             }

         /*
     const text = "Discover Our Selection"; 
      const text1 = "Summer 2024"; 
var textDisplay = document.getElementById('text');
var textDisplay1 = document.getElementById("text1");
console.log(textDisplay);
// Function to display text letter by letter
function displayText() {

  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      textDisplay.textContent += text[i];
    }, 150 * i); // Adjust the delay (in milliseconds) between letters here
  }
 
}
displayText();

// Call the function to display the text


  const cursor = document.getElementById("cursor");

  // Function to toggle visibility of cursor
  function toggleCursor() {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  }

  // Initial toggle to start blinking
  toggleCursor();

  // Set interval to blink every 500ms (adjust as needed)
  setInterval(toggleCursor, 500);
*/