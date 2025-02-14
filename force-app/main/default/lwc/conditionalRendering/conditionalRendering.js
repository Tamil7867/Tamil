import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isMembersLoginChosen=false;
    isNewMemberSigninChosen=false;

    loginUserName="Tamil";
    logingPassword="Tamil7867";

    name;
    password;
    email;


    handleMembersLogin(event){
        this.isMembersLoginChosen=event.target.checked;
        this.isNewMemberSigninChosen=false;
        this.template.querySelector(".checkNewMember").checked=false; 
        // this.success=null;
        // this.failiure=null;
    }
    handleNewMemberSignin(event){
        this.isNewMemberSigninChosen=event.target.checked;
        this.isMembersLoginChosen=false;
        this.template.querySelector(".checkMember").checked=false;
        // this.success=null;
        // this.failiure=null;
    }

    handleChangeName(event){
        this.name=event.target.value;
    }

    handleChangePassword(event){
        this.password=event.target.value;
    }

    handleClickLogin(event){
        if(this.loginUserName==this.name & this.logingPassword==this.password){
            alert(`Welcome ${this.name}`);
            this.name=null;
            this.password=null;
            
        }else{
            alert(`Invalid Password`);
            this.name=null;
            this.password=null;
            
        }
    }

    handleChangeEmail(event){
        this.email=event.target.value;
    }

    handleClickRegister(event){
        if(this.name!=null & this.email!=null){
            alert(`Welcome to LWC you have successfully registered`);
            this.name=null;
            this.email=null;
           
        }else{
            alert(`Enter both details`);
            this.name=null;
            this.email=null;
            
        }
    }
}