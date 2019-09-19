import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class GenerixService {

  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    clientName : new  FormControl(""),
    questionOne : new  FormControl(""),
    questionTwo: new  FormControl(""),
    questionThree :  new  FormControl(""),
    questionFour :  new  FormControl(""),
    questionFive :   new  FormControl(""),
    questionSix :   new  FormControl(""),
    QuestionsRequests :   new  FormControl(""),
    completed: new FormControl(false)
  });

  createQuestionsRequests(data){
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("GenexInsightsSurvey")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
  getQuestionsRequests() {
    return this.firestore.collection("GenexInsightsSurvey").snapshotChanges();
  }
}
