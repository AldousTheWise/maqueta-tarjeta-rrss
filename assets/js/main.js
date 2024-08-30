$(function () {

  //Objeto de datos de usuario.
  const userData = [
    {
      img: "assets/images/profile.jpg",
      nombre: "Aldo Yáñez",
      locacion: "Santiago de Chile",
      descripcion: "'Front-end dev en progreso. Contador de historias.'",
      rrSS: [
        {
          GitHub: "https://github.com/AldousTheWise",
          "Frontend Mentor":
            "https://www.frontendmentor.io/profile/AldousTheWise",
          Linkedin: "https://www.linkedin.com/in/aldoryanez/",
          Facebook: "https://www.facebook.com/aldo.yanezcl",
        },
      ],
    },
  ];
  
  //Captura del div.card desde el HTML;
  const card = $(".card");
   
  //Método para recorrer el array userData y capturar la informacion:

  userData.forEach((user) => {
    //Creacion del div.card-header:
    const cardHeader = $("<div>").addClass("card-header");

    //Creacion del img#card-img con src capturado del objeto:
    const cardImage = $("<img>").attr({
      src: user.img,
      id: "card-img",
    });

    //Creacion del h1#userName con texto capturado desde user.nombre:
    const userName = $("<h1>").text(user.nombre).attr("id", "userName");

    //Creacion del p#userLocation con texto capturado desde user.descripcion:
    const userLocation = $("<p>")
      .text(user.locacion)
      .attr("id", "userLocation");
    const userDescription = $("<p>")
      .text(user.descripcion)
      .attr("id", "userDescription");

    const cardBody = $("<div>").addClass("card-body");
    const socialLinks = $("<ul>").attr("id", "rrssList");
    const rrSS = user.rrSS[0];
    for (const key in rrSS) {
      const li = $("<li>").addClass("rrssItems");
      const a = $("<a>").attr("href", rrSS[key]).text(key);
      li.append(a);
      socialLinks.append(li);
    }

    cardHeader.append(cardImage, userName, userLocation, userDescription);
    cardBody.append(socialLinks);
    card.append(cardHeader, cardBody);
  });
});
