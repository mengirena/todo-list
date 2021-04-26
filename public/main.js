const deleteButtons = document.querySelectorAll(".delete-btn") // nodeList
Array.from(deleteButtons).forEach(btn =>{
    btn.addEventListener("click", deleteTask)
})
console.log('btn')

async function deleteTask(){
    console.log('indelete')
    const deleteId = this.parentNode.id //parentNode.id can get the id attribute data
    const response = await fetch("/deleteTask", {
        method:"delete",
        headers: {'Content-Type': 'application/json'}, //Use headers to indicate the data we're passing to server
        body:JSON.stringify({
            'deleteId':deleteId
        }) // parse JSON file to the server
    })
    console.log(response)
    location.reload()
}