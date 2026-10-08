const productos = [
  { id: "fernet_branca", nombre: "Fernet Branca", precio: 380 },
  { id: "casa_real", nombre: "Casa Real", precio: 300 },
  { id: "don_lucho", nombre: "Don Lucho", precio: 400 },
  { id: "jager", nombre: "Jager", precio: 500 },
  { id: "gin_amazonico", nombre: "Gin Amazónico", precio: 380 },
  { id: "gin_frutilla", nombre: "Gin Frutilla", precio: 400 },
  { id: "gin_frutos_del_bosque", nombre: "Gin Frutos del Bosque", precio: 400 },
  { id: "gin_beefeater_pink", nombre: "Gin Beefeater Pink", precio: 550 },
  { id: "gin_andino", nombre: "Gin Andino", precio: 380 },
  { id: "vodka", nombre: "Vodka", precio: 380 },
  { id: "corona", nombre: "Corona", precio: 30 },
  { id: "huari", nombre: "Huari", precio: 30 },
  { id: "coca_cola_2l", nombre: "Coca-Cola 2L", precio: 30 },
  { id: "sprite_2l", nombre: "Sprite 2L", precio: 30 },
  { id: "schweppes", nombre: "Schweppes 1,5L", precio: 30 },
  { id: "schweppes_990ml", nombre: "Schweppes 990ml", precio: 15 },
  { id: "agua_tonica", nombre: "Agua Tónica", precio: 30 },
  { id: "agua_con_gas", nombre: "Agua con Gas", precio: 30 },
  { id: "red_bull", nombre: "Red Bull", precio: 35 },
  { id: "agua_pequena", nombre: "Agua Pequeña", precio: 15 },
  { id: "agua_2l", nombre: "Agua 2L", precio: 20 },
  { id: "wiston_grande", nombre: "Wiston Grande", precio: 50 },
  { id: "wiston_pequeno", nombre: "Wiston Pequeño", precio: 30 },
  { id: "encendedor", nombre: "Encendedor", precio: 5 },
  { id: "havana_especial", nombre: "Havana Especial", precio: 300 },
  { id: "havana_club_7_anos", nombre: "Havana Club 7 Años", precio: 400 },
  { id: "golden", nombre: "Golden", precio: 20 },
  { id: "pacenita", nombre: "Paceñita", precio: 20 },
  { id: "olmeca_chocolate", nombre: "Olmeca Chocolate", precio: 400 },
  { id: "olmeca_reposado", nombre: "Olmeca Reposado", precio: 450 },
  { id: "johnnie_walker_red_label", nombre: "Johnnie Walker Red Label", precio: 550 },
  { id: "johnnie_walker_black_label", nombre: "Johnnie Walker Black Label", precio: 750 },
  { id: "johnnie_walker_double_black", nombre: "Johnnie Walker Double Black", precio: 900 },
  { id: "johnnie_walker_blue_label", nombre: "Johnnie Walker Blue Label", precio: 4000 }
];

const ventasDirectas = [
  { id: "shots", nombre: "Shots", precio: 30 },
  { id: "jager_boom", nombre: "Gravity Bomb", precio: 60 },
  { id: "clasicos", nombre: "Clásicos", precio: 50 },
  { id: "pink_orbit", nombre: "Pink Orbit", precio: 60 },
  { id: "yarda_singanera", nombre: "Yarda Singanera", precio: 50 },
  { id: "yarda_XL", nombre: "Yarda XL", precio: 180 }
];

