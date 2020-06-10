//call the fetch function
fetch(' http://localhost:3000')
// fetch('https://stackbooks.stackroute.in/course/FSD-Immersive-Web-Fundamentals/startupFundingData.json')
.then(res => res.json())//response type
.then(data => console.log(data)); //log the data;
// .then(function(data){
    // var names =[] ;
    // for (var x in data){
    //     names.push(data[x].employee_name);
    // }
    // document.write(names);
    // console.log(data[0]);
// });//log the data;
// d3.json('http://localhost:3000', function(error, data) {
//   if (error) throw error;
//   console.log(data)
// })