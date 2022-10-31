$(document).ready(function(){
    let sideContWidth = $(".side-content").outerWidth();
    $("#search-side-nav").css("display","none");
    let meals =[];
   let keyName = '';
   let letterName = '';
   $("#contact-us").fadeOut(7);

   

$("#sideBar").css({"left":`-${sideContWidth}px`});
// stop the spinner 
$("#load-screen").fadeOut(900, function(){
    $("body").css("overflow","auto");
});

// start the side menu section

// event listner to open the side bar menu
$("#menu-open").click(function(){
    if($("#sideBar").css("left") === `-${sideContWidth}px`){
        $("#menu-open").css("display","none");
        $("#menu-close").css("display","block")
        $("#sideBar").animate({left:`0px`},700, function(){
            $("#search").animate({"padding-top":"1.3rem","opacity":"1"},100,function(){
                $("#cat").animate({"padding-top":"1.3rem","opacity":"1"},100,function(){
                    $("#area").animate({"padding-top":"1.3rem","opacity":"1"},100,function(){
                        $("#ing").animate({"padding-top":"1.3rem","opacity":"1"},100,function(){
                            $("#contact").animate({"padding-top":"1.3rem","opacity":"1"},100)
                        })
                    })
                })
            })
        });
      
    }

})
// event listener to clse the side nav menu
$("#menu-close").click(closeSideNav)

function closeSideNav(){
    $("#sideBar").animate({left:-sideContWidth},700);
    $(".side-content ul li").animate({"padding-top":"10rem","opacity":"0"},90)
    $("#menu-close").css("display","none");
    $("#menu-open").css("display","block")
}
// end side menu section

// start main menu

// working on the api async function 

async function getMainMenu(s,searchKey){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${s}=${searchKey}`,{
        method: 'GET'
    });
    var result = await response.json();
    let meals =result.meals;
    console.log(meals);  
    renderMainMenu(meals)

}




// that function that render main meals in the main menu
function renderMainMenu(meals){
    $("#main-recipes").children().remove();

    recipes=``;
        console.log("no")
        for(var i =0; i<meals.length;i++){
            recipes+=`<div class="col-md-6 col-lg-3">
                        <div class="item text-center position-relative">
                            <img class="w-100" src="${meals[i].strMealThumb}" alt="">
                       
                            <div data-index="${i}" class="overlay position-absolute d-flex justify-content-start align-items-center ">
                            <div><p  class="text-black ps-3">${meals[i].strMeal}</p></div>
                            
                            </div>
                        </div>
                    </div>`
    
        }
    $("#main-recipes").append(recipes);


    // fire the detailed menu when clicked on the overlay to get fully details for the recipe 
    $(".item").click(function(e){

             console.log("helloxxx")
        let clickedIndex = $(e.target).attr("data-index");
        console.log(meals[clickedIndex]);
        let x=''
    
        if(meals[clickedIndex].strMeasure1 !== " "){
             x += `<li>${meals[clickedIndex].strMeasure1 }${meals[clickedIndex].strIngredient1}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure2 != ""){
             x += `<li>${meals[clickedIndex].strMeasure2 }${meals[clickedIndex].strIngredient2}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure3 !== " "){
             x += `<li>${meals[clickedIndex].strMeasure3 }${meals[clickedIndex].strIngredient3}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure4 !== " "){
             x += `<li>${meals[clickedIndex].strMeasure4 }${meals[clickedIndex].strIngredient4}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure5 !== " "){
             x += `<li>${meals[clickedIndex].strMeasure5 }${meals[clickedIndex].strIngredient5}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure6 !== " "){
    
            x += `<li>${meals[clickedIndex].strMeasure6 }${meals[clickedIndex].strIngredient6}</li>`;
        }else{
            x+='';
    
        } if(meals[clickedIndex].strMeasure7 !== " "){
             x += `<li>${meals[clickedIndex].strMeasure7 }${meals[clickedIndex].strIngredient7}</li>`;
        }else{
            x+='';
        }if(meals[clickedIndex].strMeasure8 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure8 }${meals[clickedIndex].strIngredient8}</li>`;
       }else{
           x+='';
       }if(meals[clickedIndex].strMeasure7 !== " "){
             x += `<li>${meals[clickedIndex].strMeasure7 }${meals[clickedIndex].strIngredient7}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure8 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure8 }${meals[clickedIndex].strIngredient8}</li>`;
       }else{
           x+='';
       }  if(meals[clickedIndex].strMeasure9 !== " "){
                x += `<li>${meals[clickedIndex].strMeasure9 }${meals[clickedIndex].strIngredient9}</li>`;
        }else{
            x+='';
        }  if(meals[clickedIndex].strMeasure10 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure10 }${meals[clickedIndex].strIngredient10}</li>`;
        }else{
        x+='';
        }  if(meals[clickedIndex].strMeasure11 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure11 }${meals[clickedIndex].strIngredient11}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure12 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure12 }${meals[clickedIndex].strIngredient12}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure13 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure13 }${meals[clickedIndex].strIngredient13}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure14 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure14 }${meals[clickedIndex].strIngredient14}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure15 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure15 }${meals[clickedIndex].strIngredient15}</li>`;
        }else{
            x+='';
        }  if(meals[clickedIndex].strMeasure16 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure16 }${meals[clickedIndex].strIngredient16}</li>`;
        }else{
            x+='';
        }if(meals[clickedIndex].strMeasure17 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure17 }${meals[clickedIndex].strIngredient17}</li>`;
        }else{
            x+='';
        } if(meals[clickedIndex].strMeasure18 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure18 }${meals[clickedIndex].strIngredient18}</li>`;
        }else{
            x+='';
        }if(meals[clickedIndex].strMeasure19 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure19 }${meals[clickedIndex].strIngredient19}</li>`;
        }else{
            x+='';
        }if(meals[clickedIndex].strMeasure20 !== " "){
            x += `<li>${meals[clickedIndex].strMeasure20 }${meals[clickedIndex].strIngredient20}</li>`;
        }else{
            x=x;
        }

         cont='';
    
        if(meals[clickedIndex].strTags !== null){
            let tags = meals[clickedIndex].strTags.split(",");
            for(var i=0; i<tags.length; i++){
                    cont+=`<li>${tags[i]}</li>`
               }
    
        }  
            
        $("#main-recipes").fadeOut(1000);
        $("#contact-us").fadeOut(10);
        
        console.log(meals[clickedIndex])
        $("#special-recipe").children().remove();
            let specialMeal=`
                            <div class="col-md-4">
                            <img src="${meals[clickedIndex].strMealThumb}" class="w-100">
                            <p class="click-caption text-center">${meals[clickedIndex].strMeal}</p>
                        </div>
                        <div class="col-md-8">
                            <h2>Instructions</h2>
                            <p>${meals[clickedIndex].strInstructions}</p>
                            <h3>Area <span>: ${meals[clickedIndex].strArea}</span></h3> 
                            <h3>Category <span>: ${meals[clickedIndex].strCategory}</span></h3> 
                            <div class="tags recipes">
                                <h2>Recipes :</h2>
                                <ul>
                                   ${x}
                                </ul>
    
                            </div>
                            
                            <div class="tags ingredient">
                                <h2>Tags :</h2>
                                <ul>
                                ${cont}
                                </ul>
                            </div>
                            
                            <div class="recip-btns">
                                <a href="${meals[clickedIndex].strSource}" class="btn btn-success">Source</a>
                                <a href="${meals[clickedIndex].strYoutube}" class="btn btn-danger">youtube</a>
                            </div>
                        </div>`;
                       
        $("#special-recipe").append(specialMeal);
        $("#contact-us").fadeOut(5);

        $("#special-recipe").fadeIn(1000);
    
        // to remove empty li
    
        for(var i=0; i< $(".tags li").length ;i++){
            if($(".tags li").eq(i).html() === " " ){
                $(".tags li").eq(i).remove()
            }
    
        }
        // to remove empty li
        
        

    })
}





// search by name and first letter 
getMainMenu("s"," ")
 keyName =  $("#search-name");
 letterName =  $("#search-letter");

// function to fore when we click on search side nav bar
$("#search").click(function(){
    

    $("#special-recipe").fadeOut(1000);
    $("#main-recipes").children().remove();
    $("#search-side-nav").css("display","block");
    closeSideNav()

    $("#search-name").keyup( function(){
        $("#main-recipes").children().remove();
        getMainMenu("s",keyName.val());
    })

    $("#search-letter").keyup( function(){
        $("#main-recipes").children().remove();
        getMainMenu("f",letterName.val());
    })
    $("#main-recipes").fadeIn(1000)


})

// the function List all Categories, Area, Ingredients
// letter will be c or a or i

// let s = `www.themealdb.com/api/json/v1/1/categories.php`
let mm = `https://www.themealdb.com/api/json/v1/1/filter.php?c=beef`

