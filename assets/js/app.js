function Click() {
    var user = document.getElementById("nombre").value;
    var welcome = document.getElementById("bienvenida");
    welcome.innerHTML = "Bienvenida/o " + user;
}

    function Correo() {
        var at = document.getElementById("info").value;
        var text = document.getElementById("email");
        text.innerHTML = "Su correo es: " + at;
    } 
        
    window.onload = function () {
        var btn = document.getElementById("datosGato");
        var txt = document.getElementById("gatos");
        var btnDos = document.getElementById('datosPerro');
        var txtDos = document.getElementById('perros');
    
        btn.addEventListener('click', function() {
            txt.innerHTML = '<p>El rango de visión de un gato no incluye la zona por debajo de su nariz. Los gatos se saludan rosando sus narices. Los gatos tienen más huesos que los seres humanos, nos ganan por 24.Cuando los gatos maúllan lo hacen para comunicarse con humanos y no con otros gatos.</p>';
        })
    
        btnDos.addEventListener('click', function() {
            txtDos.innerHTML = '<p>Los perros y gatos sólo pueden sudar a través de las almohadillas de las patas y la nariz. El sentido del olfato de un perro es 10.000 veces más fuerte que el de los seres humanos.Las narices de los perros son únicas al igual que las huellas dactilares para los humanos</p>';
        })
    }
