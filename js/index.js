$(".agregar").on("click", function(e) {
    var sText = $("#newText").val()
    
    if(sText !== ""){
        $("#newText").val("")

        var bloqueHTML = `<div class="lis"> <li> ${sText} </li>`
        bloqueHTML += `<button class="checar">check</button>`
        bloqueHTML += `<button class="del">delete</button>`
        bloqueHTML += `</div>`
        $(".Lista").append(bloqueHTML)
    }
    e.preventDefault()
})

$(".Lista").on("click", ".del", function(){
    $(this).parent().remove()
})

$(".Lista").on("click", ".checar", function(){
    $(this).parent().toggleClass("chec")
})