const combos = [
  {
    id: "combo_fernet_branca",
    nombre: "Combo Fernet Branca",
    base: "fernet_branca",
    mix: "coca_cola_2l",
    precio: 380
  },
  {
    id: "combo_casa_real",
    nombre: "Combo Casa Real",
    base: "casa_real",
    mix: "sprite_2l",
    precio: 300,
    requiereMix: true
  },
  {
    id: "combo_don_lucho",
    nombre: "Combo Don Lucho",
    base: "don_lucho",
    mix: "sprite_2l",
    precio: 400,
    requiereMix: true
  },
  {
    id: "combo_vodka",
    nombre: "Combo Vodka",
    base: "vodka",
    mix: "sprite_2l",
    precio: 380
  },
  {
    id: "combo_havana_especial",
    nombre: "Combo Havana Especial",
    base: "havana_especial",
    mix: "coca_cola_2l",
    precio: 300
  },
  {
    id: "combo_havana_club_7_anos",
    nombre: "Combo Havana Club 7 Años",
    base: "havana_club_7_anos",
    mix: "coca_cola_2l",
    precio: 400
  },
  {
    id: "combo_jager",
    nombre: "Combo Jager (+2 Red Bull)",
    base: "jager",
    mix: "red_bull",
    cantMix: 2,
    precio: 500
  },
  {
    id: "combo_gin_amazonico",
    nombre: "Combo Gin Amazónico",
    base: "gin_amazonico",
    mix: "agua_tonica",
    cantMix: 1,
    precio: 380
  },
  {
    id: "combo_gin_frutilla",
    nombre: "Combo Gin Frutilla",
    base: "gin_frutilla",
    mix: "agua_tonica",
    cantMix: 1,
    precio: 400
  },
  {
    id: "combo_gin_frutos_del_bosque",
    nombre: "Combo Gin Frutos del Bosque",
    base: "gin_frutos_del_bosque",
    mix: "agua_tonica",
    cantMix: 1,
    precio: 400
  },
  {
    id: "combo_gin_andino",
    nombre: "Combo Gin Andino",
    base: "gin_andino",
    mix: "agua_tonica",
    cantMix: 1,
    precio: 380
  },
  {
    id: "combo_gin_beefeater_pink",
    nombre: "Combo Gin Beefeater Pink",
    base: "gin_beefeater_pink",
    mix: "agua_tonica",
    cantMix: 1,
    precio: 550
  },
  {
    id: "combo_johnnie_walker_red_label",
    nombre: "Combo Johnnie Walker Red Label",
    base: "johnnie_walker_red_label",
    mix: "agua_2l",
    precio: 550
  },
  {
    id: "combo_johnnie_walker_black_label",
    nombre: "Combo Johnnie Walker Black Label",
    base: "johnnie_walker_black_label",
    mix: "agua_2l",
    precio: 750
  },
  {
    id: "combo_johnnie_walker_double_black",
    nombre: "Combo Johnnie Walker Double Black",
    base: "johnnie_walker_double_black",
    mix: "agua_2l",
    precio: 900
  },
  {
    id: "combo_johnnie_walker_blue_label",
    nombre: "Combo Johnnie Walker Blue Label",
    base: "johnnie_walker_blue_label",
    mix: "agua_2l",
    precio: 4000
  }
];

// IDs anteriores conservados para que los datos guardados no se pierdan
// después de corregir nombres, duplicados y acentos en el catálogo.
const ID_ALIASES = {
  fernet_branca: ["f_branca"],
  gin_amazonico: ["g_amaz"],
  gin_frutilla: ["g_frut"],
  gin_frutos_del_bosque: ["g_bosq"],
  gin_beefeater_pink: ["g_bee"],
  gin_andino: ["g_andin"],
  coca_cola_2l: ["coca"],
  sprite_2l: ["sprite"],
  schweppes: ["schwepp"],
  schweppes_990ml: ["schweppes_990"],
  red_bull: ["monster"],
  agua_tonica: ["tonica"],
  agua_con_gas: ["agua_gas"],
  agua_pequena: ["agua_p"],
  wiston_grande: ["c2_gr"],
  wiston_pequeno: ["c1_gr"],
  dos_click_pequeno: ["c2_peq"],
  encendedor: ["encend"],
  havana_especial: ["h_e"],
  havana_club_7_anos: ["h_e7añ"],
  golden: ["g_olden"],
  pacenita: ["c1_peq"],
  olmeca_chocolate: ["o_choco"],
  olmeca_reposado: ["o_reposado"],
  shots: ["v_shots"],
  jager_boom: ["v_jagerb"],
  clasicos: ["v_clasicos"],
  pink_orbit: ["v_canelazo"],
  maracuyager: ["v_marager"],
  pachajito: ["v_pachajito"],
  llamita: ["v_llamita"],
  yarda_singanera: ["v_pachapars"]
};

