import { SpotifyService } from './../services/spotify.service';
import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AutenticadoGuard implements CanLoad {

  constructor(
    private router: Router,
    private service: SpotifyService,
  ){}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');

    if(!token){
      return this.naoAutenticado();
    }

    return new Promise((res)=> {
      const usuarioCriado = this.service.inicializarUsuario();
      if(usuarioCriado)
        res(true);
      else
        res(this.naoAutenticado());
    })
  }

  naoAutenticado(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }


}
