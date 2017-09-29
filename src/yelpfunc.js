// yelpfunc.js

function processYelpData(restaurants){

//average stars of all of the businesses
  const totalstars = restaurants.reduce(function(x, y) {
    if (y.stars){
      return x += y.stars;
    }
    else {
      return x;
    }
  }, 0);
  const averagestars = (totalstars / restaurants.length).toFixed(2);
  console.log('* Average rating of the dataset: ' + averagestars);


//names of all pizza places in Las Vegas
  const onlyNevada = restaurants.filter(function (ele) {
    return ele.state === "NV";
  });

  const onlyLasVegas = onlyNevada.filter(function (ele){
    return ele.city === "Las Vegas";
  });


  const onlypizza = onlyLasVegas.filter(function(ele){
    return (ele.categories).includes("Pizza");
  });


  const starspizza = onlypizza.map(function(onlypizza){
    return onlypizza.stars;
  });
  console.log('* All restaurants in Las Vegas, NV that serve pizza:' + '\n' + '    * ' + onlypizza[0].name
  + ' (* '+ starspizza[0] + ' stars' + ' *)' +
  '\n' + '    * ' + onlypizza[1].name
  + ' (* '+ starspizza[1] + ' stars' + ' *)'
  + '\n' + '    * ' + onlypizza[2].name
  + ' (* '+ starspizza[2] + ' stars' + ' *)' + '\n' + '    * ' +
  onlypizza[3].name + ' (* '+ starspizza[3] + ' stars' + ' *)'
  + '\n' + '    * ' + onlypizza[4].name + ' (* '+ starspizza[4] + ' stars' + ' *)');

//finds Top two Mexican places
  const Mexicanplaces = restaurants.filter(function(ele){
    if (ele.categories){
      return ele.categories.includes("Mexican");
    }
    else {
      return undefined;
    }
  }, 0);

  const orderMexicanplaces = Mexicanplaces.sort(function(x, y){
    return (y.review_count - x.review_count);
  });


  const toptwoMexicanplaces = orderMexicanplaces.map(function(ele){
    return (ele.name);
  });
  console.log('* The two highest reviewed Mexican serving restaurants are: ' +
  '\n' + '   * ' + toptwoMexicanplaces[0] + ', ' + orderMexicanplaces[0].city + ' ' +
  '(' + orderMexicanplaces[0].state + '),' + orderMexicanplaces[0].review_count +
  '(* ' + orderMexicanplaces[0].stars + ' *)'+ '\n' + '   * ' + toptwoMexicanplaces[1] + ', ' + orderMexicanplaces[1].city +
  '(' + orderMexicanplaces[1].state + '),' + orderMexicanplaces[1].review_count +
  '(* ' + orderMexicanplaces[1].stars + ' *)');

//finds the most common name in dataset
  const nameObj = {};

  /*const sortalpha = restaurants.sort(function(x, y){
    if(y.name < x.name) {
      return -1;
    }
    else if(x.name > y.name) {
      return 1;
    }
    console.log(sortalpha);
  });*/

  restaurants.forEach(function(ele){
    if (!ele.name){
      nameObj[ele.name] = 1;
    }
    else {
      return nameObj[ele.name] += 1;
    }
  });
  //console.log(nameObj);

  //Restaurant count by state
  const restaurantcount = restaurants.map(function(ele){
    return ele.name;
  });
  //console.log(restaurantcount);
}

module.exports = {processYelpData};
