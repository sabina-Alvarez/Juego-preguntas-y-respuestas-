
let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
link.media = "all";
document.getElementsByTagName("head")[0].appendChild(link);

baseDeDatosLogin = JSON.parse(localStorage.getItem("login"));

let usuarioLogueado


if (!baseDeDatosLogin) {
  cargarDatosInicialesDeLaBaseDeDatosLogin();
}

function guardarDatosDeLaBaseDeDatosLogin() {
  localStorage.setItem("login", JSON.stringify(baseDeDatosLogin));
}

function cargarDatosInicialesDeLaBaseDeDatosLogin() {
  baseDeDatosLogin = {
    "sabi": {
      //Aquí se ponen los elementos por defecto del usuario
      contraseña: "abc",
      puntaje: 0,
    },
    "perez": {
      //Aquí se ponen los elementos por defecto del usuario
      contraseña: "123",
      puntaje: 0,
    },
    juan: {
      //Aquí se ponen los elementos por defecto del usuario
      contraseña: "456",
      puntaje: 0,
    },
  };
}

async function menu() {
  opción_menu = -1;
  await swal.fire({
    title: "Menú",
    showConfirmButton: false,
    html: `
        <button class="swal2-confirm swal2-styled" onclick='opción_menu=0;Swal.close()'>
            Registrar nuevo usuario
        </button>
        <br>
        <button class="swal2-confirm swal2-styled" onclick='opción_menu=1;Swal.close()'>
            Login
        </button>
        `,
  });
  switch (opción_menu) {
    case 0:
      registrarNuevoUsuario();
      break;
    case 1:
      login();
      break;
    default:
      await menu();
      break;
  }
}

async function mostrarUsuariosPorTabla(...propiedades) {
  if(!usuarioLogueado){
    return
  }
  let html = `
  <table class="table table-light table-striped">
    <theader>
    <th>
      Usuario
    </th>
  `;
  if (propiedades[0] == "*") {
    for (const usuario in baseDeDatosLogin) {
      for (const propiedad in baseDeDatosLogin[usuario]) {
        html += "<th>";
        html += propiedad;
        html += "</th>";
      }
      break;
    }
  } else {
    for (const propiedad of propiedades) {
      html += "<th>";
      html += propiedad;
      html += "</th>";
    }
  }
  html += "</theader><tbody>";
  for (const usuario in baseDeDatosLogin) {
    html += "<tr>";
    html += "<td>";
    html += usuario;
    html += "</td>";
    if (propiedades[0] == "*") {
      for (const propiedad in baseDeDatosLogin[usuario]) {
        html += "<td>";
        html += baseDeDatosLogin[usuario][propiedad];
        html += "</td>";
      }
    } else {
      for (const propiedad of propiedades) {
        html += "<td>";
        html += baseDeDatosLogin[usuario][propiedad];
        html += "</td>";
      }
    }

    html += "</tr>";
  }
  await swal.fire({
    text: "Usuarios",
    confirmButtonText: "Cerrar",
    html,
  });
}

async function registrarNuevoUsuario() {
  opción_registrarNuevoUsuario = -1;
  await swal.fire({
    title: "Registrar",
    showConfirmButton: false,
    html: `
        <input class="swa-input" placeholder="Usuario" id="usuario">
        <input type="password" class="swa-input" placeholder="Contraseña" id="contraseña">
        <button class="swal2-confirm swal2-styled" onclick='opción_registrarNuevoUsuario=0;Swal.clickConfirm()'>
            Crear
        </button>
        <button class="swal2-confirm swal2-styled" onclick='opción_registrarNuevoUsuario=1;Swal.close()'>
            Cancelar
        </button>
        `,
    preConfirm: () => {
      let usuario = document.getElementById("usuario").value;
      let contraseña = document.getElementById("contraseña").value;
      if (!usuario) {
        Swal.showValidationMessage("No hay usuario");
        return false;
      }
      if (!contraseña) {
        Swal.showValidationMessage("No hay contraseña");
        return false;
      }
      baseDeDatosLogin[usuario] = {};
      baseDeDatosLogin[usuario].contraseña = contraseña;
      baseDeDatosLogin[usuario].puntaje = 0;
      guardarDatosDeLaBaseDeDatosLogin();
      return true;
    },
  });
  switch (opción_registrarNuevoUsuario) {
    case 0:
      menu();
      break;
    case 1:
      menu();
      break;
    default:
      menu();
      break;
  }
}

async function login() {
  await swal.fire({
    title: "Bienvenido",
    confirmButtonText: "Login",
    html: `
        <div style="margin:px">
            <input class="swal2-input" placeholder="usuario" id="usuario">
            <input type="password" class="swal2-input" placeholder="contraseña" id="contraseña">
        </div>
        `,
    preConfirm: () => {
      let usuario = document.getElementById("usuario").value;
      let contraseña = document.getElementById("contraseña").value;
      if (!usuario) {
        Swal.showValidationMessage("No hay usuario");
        return false;
      }
      if (!contraseña) {
        Swal.showValidationMessage("No hay contraseña");
        return false;
      }
      let datos = baseDeDatosLogin[usuario];
      if (!datos) {
        Swal.showValidationMessage("El usuario no existe");
        return false;
      }
      if (datos.contraseña != contraseña) {
        Swal.showValidationMessage("Contraseña incorrecta");
        return false;
      }
      usuarioLogueado = datos
      return true;
    },
  });
}
