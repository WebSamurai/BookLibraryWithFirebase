import { Injectable } from "@angular/core";
declare var toastr:any
@Injectable()
export class ToasterService {
 /**
  *
  */
 constructor() {
     this.ToasterSetting()     
 }
 
    Success(message:string,title?:string){
        toastr.success(message,title)
    }
    Warning(message:string,title?:string){
        toastr.warning(message,title)
    }
    Error(message:string,title?:string){
        toastr.error(message,title)
    }
    Info(message:string){
        toastr.info(message)
    }
    private ToasterSetting()
      {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-full-width",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
    }
}