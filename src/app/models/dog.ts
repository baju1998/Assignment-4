export class Dog {
    id:number=0;
    createdDate:Date=new Date('');
    title:string='';
    content:string='';
    userId:string='';
    lastUpdated:Date=new Date('');
    imageUrl:string='';
  
    

    constructor(id:number,createdDate:Date,title:string, content:string, userId:string, lastUpdated:Date, imageUrl:string){
        this.id = id;
        this.createdDate= createdDate;
        this.title=title;
       this.content=content;
        this.userId=userId;
        this.lastUpdated=lastUpdated;
        this.imageUrl=imageUrl;
    }
}
