import Swal from "sweetalert2";
import { toast } from 'react-toastify';

const swal = (title, text, icon, confirmButtonText, callback) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  }).then((res) => {
    callback(res);
  });
};

const ToastService = {
    success: (message) => {
        toast.success(message);
      },
      error: (message) => {
        toast.error(message);
      },
};

const validInputsRegister = (registered) => {
  const erros = {};
  if (!registered.username.length) {
    erros.username = " نام را وارد کنید";
  } else {
    delete erros.username;
  }
  if (!registered.userfamily.length) {
    erros.userfamily = " نام خانوادگی را وارد کنید";
  } else {
    delete erros.userfamily;
  }
  if (!registered.phone.length) {
    erros.phone = " شماره موبایل را وارد کنید";
  } else if (isNaN(Number(registered.phone))) {
    erros.phone ="شماره باید عدد باشد"
}
else if(registered.phone.length !== 11){
      erros.phone = " شماره موبایل کمتر  یا بیشتر از حد مجاز است";
  }
   else {
    delete erros.phone;
  }
  if (!registered.password.length) {
    erros.password = "پسورد را وارد کنید";
  } else if (registered.password.length < 6) {
    erros.password = "پسورد کمتر از 6 کاراکتر می باشد";
  } else {
    delete erros.password;
  }
  return erros
};

const setToLocalStorage=(key,value)=>{
  return localStorage.setItem(key,JSON.stringify({username:value.username,password:value.password}))
}


const getFromLocalStorage=(key)=>{
  return localStorage.getItem(key)
}



export { swal, ToastService,validInputsRegister,setToLocalStorage,getFromLocalStorage };
