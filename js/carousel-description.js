document.addEventListener("DOMContentLoaded", function () {
  // Detecta el cambio de diapositiva en el carrusel
  const carousel = document.querySelector("#carouselExampleCaptions");
  const participantDescription = document.querySelector(
    "#participant-description"
  );

  carousel.addEventListener("slid.bs.carousel", function (event) {
    const activeImage = event.relatedTarget.querySelector("img");

    // Utiliza el atributo 'alt' de la imagen para identificar al participante
    const participantName = activeImage.getAttribute("alt");

    // Actualiza el párrafo de descripción con la descripción correspondiente
    updateParticipantDescription(participantName);
  });

  // Función para actualizar la descripción del participante
  function updateParticipantDescription(participantName) {
    switch (participantName) {
      case "Andres Baez":
        participantDescription.textContent = "Descripción de Andres Baez";
        break;
      case "Johan Medina":
        participantDescription.textContent = "Se encuentra en el último semestre de la carrera de Ingeniería Mecatrónica en la UMNG. Ocupa el rol de líder en el área de mecánica y contribuye activamente en el equipo de tecnología de la información (TI). Su entusiasmo y pasión se centran en la programación y el desarrollo de software";
        break;
      case "Diego Rayo":
        participantDescription.textContent = "Descripción de Diego Rayo";
        break;
      case "Jose Lopez":
        participantDescription.textContent = "Descripción de Jose Lopez";
        break;
      case "Juan Hernandez":
        participantDescription.textContent = "Descripción de Juan Hernandez";
        break;
      case "Laura Ajiaco":
        participantDescription.textContent = "Descripción de Laura Ajiaco";
        break;
      case "Leidy Tolosa":
        participantDescription.textContent = "Descripción de Leidy Tolosa";
        break;
      case "Paula Iglesias":
        participantDescription.textContent = "Descripción de Paula Iglesias";
        break;
      case "Sebastian Herrera":
        participantDescription.textContent = "Descripción de Sebastian Herrera";
        break;
      case "Sebastian Zarate":
        participantDescription.textContent = "Descripción de Sebastian Zarate";
        break;
      case "Diego Paipilla":
        participantDescription.textContent = "Estudiante de Ingeniería Mecatrónica, UMNG, 10 semestre. Encargado del sistema de frenos. Actualmente estudiante de intercambio en la UDEM, México";
        break;
      case "Nelson Gonzalez":
        participantDescription.textContent = "Descripción de Nelson Gonzalez";
        break;
      case "Sebastian Cruz":
        participantDescription.textContent = "Descripción de Sebastian Cruz";
        break;
      // Agrega más casos para otros participantes según sea necesario
      default:
        participantDescription.textContent =
          "Descripción de participante no encontrada";
        break;
    }
  }
});
