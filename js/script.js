$(document).ready(function() {

  var IdAlterar;

  $("#buscar").click(function() {
    $.getJSON("http://localhost:41071/pessoa", function(data, status) {
      $("#resultado").html("");
      var items = [];
      $.each(data, function(key, val) {
        items.push("<li class='item-lista' id='" + val.id + "'>" + val.nome + "</li>");
      });

      $("<ul/>", {
        class: "vermelho",
        html: items.join("")
      }).appendTo("#resultado");
    }).then(res => {
      $(".item-lista").click(function() {
        $("#campo-deletar").val(this.id);
        $("#campo-alterar").val(this.innerHTML);
        IdAlterar = this.id;
      });
    });
  });

  $("#gravar").click(function() {
    //enviado
    $.ajax({
      type: "POST",
      url: "http://localhost:41071/pessoa",
      data: '{"nome":"' + $("#nome").val() + '"}',
      success: function(data) {
        //alert("data: " + data);
        $("#nome").val("");
      },
      contentType: "application/json",
      dataType: "json"
    }).then(res => {
      $("#buscar").click();
    });
  });

  $("#btn-deletar").click(function() {
    $.ajax({
      type: "DELETE",
      url: "http://localhost:41071/pessoa/" + $("#campo-deletar").val(),
      success: function(data) { 
        $("#buscar").click();
      }
    });
  });

  $("#btn-alterar").click(function() {
    $.ajax({
      type: "PATCH",
      url: "http://localhost:41071/pessoa/" + IdAlterar,
      contentType: "application/json",
      data: '{"nome":"' + $("#campo-alterar").val() + '"}',
      success: function(data) {
        $("#buscar").click();
      }
    });
  });

  
});
