import Swal, { SweetAlertIcon } from "sweetalert2"

export const getUrlImg = (id: string): string => {
    const url = 'https://image.tmdb.org/t/p/w220_and_h330_face'
    return url + id
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const showAlert = (type: SweetAlertIcon, title: string) => {
    Toast.fire({
        icon: type,
        title
    })
}