function mostrarNotificacion(mensaje, tipo = "ok") {
  const noti = document.getElementById("notificacion");

  if (!noti) return;

  // Cambia el color según el tipo
  if (tipo === "ok") {
    noti.style.backgroundColor = "#4CAF50";
  } else if (tipo === "faltante") {
    noti.style.backgroundColor = "#f44336";
  } else if (tipo === "sobrante") {
    noti.style.backgroundColor = "#ff9800";
  } else {
    noti.style.backgroundColor = "#2196F3";
  }

  noti.innerText = mensaje;
  noti.style.display = "block";

  // Ocultar después de 4 segundos
  setTimeout(() => {
    noti.style.display = "none";
  }, 4000);
}

function inicializar() {
  const tbodyInv = document.getElementById("tabla-body");

  if (tbodyInv) {
    productos.forEach((p) => {
      tbodyInv.innerHTML += `
        <tr id="row-${p.id}">
          <td class="prod-col">${p.nombre}</td>

          <td>
            <div class="multi-cont">
              ${Array(5)
                .fill(0)
                .map(
                  () =>
                    `<input type="number" class="input-entrega" oninput="manejarInput()">`
                )
                .join("")}
            </div>
          </td>

          <td class="td-dev">
            <input
              type="number"
              class="input-dev"
              oninput="manejarInput()"
            >
          </td>

          <td
            class="td-uti"
            id="uti-${p.id}">
          </td>
        </tr>
      `;
    });
  }

  const tbodyVentas = document.getElementById("ventas-directas-body");

  if (tbodyVentas) {
    ventasDirectas.forEach((v) => {
      tbodyVentas.innerHTML += `
        <tr>
          <td class="prod-col">
            ${v.nombre}
          </td>

          <td style="width:50px; background:#f9f9f9;">
            ${v.precio} Bs
          </td>

          <td>
            <input
              type="number"
              class="input-venta"
              id="vd-${v.id}"
              oninput="manejarInputDirecta('${v.id}', ${v.precio})"
            >
          </td>

          <td
            id="total-${v.id}"
            style="text-align:center; font-weight:bold;">
          </td>
        </tr>
      `;
    });
  }

  const tbodyRes = document.getElementById("resumen-body");

  if (tbodyRes) {
    combos.forEach((c) => {
      tbodyRes.innerHTML += `
        <tr id="res-${c.id}">
          <td>${c.nombre}</td>
          <td class="c-cant"></td>
          <td>${c.precio}</td>
          <td class="c-sub"></td>
        </tr>
      `;
    });

    const idsBasesCombos = combos.flatMap((c) =>
      Array.isArray(c.base) ? c.base : [c.base]
    );

    productos.forEach((p) => {
      if (!idsBasesCombos.includes(p.id)) {
        tbodyRes.innerHTML += `
          <tr id="res-s-${p.id}">
            <td>${p.nombre}</td>
            <td class="c-cant"></td>
            <td>${p.precio}</td>
            <td class="c-sub"></td>
          </tr>
        `;
      }
    });
  }

  cargarDatos();
}

function manejarInputDirecta(id, precio) {
  const input = document.getElementById("vd-" + id);

  if (!input) return;

  const cantidad = Number(input.value) || 0;
  const total = cantidad * precio;

  const totalTd = document.getElementById("total-" + id);

  if (totalTd) {
    totalTd.innerText = total ? total + " Bs" : "";
  }

  const venta = ventasDirectas.find((v) => v.id === id);

  if (venta && venta.mix) {
    const row = document.getElementById("row-" + venta.mix);

    if (row) {
      const inputs = row.querySelectorAll(".input-entrega");

      let actual = Number(inputs[0].value) || 0;

      inputs[0].value = Math.max(
        0,
        actual - cantidad * (venta.cantMix || 1)
      );
    }
  }

  calcular();
  guardarDatos();
}

