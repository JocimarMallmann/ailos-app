import { Person } from './../../shared/interfaces/person.interface';
import { Component, OnInit } from '@angular/core';
import { CheckCpfService } from 'src/app/services/check-cpf.service';
import { DataList } from 'src/app/shared/components/data-list/data-list.interface';
import { first } from 'rxjs';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  public cpf: string = '';
  public notFound = false;
  public dataList: DataList[] = [];

  constructor(private checkCpfService: CheckCpfService) { }

  ngOnInit() {

  }

  consultCpf(cpf: string): void {
    this.checkCpfService.consultCpf(cpf)
      .pipe(first())
      .subscribe((person: Person) => {
        this.cpf = person.cpf ? person.cpf : '';
        // TODO
        // NÃO DEU TEMPO DE FAZER UM COMPONENTE ESPECÍFICO PARA APRESENTAÇÃO DE TOASTS/ALERTAS NA TELA PARA O USUÁRIO
        if (!person.cpf) {
          this.notFound = true;
        } else {
          this.notFound = false;
        }
        this.fillDataList(person);
      });
  }

  fillDataList(person: Person) {
    this.dataList = [
      {
        iconPrefix: 'fas',
        iconName: 'user',
        iconColor: '#889499',
        title: 'Nome',
        text: person.name
      },
      {
        iconPrefix: 'fas',
        iconName: 'circle-check',
        iconColor: '#00C246',
        title: 'Situação do CPF',
        text: person.status
      }
    ]
  }

}