async function getCategoryMenu(){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`,{
        method: 'GET'
    });
    var result = await response.json();
    let meals =result.categories;
    console.log(meals);  
    renderCategoryMenu(meals)
}

function renderCategoryMenu(meals){
    recipes=''
      for(var i =0; i<meals.length;i++){
            recipes+=`<div class="col-md-6 col-lg-3">
                        <div class="item text-center position-relative">
                            <img class="w-100" src="${meals[i].strCategoryThumb}" alt="">
        
                            <div data-index="${i}" class="overlay position-absolute d-flex flex-column justify-content-start align-items-center ">
                            <p  class="text-black ps-3">${meals[i].strCategory}</p>
                            <p  class="text-black fs-6 ps-3">${meals[i].strCategoryDescription}</p>
                            </div>
                        </div>
                    </div>`
    
        }
        $("#main-recipes").append(recipes);
        $("#main-recipes").fadeIn(1000)

        $(".overlay").click(function(e){
            $("#special-recipe").children().remove()
                let clickedIndex = $(e.target).attr("data-index");
            let clickedMeal = meals[clickedIndex]
            console.log(clickedMeal.strCategory);

            getSpesificCategory(clickedMeal.strCategory)

        })



}

async function getSpesificCategory(category){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,{
        method: 'GET'
    });
    var result = await response.json();
     let meals =result.meals;
    console.log(meals);  
    renderSpesificMenu(meals)
}

function renderSpesificMenu(meals){
    $("#main-recipes").children().remove();
    recipes=''
      for(var i =0; i<meals.length;i++){
            recipes+=`<div class="col-md-6 col-lg-3">
                        <div class="item text-center position-relative">
                            <img class="w-100" src="${meals[i].strMealThumb}" alt="">
                            <div data-index="${i}" class="overlay position-absolute d-flex flex-column justify-content-start align-items-center ">
                            <p  class="text-black ps-3">${meals[i].strMeal}</p>
                            </div>
                        </div>
                    </div>`
    
        }
        $("#main-recipes").append(recipes);
        $("#main-recipes").fadeIn(1000)

        $(".overlay").click(function(e){
            $("#special-recipe").children().remove()
            let clickedIndex = $(e.target).attr("data-index");
            let clickedMeal = meals[clickedIndex]
            keyName = clickedMeal.strMeal;
            $("#main-recipes").children().remove();
            console.log(keyName)
            getMainMenu("s",keyName);

        })



}

// function to fire when we click on the category side nav bar
$("#cat").click(function(){
    $("#special-recipe").fadeOut(10);
    $("#main-recipes").children().remove();
    $("#search-side-nav").css("display","none");
    closeSideNav()
    getCategoryMenu()


})

// function to fire when we click on the area side nav bar
$("#area").click(function(){
    $("#special-recipe").fadeOut(10);
    $("#main-recipes").children().remove();
    $("#search-side-nav").css("display","none");
    closeSideNav()
    getAreaMenu()


})

async function getAreaMenu(){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`,{
        method: 'GET'
    });
    var result = await response.json();
    let meals =result.meals;
    console.log(meals);  
    renderAreaMenu(meals)
}