function manejarInput() {
  calcular();
  guardarDatos();
}

function getSavedValue(section, id) {
  if (!section || typeof section !== "object") {
    return undefined;
  }

  if (Object.prototype.hasOwnProperty.call(section, id)) {
    return section[id];
  }

  const oldIds = ID_ALIASES[id] || [];

  const oldId = oldIds.find((candidate) =>
    Object.prototype.hasOwnProperty.call(section, candidate)
  );

  return oldId ? section[oldId] : undefined;
}

function calcular() {
  let utiReal = {};
  let total = 0;

  productos.forEach((p) => {
    const row = document.getElementById("row-" + p.id);

    if (!row) return;

    let ent = 0;

    row.querySelectorAll(".input-entrega").forEach((i) => {
      if (i.value !== "") {
        ent += Number(i.value);
      }
    });

    const devInput = row.querySelector(".input-dev");
    let dev = Number(devInput?.value) || 0;

    utiReal[p.id] = Math.max(0, ent - dev);

    const utiTd = document.getElementById("uti-" + p.id);

    if (utiTd) {
      utiTd.innerText =
        ent === 0 && devInput?.value === ""
          ? ""
          : utiReal[p.id];
    }
  });

  let copia = { ...utiReal };

  [...combos]
    .sort(
      (a, b) =>
        (b.prioridad || 0) - (a.prioridad || 0)
    )
    .forEach((c) => {
      let n = 0;

      if (Array.isArray(c.base)) {
        c.base.forEach((b) => {
          n += copia[b] || 0;
          copia[b] = 0;
        });
      } else {
        const baseDisponible = copia[c.base] || 0;

        // La cantidad de combos la determina el producto base utilizado.
        // El mixer acompaña al combo, pero NO limita la cantidad.
        n = baseDisponible;

        copia[c.base] = Math.max(
          0,
          baseDisponible - n
        );
      }

      if (n > 0) {
        const mixUsado =
          n * (c.cantMix || 1);

        if (copia[c.mix] !== undefined) {
          copia[c.mix] = Math.max(
            0,
            copia[c.mix] - mixUsado
          );
        }
      }

      const tr = document.getElementById(
        "res-" + c.id
      );

      if (tr) {
        const cantTd =
          tr.querySelector(".c-cant");

        const subTd =
          tr.querySelector(".c-sub");

        if (cantTd) {
          cantTd.innerText = n || "";
        }

        if (subTd) {
          subTd.innerText =
            n ? n * c.precio : "";
        }
      }

      total += n * c.precio;
    });

  const idsBasesCombos = combos.flatMap((c) =>
    Array.isArray(c.base) ? c.base : [c.base]
  );

  productos.forEach((p) => {
    if (!idsBasesCombos.includes(p.id)) {
      const tr = document.getElementById(
        "res-s-" + p.id
      );

      if (!tr) return;

      const s = copia[p.id] || 0;

      const cantTd =
        tr.querySelector(".c-cant");

      const subTd =
        tr.querySelector(".c-sub");

      if (cantTd) {
        cantTd.innerText = s || "";
      }

      if (subTd) {
        subTd.innerText =
          s ? s * p.precio : "";
      }

      total += s * p.precio;
    }
  });

  ventasDirectas.forEach((v) => {
    const input = document.getElementById(
      "vd-" + v.id
    );

    if (!input) return;

    const cant = Number(input.value) || 0;

    total += cant * v.precio;
  });

  const descuentoInput =
    document.getElementById("descuento");

  const descuento = descuentoInput
    ? Number(descuentoInput.value) || 0
    : 0;

  const totalCaja = Math.max(
    0,
    total - descuento
  );

  const granTotal =
    document.getElementById("gran-total");

  if (granTotal) {
    granTotal.innerText =
      totalCaja > 0
        ? totalCaja + " "
        : "";
  }

  mostrarEstadoCaja(false);
}

