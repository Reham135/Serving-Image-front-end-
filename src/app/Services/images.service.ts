import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileDto } from '../Dtos/UploadFileDto';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private myClient:HttpClient) { }
  public Upload(file:File):Observable<UploadFileDto>{
    var form = new FormData();
    form.append("file",file);
  return this.myClient.post<UploadFileDto>("https://localhost:7032/api/Files",form)
  }
}
