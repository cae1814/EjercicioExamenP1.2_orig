main();
loadTableFetch();

function main() {
     // Agregando evento al boton Limpiar //
     ejeFetch2_btonCargar.addEventListener("click", loadTableFetch);
}

function showAlert(msg){
    alertify.defaults = {
        // dialogs defaults
        autoReset:true,
        basic:false,
        closable:true,
        closableByDimmer:true,
        invokeOnCloseOff:false,
        frameless:false,
        defaultFocusOff:false,
        maintainFocus:true, // <== global default not per instance, applies to all dialogs
        maximizable:true,
        modal:true,
        movable:true,
        moveBounded:false,
        overflow:true,
        padding: true,
        pinnable:true,
        pinned:true,
        preventBodyShift:false, // <== global default not per instance, applies to all dialogs
        resizable:true,
        startMaximized:false,
        transition:'pulse',
        transitionOff:false,
        tabbable:'button:not(:disabled):not(.ajs-reset),[href]:not(:disabled):not(.ajs-reset),input:not(:disabled):not(.ajs-reset),select:not(:disabled):not(.ajs-reset),textarea:not(:disabled):not(.ajs-reset),[tabindex]:not([tabindex^="-"]):not(:disabled):not(.ajs-reset)',  // <== global default not per instance, applies to all dialogs

        // notifier defaults
        notifier:{
        // auto-dismiss wait time (in seconds)  
            delay:5,
        // default position
            position:'bottom-right',
        // adds a close button to notifier messages
            closeButton: false,
        // provides the ability to rename notifier classes
            classes : {
                base: 'alertify-notifier',
                prefix:'ajs-',
                message: 'ajs-message',
                top: 'ajs-top',
                right: 'ajs-right',
                bottom: 'ajs-bottom',
                left: 'ajs-left',
                center: 'ajs-center',
                visible: 'ajs-visible',
                hidden: 'ajs-hidden',
                close: 'ajs-close'
            }
        },

        // language resources 
        glossary:{
            // dialogs default title
            title: 'T1201 Programacion Web I',
            // ok button text
            ok: 'OK',
            // cancel button text
            cancel: 'Cancel'            
        },

        // theme settings
        theme:{
            // class name attached to prompt dialog input textbox.
            input:'ajs-input',
            // class name attached to ok button
            ok:'ajs-ok',
            // class name attached to cancel button 
            cancel:'ajs-cancel'
        },
        // global hooks
        hooks:{
            // invoked before initializing any dialog
            preinit:function(instance){},
            // invoked after initializing any dialog
            postinit:function(instance){},
        },
    };

    alertify.alert(msg, function(){alertify.message('OK');});
}

function loadTableFetch(){
    let i = 0; 
    fetch("https://fakestoreapi.com/products").then(response => response.json()).then(data => {
        let tabla = '<tr><th>Id</th><th></th><th>Title</th><th>Price</th><th>Description</th><th>Category</th><th></th></tr>';

        for (let art of data) {
            i++;
            tabla += `<tr>
                          <td scope='row'>${art.id}</td>
                          <td><div class="text-center"><img id="img${art.id}" src="${art.image}" width="40px" class="rounded" alt="..." onerror="this.onerror=null; this.src='../assets/img/objeto.webp'" onclick='loadTableFetchVerModalCard(${art.id}, "${art.title}", ${art.price}, "${art.category}")' style="cursor:pointer;"></div></td>
                          <td>${art.title}</td>                     
                          <td>${art.price}</td> 
                          <td class="font-size-10">${art.description}</td>
                          <td>${art.category}</td>
                          <td><button type="button" class="btn btn-primary btn-sm" onclick='loadTableFetchVerModalCard(${art.id}, "${art.title}", "${art.price}", "${art.category}")'>Detalles</button></td>
                     </tr>`
        }

        document.getElementById("articulos").innerHTML = tabla;
    });
}

function loadTableFetchVerModalCard(id, title, price, category){
    //alert("QUEE");
    document.getElementById("imgCardModal").src = document.getElementById("img"+id).src;
    document.getElementById("eje4CardFetch2Title").value = title;
    document.getElementById("eje4CardFetch2Price").value = price;
    document.getElementById("eje4CardFetch2Category").value = category;
    $("#ejercicioFetch2ModalCard").modal('show');
}