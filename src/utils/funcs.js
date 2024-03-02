import Swal from 'sweetalert2'
const swal=(title,text,icon,confirmButtonText,callback)=>{
    Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    }).then(res=>{
        callback(res)
    })
}

export {swal}