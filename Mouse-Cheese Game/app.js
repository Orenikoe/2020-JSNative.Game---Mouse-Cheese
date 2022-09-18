const body = document.querySelector('body');
document.addEventListener('keyup', move);

function init() {
    
    

        let j = 0;
        const table = document.createElement('table');
        for (let i = 0; i < 4; i++) {
            
            const tr = document.createElement('tr');
            for (let i = 0; i < 4; i++) {
                j++;
                const td = document.createElement('td');
                td.setAttribute('id', j);
                tr.append(td);
            }
            table.append(tr);
        }
        body.append(table);

        document.getElementsByTagName('td')[13].style.backgroundColor = 'black';
        document.getElementsByTagName('td')[2].style.backgroundColor = 'black';
        document.getElementsByTagName('td')[5].style.backgroundColor = 'black';
        document.getElementsByTagName('td')[11].style.backgroundColor = 'black';
        document.getElementsByTagName('td')[0].append(document.getElementById('mouse'))
        document.getElementsByTagName('td')[15].append(document.getElementById('cheese'))
    }

    function move(e) {
        e = e || window.event;
        if(e.keyCode === 38){
            console.log('up');
            let newId = (Number(document.getElementById('mouse').parentNode.id) - 4)
            if( document.getElementById(newId).style.backgroundColor !== 'black') {
                document.getElementById(newId).append(document.getElementById('mouse'));

            }

        }
        if(e.keyCode === 37){
            console.log('left');
            let newId = (Number(document.getElementById('mouse').parentNode.id) - 1)
            if( document.getElementById(newId).style.backgroundColor !== 'black') {
                document.getElementById(newId).append(document.getElementById('mouse'));
            }

        }
        if(e.keyCode === 39){
            console.log('right');
            let newId = (Number(document.getElementById('mouse').parentNode.id) + 1)
            if( document.getElementById(newId).style.backgroundColor !== 'black') {
                document.getElementById(newId).append(document.getElementById('mouse'));
                checkCheese();
            }


        }
        if(e.keyCode === 40){
            console.log('down');
            let newId = (Number(document.getElementById('mouse').parentNode.id) + 4)
            if( document.getElementById(newId).style.backgroundColor !== 'black') {
                document.getElementById(newId).append(document.getElementById('mouse'));
            }




        }

        
    }

    function checkCheese(){
     if(Number(document.getElementById('mouse').parentNode.id) === Number(document.getElementById('cheese').parentNode.id)) {
        document.getElementById('cheese').style.display = 'none';
        location.reload();
     }
     else {
        document.getElementById('cheese').style.display = 'block';

     }
    }
    


        



        
    


init();
