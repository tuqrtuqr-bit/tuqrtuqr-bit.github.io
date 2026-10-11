// ============================================================
//  PERFILES DE DEMOSTRACIÓN DE TuQR
//  Aquí se cambian los datos de cada pulsera.
//  Usen SOLO datos inventados (nada de cédulas, direcciones
//  ni teléfonos reales).
//  - "id": lo que va en el QR (sin espacios ni tildes)
//  - "clave": contraseña de la información privada (demo)
// ============================================================

var PERFILES = {

  espinoza: {
    modelo: "TuQR Active", color: "#0E7C7B",
    nombre: "Santiago Espinoza", edad: "Estudiante · Sección 11-5",
    alergias: "Ninguna", alerta: "Ninguna",
    contactos: [ { nombre: "Mamá", telefono: "00000000" }, { nombre: "Papá", telefono: "00000000" } ],
    clave: "1234",
    privado: { medicamentos: "Ninguno", condiciones: "Ninguna", indicaciones: "Perfil de demostración del proyecto TuQR." }
  },

  sunsing: {
    modelo: "TuQR Active", color: "#2563EB",
    nombre: "Santiago Sunsing Leal", edad: "Estudiante · Sección 11-5",
    alergias: "Ninguna", alerta: "Ninguna",
    contactos: [ { nombre: "Mamá", telefono: "00000000" }, { nombre: "Papá", telefono: "00000000" } ],
    clave: "1234",
    privado: { medicamentos: "Ninguno", condiciones: "Ninguna", indicaciones: "Perfil de demostración del proyecto TuQR." }
  },

  esteban: {
    modelo: "TuQR Active",
    color: "#1F2933",
    nombre: "Esteban Mora",
    edad: "17 años",
    alergias: "Penicilina",
    alerta: "Ninguna",
    contactos: [
      { nombre: "Laura Mora (mamá)", telefono: "00000000" }
    ],
    clave: "1234",
    privado: {
      medicamentos: "Ninguno",
      condiciones: "Ninguna",
      indicaciones: "Practica ciclismo los fines de semana."
    }
  },

  rafael: {
    modelo: "TuQR Senior",
    color: "#3D5A80",
    nombre: "Rafael Jiménez",
    edad: "78 años",
    alergias: "Ninguna conocida",
    alerta: "Se desorienta con facilidad. Hablarle con calma.",
    contactos: [
      { nombre: "Carlos Jiménez (hijo)", telefono: "00000000" },
      { nombre: "Marta Jiménez (hija)", telefono: "00000000" }
    ],
    clave: "1234",
    privado: {
      medicamentos: "Medicamento para la presión (mañana)",
      condiciones: "Problemas de memoria",
      indicaciones: "No dejarlo solo. Llevarlo a un lugar con sombra mientras llega la familia."
    }
  },

  mateo: {
    modelo: "TuQR Kids",
    color: "#FF8A3D",
    nombre: "Mateo Solís",
    edad: "6 años",
    alergias: "Maní",
    alerta: "Ninguna",
    contactos: [
      { nombre: "Diego Solís (papá)", telefono: "00000000" }
    ],
    clave: "1234",
    privado: {
      medicamentos: "Ninguno",
      condiciones: "Ninguna",
      indicaciones: "Si se pierde, quedarse con él en un lugar visible y llamar a su papá."
    }
  }

};