function guardarDatos() {
  const cajeroInput =
    document.getElementById("cajero");

  const barraInput =
    document.getElementById("barra");

  const fechaInput =
    document.getElementById("fecha");

  const descuentoInput =
    document.getElementById("descuento");

  const plataRealInput =
    document.getElementById("plata-real");

  const data = {
    header: {
      cajero: cajeroInput?.value || "",
      barra: barraInput?.value || "",
      fecha: fechaInput?.value || ""
    },

    suministros: {},

    ventasDirectas: {},

    caja: {
      descuento:
        descuentoInput?.value || "",

      plataReal:
        plataRealInput?.value || ""
    }
  };

  productos.forEach((p) => {
    const row = document.getElementById(
      "row-" + p.id
    );

    if (!row) return;

    data.suministros[p.id] = {
      entregas: Array.from(
        row.querySelectorAll(".input-entrega")
      ).map((i) => i.value),

      devolucion:
        row.querySelector(".input-dev")?.value || ""
    };
  });

  ventasDirectas.forEach((v) => {
    const input = document.getElementById(
      "vd-" + v.id
    );

    if (input) {
      data.ventasDirectas[v.id] =
        input.value;
    }
  });

  localStorage.setItem(
    "pacha_vFinal_Full",
    JSON.stringify(data)
  );
}

function cargarDatos() {
  const stored = localStorage.getItem(
    "pacha_vFinal_Full"
  );

  if (!stored) return;

  const data = JSON.parse(stored);

  const header = data.header || {};
  const suministros = data.suministros || {};
  const guardadasDirectas =
    data.ventasDirectas || {};
  const cajaGuardada = data.caja || {};

  const cajeroInput =
    document.getElementById("cajero");

  if (cajeroInput) {
    cajeroInput.value =
      header.cajero || "";
  }

  const barraInput =
    document.getElementById("barra");

  if (barraInput) {
    barraInput.value =
      header.barra || "";
  }

  const fechaInput =
    document.getElementById("fecha");

  if (fechaInput) {
    fechaInput.value =
      header.fecha || "";
  }

  productos.forEach((p) => {
    const row = document.getElementById(
      "row-" + p.id
    );

    if (!row) return;

    const savedProduct =
      getSavedValue(
        suministros,
        p.id
      );

    if (savedProduct) {
      const inputs =
        row.querySelectorAll(
          ".input-entrega"
        );

      (savedProduct.entregas || []).forEach(
        (v, i) => {
          if (inputs[i]) {
            inputs[i].value = v;
          }
        }
      );

      const devInput =
        row.querySelector(".input-dev");

      if (devInput) {
        devInput.value =
          savedProduct.devolucion || "";
      }
    }
  });

  ventasDirectas.forEach((v) => {
    const input =
      document.getElementById(
        "vd-" + v.id
      );

    const savedValue =
      getSavedValue(
        guardadasDirectas,
        v.id
      );

    if (
      input &&
      savedValue !== undefined
    ) {
      input.value = savedValue;

      // Volver a calcular total visual
      const cantidad =
        Number(input.value) || 0;

      const totalTd =
        document.getElementById(
          "total-" + v.id
        );

      if (
        totalTd &&
        cantidad > 0
      ) {
        totalTd.innerText =
          cantidad * v.precio +
          " Bs";
      }
    }
  });

  const descuentoInput =
    document.getElementById(
      "descuento"
    );

  if (
    descuentoInput &&
    cajaGuardada.descuento !== undefined
  ) {
    descuentoInput.value =
      cajaGuardada.descuento;
  }

  const plataRealInput =
    document.getElementById(
      "plata-real"
    );

  if (
    plataRealInput &&
    cajaGuardada.plataReal !== undefined
  ) {
    plataRealInput.value =
      cajaGuardada.plataReal;
  }

  // Actualiza los totales
  calcular();

  // Volver a calcular el estado
  // si ya existe plata real.
  if (
    plataRealInput &&
    plataRealInput.value !== ""
  ) {
    mostrarEstadoCaja(false);
  }
}

