import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Produto } from '../../../utils/product';
import { MyErrorStateMatcher } from '../../../utils/errorCampFormMatcher';
import { ProdutosService } from '../../services/produtos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-form-add-edit-component',
  templateUrl: './form-add-edit-component.component.html',
  styleUrl: './form-add-edit-component.component.scss',
})

export class FormAddEditComponentComponent implements OnInit {

  formProduto: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _productService: ProdutosService,
    private _dialogRef: MatDialogRef<FormAddEditComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.formProduto = this._formBuilder.group({
      nomeProduto: [null, Validators.required],
      codProduto: [null, Validators.required],
      precoProduto: [null, Validators.required],
      descProduto: [null]
    })
  }

  ngOnInit(): void {
    this.formProduto.patchValue(this.data);
    console.log(typeof this.data)
  }

  // FUNÇÃO  VALIDAR O FORM ANTES DE ENVIAR PARA ENVIAR O FORM
  submitForm(): void {
    if (this.formProduto.valid) {
      this.onCreate(this.formProduto.value)
    }
  }

  // FUNÇÃO PARA ENVIAR O FORM EM CASO DE ATUALIZAÇÃO OU CRIAÇÃO
  onCreate(produtoNovo: Produto) {
    if (this.data) {
      this._productService.editProduto(this.data.id, produtoNovo).subscribe({
        next: (value: any) => {
          this._coreService.openSnackBar('Produto atualizado com sucesso.')
          this._dialogRef.close(true)
        },
        error: (err: any) => {
          console.error(err)
        },
      })
    } else {
      this._productService.addProduto(produtoNovo).subscribe({
        next: (value: any) => {
          this._coreService.openSnackBar('Produto criado com sucesso.')
          this._dialogRef.close(true)
        },
        error: (err: any) => {
          console.error(err)
        },
      })
    }
  }

  // FUNÇÃO VALIDAR OS CAMPOS DO FORMULARIO
  matcher = new MyErrorStateMatcher();
}
