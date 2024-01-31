import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { FormAddEditComponentComponent } from './components/form-add-edit-component/form-add-edit-component.component';
import { ProdutosService } from './services/produtos.service';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  // DATA DA TABELA DO MATERIAL
  displayedColumns: string[] = ['codProduto', 'nomeProduto', 'precoProduto', 'descProduto', 'action'];
  dataSource!: MatTableDataSource<Object>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _productService: ProdutosService,
    private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  ngAfterViewInit(): void {
    this.getProductsList();
  }

  // FUNÇÃO PARA ADICIONAR PRODUTOS
  openAddEditEmpForm(): void {
    const dialogRef = this._dialog.open(FormAddEditComponentComponent);

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductsList();
        }
      }
    })
  }

  // FUNÇÃO PARA LISTAR OS PRODUTOS
  getProductsList(): void {
    this._productService.getProdutosList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error(err)
      },
    })
  }

  // FUNÇÃO PARA DELETAR OS PRODUTOS
  deleteProducts(idProduto: string): void {
    this._productService.deleteProduto(idProduto).subscribe({
      next: (res) => {
        this.getProductsList();
        this._coreService.openSnackBar('Produto deletado!')
      },
      error: (err) => {
        console.error(err)
      },
    })
  }

  // FUNÇÃO PARA FILTRAR OS PRODUTOS DA TABELA
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // FUNÇÃO PARA ATUALIZAR PRODUTOS
  openEditForm(data: object): void {
    const dialogRef = this._dialog.open(FormAddEditComponentComponent, {
      data,
    })

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductsList();
        }
      }
    })
  }
}
