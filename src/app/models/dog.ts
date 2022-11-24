export class Dog{
    

    userId:string='';
    firstName:string='';
    lastName:string='';
    emailAddress:string='';
    password:string='';

    
    static IsItADogHandler(obj:any)
    {
        return obj.userId && obj.firstName && obj.lastName && obj.emailAddress && obj.password;
    }
}