student={id:'B24DCCC157',name:'Do_Quoc_Khanh',class:'D24CQCC01'}
document.writeln(`Họ và tên: ${student.name}`+'<br><br>'+`Số báo danh:${student.id}`+'<br><br>' + `Lớp: ${student.class}`+ '<br><br>')

var subject=new Object();
subject.name='JS';
subject.lesson='OOP';
subject.time='20:30';
document.writeln(`Môn học: ${subject.name}`+'<br><br>'+ `Thời gian: ${subject.time}`+'<br><br>' +`Bài học: ${subject.lesson}`+ '<br><br>')

function employee(id,name,salary){  
this.id = id;  
this.name = name;  
this.salary = salary;  

}  
nam= new employee("ript001","Nam Chan Hoan",40000000);  
document.writeln('Nhan_vien: '+ nam.id+" "+nam.name+" "+nam.salary); 

class Person{
            name;
            age;
            local;
            salary;
            hello(){
                document.writeln('<br>'+ "Hello "+ this.name);
             }

             changeSalary(newSalary){
                this.salary = newSalary;
             }
             show_dia_chi(local){
                this.local=local;
             }

        }

        a = new Person();
        a.name = "Khanh_Do";
        a.hello();
        a.salary = 1;
        document.writeln('<br>'+a.name + ': ' + a.salary);
        a.changeSalary(12);
        document.writeln('<br>'+a.name + ': ' + a.salary);
        a.show_dia_chi('Hai_Duong');
        document.writeln('<br>'+ 'Dia_chi: '+ a.local)