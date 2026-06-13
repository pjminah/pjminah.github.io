const categorias = document.getElementById("categorias");
const submenu = document.getElementById("submenu");

categorias.addEventListener("mouseenter", function() {
  submenu.style.display = "block";
});

categorias.addEventListener("mouseleave", function() {
  submenu.style.display = "none";
});

document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

emailjs.send("service_wb3p94s","template_9iv3fvh", {
  nome: this.nome.value,
  email: this.email.value,
  mensagem: this.mensagem.value
})
.then(() => {
  alert("✅ Mensagem enviada com sucesso!");
  this.reset();
})
.catch((error) => {
  alert("❌ Erro ao enviar");
  console.log(error);
  });
});