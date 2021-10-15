import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: 'firstLetterPipe'})
export class firstLetterPipe  implements PipeTransform {

  transform(fullname : string | null ) : any {
    if (fullname==null) {
      return ''
    }
    else {
    return fullname!
    .split(" ")
    .map (n => n[0].toUpperCase())
    .join("");
    }

  }//transform

}//class