function renderAreaMenu(meals){
    $("#main-recipes").children().remove();
    recipes=''
      for(var i =0; i<meals.length;i++){
         recipes+=`<div class="col-md-6 col-lg-3">
                    <div class="item text-center position-relative">
                        <i data-index="${i}" class="fa-solid fa-city fa-4x"></i>
                        <div data-index="${i}" class="d-flex justify-content-center align-items-center ">
                        <div><p  class="text-white fs-3">${meals[i].strArea}</p></div>
                        
                        </div>
                    </div>
                </div>`
    
        }
        $("#main-recipes").append(recipes);
        $("#main-recipes").fadeIn(1000)

        $(".col-md-6").click(function(e){
            $("#special-recipe").children().remove()
            let clickedIndex = $(e.target).attr("data-index");
            let clickedMeal = meals[clickedIndex]
            keyName = clickedMeal.strArea;
            $("#main-recipes").children().remove();
            getAraMeal(keyName)

        
        })

        
}
async function getAraMeal(keyName){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${keyName}`,{
        method: 'GET'
    });
    var result = await response.json();
    let meals =result.meals;
    console.log(meals);  
    renderSpesificMenu(meals)
}

// function to fire when we click on the ingredients side nav bar
$("#ing").click(function(){
    $("#special-recipe").fadeOut(10);
    $("#main-recipes").children().remove();
    $("#search-side-nav").css("display","none");
    closeSideNav()
    getIngredientMenu()


})

async function getIngredientMenu(){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`,{
        method: 'GET'
    });
    var result = await response.json();
    let meals =result.meals;
    console.log(meals);  
    renderIngMenu(meals)
}
 function renderIngMenu(meals){
    $("#main-recipes").children().remove();
    recipes=''
      for(var i =0; i<20;i++){
        let splitWord =  meals[i].strDescription.split(" ").splice(0,20).join(" ")
        // console.log(splitWord)
         recipes+=`<div class="col-md-6 col-lg-3">
                    <div class="item ingredient text-center position-relative">

                        <i data-index="${i}" class="fa-solid fa-bowl-food fa-4x"></i>
                        <div data-index="${i}" class="d-flex flex-column justify-content-center align-items-center ">
                        <div><p  class="text-white fs-3">${meals[i].strIngredient}</p></div>
                        <div><p  class="text-white fs-6">${splitWord}</p></div>
                        
                        </div>
                    </div>
                </div>`
    
        }
        $("#main-recipes").append(recipes);
        $("#main-recipes").fadeIn(1000)

        $(".ingredient").click(function(e){
            $("#special-recipe").children().remove()
            let clickedIndex = $(e.target).attr("data-index");
            let clickedMeal = meals[clickedIndex]
            keyName = clickedMeal.strIngredient;
            $("#main-recipes").children().remove();
            console.log(keyName)
            getMainMenu("s",keyName);
        })

        
}

