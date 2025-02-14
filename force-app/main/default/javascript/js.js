
//1.Callback function
function odd(num)
{
    console.log(`${num} is a odd number`);
}
function even(num)
{
    console.log(`${num} is a even number`);
}

function action(num, evenCallback, oddCallback)
{
    console.log("Processing Number");
    if(num%2==0){
        evenCallback(num);
    }else{
        oddCallback(num);
    }
}

action(5, odd, even);

//1.1Callback function
var noList=[1,2,3,4,5];
noList.forEach(function(num){
    action(num, odd, even);
});

//---------------------
//2.Arrow function
let numList=[1,3,4,-3,5,-7];
let positiveNumbers=numList.filter((value)=>value>0);
console.log(`Positive numbers in list is ${positiveNumbers}`);
//---------------------

//3.Removing elements from array
let data=[10,20, true,'abc', false,60];
function isNumber(value){
    return value >= 0 && value != true, false;
}

function removingElements(){
    let filtered=data.filter(isNumber);
    console.log("Numbers in Array = " + filtered);
}

removingElements();

//---------------------
//4.checking arrays are equal

let array1=[1,2,'3',4,5];
let array2=[1,2,'3',4,5];

console.log(array1.toString()===array2.toString());

//---------------------
//day-7
let leads = [{
    Name : 'Tamil',
    City : 'Chennai',
    LeadSource : 'Web'
},
{
    Name : 'Selvan',
    City : 'NY',
    LeadSource : 'Phone'
},
{
    Name : 'John',
    City : 'Trichy',
    LeadSource : 'Web'
}
]
function total(){
    let totalWebLeads= leads.filter((value)=>{ return value.LeadSource==='Web'});
    console.log(totalWebLeads);
}
total();

function city(){
    let nYcity= leads.filter((value)=>{return value.City==='NY'})
    console.log(nYcity)
}
city();
//-----------------
let stuObjArray=[
        {
            Name : 'Tamil',
            Total : 450,
            Result : 'Pass'},
        {
            Name : 'Selvan',
            Total : 400,
            Result : 'Pass'
        },
        {
            Name : 'John',
            Total : 250,
            Result : 'Fail'
        }
   ]
    console.log(stuObjArray)
    

    stuObjArray.sort((a,b)=>a.Total - b.Total)
    stuObjArray.forEach((e)=>{
    console.log(`${e.Name} ${e.Total} ${e.Result}`)
})

//Factory Function
const studentObj=function(nameVal, tamilVal, engVal, mathVal){
            return{
                Name:nameVal,
                Tamil:tamilVal,
                English:engVal,
                Maths:mathVal,
                Total:()=>{
                    return this.Tamil+ this.English+ this.Maths
                  }

                }
            }
    
const stuTamil=studentObj("Tamil",65,87,69);
stuTamil.Total();
console.log(stuTamil);

const stuJohn=studentObj("John",87,45,88);
stuJohn.Total();
console.log(stuJohn);

//CLASS
class Lead{
    leadName;
    annualRevenue;
    companyName;
    email;
    constructor(name,revenue,comName,comEmail){
        this.leadName=name;
        this.annualRevenue=revenue;
        this.companyName=comName;
        this.email=comEmail;
    }
    displayLeadInfo(){
        console.log(`Lead Name ${this.leadName} 
            Company Name ${this.companyName}
            Email ${this.email}
            Annual Revenue ${this.revenue}`);
    }
    annualRevenuePercentage(){
        console.log(this.annualRevenue/10*100)
    }
}

const JohnTech= new Lead("Tamil", 50000, "JohnTech", "John@gmail.com");
JohnTech.displayLeadInfo();
JohnTech.annualRevenuePercentage();

