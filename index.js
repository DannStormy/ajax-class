$(document).ready(function(){
  $("button").click(function(){
    $.get("https://swapi.dev/api/people/", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
      console.log(":::::status:::::");
      console.log(status);
      console.log(":::::data:::::");
      let name;
      for(i in data.results){
        name = "<strong>" + "<p>" + data.results[i].name + "</p>" + "</strong>";
        let height = data.results[i].height
        let mass = data.results[i].mass
        let hair = data.results[i].hair_color
        let skin = data.results[i].skin_color
        $("table").append(
          '<tr>' +
          '<td>' + name + '</td>' +
          '<td>' + height + '</td>' +
          '<td>' + mass + '</td>' +
          '<td>' + hair + '</td>' +
          '<td>' + skin + '</td>'
          +'</tr>'
        )
      }
    });
  });
});
