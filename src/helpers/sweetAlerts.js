import Swal from 'sweetalert2';


export const swalError = ( mensaje = '' ) => {
    Swal.fire({
        title: mensaje,
        width: 450,
        icon:'error',
    })
}

export const swalCargando = () => {
    return Swal.fire({
        title:'Guardando cambios...',
        text: 'Espere unos segundos...',
        width: 450,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })
}

export const swalLoading = () => {
    return Swal.fire({
        title:'Cargando',
        allowOutsideClick: false,
        width: 200,
        timer: 2000,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
            return null;
          }
      })
}

export const swalGuardadoExitoso = () => {
    return Swal.fire({
        text: 'Cambios generados exitosamente.',
        width: 450,
        icon:'success',
    })
}
export const swalExitoso = (mensaje) => {
    return Swal.fire({
        title: mensaje,
        width: 450,
        icon:'success',
    })
}


export const swalStatus = (status, nombre, apellido) => {
    let title;
    let text;

    if(status){
        title = `¿Deseas inactivar a ${nombre} ${apellido}?`;
    }else{
        title = `¿Deseas activar a ${nombre} ${apellido}?`;
    }

    return Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
        }).then((result) => {
            return result.isConfirmed;
        })
}


export const swalSesionOut = () => {
    return Swal.fire({
        title: 'Sesión expirada',
        text: 'Favor de ingresar nuevamente',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
        }).then((result) => {
            return result.isConfirmed;
        })
}

export const swalGuardar = () => {

    return Swal.fire({
        title: 'Desea guardar cambios?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
        }).then((result) => {
            return result.isConfirmed;
        })
}

export const swalClose = () => {
    return Swal.close();
}


export const swalConfirm = async(pregunta) => {
   const res = await  Swal.fire({ 
        icon: 'warning',
        title: pregunta,
        showCancelButton: true,
        confirmButtonText: `Aceptar`,
        confirmButtonColor:'#DC3545'
    })

    return res
}