function borrarTodo() {
  // Limpiar todos los inputs
  document
    .querySelectorAll("input")
    .forEach((input) => {
      input.value = "";
    });

  // Limpiar resultados
  document
    .querySelectorAll(
      ".td-uti, .c-cant, .c-sub, #gran-total, #estado-caja, [id^='total-']"
    )
    .forEach((td) => {
      td.innerText = "";
    });

  // Limpiar localStorage
  localStorage.removeItem(
    "pacha_vFinal_Full"
  );
}

function descargarPDF() {
  const element =
    document.getElementById(
      "documento"
    );

  if (!element) return;

  // Tomar los valores tal como
  // fueron escritos por el usuario.
  const barra =
    document
      .getElementById("barra")
      ?.value.trim() || "";

  const fecha =
    document
      .getElementById("fecha")
      ?.value.trim() || "";

  // Limpiar caracteres no válidos
  // para el nombre del archivo.
  const limpiar = (txt) =>
    txt
      .replace(/\s+/g, "_")
      .replace(
        /[\/\\:*?"<>|]/g,
        ""
      );

  const partes = [
    "MAMAPOTOSI",
    limpiar(barra),
    limpiar(fecha)
  ].filter(Boolean);

  const nombreArchivo =
    partes.join("_") + ".pdf";

  const opt = {
    margin: 0,

    filename: nombreArchivo,

    image: {
      type: "jpeg",
      quality: 1
    },

    html2canvas: {
      scale: 2,
      scrollY: 0,
      useCORS: true
    },

    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save();
}

// Esta función solo se llama
// con onchange del input de plata real.
function mostrarEstadoCaja(
  notificar = false
) {
  const plataRealInput =
    document.getElementById(
      "plata-real"
    );

  const granTotal =
    document.getElementById(
      "gran-total"
    );

  const estado =
    document.getElementById(
      "estado-caja"
    );

  const cajero =
    document.getElementById(
      "cajero"
    )?.value || "Cajero";

  if (
    !plataRealInput ||
    !granTotal ||
    !estado
  ) {
    return;
  }

  const valorIngresado =
    plataRealInput.value.trim();

  if (!valorIngresado) {
    estado.innerText = "";
    return;
  }

  const plataReal =
    Number(valorIngresado);

  const totalCaja =
    Number.parseFloat(
      granTotal.innerText
    ) || 0;

  if (!Number.isFinite(plataReal)) {
    estado.innerText =
      "Ingresa un monto válido";

    return;
  }

  const diferencia =
    Math.round(
      (plataReal - totalCaja) * 100
    ) / 100;

  if (
    Math.abs(diferencia) < 0.01
  ) {
    estado.innerHTML =
      "<span style='color:green'>CUADRA ✔</span>";

    if (notificar) {
      mostrarNotificacion(
        `¡Felicidades ${cajero}! Cuadraste a la perfección.`,
        "ok"
      );
    }
  } else {
    if (diferencia > 0) {
      estado.innerHTML =
        "<span style='color:orange'>SOBRANTE  (+" +
        diferencia.toFixed(2) +
        " Bs)</span>";

      if (notificar) {
        mostrarNotificacion(
          `No es preocupante ${cajero}, tienes sobrante de ${diferencia.toFixed(2)} Bs.`,
          "sobrante"
        );
      }
    } else {
      const faltante =
        Math.abs(diferencia);

      estado.innerHTML =
        "<span style='color:red'>FALTANTE  (" +
        faltante.toFixed(2) +
        " Bs)</span>";

      if (notificar) {
        mostrarNotificacion(
          `Qué mal ${cajero}, tienes un faltante de ${faltante.toFixed(2)} Bs.`,
          "faltante"
        );
      }
    }
  }
}


