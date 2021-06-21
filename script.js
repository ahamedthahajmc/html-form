    
            
    function append(){
        var radio = document.querySelectorAll('input[type="radio"]:checked');
        var fname = document.querySelector('#fname').value;
        var lname = document.querySelector('#lname').value;
        var address = document.querySelector('#address').value;
        var pin = document.querySelector('#pin').value;
        var gender = document.querySelector('#gender').value;
        if( fname !=='' && lname !=='' && address !=='' && pin !=='' && gender !=='' ){ 
            if(radio.length >= 2){
                if(document.querySelector("table") === null){
                    var container = document.querySelector(".container");
                    var table = document.createElement('table');
                    table.setAttribute("border","1px");
                    container.appendChild(table);
                    var t_row1 = document.createElement('tr');
                    table.appendChild(t_row1);
                    var t_head1 = document.createElement('th');
                    var t_head2 = document.createElement('th');
                    var t_head3 = document.createElement('th');
                    var t_head4 = document.createElement('th');
                    var t_head5 = document.createElement('th');
                    var t_head6 = document.createElement('th');
                    var t_head7 = document.createElement('th');
                    var t_head8 = document.createElement('th');

                    t_row1.append(t_head1,t_head2,t_head3,t_head4,t_head5,t_head6,t_head7,t_head8);
                    t_head1.innerText = document.querySelector('.fname').innerText;
                    t_head2.innerText = document.querySelector('.lname').innerText;
                    t_head3.innerText = document.querySelector('.address').innerText;
                    t_head4.innerText = document.querySelector('.pin').innerText;
                    t_head5.innerText = document.querySelector('.gender').innerText;
                    t_head6.innerText = document.querySelector('.food').innerText;
                    t_head7.innerText = document.querySelector('.state').innerText;
                    t_head8.innerText = document.querySelector('.country').innerText;
                }
                table1 = document.querySelector('table');
                var t_row2 = document.createElement('tr');
                table1.appendChild(t_row2);
                var t_data1 = document.createElement('td');
                var t_data2 = document.createElement('td');
                var t_data3 = document.createElement('td');
                var t_data4 = document.createElement('td');
                var t_data5 = document.createElement('td');
                var t_data6 = document.createElement('td');
                var t_data7 = document.createElement('td');
                var t_data8 = document.createElement('td');
                
                

                t_data1.innerText = document.querySelector('#fname').value;
                t_data2.innerText = document.querySelector('#lname').value;
                t_data3.innerText = document.querySelector('#address').value;
                t_data4.innerText = document.querySelector('#pin').value;
                t_data5.innerText = document.querySelector('#gender').value;
                var temp='';
                for(var i=0;i<radio.length;i++){
                    if(i === radio.length-1){
                        temp = temp + radio[i].name+'.';
                    }
                    else{
                        temp = temp + radio[i].name+', ';
                    }
                }
                t_data6.innerText = temp;
                t_data7.innerText = document.querySelector('#state').value;
                t_data8.innerText = document.querySelector('#country').value;

                t_row2.append(t_data1,t_data2,t_data3,t_data4,t_data5,t_data6,t_data7,t_data8);
                reset();

                document.querySelector('#fname').value ='';
                document.querySelector('#lname').value ='';
                document.querySelector('#address').value ='';
                document.querySelector('#pin').value ='';
                document.querySelector('#state').value = '';
                document.querySelector('#country').value = '';
                document.querySelector('#gender').value = '';
                document.querySelector('#veg').checked = false;
                document.querySelector('#starchy').checked = false;
                document.querySelector('#dairy').checked = false;
                document.querySelector('#protein').checked = false;
                document.querySelector('#fat').checked = false;
        }
        else{
            alert('pls select minimum two Choice of Food');
        }

}
else{
    alert('pls select all mandatory fields');
}

}

function reset(){

            document.querySelector('#fname').value ='';
            document.querySelector('#lname').value ='';
            document.querySelector('#address').value ='';
            document.querySelector('#pin').value ='';
            document.querySelector('#state').value = '';
            document.querySelector('#country').value = '';            
            document.querySelector('#gender').value = '';
            document.querySelector('#veg').checked = false;
            document.querySelector('#starchy').checked = false;
            document.querySelector('#dairy').checked = false;
            document.querySelector('#protein').checked = false;
            document.querySelector('#fat').checked = false;
        }