// function to fire when we click on the contact us side nav bar
$("#contact").click(function(){
    $("#special-recipe").fadeOut(10);
    $("#main-recipes").fadeOut(10);
    $("#contact-us").fadeIn(1000);
    $("#search-side-nav").css("display","none");
    closeSideNav()
   })
 
   

    

    // $("#u-pass2").focus(function(){
    //     $(".error-pass2").text("Enter valid Repassword");
    //     $(".error-pass2").css("display","block");
    // })

// validation section

let userName = $("#u-name");
let userMail = $("#u-mail");
let userPhone =$("#u-phone");
let userAge =$("#u-age");
let userPass1=  $("#u-pass1");
let userPass2=  $("#u-pass2");

function validationUserName(){
    let regUser= /^[a-z]{4,8}$/;
    if(regUser.test(userName.val()) === true){
        return true;
    }else{
        return false;
    }
}

$("#u-name").keyup(function(){
    if(validationUserName() === true){
        $("#u-name").removeClass("form-error");
        $("#u-name").addClass("form-success");
    }else{
        $(".error-name").text("Special Characters and Numbers not allowed max 8 chars");
        $(".error-name").css("display","block");
        $("#u-name").addClass("form-error");
        $("#u-name").removeClass("form-success");
    }
})

function validationUserEmail(){
    let regMail= /^[a-z]{1,}@[a-z]{1,}(.com|.org)$/;
    if(regMail.test(userMail.val()) === true){
        return true;
    }else{
        return false;
    }
}

$("#u-mail").keyup(function(){
    if(validationUserEmail() === true){
        $("#u-mail").removeClass("form-error");
        $("#u-mail").addClass("form-success");
    }else{
        $(".error-email").text("Enter valid email. *Ex: xxx@yyy.zzz");
        $(".error-email").css("display","block");
        $("#u-mail").addClass("form-error");
        $("#u-mail").removeClass("form-success");
    }
})

function validationUserPhone(){
    let regPhone= /[0-9]{10}/;
    if(regPhone.test(userPhone.val()) === true){
        return true;
    }else{
        return false;
    }
}
$("#u-phone").keyup(function(){
    if(validationUserPhone() === true){
        $("#u-phone").removeClass("form-error");
        $("#u-phone").addClass("form-success");
    }else{
        $(".error-phone").text("Enter valid Phone Number 10 #'s");
        $(".error-phone").css("display","block");
        $("#u-phone").addClass("form-error");
        $("#u-phone").removeClass("form-success");
    }
})

function validationUserAge(){
    let regAge= /^[1-9][0-9]?$|^100$/;
    if(regAge.test(userAge.val()) === true){
        return true;
    }else{
        return false;
    }
}
$("#u-age").keyup(function(){
    if(validationUserAge() === true){
        $("#u-age").removeClass("form-error");
        $("#u-age").addClass("form-success");
    }else{
        $(".error-age").text("Enter valid Age");
        $(".error-age").css("display","block");
        $("#u-age").addClass("form-error");
        $("#u-age").removeClass("form-success");
    }
})

function validationUserPass(){
    let regPass= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regPass.test(userPass1.val()) === true){
        return true;
    }else{
        return false;
    }
}
$("#u-pass1").keyup(function(){
    if(validationUserPass() === true){
        $("#u-pass1").removeClass("form-error");
        $("#u-pass1").addClass("form-success");
    }else{
        $(".error-pass1").text("Enter valid password *Minimum eight characters, at least one letter and one number:*");
        $(".error-pass1").css("display","block");
        $("#u-pass1").addClass("form-error");
        $("#u-pass1").removeClass("form-success");
    }
})

$("#u-pass2").keyup(function(){
    if(validationUserPass() === true && userPass1.val() === userPass2.val()){
        $("#u-pass2").removeClass("form-error");
        $("#u-pass2").addClass("form-success");
    }else{
         $(".error-pass2").text("Enter valid Repassword");
        $(".error-pass2").css("display","block");
        $("#u-pass2").addClass("form-error");
        $("#u-pass2").removeClass("form-success");
    }
})








// end main menu



})



