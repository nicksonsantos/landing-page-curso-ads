import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formRegistro: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    mensagem: ['', Validators.required]
  });;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.formRegistro.valid) {
      // Lógica para processar os dados do formulário
      console.log(this.formRegistro.value);
    }
  }
}
