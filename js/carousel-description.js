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
        participantDescription.textContent = "Soy un estudiante que se encuentra en el último semestre de la carrera de Ingeniería Mecatrónica en la Universidad Militar Nueva Granada (UMNG). Formo parte del equipo especializado en control y electrónica. Mi labor es una fuente de pasión y dedicación, respaldada por un sólido conocimiento en áreas clave, tales como programación y diseño asistido por computadora (CAD).";
        break;
      case "Johan Medina":
        participantDescription.textContent = "Se encuentra en el último semestre de la carrera de Ingeniería Mecatrónica en la UMNG. Ocupa el rol de líder en el área de mecánica y contribuye activamente en el equipo de tecnología de la información (TI). Su entusiasmo y pasión se centran en la programación y el desarrollo de software";
        break;
      case "Diego Rayo":
        participantDescription.textContent = "Estudiante de último semestre de ingeniería mecatrónica. Hizo parte del  equipo de mecánica, control y  carrocería para la fabricación del carro. Su dedicación se centra en el área mecánica y es una persona que tiene buena disposición para trabajar en equipo y buena planificación de tiempos.";
        break;
      case "Jose Lopez":
        participantDescription.textContent = "Estudiante de ingeniería mecatronica, forma parte del equipo de mecánica y electrónica, encargado del diseño y construcción del chasis y la suspensión delantera, además de contribuir al diseño inicial de la parte eléctrica. Apasionado por el diseño mecatronico y el área de robótica.";
        break;
      case "Juan Hernandez":
        participantDescription.textContent = "Docente del programa de ingeniería mecatrónica, encargado de liderar al equipo y apoyar en los temas de diseño, ingeniería y manufactura para el desarrollo e implementación del sistema mecatrónico.";
        break;
      case "Laura Ajiaco":
        participantDescription.textContent = "Estudiante de último semestre de Ingeniería en Mecatrónica. Formó parte del equipo de mecánica y en la construcción de la carrocería. Su pasión y proactividad se encuentran principalmente en el área mecánica y en su fácil adaptación a entornos cambiantes.";
        break;
      case "Leidy Tolosa":
        participantDescription.textContent = "Descripción de Leidy Tolosa";
        break;
      case "Paula Iglesias":
        participantDescription.textContent = "María Paula Iglesias González, estudiante de pregrado de décimo semestre de ingeniería mecatrónica, estudiante de primer año de la maestría en ingeniería mecatrónica, scout. Encargada de la dirección, ser la project manager y conductora principal del vehículo";
        break;
      case "Sebastian Herrera":
        participantDescription.textContent = "Soy Sebastian Herrera Guzman, tecnologo en mantenimiento mecánica industrial y actualmente ingeniero mecatronica en formación cursando 10 semestre de la UMNG, cuya función principal en este proyecto fue apoyo en múltiples ares como diseñador de suspensión trasera y manufacturacio";
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
      case "Sebastian Ruiz":
        participantDescription.textContent = "Sebastian Alejandro Ruiz Gutierrez, estudiante de ingeniería Mecateonica de décimo semestre de la UMNG, encargado del modelado de la suspensión trasera, actualmente estudiante de maestría en ingenieria mecatronica de la UMNG";
        break;
        case "Daniel Muñoz":
        participantDescription.textContent = "Me llamo Daniel Muñoz, tengo 22 años, soy un full-stack developer, hablo inglés, francés y español que es mi lengua natal, me encanta la tecnología, por esta razón estoy a punto de acabar mi carrera en ingeniería mecátronica y espero estudiar e involucrarme en los nuevos avances tecnológicos del mundo, tratando de hacerlo un lugar mejor.";
        break;
        case "Brayan Escuraina":
        participantDescription.textContent = "Descripción de Brayan Escurina.";
        break;
      default:
        participantDescription.textContent =
          "Descripción de participante no encontrada";
        break;
    }
  }
});
