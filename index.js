// Abrir o crear una base de datos IndexedDB
var request = window.indexedDB.open('entregasDB', 1);
var db;

request.onerror = function(event) {
    console.error('Error al abrir la base de datos:', event.target.errorCode);
};

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore('entregas', { keyPath: 'id', autoIncrement:true });
};

var camaraStream = null;
var entregas = [];

// Función para abrir o cerrar el dropdown
function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active'); // Toggle class para activar/desactivar el menú
}

// Evento para cerrar el dropdown si se hace clic fuera de él
document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

function tomarFoto() {
    var nombreMesa = document.getElementById('nombreMesa').value.trim();

    if (nombreMesa === '') {
        alert('Por favor, ingrese un nombre para la mesa.');
        return;
    }

    var opcionesCamara = {
        video: {
            facingMode: 'environment'
        }
    };

    detenerCamara();

    navigator.mediaDevices.getUserMedia(opcionesCamara)
        .then(function (stream) {
            camaraStream = stream;
            var video = document.getElementById('camara');
            video.style.display = 'block';
            video.srcObject = camaraStream;

            var confirmarBtn = document.getElementById('confirmarFoto');
            confirmarBtn.style.display = 'inline-block';
        })
        .catch(function (error) {
            console.error('Error al acceder a la cámara: ', error);
        });
}

function confirmarFoto() {
    var video = document.getElementById('camara');
    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    var fotoElemento = document.getElementById('foto');
    fotoElemento.style.display = 'block';
    fotoElemento.src = canvas.toDataURL('image/png');

    var entrega = {
        nombreMesa: document.getElementById('nombreMesa').value.trim(),
        fotoUrl: fotoElemento.src,
        fechaHora: new Date().toLocaleString()
    };

    // Guardar la entrega en IndexedDB
    guardarEntrega(entrega);

    setTimeout(function () {
        fotoElemento.style.display = 'none';
        var confirmarBtn = document.getElementById('confirmarFoto');
        confirmarBtn.style.display = 'none';

        document.getElementById('nombreMesa').value = '';
        detenerCamara();

        var tomarFotoBtn = document.querySelector('.formulario button');
        tomarFotoBtn.disabled = false;
    }, 1000);
}

function guardarEntrega(entrega) {
    var transaction = db.transaction(['entregas'], 'readwrite');
    var objectStore = transaction.objectStore('entregas');
    var request = objectStore.add(entrega);

    request.onsuccess = function(event) {
        console.log('Entrega guardada correctamente.');
        entregas.push(entrega); // Agregar entrega al array local
    };

    request.onerror = function(event) {
        console.error('Error al guardar la entrega:', event.target.error);
    };
}

function detenerCamara() {
    if (camaraStream) {
        camaraStream.getTracks().forEach(function (track) {
            track.stop();
        });
        camaraStream = null;
    }
    var video = document.getElementById('camara');
    video.style.display = 'none';
}

function verRegistrosEnNuevaVentana() {
    var ventanaNueva = window.open('', 'Registros de Mesas Entregadas', 'width=600,height=400,scrollbars=yes,resizable=yes');
    var registrosHtml = '<html><head>';
    registrosHtml += '<title>Registros de Mesas Entregadas</title>';
    registrosHtml += '<style>';
    registrosHtml += 'body { font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px; }';
    registrosHtml += '.registro { border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin-bottom: 10px; text-align: left; }';
    registrosHtml += '.registro img { max-width: 100%; height: auto; display: block; margin-top: 10px; }';
    registrosHtml += '</style>';
    registrosHtml += '</head><body>';
    registrosHtml += '<h2>Registros de Mesas Entregadas</h2>';

    var transaction = db.transaction(['entregas'], 'readonly');
    var objectStore = transaction.objectStore('entregas');
    var getRequest = objectStore.getAll();

    getRequest.onsuccess = function(event) {
        entregas = event.target.result;
        entregas.forEach(function (entrega, index) {
            registrosHtml += '<div class="registro">';
            registrosHtml += '<p><strong>Nombre de la Mesa:</strong> ' + entrega.nombreMesa + '</p>';
            registrosHtml += '<p><strong>Fecha y Hora:</strong> ' + entrega.fechaHora + '</p>';
            registrosHtml += '<img src="' + entrega.fotoUrl + '" alt="Foto de la Mesa">';
            registrosHtml += '</div>';
        });

        registrosHtml += '</body></html>';

        ventanaNueva.document.open();
        ventanaNueva.document.write(registrosHtml);
        ventanaNueva.document.close();
    };

    getRequest.onerror = function(event) {
        console.error('Error al obtener las entregas:', event.target.error);
    };
}

function borrarRegistros() {
    if (confirm('¿Estás seguro de borrar todos los registros?')) {
        var transaction = db.transaction(['entregas'], 'readwrite');
        var objectStore = transaction.objectStore('entregas');
        var clearRequest = objectStore.clear();

        clearRequest.onsuccess = function(event) {
            console.log('Registros borrados exitosamente.');
            entregas = []; // Limpiar el array local
        };

        clearRequest.onerror = function(event) {
            console.error('Error al borrar los registros:', event.target.error);
        };
    }
}
