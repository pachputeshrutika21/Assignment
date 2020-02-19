/* eslint-disable*/
        
            function calc() {
                var n1=document.getElementById('n1').value;
                // eslint-disable-next-line no-undef
                var n2=document.getElementById('n2').value;
                var oper=document.getElementById('operator').value;
                if(oper==='+')
                {
                    document.getElementById('result').value=n1+n2;
                }
             }