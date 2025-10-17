import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar";
import { Footer } from "../../footer/footer";
import { Login } from '../login/login';

@Component({
  selector: 'app-aboutus',
  imports: [Login],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {

}
