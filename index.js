document.querySelector('.cros').style.display ='none';
document.querySelector('.menuicon').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cros').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        document.querySelector('.cros').style.display='inline'
    }
})
