let message = document.querySelector('.message');
function validation()
{
    if(document.querySelector("input").value=="" && document.querySelector("input").value.length>=5)
    {
        alert("Enter Valid name!!");
        return 2;
    }
    else
    {
        return 1;
    }
}
let result = validation();
if(result==1)
{
    let button = document.querySelector('.click').addEventListener("click",()=>{
        let res = Math.floor(Math.random()*100);
        if(res>85)
        {
            document.querySelector('.res').innerText= res+"%";
            message.innerText="GRACIOUS!!"+String.fromCodePoint(0x1F498)+String.fromCodePoint(0x1F491);
        }
        else if(res>60)
        {
            document.querySelector('.res').innerText= res+"%";
            message.innerText="Enjoyable!!"+String.fromCodePoint(0x1F493);
        }
        else if(res>35)
        {
            document.querySelector('.res').innerText= res+"%";
            message.innerText="DIG FOR GOLD!!  "+String.fromCodePoint(0x1F5A4);
        }
        else
        {
            document.querySelector('.res').innerText= res+"%";
            message.innerText="TIME TO BREAKUP!!"+String.fromCodePoint(0x1F494);
        }
    });
}
// document.write("<h1>"+validation()+"</h1>")