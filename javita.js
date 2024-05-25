document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario
    document.getElementById('contactoFormulario').addEventListener('submit', function(evento) {
        evento.preventDefault();
        var nombre = document.getElementById('nombre').value;
        var correo = document.getElementById('correo').value;
        var mensaje = document.getElementById('mensaje').value;

        if (nombre && correo && mensaje) {
            document.getElementById('mensajeFormulario').innerText = '¡Gracias por tu mensaje, ' + nombre + '!';
            document.getElementById('contactoFormulario').reset();
        } else {
            document.getElementById('mensajeFormulario').innerText = 'Por favor, completa todos los campos.';
        }
    });

    // Manejo de la lista
    document.getElementById('agregarElementoBtn').addEventListener('click', function() {
        var nuevoElementoTexto = document.getElementById('nuevoElemento').value;
        if (nuevoElementoTexto) {
            var li = document.createElement('li');
            li.innerHTML = nuevoElementoTexto + ' <button class="eliminarBtn">Eliminar</button>';
            document.getElementById('listaElementos').appendChild(li);
            document.getElementById('nuevoElemento').value = '';
            agregarEventoEliminar(li.querySelector('.eliminarBtn'));
        }
    });

    function agregarEventoEliminar(boton) {
        boton.addEventListener('click', function() {
            var li = this.parentElement;
            li.remove();
        });
    }

    document.querySelectorAll('.eliminarBtn').forEach(agregarEventoEliminar);
});
