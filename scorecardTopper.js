
import { LightningElement, track, api } from "lwc";

export default class ScoreCardTopers extends LightningElement {
  @api adata =[];
  @api areatype;
  @track picture;
  @track name;
  @api email;
  @track SalesArea;
  //@track AreaType;
  @track score;
  month;
  
 /*@api handeldata(){
  console.log('HI Venkat');
        this.adata.forEach(user=>{
            this.email = user.UserEmail;
            this.picture = user.Picture;
            this.SalesArea = user.UserSalesArea;
            this.name = user.UserName;
            this.AreaType = user.UserAreaType;
            this.score = user.Score;
        });
        console.log('HI Venkat'+this.adata);
    
       
  }*/
}
