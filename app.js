document.getElementById("change").addEventListener("click",change)

function change(){
    xhr = new XMLHttpRequest()
    xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=7281ef3c83a0ef9a8cd11f2597bd442a")
    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText)
            const rate = response.rate.TRY
            const amount =  Number(document.getElementById("amount").value)
            document.getElementById("tl").value = amount * rate
            
        
        
        }
    }
}