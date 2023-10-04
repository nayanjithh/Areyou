function change(){
            let a=Math.random()*1000;
            let b=Math.random()*1000;
            const value=document.querySelector('.no');
            value.style.position="absolute";
            if(a>870)
                value.style.right=870+"px";
            else
                value.style.right=a+'px';
            value.style.top=b+'px';
            document.querySelector('.try').innerHTML="Try again!";
        }