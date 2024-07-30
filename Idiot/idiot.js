function change(){
            let a=Math.random()*1000;
            let b=Math.random()*1000;
            const value=document.querySelector('.no');
            const body = document.querySelector('body');
            value.style.position="absolute";
            body.style.position="relative";
            if(a>870 || b>270 ){
                value.style.right=a/10+"%";
                value.style.top=b/10+"%";
            }
            else{
                value.style.right=a+'px';
                value.style.top=b+'px';
            }
            document.querySelector('.try').innerHTML="Try again!";
        }