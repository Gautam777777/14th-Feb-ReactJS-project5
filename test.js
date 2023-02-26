class A{
    //1.Properties/Variable
    name;     //This is declaration 
    surname = "";  //This is declaration and initialization
    address = "neemuch";  //This is declaration and initialization
    state;

    //2.Constructor
    //The role of the constructor is to initialize the properties of the class.
    constructor(){
        this.name = "GAUTAM";
        this.surname = "SHARMA";
        this.fatherName = "RAM PRAKASH SHARMA";
    }

    //3.Methods
    showName(){
        console.log(this.name + this.surname + this.address + this.fatherName);  //this is an internal object
    }

    setState(data){
        this.State = data;
    }

    showState(){
        console.log(this.State);
    }
}


class B extends A{
    //1.Properties/Variable
    friend1;       //This is declaration
    friend2 = "";  //This is declaration and initialization

    //2.Constructor
    constructor(frnd3){  //frnd3 is a formal argument
        super();
        this.friend1 = "A";
        this.friend2 = "B";
        this.friend3 = frnd3;
    }

    //3.Methods
    listMyFriends(){
        console.log(this.friend1);
        console.log(this.friend2);
        console.log(this.friend3);
    }
}

//Lets create the class object
//let object = new ClassName();

let obj = new A();  //obj is an external object

//object.method
//obj.showName()  // . is a member selection operator


let obj2 = new B("C");

obj2.listMyFriends()

obj2.showName()

obj2.setState({
    Name:"virat",
    surname:"kohli"
});

obj2.showState();