(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<div class=\"body\">\r\n    <router-outlet></router-outlet>\r\n    <app-error-control></app-error-control>\r\n</div>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\r\n    <p>\r\n        Plataforma de reserva de turnos del Hospital Español.\r\n    </p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n\r\n\r\n  <div *ngIf=\"(token$ | async) != undefined\">\r\n    <div class=\"recuadroSeccion\">\r\n      <span class=\"tituloSeccion\">Consulta de Turnos</span>\r\n      <button class=\"exit\" aria-label=\"Logout\" (click)=\"logout()\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"(token$ | async) == undefined\">\r\n    <div class=\"my-col-10-r\" >\r\n    </div>\r\n    <div class=\"my-col-20-r\"></div>\r\n    <div class=\"my-col-40-r\">\r\n      <div class=\"header scaling-svg-container\">\r\n        <a href=\"home\">\r\n          <img src=\"assets/img/LogoHE200.png\" alt=\"logo\" name=\"logoHeader\" style=\"width:100px; height:50px;\">\r\n        </a>\r\n      </div> \r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/asignarTurno/asignarTurno.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/asignarTurno/asignarTurno.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"popupTitle recuadroSeccion2\" mat-dialog-title>\r\n  <span class=\"tituloSeccion2\">\r\n    Asignar turno | \r\n    {{ fechaHora | date: 'dd/MM/yyyy HH:mm'}} | \r\n    {{ profesionalNombre }} |\r\n    {{ obraSocialNombre }}\r\n  </span>\r\n</div>\r\n\r\n<div mat-dialog-content>\r\n\r\n  <div class=\"my-col-50 cuadro-gris\" >\r\n\r\n    <div class=\"my-col-100 cuadro-formulario2\">\r\n\r\n      <div class=\"row clearfix msjerror\" *ngIf=\"error != undefined\">\r\n        <mat-label class=\"label\">Error!: </mat-label>\r\n        <span class=\"value\">{{ error }}</span>\r\n      </div>\r\n      <div class=\"row clearfix alert-warning\" *ngIf=\"alerta != undefined\">\r\n        <mat-label class=\"label\">Atención!: </mat-label>\r\n        <span class=\"value\">{{ alerta }}</span>\r\n      </div>\r\n      <div class=\"row clearfix alert-warning\" *ngIf=\"alerta2 != undefined\">\r\n        <mat-label class=\"label\">Atención!: </mat-label>\r\n        <span class=\"value\">{{ alerta2 }}</span>\r\n      </div>\r\n      <!--\r\n      <div class=\"row clearfix\">\r\n        <mat-label class=\"label\">Día: </mat-label>\r\n        <span class=\"value\">{{ fechaHora | date: 'dd/MM/yyyy HH:mm'}}</span>\r\n      </div>\r\n      <div class=\"row clearfix\">\r\n        <mat-label class=\"label\">Profesional: </mat-label>\r\n        <span class=\"value\">{{ profesionalNombre }} </span>\r\n      </div>\r\n      <div class=\"row clearfix\">\r\n        <mat-label class=\"label\">Obra Social: </mat-label>\r\n        <span class=\"value\">{{ obraSocialNombre }}</span>\r\n      </div>   \r\n      -->\r\n      <div class=\"row clearfix\"></div> \r\n\r\n      <div class=\"row clearfix\" >\r\n        <mat-form-field style=\"width: 45%;\">\r\n          <mat-label class=\"label\">DNI</mat-label>\r\n          <input matInput [formControl]=\"dni\" (keyup.enter)=\"buscarPacientes()\" placeholder=\"Presione enter para buscar\">\r\n        </mat-form-field>\r\n        <span style=\"width: 5%;\"></span>\r\n        <mat-form-field style=\"width: 45%;\">\r\n          <mat-label class=\"label\">Nro. HC</mat-label>\r\n          <input matInput [formControl]=\"nroHC\" type=\"text\">        \r\n        </mat-form-field>        \r\n      </div>\r\n\r\n      <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n          <mat-label class=\"label\">Apellido y Nombre</mat-label>\r\n          <input matInput [formControl]=\"apeNom\" (keyup.enter)=\"buscarPacientes()\" placeholder=\"Presione enter para buscar\">\r\n        </mat-form-field>\r\n      </div>\r\n      \r\n      <div class=\"row clearfix\"> \r\n        <mat-form-field style=\"width: 50%;\">\r\n          <mat-label class=\"label\">Fecha de nacimiento</mat-label>\r\n          <input matInput [formControl]=\"fecNac\" type=\"date\">\r\n        </mat-form-field>\r\n        <span style=\"width: 5%;\"></span>\r\n        <mat-form-field style=\"width: 20%;\">\r\n          <mat-label>Edad</mat-label>\r\n          <input matInput [formControl]=\"edad\" type=\"text\">\r\n        </mat-form-field>      \r\n      </div>\r\n\r\n      <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n          <mat-label class=\"label\">Dirección</mat-label>\r\n          <input matInput [formControl]=\"direccion\" type=\"text\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n          <mat-label>Localidad</mat-label>\r\n          <input type=\"text\" name=\"locField\" placeholder=\"Seleccione una\" matInput \r\n              [formControl]=\"localidadFC\" \r\n              [matAutocomplete]=\"autoLoc\"\r\n              #autoLocComplete=\"matAutocompleteTrigger\">\r\n          <mat-autocomplete autoActiveFirstOption #autoLoc=\"matAutocomplete\" [displayWith]=\"displayLoc\" \r\n              (selectedValueChange)=\"cambioLoc($event);\">\r\n              <mat-option *ngFor=\"let loc of filteredLocalidades$ | async\" [value]=\"loc\">\r\n                  {{loc.codigo}} {{loc.nombre}}\r\n              </mat-option>\r\n          </mat-autocomplete>\r\n          <button mat-icon-button matSuffix (click)=\"clearLoc()\" \r\n          *ngIf=\"localidadFC.value != undefined && localidadFC?.value !== ''\">\r\n              <mat-icon>clear</mat-icon>\r\n          </button>\r\n          <mat-error *ngIf=\"localidadFC.invalid\">Seleccione una Localidad</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 12%;\">\r\n          <mat-label class=\"label\">Nro Área</mat-label>\r\n          <span matPrefix>0 &nbsp;</span>\r\n          <input matInput [formControl]=\"telefonoArea1\" name=\"areaCodeField1\" type=\"number\">\r\n        </mat-form-field>\r\n        <span style=\"width: 5%;\"></span>\r\n        <mat-form-field style=\"width: 20%;\">        \r\n          <mat-label class=\"label\">Nro Teléfono Fijo</mat-label>\r\n          <input matInput [formControl]=\"telefonoNumero1\" name=\"nroTelField1\" type=\"number\">\r\n        </mat-form-field>\r\n        <span style=\"width: 5%;\"></span>\r\n        <mat-form-field style=\"width: 58%;\">        \r\n          <mat-label class=\"label\">Ref</mat-label>      \r\n          <input matInput [formControl]=\"telefonoRef1\" type=\"text\" >\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 12%;\">\r\n          <mat-label class=\"label\">Nro Área</mat-label>\r\n          <span matPrefix>0 &nbsp;</span>\r\n          <input matInput [formControl]=\"telefonoArea3\" name=\"areaCodeField3\" type=\"number\">\r\n        </mat-form-field>\r\n        <span style=\"width: 5%;\"></span>\r\n        <mat-form-field style=\"width: 20%;\">        \r\n          <mat-label class=\"label\">Nro Celular</mat-label>\r\n          <span matPrefix>15 &nbsp;</span>\r\n          <input matInput [formControl]=\"telefonoNumero3\" name=\"nroTelField3\" type=\"number\">\r\n        </mat-form-field>\r\n        <span style=\"width: 5%;\"></span>\r\n        <mat-form-field style=\"width: 58%;\">        \r\n          <mat-label class=\"label\">Ref</mat-label>      \r\n          <input matInput [formControl]=\"telefonoRef3\" type=\"text\" >\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n          <mat-label class=\"label\">Email</mat-label>\r\n          <input matInput [formControl]=\"email\" style=\"margin-right: 4px;\"  type=\"email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n          <mat-label class=\"label\">Comentario</mat-label>\r\n          <input matInput [formControl]=\"comentario\" type=\"text\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"my-col-50-r cuadro-gris\" >\r\n    <table mat-table [dataSource]=\"turnosAnteriores\" >\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n      <ng-container matColumnDef=\"confirmado\">\r\n          <th mat-header-cell *matHeaderCellDef style=\"width: 10%;\" mat-sort-header>\r\n              Conf.\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 10%;\" >\r\n              {{row.turno.estado}}\r\n          </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"fecha\">\r\n          <th mat-header-cell *matHeaderCellDef style=\"width: 20%;\" mat-sort-header>\r\n              Fecha Turno\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\" style=\"width: 20%;\" >\r\n            {{row.turno.fechaHora | date:'dd/MM/yyyy HH:mm' }}  \r\n          </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"os\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width: 30%;\" mat-sort-header>\r\n            Obra Social\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 30%;\" >\r\n            {{row.obraSocial?.nombre}}\r\n        </td>\r\n      </ng-container>\r\n \r\n      <ng-container matColumnDef=\"profesional\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width: 30%;\" mat-sort-header>\r\n            Profesional\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 30%;\" >\r\n            {{row.especialidadProfesional?.nombreApellido}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!--              \r\n      <ng-container matColumnDef=\"acciones\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width: 10%;\" mat-sort-header>\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row\" style=\"width: 10%;\" (click)=\"onLiberarClick(row);\" >\r\n          <span _ngcontent-yil-c19=\"\" class=\"material-icons icon-image-preview\">cancel</span>\r\n        </td>\r\n      </ng-container>      \r\n      -->\r\n    </table>\r\n  </div>  \r\n</div>\r\n\r\n<div mat-dialog-actions class=\"botonera\">\r\n  <button mat-button class=\"button\" (click)=\"onCancelarClick()\">Cancelar</button>\r\n  <button mat-button class=\"button\" title=\"Limpia los campos\" (click)=\"onNuevoPaciente()\">Nuevo Paciente</button>\r\n  <button mat-button class=\"button\" title=\"Crear/Actualizar paciente\" (click)=\"onGuardaPaciente()\" [disabled]=\"!perCompleta()\">Guardar Datos Paciente</button>\r\n  <button *ngIf=\"turnoDisponible()\" mat-button class=\"button\" title=\"Asignar turno (no actualiza paciente)\" (click)=\"onConfirmarClick()\" [disabled]=\"!hayPaciente()\">Asignar</button>\r\n  <!--button *ngIf=\"!turnoDisponible()\" mat-button class=\"button\" title=\"Liberar\" (click)=\"onLiberarThis()\">Liberar</button-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/busqPaciente/busqPaciente.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/busqPaciente/busqPaciente.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"popupTitle\" mat-dialog-title>Búsqueda paciente</h1>\r\n\r\n<div mat-dialog-content>\r\n    <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n            <mat-label>Dni</mat-label>\r\n            <input matInput [formControl]=\"dniFC\" type=\"text\">\r\n        </mat-form-field>\r\n    </div>        \r\n    <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n            <mat-label>Apellido Nombre</mat-label>\r\n            <input matInput [formControl]=\"apeNomFC\" type=\"text\">\r\n        </mat-form-field>\r\n    </div>  \r\n    <div class=\"row clearfix\">\r\n        <button style=\"width: 100%;\" class=\"button\" mat-flat-button \r\n            [disabled]=\"!isValid()\" (click)=\"buscarPacientes()\">\r\n            BUSCAR\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"row clearfix\"> \r\n        <div class=\"center\">\r\n            <mat-spinner *ngIf=\"loading\"></mat-spinner> \r\n        </div>\r\n        \r\n        <table mat-table [dataSource]=\"resultados\" class=\"myTable\">\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsBusq1\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsBusq1;\"></tr>\r\n\r\n            <ng-container matColumnDef=\"hc\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"titleTable\" style=\"width: 10%;\" mat-sort-header>\r\n                    HC\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\"\r\n                    (click)=\"onClickPaciente(row)\" title=\"Seleccionar\">\r\n                    {{row.hc}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"nombreApellido\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"titleTable\" style=\"width: 25%;\" mat-sort-header>\r\n                    Apellido Nombre\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\"\r\n                    (click)=\"onClickPaciente(row)\" title=\"Seleccionar\">\r\n                    {{row.nombreApellido}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"dni\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"titleTable\" style=\"width: 18%;\" mat-sort-header>\r\n                    DNI\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\"\r\n                    (click)=\"onClickPaciente(row)\" title=\"Seleccionar\">\r\n                    {{row.dni}}\r\n                </td>\r\n            </ng-container>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions class=\"botonera\">\r\n  <button mat-button (click)=\"onCancelarClick()\">Cancelar</button>\r\n  <!--button mat-button \r\n    [mat-dialog-close]=\"data.profesional\" cdkFocusInitial>Ok</button-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/busqProfesional/busqProfesional.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/busqProfesional/busqProfesional.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"popupTitle\" mat-dialog-title>Búsqueda profesional</h1>\r\n\r\n<div mat-dialog-content>\r\n    <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n            <mat-label>Especialidad</mat-label>\r\n            <input type=\"text\" name=\"espField\" placeholder=\"Seleccione una\" matInput \r\n                [formControl]=\"especialidadFC\" \r\n                [matAutocomplete]=\"autoEsp\"\r\n                #autoEspComplete=\"matAutocompleteTrigger\">\r\n            <mat-autocomplete autoActiveFirstOption #autoEsp=\"matAutocomplete\" [displayWith]=\"displayEsp\" \r\n                (selectedValueChange)=\"cambioEspecialidad($event);\">\r\n                <mat-option *ngFor=\"let esp of filteredEspecialidades$ | async\" [value]=\"esp\">\r\n                    {{esp.codigo}} {{esp.nombre}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n            <button mat-icon-button matSuffix (click)=\"clearEspecialidad()\" \r\n               *ngIf=\"especialidadFC.value != undefined && especialidadFC?.value !== ''\">\r\n               <mat-icon>clear</mat-icon>\r\n            </button>   \r\n            <mat-error *ngIf=\"especialidadFC.invalid\">Seleccione una Especialidad</mat-error>\r\n        </mat-form-field>                             \r\n    </div>        \r\n    <div class=\"row clearfix\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n            <mat-label>Obra Social</mat-label>\r\n            <input type=\"text\" name=\"osField\" placeholder=\"Seleccione una\" matInput \r\n                [formControl]=\"obraSocialFC\" \r\n                [matAutocomplete]=\"autoOS\"\r\n                #autoObraComplete=\"matAutocompleteTrigger\">\r\n            <mat-autocomplete autoActiveFirstOption #autoOS=\"matAutocomplete\" [displayWith]=\"displayOS\" \r\n                (selectedValueChange)=\"cambioObraSocial($event);\">\r\n                <mat-option *ngFor=\"let os of filteredObrasSociales$ | async\" [value]=\"os\">\r\n                    {{os.codigo}} {{os.nombre}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n            <button mat-icon-button matSuffix (click)=\"clearOS()\" \r\n            *ngIf=\"obraSocialFC.value != undefined && obraSocialFC?.value !== ''\">\r\n                <mat-icon>clear</mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"obraSocialFC.invalid\">Seleccione una Obra Social</mat-error>\r\n        </mat-form-field>\r\n    </div>  \r\n    <div class=\"row clearfix\">\r\n        <button style=\"width: 100%;\" class=\"button\" mat-flat-button \r\n            [disabled]=\"!isValid()\" (click)=\"buscarProfesionales()\">\r\n            BUSCAR\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"row clearfix\"> \r\n        <table mat-table [dataSource]=\"resultados\" class=\"myTable\">\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsBusq1\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsBusq1;\"></tr>\r\n\r\n            <ng-container matColumnDef=\"codigo\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"titleTable\" style=\"width: 10%;\" mat-sort-header>\r\n                    Cód.Prof.\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\"\r\n                    (click)=\"onClickProf(row)\" title=\"Seleccionar\">\r\n                    {{row.codigo}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"nombreApellido\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"titleTable\" style=\"width: 25%;\" mat-sort-header>\r\n                    Profesional\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\"\r\n                    (click)=\"onClickProf(row)\" title=\"Seleccionar\">\r\n                    {{row.nombreApellido}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"sinOS\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"titleTable\" style=\"width: 18%;\" mat-sort-header>\r\n                    S/ Obra Social\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\"\r\n                    (click)=\"onClickProf(row)\" title=\"Seleccionar\">\r\n                    {{row.turnoParticular?.fechaHora | date: 'dd/MM/yyyy HH:mm'}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"AM\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"titleTable\" style=\"width: 18%;\" mat-sort-header>\r\n                    1° Turno Libre Mañana\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\"\r\n                    (click)=\"onClickProf(row)\" title=\"Seleccionar\">\r\n                    {{row.turnoAM?.fechaHora | date: 'dd/MM/yyyy HH:mm'}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"PM\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"titleTable\" style=\"width: 18%;\" mat-sort-header>\r\n                    1° Turno Libre Tarde\r\n                </th>\r\n                <!--\r\n[mat-dialog-close]=\"data.profesional\"\r\n                 -->\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\"\r\n                    (click)=\"onClickProf(row)\" title=\"Seleccionar\">\r\n                    {{row.turnoPM?.fechaHora | date: 'dd/MM/yyyy HH:mm'}}\r\n                </td>\r\n            </ng-container>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions class=\"botonera\">\r\n  <button mat-button (click)=\"onCancelarClick()\" style=\"float: right;\">Cancelar</button>\r\n  <!--button mat-button \r\n    [mat-dialog-close]=\"data.profesional\" cdkFocusInitial>Ok</button-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/licencias/licencias.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/licencias/licencias.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Licencias profesional</h1>\r\n\r\n<div mat-dialog-content>\r\n\r\n    <div class=\"row clearfix\">\r\n        <table mat-table [dataSource]=\"licencias\" class=\"myTable\">\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsBusq1\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsBusq1;\"></tr>\r\n\r\n            <ng-container matColumnDef=\"desde\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"width: 25%;\" class=\"titleTable\">\r\n                    Fecha Desde\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\">\r\n                    {{row.fechaDesde | date: 'dd/MM/yyyy HH:mm'}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"hasta\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"width: 20%;\" class=\"titleTable\">\r\n                    Fecha Hasta\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\">\r\n                    {{row.fechaHasta | date: 'dd/MM/yyyy HH:mm'}}\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"motivo\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"width: 40%;\" class=\"titleTable\">\r\n                    Motivo\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\" class=\"rowTable\" >\r\n                    {{row.motivo}}\r\n                </td>\r\n            </ng-container>\r\n\r\n        </table>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions class=\"botonera\">\r\n  <button mat-button (click)=\"onCancelarClick()\">Cancelar</button>\r\n  <!--button mat-button \r\n    [mat-dialog-close]=\"data.profesional\" cdkFocusInitial>Ok</button-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/errors/error-control/error-control.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/errors/error-control/error-control.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/home/home.module": [
		"./src/app/modules/home/home.module.ts",
		"modules-home-home-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var routes = [
    {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule',
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'turnero-hospital-espaniol';
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/es-AR */ "./node_modules/@angular/common/locales/es-AR.js");
/* harmony import */ var _angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm5/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_store_effects_form_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../app/core/store/effects/form.effects */ "./src/app/core/store/effects/form.effects.ts");
/* harmony import */ var _app_core_store_effects_turno_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../app/core/store/effects/turno.effects */ "./src/app/core/store/effects/turno.effects.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ "./src/app/core/interceptor/error.interceptor.ts");
/* harmony import */ var _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/interceptor/token.interceptor */ "./src/app/core/interceptor/token.interceptor.ts");
/* harmony import */ var _core_store_effects_context_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/store/effects/context.effects */ "./src/app/core/store/effects/context.effects.ts");
/* harmony import */ var _core_store_effects_error_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/store/effects/error.effects */ "./src/app/core/store/effects/error.effects.ts");
/* harmony import */ var _core_store_reducers_contexto_reducers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/store/reducers/contexto.reducers */ "./src/app/core/store/reducers/contexto.reducers.ts");
/* harmony import */ var _core_store_reducers_error_reducers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/store/reducers/error.reducers */ "./src/app/core/store/reducers/error.reducers.ts");
/* harmony import */ var _core_store_reducers_form_reducers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/store/reducers/form.reducers */ "./src/app/core/store/reducers/form.reducers.ts");
/* harmony import */ var _core_store_reducers_turno_reducers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/store/reducers/turno.reducers */ "./src/app/core/store/reducers/turno.reducers.ts");
/* harmony import */ var _core_store_reducers_storage_metareducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/store/reducers/storage.metareducer */ "./src/app/core/store/reducers/storage.metareducer.ts");
/* harmony import */ var _modules_home_components_asignarTurno_asignarTurno_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/home/components/asignarTurno/asignarTurno.component */ "./src/app/modules/home/components/asignarTurno/asignarTurno.component.ts");
/* harmony import */ var _modules_home_components_busqProfesional_busqProfesional_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/home/components/busqProfesional/busqProfesional.component */ "./src/app/modules/home/components/busqProfesional/busqProfesional.component.ts");
/* harmony import */ var _modules_home_components_licencias_licencias_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/home/components/licencias/licencias.component */ "./src/app/modules/home/components/licencias/licencias.component.ts");
/* harmony import */ var _shared_adapters_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/adapters/common */ "./src/app/shared/adapters/common.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _modules_home_components_busqPaciente_busqPaciente_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modules/home/components/busqPaciente/busqPaciente.component */ "./src/app/modules/home/components/busqPaciente/busqPaciente.component.ts");



































Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_3___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _modules_home_components_licencias_licencias_component__WEBPACK_IMPORTED_MODULE_31__["LicenciasDialogComponent"],
                _modules_home_components_busqProfesional_busqProfesional_component__WEBPACK_IMPORTED_MODULE_30__["BusqProfesionalDialogComponent"],
                _modules_home_components_asignarTurno_asignarTurno_component__WEBPACK_IMPORTED_MODULE_29__["AsignarTurnoDialogComponent"],
                _modules_home_components_busqPaciente_busqPaciente_component__WEBPACK_IMPORTED_MODULE_34__["BusqPacienteDialogComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_33__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({
                    // router: routerReducer,
                    contexto: _core_store_reducers_contexto_reducers__WEBPACK_IMPORTED_MODULE_24__["contextoReducer"],
                    formulario: _core_store_reducers_form_reducers__WEBPACK_IMPORTED_MODULE_26__["formReducer"],
                    formularioTurno: _core_store_reducers_turno_reducers__WEBPACK_IMPORTED_MODULE_27__["turnoReducer"],
                    error: _core_store_reducers_error_reducers__WEBPACK_IMPORTED_MODULE_25__["errorReducer"],
                }, {
                    metaReducers: [_core_store_reducers_storage_metareducer__WEBPACK_IMPORTED_MODULE_28__["storageMetaReducer"]]
                }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production,
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([
                    _app_core_store_effects_form_effects__WEBPACK_IMPORTED_MODULE_14__["FormEffects"],
                    _app_core_store_effects_turno_effects__WEBPACK_IMPORTED_MODULE_15__["TurnoEffects"],
                    _core_store_effects_error_effects__WEBPACK_IMPORTED_MODULE_23__["ErrorEffects"],
                    _core_store_effects_context_effects__WEBPACK_IMPORTED_MODULE_22__["ContextEffects"],
                ]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"]
            ],
            exports: [
                _core_core_module__WEBPACK_IMPORTED_MODULE_18__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_33__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_21__["TokenInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_20__["HttpErrorInterceptor"],
                    multi: true
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"], useValue: 'es-AR' },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], useClass: _shared_adapters_common__WEBPACK_IMPORTED_MODULE_32__["CustomDateAdapter"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: _shared_adapters_common__WEBPACK_IMPORTED_MODULE_32__["MY_DATE_FORMATS"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/authentification/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/authentification/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm5/auth0-angular-jwt.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_store_selectors_contexto_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/store/selectors/contexto.selectors */ "./src/app/core/store/selectors/contexto.selectors.ts");


 // npm install @auth0/angular-jwt


var AuthService = /** @class */ (function () {
    function AuthService(store) {
        this.store = store;
    }
    AuthService.prototype.getToken = function () {
        var _this = this;
        this.token$ = this.store.select(_core_store_selectors_contexto_selectors__WEBPACK_IMPORTED_MODULE_4__["getToken"]);
        this.token$.subscribe(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        var token = this.getToken();
        return helper.isTokenExpired(token);
    };
    AuthService.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/service.service */ "./src/app/core/services/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_authentification_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/authentification/auth.service */ "./src/app/core/authentification/auth.service.ts");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
            providers: [
                _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
                _core_authentification_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scaling-svg-container {\r\n    position: relative; \r\n    height: 0; \r\n    width: 100%; \r\n    padding: 0;\r\n    padding-top: 1%; \r\n    padding-bottom: 12%; \r\n    /* override this inline for aspect ratio other than square */\r\n}\r\n.scaling-svg {\r\n    position: absolute; \r\n    height: 100%; \r\n    width: 100%; \r\n    left: 0; \r\n    top: 0;\r\n}\r\n.mat-option {\r\n    margin: 1rem 0;\r\n    overflow: visible;\r\n    line-height: initial;\r\n    word-wrap: break-word;\r\n    white-space: pre-wrap;\r\n    height: unset;\r\n  }\r\n.recuadroSeccion {\r\n    background-color: #3567AF;\r\n    color: white;\r\n    padding-left: 5px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    font-size: x-large;\r\n}\r\n.exit {\r\n    float: right;\r\n    background-color: #3567AF;\r\n    color: white;\r\n    border: none;\r\n    padding-right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw0REFBNEQ7QUFDaEU7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0FBQ1Y7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0FBR0Y7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYWxpbmctc3ZnLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgaGVpZ2h0OiAwOyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDEyJTsgXHJcbiAgICAvKiBvdmVycmlkZSB0aGlzIGlubGluZSBmb3IgYXNwZWN0IHJhdGlvIG90aGVyIHRoYW4gc3F1YXJlICovXHJcbn1cclxuLnNjYWxpbmctc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgbGVmdDogMDsgXHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5tYXQtb3B0aW9uIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuXHJcbi5yZWN1YWRyb1NlY2Npb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NjdBRjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmV4aXQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NjdBRjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_store_actions_contexto_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/store/actions/contexto.actions */ "./src/app/core/store/actions/contexto.actions.ts");
/* harmony import */ var _core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/store/actions/form.actions */ "./src/app/core/store/actions/form.actions.ts");
/* harmony import */ var _core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/store/actions/turno.actions */ "./src/app/core/store/actions/turno.actions.ts");
/* harmony import */ var _store_selectors_contexto_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/selectors/contexto.selectors */ "./src/app/core/store/selectors/contexto.selectors.ts");








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.token$ = this.store.select(_store_selectors_contexto_selectors__WEBPACK_IMPORTED_MODULE_7__["getToken"]);
    };
    HeaderComponent.prototype.logout = function () {
        this.store.dispatch(_core_store_actions_contexto_actions__WEBPACK_IMPORTED_MODULE_4__["setToken"]({ token: undefined }));
        this.store.dispatch(_core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_5__["clear"]());
        this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["clear"]());
        this.router.navigate(['/home']);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/interceptor/error.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/service.service */ "./src/app/core/services/service.service.ts");
/* harmony import */ var _utils_service_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/service.utils */ "./src/app/core/utils/service.utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_store_actions_contexto_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/store/actions/contexto.actions */ "./src/app/core/store/actions/contexto.actions.ts");
/* harmony import */ var _core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/store/actions/form.actions */ "./src/app/core/store/actions/form.actions.ts");
/* harmony import */ var _core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/store/actions/turno.actions */ "./src/app/core/store/actions/turno.actions.ts");











var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(store, errorService, router) {
        this.store = store;
        this.errorService = errorService;
        this.router = router;
    }
    HttpErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var errorMessage = '';
            if (error instanceof ErrorEvent) {
                // client-side error
                //errorMessage = `Client-side error: ${error.error.message}`;
                console.error("Client-side error: " + error.error.message);
                errorMessage = "Se ha producido un error. Por favor reintente m\u00E1s tarde";
            }
            else {
                // backend error
                if (error.error != undefined && error.error.mensaje) {
                    errorMessage = "" + error.error.mensaje;
                    console.error("Server-side error: " + error.error.mensaje + " (CodError: " + error.error.codigo + ")");
                }
                else {
                    console.error("WS error " + error.status + ": " + error.message);
                    if (error.status === 401) {
                        errorMessage = "Usuario o contrase\u00F1a inv\u00E1lidos";
                        _this.store.dispatch(_core_store_actions_contexto_actions__WEBPACK_IMPORTED_MODULE_8__["setToken"]({ token: undefined }));
                        _this.store.dispatch(_core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_9__["clear"]());
                        _this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_10__["clear"]());
                        _this.router.navigate(['/home']);
                    }
                    if (error.status === 404) {
                        //errorMessage = `Error ${error.status}: ${error.message}`;
                        errorMessage = "Error 404: ws no encontrado!";
                    }
                    else {
                        //errorMessage = `Error ${error.status}: ${error.message}`;
                        errorMessage = "Se ha producido un error. Por favor reintente m\u00E1s tarde. C\u00F3digo: " + error.status;
                    }
                }
            }
            Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_5__["throwErrorToUser"])(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }));
    };
    HttpErrorInterceptor.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    HttpErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptor/token.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/token.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _authentification_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentification/auth.service */ "./src/app/core/authentification/auth.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: _authentification_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_authentification_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/mocks/mocks.ts":
/*!*************************************!*\
  !*** ./src/app/core/mocks/mocks.ts ***!
  \*************************************/
/*! exports provided: rta200, rta500, rta400, rtaAlerta, rtaError, rtaOk, planMock1, planMock2, planMock3, planMock4, obraSocialMock1, obraSocialMock2, obrasSocialesMocks, centroAtencionMock, centroAtencionesMocks, tokenMock, especialidadesMocks, horariosProf, profesionalE0, profesionalE1, profesionalE2, profesionalEBusq1, profesionalEBusq2, especialidadProfMock, especialidadProfFiltradasMock, licencia1, licencia2, licenciasMock, turno1, turno2, turno3, turno4, turno5, turno6, turno7, turno8, turno51, turno61, turno71, turno81, turno52, turno62, turno72, turno82, turnoRespuesta, turnoRespuestaLic, tel1, tel2, paciente1_, paciente2_, paciente3_, turnoAsignado1, paciente1, paciente2, paciente3, pacientesList, pacienteRta, turnoPacienteRtaO, turnoPacienteRtaL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rta200", function() { return rta200; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rta500", function() { return rta500; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rta400", function() { return rta400; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtaAlerta", function() { return rtaAlerta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtaError", function() { return rtaError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtaOk", function() { return rtaOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planMock1", function() { return planMock1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planMock2", function() { return planMock2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planMock3", function() { return planMock3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planMock4", function() { return planMock4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obraSocialMock1", function() { return obraSocialMock1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obraSocialMock2", function() { return obraSocialMock2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obrasSocialesMocks", function() { return obrasSocialesMocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centroAtencionMock", function() { return centroAtencionMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centroAtencionesMocks", function() { return centroAtencionesMocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenMock", function() { return tokenMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "especialidadesMocks", function() { return especialidadesMocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horariosProf", function() { return horariosProf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profesionalE0", function() { return profesionalE0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profesionalE1", function() { return profesionalE1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profesionalE2", function() { return profesionalE2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profesionalEBusq1", function() { return profesionalEBusq1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profesionalEBusq2", function() { return profesionalEBusq2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "especialidadProfMock", function() { return especialidadProfMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "especialidadProfFiltradasMock", function() { return especialidadProfFiltradasMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "licencia1", function() { return licencia1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "licencia2", function() { return licencia2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "licenciasMock", function() { return licenciasMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno1", function() { return turno1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno2", function() { return turno2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno3", function() { return turno3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno4", function() { return turno4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno5", function() { return turno5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno6", function() { return turno6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno7", function() { return turno7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno8", function() { return turno8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno51", function() { return turno51; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno61", function() { return turno61; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno71", function() { return turno71; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno81", function() { return turno81; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno52", function() { return turno52; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno62", function() { return turno62; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno72", function() { return turno72; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turno82", function() { return turno82; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnoRespuesta", function() { return turnoRespuesta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnoRespuestaLic", function() { return turnoRespuestaLic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tel1", function() { return tel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tel2", function() { return tel2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paciente1_", function() { return paciente1_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paciente2_", function() { return paciente2_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paciente3_", function() { return paciente3_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnoAsignado1", function() { return turnoAsignado1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paciente1", function() { return paciente1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paciente2", function() { return paciente2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paciente3", function() { return paciente3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pacientesList", function() { return pacientesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pacienteRta", function() { return pacienteRta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnoPacienteRtaO", function() { return turnoPacienteRtaO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnoPacienteRtaL", function() { return turnoPacienteRtaL; });
var rta200 = {
    codigo: 200,
    mensaje: "OK"
};
var rta500 = {
    codigo: 500,
    mensaje: "algun msj de error"
};
var rta400 = {
    codigo: 400,
    mensaje: "algun error de validacion"
};
var rtaAlerta = {
    respuesta: rta400
};
var rtaError = {
    respuesta: rta500
};
var rtaOk = {
    respuesta: rta200
};
var planMock1 = {
    codigo: 1,
    nombre: '210 - Básico'
};
var planMock2 = {
    codigo: 2,
    nombre: '310 - Básico'
};
var planMock3 = {
    codigo: 3,
    nombre: '410 - Básico'
};
var planMock4 = {
    codigo: 4,
    nombre: '510 - Básico'
};
var obraSocialMock1 = {
    codigo: 123,
    nombre: 'OSDE',
    plan: [
        planMock1, planMock2
    ],
    alertas: ["Autorización en línea a través de autorizador de AMR GESTION Convenio N° 10\n___________________________________________________________________________\nPlan 6030 es un plan de contingencia, el cual el afiliado no permanecerá más de 12 meses - \nCon COPAGO en prestaciones ambulatorias. \nLa credencial tendrá formato digital exclusivamente por lo cual el afiliado les dará el número de token\nAbona coseguro :  Consulta en Consultorio $ 250, 170101 Electrocardiograma $ 100, 180101 al 180121 Ecografía nomenclada $ 200, 180161 Ecografía endocavitaria (trasvaginal) $ 200, 340201/02/340209/10-340211/340212/340213 Radiología simple (Rx pies, mano, muñeca, rodilla) $ 200. 340301-340302 Rx Tórax (FyP) dos placas $ 200, 341001 al 341013 TAC nomenclada $ 700, 180172 Punción biopsia b/ctrol ecográfico $ 500, 200180 Videoendoscopia Alta o Baja - Tera o Diag $ 1.000, 220101 colposcopia $ 50, 150106 Pap $ 50, 170178 Ergometria $ 200, 170161 Presurometria $ 200, 280164 Espirometria $ 120, 280183 Endoscopias Respiratorias $ 1.000, 290102 EEG $ 100, 290161 Potenciales evocados $ 300, 290163 EEg sueño $ 700, 290106 Electromiograma $ 500, 300161 campo visual computarizado $ 300, 360102 Uretrocistoscopia $ 1.000, 360160 Estudio urodinamico $ 1.000, 360161 Uroflujometria $ 300\nRESONANCIAS $ 1.000, DOPPLER DE TIROIDES-COLOR- $ 300\n___________________________________________________________________________\nMaterial descartable y medicamento en todos los casos 100% A CARGO DE OSDE\n_____________________________________________________________________________ \nSERVICIOS DE OBESIDAD MORBIDA: es por reintegro el tratamiento previo, a evaluación del médico auditor de OSDE. Para eso el afiliado debe presentarse a la OS con prescripción médica del tratamiento sugerido, presupuesto y resumen de HC (hablado con Osde 28/10/14)"]
};
var obraSocialMock2 = {
    codigo: 12345,
    nombre: 'ACA Salud',
    plan: [
        planMock3, planMock4
    ],
    alertas: ["Autorizaciones On line por AMR Gestión, convenio N° 5\n___________________________________________________________________________\n\nDesde Abril 2019 no se imprimen las consultas médicas, dado que se realiza facturación electrónica. \nA continuación detallo eventualidades a tener en cuenta:\n                   Los  planes que no cuenten con esta metodología de Validación On Line,  como son el PMO o el CERCA, seguirá el proceso de facturación en papel habitual.\n                     En caso de caída de sistema o eventualidades como cortes de luz… recordar que se encuentra el centro de Servicios de Conectividad, con los teléfonos: 0810-2227-2583 o 4208741, pero para consultas médicas solo pediremos la verificación de afiliación del socio, así a posterior validaremos la orden por el sistema On Line.\nInconvenientes es importante que se realicen impresiones de pantalla, para poder solucionarlo a futuro enviando un correo a gruggeri@amr.org.ar\n__________________________________________________________________________\n*** Motivo de débito: no cargar Nª de Bono COMPLETO. Por  tal motivo es obligación cargar SI O SI todos los números  de la autorización en el Nª de BONO\n__________________________________________________________________________\nNo tiene cobertura en la parte de  psicología comunica contrataciones. (17-03-09)\n___________________________________________________________________________\n** Se pacta esclerosante (excluye medicamentos y debe estar autorizado previamente. Giselle 24/02/12"]
};
var obrasSocialesMocks = [obraSocialMock1, obraSocialMock2];
var centroAtencionMock = {
    codigo: 1,
    nombre: 'Hospital Español'
};
var centroAtencionesMocks = [centroAtencionMock];
// tslint:disable-next-line: max-line-length
var tokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6IlNPUE9SVEVJVCIsIlNlc3Npb25JZCI6IjExYTEzYTljLTc3NmQtNGM3Ni05YjUwLThjZDM0YWIwZThiNCIsImV4cCI6MTU4NzkwMDMxOSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzMvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzMvIn0.n5SJmebQ5BzAwRrWt0JCDoD5qW7rVr7aXVGcGJSk7eY';
var especialidadesMocks = [
    {
        codigo: 1,
        nombre: 'Kinesiología'
    },
    {
        codigo: 2,
        nombre: 'Endocrinología'
    },
    {
        codigo: 6,
        nombre: 'CARDIOLOGIA'
    },
    {
        codigo: 8,
        nombre: 'CIR. GENERAL'
    }
];
var horariosProf = [
    {
        diaSemana: 'LU',
        rangoAM: { horaDesde: "10:00", horaHasta: "12:00" },
        rangoPM: null
    },
    {
        diaSemana: 'MI',
        rangoAM: null,
        rangoPM: { horaDesde: "15:00", horaHasta: "17:00" }
    },
    {
        diaSemana: 'VI',
        rangoAM: { horaDesde: "10:00", horaHasta: "12:00" },
        rangoPM: { horaDesde: "15:00", horaHasta: "17:00" }
    },
    {
        diaSemana: 'SA',
        rangoAM: { horaDesde: "10:00", horaHasta: "12:00" },
        rangoPM: null
    }
];
var profesionalE0 = {
    codigo: 0,
    nombreApellido: 'BÚSQUEDA AVANZADA',
    especialidad: null,
    horario: null,
    alertas: [],
    turnoAM: null,
    turnoPM: null,
    turnoParticular: null
};
var profesionalE1 = {
    codigo: 11020,
    nombreApellido: 'ABDALA EMELIA',
    especialidad: especialidadesMocks,
    horario: horariosProf,
    alertas: ['test1'],
    turnoAM: { codigo: 1, fechaHora: new Date('2020/12/22'), estado: 1 },
    turnoPM: { codigo: 1, fechaHora: new Date('2020/12/20'), estado: 1 },
    turnoParticular: { codigo: 1, fechaHora: new Date('2020/12/21'), estado: 1 }
};
var profesionalE2 = {
    codigo: 104,
    nombreApellido: 'ADAD EDUARDO',
    especialidad: especialidadesMocks,
    horario: horariosProf,
    alertas: ['test2'],
    turnoAM: { codigo: 1, fechaHora: new Date('2020/12/18'), estado: 1 },
    turnoPM: { codigo: 1, fechaHora: new Date('2020/12/19'), estado: 1 },
    turnoParticular: { codigo: 1, fechaHora: new Date('2020/12/20'), estado: 1 },
};
var profesionalEBusq1 = {
    codigo: 11020,
    nombreApellido: 'ABDALA EMELIA',
    especialidad: especialidadesMocks[0],
    horario: horariosProf,
    alertas: [],
    turnoAM: { codigo: 1, fechaHora: new Date('2020/12/22'), estado: 1 },
    turnoPM: { codigo: 1, fechaHora: new Date('2020/12/20'), estado: 1 },
    turnoParticular: { codigo: 1, fechaHora: new Date('2020/12/21'), estado: 1 }
};
var profesionalEBusq2 = {
    codigo: 104,
    nombreApellido: 'ADAD EDUARDO',
    especialidad: especialidadesMocks[1],
    horario: horariosProf,
    alertas: [],
    turnoAM: { codigo: 1, fechaHora: new Date('2020/12/18'), estado: 1 },
    turnoPM: { codigo: 1, fechaHora: new Date('2020/12/19'), estado: 1 },
    turnoParticular: { codigo: 1, fechaHora: new Date('2020/12/20'), estado: 1 },
};
var especialidadProfMock = [
    profesionalE0, profesionalE1, profesionalE2
];
var especialidadProfFiltradasMock = [
    profesionalEBusq1, profesionalEBusq2
];
var licencia1 = {
    fechaDesde: new Date('2020/12/17'),
    fechaHasta: new Date('2020/12/18'),
    motivo: "una licencia",
};
var licencia2 = {
    fechaDesde: new Date('2021/12/17'),
    fechaHasta: new Date('2021/12/18'),
    motivo: "otra licencia",
};
var licenciasMock = [
    licencia1, licencia2
];
var turno1 = {
    codigo: 41,
    fechaHora: new Date('2020/12/18 9:00'),
    estado: 4,
};
var turno2 = {
    codigo: 42,
    fechaHora: new Date('2020/12/18 9:15'),
    estado: 4,
};
var turno3 = {
    codigo: 43,
    fechaHora: new Date('2020/12/18 9:30'),
    estado: 4,
};
var turno4 = {
    codigo: 44,
    fechaHora: new Date('2020/12/18 9:45'),
    estado: 4,
};
var turno5 = {
    codigo: 45,
    fechaHora: new Date('2020/12/18 10:00'),
    estado: 4,
};
var turno6 = {
    codigo: 3,
    fechaHora: new Date('2020/12/18 10:15'),
    estado: 1,
};
var turno7 = {
    codigo: 47,
    fechaHora: new Date('2020/12/18 10:30'),
    estado: 4,
};
var turno8 = {
    codigo: 48,
    fechaHora: new Date('2020/12/18 10:45'),
    estado: 4,
};
var turno51 = {
    codigo: 2,
    fechaHora: new Date('2020/12/18 11:00'),
    estado: 3,
};
var turno61 = {
    codigo: 3,
    fechaHora: new Date('2020/12/18 11:15'),
    estado: 1,
};
var turno71 = {
    codigo: 4,
    fechaHora: new Date('2020/12/18 11:30'),
    estado: 1,
};
var turno81 = {
    codigo: 4,
    fechaHora: new Date('2020/12/18 11:45'),
    estado: 1,
};
var turno52 = {
    codigo: 2,
    fechaHora: new Date('2020/12/18 12:00'),
    estado: 1,
};
var turno62 = {
    codigo: 3,
    fechaHora: new Date('2020/12/18 12:15'),
    estado: 1,
};
var turno72 = {
    codigo: 4,
    fechaHora: new Date('2020/12/18 12:30'),
    estado: 2,
};
var turno82 = {
    codigo: 4,
    fechaHora: new Date('2020/12/18 12:45'),
    estado: 2,
};
var turnoRespuesta = {
    respuesta: undefined,
    turno: [turno1, turno2, turno3, turno4,
        turno5, turno6, turno7, turno8,
        turno51, turno61, turno71, turno81,
        turno52, turno62, turno72, turno82],
    licencia: undefined
};
var turnoRespuestaLic = {
    respuesta: undefined,
    turno: [],
    licencia: {
        fechaDesde: new Date('2020/12/18'),
        fechaHasta: new Date('2020/12/20'),
        motivo: 'prueba licencia'
    }
};
var tel1 = {
    area: 341,
    numero: 3999888,
    referencia: 'paciente'
};
var tel2 = {
    area: 341,
    numero: 3999888,
    referencia: 'pareja'
};
var paciente1_ = {
    codigo: 334025,
    hc: 269862,
    dni: 50123123,
    nombreApellido: 'Brumatti José',
    direccion: 'mitre 123',
    localidad: {
        codigo: 2000,
        nombre: 'Rosario'
    },
    telefonoFijo: undefined,
    celular: tel2,
    comentario: undefined,
    edad: undefined,
    email: undefined,
    fechaNacimiento: undefined,
    fechanacimiento: undefined,
    turnoPaciente: undefined
};
var paciente2_ = {
    codigo: 334025,
    hc: 111222,
    dni: 50444555,
    nombreApellido: 'Brumatti Juan',
    direccion: 'san martin 123',
    localidad: {
        codigo: 2000,
        nombre: 'Rosario'
    },
    telefonoFijo: tel1,
    celular: tel2,
    comentario: undefined,
    edad: undefined,
    email: undefined,
    fechaNacimiento: undefined,
    fechanacimiento: undefined,
    turnoPaciente: undefined
};
var paciente3_ = {
    codigo: 123345,
    hc: 444123,
    dni: 31196000,
    nombreApellido: 'Perez Juan',
    direccion: 'sarmiento 123',
    localidad: {
        codigo: 2000,
        nombre: 'Rosario'
    },
    telefonoFijo: tel1,
    celular: undefined,
    comentario: undefined,
    edad: undefined,
    email: undefined,
    fechanacimiento: '31/12/1985',
    fechaNacimiento: '1985-12-31',
    turnoPaciente: undefined
};
var turnoAsignado1 = {
    codigoPaciente: 1,
    codigoTurno: 1,
    obraSocial: obraSocialMock1
};
var paciente1 = {
    codigo: 334025,
    hc: 269862,
    dni: 50123123,
    nombreApellido: 'Brumatti José',
    direccion: 'mitre 123',
    localidad: {
        codigo: 2000,
        nombre: 'Rosario'
    },
    telefonoFijo: tel1,
    celular: tel2,
    comentario: 'comentario',
    edad: '40 años',
    email: '',
    fechanacimiento: '31/12/1985',
    fechaNacimiento: '1985-12-31',
    turnoPaciente: []
};
var paciente2 = {
    codigo: 334025,
    hc: 111222,
    dni: 50444555,
    nombreApellido: 'Brumatti Juan',
    direccion: 'san martin 123',
    localidad: {
        codigo: 2000,
        nombre: 'Rosario'
    },
    telefonoFijo: tel1,
    celular: tel2,
    comentario: '',
    edad: '40 años',
    email: '',
    fechanacimiento: '31/12/1985',
    fechaNacimiento: '1985-12-31',
    turnoPaciente: []
};
var paciente3 = {
    codigo: 123345,
    hc: 444123,
    dni: 31196000,
    nombreApellido: 'Perez Juan',
    direccion: 'sarmiento 123',
    localidad: {
        codigo: 2000,
        nombre: 'Rosario'
    },
    telefonoFijo: tel1,
    celular: tel2,
    comentario: '',
    edad: '40 años',
    email: '',
    fechanacimiento: '31/12/1985',
    fechaNacimiento: '1985-12-31',
    turnoPaciente: []
};
var pacientesList = {
    respuesta: rta200,
    paciente: [paciente1, paciente2, paciente3]
};
var pacienteRta = {
    respuesta: rta200,
    paciente: paciente1
};
var turnoPacienteRtaO = {
    respuesta: rta200,
    turno: turno1,
    turnoAsignado: turnoAsignado1
};
var turnoPacienteRtaL = {
    respuesta: rta200,
    turno: turno51,
    turnoAsignado: undefined
};


/***/ }),

/***/ "./src/app/core/services/service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/service.service.ts ***!
  \**************************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mocks_mocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mocks/mocks */ "./src/app/core/mocks/mocks.ts");
/* harmony import */ var _utils_service_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/service.utils */ "./src/app/core/utils/service.utils.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");








var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.useMockups = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].mockups;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoint;
        this.endpointC = this.endpoint + "/Consext";
        this.endpointG = this.endpoint + "/Gestion";
        this.endpointA = this.endpoint + "/Auth";
    }
    ServiceService.prototype.login = function (usuario) {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["tokenMock"]);
        }
        else {
            return this.http.post(this.endpointA + "/Login", usuario)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                if (res.token == undefined || res.token.length == 0) {
                    Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorToUser"])("Por favor intente m\u00E1s tarde.");
                }
                return res.token;
            }));
        }
    };
    ServiceService.prototype.getEspecialidades = function () {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["especialidadesMocks"]);
        }
        else {
            return this.http.get(this.endpointC + "/especialidad")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                res.especialidad.forEach(function (element) {
                    element.nombre = element.nombre.trim();
                });
                return res.especialidad.sort(function (a, b) {
                    if (a.nombre > b.nombre)
                        return 1;
                    if (a.nombre < b.nombre)
                        return -1;
                    return 0;
                });
            }));
        }
    };
    ServiceService.prototype.getObrasSociales = function () {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["obrasSocialesMocks"]);
        }
        else {
            return this.http.get(this.endpointC + "/planesObrasSociales/")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                res.obraSocial.forEach(function (element) {
                    if (element.nombre != undefined) {
                        element.nombre = element.nombre.trim();
                    }
                    if (element.plan != undefined) {
                        element.plan.forEach(function (elementE) {
                            elementE.nombre = elementE.nombre.trim();
                        });
                    }
                });
                return res.obraSocial
                    .filter(function (x) { var _a; return x.nombre != undefined && ((_a = x.nombre) === null || _a === void 0 ? void 0 : _a.trim().length) > 0; })
                    .sort(function (a, b) {
                    if (a.nombre > b.nombre)
                        return 1;
                    if (a.nombre < b.nombre)
                        return -1;
                    return 0;
                });
            }));
        }
    };
    ServiceService.prototype.getObraSocial = function (codOS) {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["obraSocialMock1"]);
        }
        else {
            return this.http.get(this.endpointC + "/planesObrasSociales/" + codOS)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                res.obraSocial.nombre = res.obraSocial.nombre.trim();
                if (res.obraSocial.alertas == undefined) {
                    res.obraSocial.alertas = [];
                }
                else {
                    res.obraSocial.alertas.forEach(function (element) {
                        element = element.trim();
                    });
                }
                return res.obraSocial;
            }));
        }
    };
    ServiceService.prototype.getEspecialidadesProfesionales = function () {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["especialidadProfMock"]);
        }
        else {
            return this.http.get(this.endpointC + "/especialidadesProfesional")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                res.especialidadProfesional.forEach(function (element) {
                    if (element.nombreApellido != undefined) {
                        element.nombreApellido = element.nombreApellido.trim();
                    }
                    if (element.especialidad != undefined) {
                        element.especialidad.forEach(function (esp) {
                            esp.nombre = esp.nombre.trim();
                        });
                    }
                });
                var busqProf = {
                    codigo: 0,
                    nombreApellido: "BÚSQUEDA AVANZADA",
                    especialidad: undefined,
                    horario: undefined,
                    alertas: undefined,
                    turnoParticular: undefined,
                    turnoAM: undefined,
                    turnoPM: undefined
                };
                res.especialidadProfesional.push(busqProf);
                return res.especialidadProfesional.sort(function (a, b) {
                    if (a.codigo == 0)
                        return -1;
                    if (b.codigo == 0)
                        return 1;
                    if (a.nombreApellido > b.nombreApellido)
                        return 1;
                    if (a.nombreApellido < b.nombreApellido)
                        return -1;
                    return 0;
                });
            }));
        }
    };
    ServiceService.prototype.getEspecialidadesProfesionalesFiltradas = function (os, esp) {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["especialidadProfFiltradasMock"]);
        }
        else {
            // GET /Consext/especialidadesProfesional/busqueda?os={codOS}&esp={codEsp}
            var endpointB = this.endpointC + "/especialidadesProfesional/busqueda?os=" + os + "&esp=" + esp;
            return this.http.get(endpointB).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                res.especialidadProfesional.forEach(function (element) {
                    var _a, _b;
                    element.nombreApellido = (_a = element.nombreApellido) === null || _a === void 0 ? void 0 : _a.trim();
                    element.especialidad.nombre = (_b = element.especialidad.nombre) === null || _b === void 0 ? void 0 : _b.trim();
                    //element.turnoParticular
                    //element.turnoAM
                    //element.turnoPM
                });
                return res.especialidadProfesional;
            }));
        }
    };
    ServiceService.prototype.getLicencias = function (codProf) {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["licenciasMock"]);
        }
        else {
            return this.http.get(this.endpointC + "/licencias/" + codProf)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                res.licencia.forEach(function (element) {
                    element.motivo = element.motivo.trim();
                });
                return res.licencia;
            }));
        }
    };
    ServiceService.prototype.getTurnosFiltrados = function (filtrosTurnos) {
        if (this.useMockups) {
            return filtrosTurnos.os === '12345' ? Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["turnoRespuestaLic"]) : Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["turnoRespuesta"]);
        }
        else {
            var endpoint = undefined;
            if (filtrosTurnos.os != undefined && filtrosTurnos.ep != undefined && filtrosTurnos.fecha != undefined) {
                endpoint = this.endpointC + "/turnos?codOS=" + filtrosTurnos.os + "&codProf=" + filtrosTurnos.ep + "&fecha=" + filtrosTurnos.fecha;
            }
            if (endpoint != undefined) {
                return this.http.get(endpoint)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                    Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                    if (res.licencia != undefined && res.licencia.motivo != undefined) {
                        res.licencia.motivo = res.licencia.motivo.trim();
                    }
                    return res;
                }));
            }
            else {
                var emptyRta = {
                    respuesta: undefined,
                    turno: undefined,
                    licencia: undefined
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(emptyRta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100));
            }
        }
    };
    ServiceService.prototype.postPaciente = function (paciente) {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["pacientesList"].paciente);
        }
        else {
            var endpoint = this.endpointC + "/pacientes/";
            if (paciente.codigo != undefined) {
                endpoint = this.endpointC + "/pacientes/" + paciente.codigo;
            }
            return this.http.post(endpoint, paciente)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                return res.paciente;
            }));
        }
    };
    ServiceService.prototype.getPacientes = function (filtrosPacientes) {
        if (filtrosPacientes == undefined ||
            ((filtrosPacientes.apenom == undefined || filtrosPacientes.apenom.trim().length == 0) &&
                (filtrosPacientes.dni == undefined || filtrosPacientes.dni.toString().trim().length == 0))) {
            throw new Error("Ingrese algun criterio de b\u00FAsqueda");
        }
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["pacientesList"].paciente);
        }
        else {
            var endpoint = this.endpointC + "/pacientes/busqueda/";
            if (filtrosPacientes.dni != undefined && filtrosPacientes.dni.toString().trim().length > 0) {
                endpoint = endpoint + "/" + filtrosPacientes.dni.toString().trim();
                if (filtrosPacientes.apenom != undefined && filtrosPacientes.apenom.trim().length > 0) {
                    endpoint = endpoint + "?apenom=" + filtrosPacientes.apenom.trim();
                }
            }
            else if (filtrosPacientes.apenom != undefined && filtrosPacientes.apenom.trim().length > 0) {
                endpoint = endpoint + "/" + filtrosPacientes.apenom.trim();
            }
            return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                return res.paciente;
            }));
        }
    };
    ServiceService.prototype.getPacienteByCodigo = function (filtrosPacientes) {
        if (filtrosPacientes == undefined || filtrosPacientes.codigo == undefined) {
            throw new Error("Ingrese algun criterio de b\u00FAsqueda");
        }
        else if (filtrosPacientes.codigo < 0) {
            var emptyRta = {
                codigo: undefined,
                hc: undefined,
                dni: undefined,
                fechaNacimiento: undefined,
                fechanacimiento: undefined,
                edad: undefined,
                email: undefined,
                comentario: undefined,
                turnoPaciente: [],
                nombreApellido: undefined,
                direccion: undefined,
                localidad: undefined,
                telefonoFijo: undefined,
                celular: undefined
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(emptyRta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100));
        }
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["paciente1"]);
        }
        else {
            return this.http.get(this.endpointC + "/pacientes/" + filtrosPacientes.codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                return res.paciente;
            }));
        }
    };
    ServiceService.prototype.asignarTurno = function (codigoTurno) {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["rtaError"]);
        }
        else {
            return this.http.post(this.endpointC + "/turnos/" + codigoTurno + "/asignar", codigoTurno)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                return res;
            }));
        }
    };
    ServiceService.prototype.confirmarTurno = function (confirmaTurno) {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["rtaOk"]);
        }
        else {
            return this.http.post(this.endpointC + "/turnos/" + (confirmaTurno === null || confirmaTurno === void 0 ? void 0 : confirmaTurno.codTurno) + "/confirmar", confirmaTurno)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (rtaConfirmacion) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(rtaConfirmacion);
                return rtaConfirmacion;
            }));
        }
    };
    ServiceService.prototype.liberarTurno = function (liberaTurno) {
        if (this.useMockups) {
            return Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["rtaError"]);
        }
        else {
            return this.http.post(this.endpointC + "/turnos/" + (liberaTurno === null || liberaTurno === void 0 ? void 0 : liberaTurno.codTurno) + "/liberar", liberaTurno)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                return res.respuesta;
            }));
        }
    };
    ServiceService.prototype.getTurnoByCodigo = function (codigoTurno) {
        if (this.useMockups) {
            return codigoTurno >= 40 ? Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["turnoPacienteRtaO"]) : Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["getWsFromMock"])(_mocks_mocks__WEBPACK_IMPORTED_MODULE_5__["turnoPacienteRtaL"]);
        }
        else {
            return this.http.get(this.endpointC + "/turnos/codTurno=" + codigoTurno)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                return res;
            }));
        }
    };
    ServiceService.prototype.getLocalidades = function () {
        if (this.useMockups) {
            return undefined;
        }
        else {
            return this.http.get(this.endpointC + "/localidad")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_6__["throwErrorIfBadCode"])(res);
                return res.localidad;
            }));
        }
    };
    ServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/core/store/actions/contexto.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/core/store/actions/contexto.actions.ts ***!
  \********************************************************/
/*! exports provided: CLEAN_STORE, GET_TOKEN, SET_TOKEN, cleanStore, getToken, setToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_STORE", function() { return CLEAN_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TOKEN", function() { return GET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanStore", function() { return cleanStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");

var CLEAN_STORE = '[Contexto] - cleanStore';
var GET_TOKEN = '[Contexto] - getToken';
var SET_TOKEN = '[Contexto] - setToken';
var cleanStore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAN_STORE);
var getToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_TOKEN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var setToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_TOKEN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/store/actions/error.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/store/actions/error.actions.ts ***!
  \*****************************************************/
/*! exports provided: SHOW_ERROR, CLEAN_ERROR, showError, cleanError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ERROR", function() { return SHOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_ERROR", function() { return CLEAN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanError", function() { return cleanError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");

var SHOW_ERROR = '[ERROR] - Show Error';
var CLEAN_ERROR = '[ERROR] - Clean Error';
var showError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SHOW_ERROR, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var cleanError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAN_ERROR, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/store/actions/form.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/core/store/actions/form.actions.ts ***!
  \****************************************************/
/*! exports provided: CLEAR, clear, SET_FECHA_TURNO, setFechaTurno, GET_LOCALIDADES, getLocalidades, SET_LOCALIDADES, setLocalidades, GET_OBRA_SOCIALES, getObraSociales, SET_OBRA_SOCIALES, setObraSociales, SET_OBRA_SOCIAL_SELECTED, setObraSocialSelected, GET_ALERTAS_OBRA_SOCIAL, getAlertasObraSocial, SET_ALERTA_OBRA_SOCIAL, setAlertaObraSocial, GET_ESPECIALIDADES, getEspecialidades, SET_ESPECIALIDADES, setEspecialidades, SET_ESPECIALIDAD_SELECTED, setEspecialidadSelected, GET_ESPECIALIDADES_PROFESIONALES, getEspecialidadesProfesionales, SET_ESPECIALIDADES_PROFESIONALES, setEspecialidadesProfesionales, SET_ESPECIALIDAD_PROFESIONAL_SELECTED, setEspecialidadProfesionalSelected, GET_ESPECIALIDADES_PROFESIONALES_FILTRADAS, getEspecialidadesProfesionalesFiltradas, SET_ESPECIALIDADES_PROFESIONALES_FILTRADAS, setEspecialidadesProfesionalesFiltradas, GET_LICENCIAS, getLicencias, SET_LICENCIAS, setLicencias, GET_TURNOS, getTurnos, SET_TURNOS, setTurnos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FECHA_TURNO", function() { return SET_FECHA_TURNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFechaTurno", function() { return setFechaTurno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOCALIDADES", function() { return GET_LOCALIDADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalidades", function() { return getLocalidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOCALIDADES", function() { return SET_LOCALIDADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalidades", function() { return setLocalidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_OBRA_SOCIALES", function() { return GET_OBRA_SOCIALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObraSociales", function() { return getObraSociales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OBRA_SOCIALES", function() { return SET_OBRA_SOCIALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObraSociales", function() { return setObraSociales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OBRA_SOCIAL_SELECTED", function() { return SET_OBRA_SOCIAL_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObraSocialSelected", function() { return setObraSocialSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALERTAS_OBRA_SOCIAL", function() { return GET_ALERTAS_OBRA_SOCIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlertasObraSocial", function() { return getAlertasObraSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALERTA_OBRA_SOCIAL", function() { return SET_ALERTA_OBRA_SOCIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAlertaObraSocial", function() { return setAlertaObraSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ESPECIALIDADES", function() { return GET_ESPECIALIDADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEspecialidades", function() { return getEspecialidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESPECIALIDADES", function() { return SET_ESPECIALIDADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEspecialidades", function() { return setEspecialidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESPECIALIDAD_SELECTED", function() { return SET_ESPECIALIDAD_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEspecialidadSelected", function() { return setEspecialidadSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ESPECIALIDADES_PROFESIONALES", function() { return GET_ESPECIALIDADES_PROFESIONALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEspecialidadesProfesionales", function() { return getEspecialidadesProfesionales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESPECIALIDADES_PROFESIONALES", function() { return SET_ESPECIALIDADES_PROFESIONALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEspecialidadesProfesionales", function() { return setEspecialidadesProfesionales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESPECIALIDAD_PROFESIONAL_SELECTED", function() { return SET_ESPECIALIDAD_PROFESIONAL_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEspecialidadProfesionalSelected", function() { return setEspecialidadProfesionalSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ESPECIALIDADES_PROFESIONALES_FILTRADAS", function() { return GET_ESPECIALIDADES_PROFESIONALES_FILTRADAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEspecialidadesProfesionalesFiltradas", function() { return getEspecialidadesProfesionalesFiltradas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESPECIALIDADES_PROFESIONALES_FILTRADAS", function() { return SET_ESPECIALIDADES_PROFESIONALES_FILTRADAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEspecialidadesProfesionalesFiltradas", function() { return setEspecialidadesProfesionalesFiltradas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LICENCIAS", function() { return GET_LICENCIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLicencias", function() { return getLicencias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LICENCIAS", function() { return SET_LICENCIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLicencias", function() { return setLicencias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TURNOS", function() { return GET_TURNOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTurnos", function() { return getTurnos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TURNOS", function() { return SET_TURNOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTurnos", function() { return setTurnos; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");

// clear 
var CLEAR = '[Form] - clear';
var clear = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAR);
// fecha para filtrar los turnos
var SET_FECHA_TURNO = '[Form] - setFechaTurno';
var setFechaTurno = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_FECHA_TURNO, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// localidades
var GET_LOCALIDADES = '[Form] - getLocalidades';
var getLocalidades = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_LOCALIDADES);
var SET_LOCALIDADES = '[API] - setLocalidades';
var setLocalidades = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_LOCALIDADES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// listado para combo obras sociales, y seleccion
var GET_OBRA_SOCIALES = '[Form] - getObraSociales';
var getObraSociales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_OBRA_SOCIALES);
var SET_OBRA_SOCIALES = '[API] - setObraSociales ';
var setObraSociales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_OBRA_SOCIALES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_OBRA_SOCIAL_SELECTED = '[Form] - setObraSocialSelected ';
var setObraSocialSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_OBRA_SOCIAL_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var GET_ALERTAS_OBRA_SOCIAL = '[Form] - getAlertasObraSocial';
var getAlertasObraSocial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_ALERTAS_OBRA_SOCIAL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_ALERTA_OBRA_SOCIAL = '[API] - setAlertaObraSocial ';
var setAlertaObraSocial = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ALERTA_OBRA_SOCIAL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// listado para combo especialidades de popup, y seleccion
var GET_ESPECIALIDADES = '[Form] - getEspecialidades';
var getEspecialidades = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_ESPECIALIDADES);
var SET_ESPECIALIDADES = '[API] - setEspecialidades ';
var setEspecialidades = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ESPECIALIDADES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_ESPECIALIDAD_SELECTED = '[Form] - setEspecialidadSelected ';
var setEspecialidadSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ESPECIALIDAD_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// listado para ccombo profesionales y seleccion
var GET_ESPECIALIDADES_PROFESIONALES = '[Form] - getEspecialidadesProfesionales';
var getEspecialidadesProfesionales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_ESPECIALIDADES_PROFESIONALES);
var SET_ESPECIALIDADES_PROFESIONALES = '[API] - setEspecialidadesProfesional ';
var setEspecialidadesProfesionales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ESPECIALIDADES_PROFESIONALES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_ESPECIALIDAD_PROFESIONAL_SELECTED = '[Form] - setEspecialidadProfesionalSelected ';
var setEspecialidadProfesionalSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ESPECIALIDAD_PROFESIONAL_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// listado profesionales filtrados por os y especialidad - para busq avanzada
var GET_ESPECIALIDADES_PROFESIONALES_FILTRADAS = '[Form] - getEspecialidadesProfesionalesFiltradas';
var getEspecialidadesProfesionalesFiltradas = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_ESPECIALIDADES_PROFESIONALES_FILTRADAS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_ESPECIALIDADES_PROFESIONALES_FILTRADAS = '[API] - setEspecialidadesProfesionalesFiltradas';
var setEspecialidadesProfesionalesFiltradas = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ESPECIALIDADES_PROFESIONALES_FILTRADAS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// licencias profesional
var GET_LICENCIAS = '[Form] - getLicencias';
var getLicencias = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_LICENCIAS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_LICENCIAS = '[API] - setLicencias';
var setLicencias = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_LICENCIAS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// listado de turnos por dia, os y profesional
var GET_TURNOS = '[Form] - getTurnos';
var getTurnos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_TURNOS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_TURNOS = '[API] - setTurnos ';
var setTurnos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_TURNOS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/store/actions/turno.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/store/actions/turno.actions.ts ***!
  \*****************************************************/
/*! exports provided: CLEAR, clear, SET_OBRA_SOCIAL_SELECTED, setObraSocialSelected, SET_ESPECIALIDAD_PROFESIONAL_SELECTED, setEspecialidadProfesionalSelected, GET_TURNO, getTurnoByCodigo, RTA_TURNO, setTurnoRecuperado, SET_TURNO_SELECTED, setTurnoSelected, ASIGNAR_TURNO, asignarTurno, RTA_ASIGNACION, setAsignacion, CONFIRMA_TURNO, confirmarTurno, RTA_CONFIRMACION, setConfirmacion, LIBERA_TURNO, liberarTurno, RTA_LIBERACION, setLiberacion, GET_PACIENTES, getPacientes, SET_PACIENTES, setPacientes, GET_PACIENTE_CODIGO, getPacienteByCodigo, GET_PACIENTE_SELECTED, getPacienteSelected, SET_PACIENTE_SELECTED, setPacienteSelected, POST_PACIENTE, postPaciente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OBRA_SOCIAL_SELECTED", function() { return SET_OBRA_SOCIAL_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObraSocialSelected", function() { return setObraSocialSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ESPECIALIDAD_PROFESIONAL_SELECTED", function() { return SET_ESPECIALIDAD_PROFESIONAL_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEspecialidadProfesionalSelected", function() { return setEspecialidadProfesionalSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TURNO", function() { return GET_TURNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTurnoByCodigo", function() { return getTurnoByCodigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTA_TURNO", function() { return RTA_TURNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTurnoRecuperado", function() { return setTurnoRecuperado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TURNO_SELECTED", function() { return SET_TURNO_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTurnoSelected", function() { return setTurnoSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASIGNAR_TURNO", function() { return ASIGNAR_TURNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asignarTurno", function() { return asignarTurno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTA_ASIGNACION", function() { return RTA_ASIGNACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAsignacion", function() { return setAsignacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRMA_TURNO", function() { return CONFIRMA_TURNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmarTurno", function() { return confirmarTurno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTA_CONFIRMACION", function() { return RTA_CONFIRMACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfirmacion", function() { return setConfirmacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIBERA_TURNO", function() { return LIBERA_TURNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liberarTurno", function() { return liberarTurno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTA_LIBERACION", function() { return RTA_LIBERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLiberacion", function() { return setLiberacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PACIENTES", function() { return GET_PACIENTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPacientes", function() { return getPacientes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PACIENTES", function() { return SET_PACIENTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPacientes", function() { return setPacientes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PACIENTE_CODIGO", function() { return GET_PACIENTE_CODIGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPacienteByCodigo", function() { return getPacienteByCodigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PACIENTE_SELECTED", function() { return GET_PACIENTE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPacienteSelected", function() { return getPacienteSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PACIENTE_SELECTED", function() { return SET_PACIENTE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPacienteSelected", function() { return setPacienteSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_PACIENTE", function() { return POST_PACIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postPaciente", function() { return postPaciente; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");

// clear 
var CLEAR = '[Turno] - clear';
var clear = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAR);
// os
var SET_OBRA_SOCIAL_SELECTED = '[Turno] - setObraSocialSelected ';
var setObraSocialSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_OBRA_SOCIAL_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// profesional
var SET_ESPECIALIDAD_PROFESIONAL_SELECTED = '[Turno] - setEspecialidadProfesionalSelected ';
var setEspecialidadProfesionalSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ESPECIALIDAD_PROFESIONAL_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// turno
var GET_TURNO = '[Turno] - getTurnoByCodigo';
var getTurnoByCodigo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_TURNO, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var RTA_TURNO = '[Turno] - setTurnoRecuperado';
var setTurnoRecuperado = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RTA_TURNO, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_TURNO_SELECTED = '[Turno] - setTurnoSelected ';
var setTurnoSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_TURNO_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var ASIGNAR_TURNO = '[Turno] - asignarTurno';
var asignarTurno = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ASIGNAR_TURNO, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var RTA_ASIGNACION = '[Turno] - setAsignacion';
var setAsignacion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RTA_ASIGNACION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var CONFIRMA_TURNO = '[Turno] - confirmarTurno';
var confirmarTurno = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CONFIRMA_TURNO, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var RTA_CONFIRMACION = '[Turno] - setConfirmacion';
var setConfirmacion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RTA_CONFIRMACION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var LIBERA_TURNO = '[Turno] - liberarTurno';
var liberarTurno = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LIBERA_TURNO, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var RTA_LIBERACION = '[Turno] - setRtaLiberacion';
var setLiberacion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RTA_LIBERACION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// lista pacientes
var GET_PACIENTES = '[Turno] - getPacientes';
var getPacientes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_PACIENTES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var SET_PACIENTES = '[API] - setPacientes ';
var setPacientes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_PACIENTES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// paciente por codigo
var GET_PACIENTE_CODIGO = '[Turno] - getPacienteCodigo ';
var getPacienteByCodigo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_PACIENTE_CODIGO, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// paciente
var GET_PACIENTE_SELECTED = '[Turno] - getPacienteSelected';
var getPacienteSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_PACIENTE_SELECTED);
var SET_PACIENTE_SELECTED = '[Turno] - setPacienteSelected';
var setPacienteSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_PACIENTE_SELECTED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var POST_PACIENTE = '[Turno] - postPaciente';
var postPaciente = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(POST_PACIENTE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/store/effects/context.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/store/effects/context.effects.ts ***!
  \*******************************************************/
/*! exports provided: ContextEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextEffects", function() { return ContextEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/core/services/service.service.ts");
/* harmony import */ var _actions_contexto_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/contexto.actions */ "./src/app/core/store/actions/contexto.actions.ts");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");








var ContextEffects = /** @class */ (function () {
    function ContextEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.getToken$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_contexto_actions__WEBPACK_IMPORTED_MODULE_6__["GET_TOKEN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.service.login(payload.login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (token) {
                return ({ type: _actions_contexto_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TOKEN"], token: token });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_7__["SHOW_ERROR"], error: error.message });
            })); }));
        });
    }
    ContextEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"] }
    ]; };
    ContextEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]])
    ], ContextEffects);
    return ContextEffects;
}());



/***/ }),

/***/ "./src/app/core/store/effects/error.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/store/effects/error.effects.ts ***!
  \*****************************************************/
/*! exports provided: ErrorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEffects", function() { return ErrorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");






var ErrorEffects = /** @class */ (function () {
    function ErrorEffects(actions$) {
        var _this = this;
        this.actions$ = actions$;
        this.showError$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return ({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["CLEAN_ERROR"], error: payload.error }); })); }));
        });
    }
    ErrorEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }
    ]; };
    ErrorEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], ErrorEffects);
    return ErrorEffects;
}());



/***/ }),

/***/ "./src/app/core/store/effects/form.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/core/store/effects/form.effects.ts ***!
  \****************************************************/
/*! exports provided: FormEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEffects", function() { return FormEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");
/* harmony import */ var _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/form.actions */ "./src/app/core/store/actions/form.actions.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/service.service */ "./src/app/core/services/service.service.ts");








var FormEffects = /** @class */ (function () {
    function FormEffects(actions$, formService) {
        var _this = this;
        this.actions$ = actions$;
        this.formService = formService;
        this.getLocalidades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["GET_LOCALIDADES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getLocalidades().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (localidades) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["SET_LOCALIDADES"], localidades: localidades }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getObraSociales$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["GET_OBRA_SOCIALES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getObrasSociales().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (obrasSociales) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["SET_OBRA_SOCIALES"], obrasSociales: obrasSociales }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getAlertaObraSocial$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["GET_ALERTAS_OBRA_SOCIAL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.formService.getObraSocial(payload.obraSocial.codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (obraSocial) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["SET_ALERTA_OBRA_SOCIAL"], obraSocial: obraSocial }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getEspecialidades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["GET_ESPECIALIDADES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getEspecialidades().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (especialidades) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["SET_ESPECIALIDADES"], especialidades: especialidades }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getEspecialidadesProfesionales$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["GET_ESPECIALIDADES_PROFESIONALES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.formService.getEspecialidadesProfesionales().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (especialidadesProfesionales) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["SET_ESPECIALIDADES_PROFESIONALES"], especialidadesProfesionales: especialidadesProfesionales }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getLicencias$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["GET_LICENCIAS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.formService.getLicencias(payload.filtrosLicencias.ep).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (licencias) {
                return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["SET_LICENCIAS"], licencias: licencias });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getEspecialidadesProfesionalesFiltradas$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["GET_ESPECIALIDADES_PROFESIONALES_FILTRADAS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.formService.getEspecialidadesProfesionalesFiltradas(payload.filtrosProfesionales.os, payload.filtrosProfesionales.esp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (especialidadesProfesionalesFiltradas) {
                return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["SET_ESPECIALIDADES_PROFESIONALES_FILTRADAS"], especialidadesProfesionalesFiltradas: especialidadesProfesionalesFiltradas });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getTurnos$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["GET_TURNOS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.formService.getTurnosFiltrados(payload.filtrosTurnos).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (turnosRta) { return ({ type: _actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TURNOS"], turnosRta: turnosRta }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
    }
    FormEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] }
    ]; };
    FormEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]])
    ], FormEffects);
    return FormEffects;
}());



/***/ }),

/***/ "./src/app/core/store/effects/turno.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/store/effects/turno.effects.ts ***!
  \*****************************************************/
/*! exports provided: TurnoEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoEffects", function() { return TurnoEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");
/* harmony import */ var _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/turno.actions */ "./src/app/core/store/actions/turno.actions.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/service.service */ "./src/app/core/services/service.service.ts");








var TurnoEffects = /** @class */ (function () {
    function TurnoEffects(actions$, turnoService) {
        var _this = this;
        this.actions$ = actions$;
        this.turnoService = turnoService;
        this.asignarTurno$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["ASIGNAR_TURNO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.turnoService.asignarTurno(payload.codigoTurno).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (rtaAsignacion) {
                return ({ type: _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["RTA_ASIGNACION"], rtaAsignacion: rtaAsignacion });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["RTA_ASIGNACION"], rtaAsignacion: { respuesta: { codigo: 400, mensaje: error.message } } });
            })); }));
        });
        this.getTurnoByCodigo$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["GET_TURNO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.turnoService.getTurnoByCodigo(payload.codigoTurno).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (turnoPacienteRespuesta) {
                return ({ type: _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["RTA_TURNO"], turnoPacienteRespuesta: turnoPacienteRespuesta });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.confirmarTurno$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["CONFIRMA_TURNO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.turnoService.confirmarTurno(payload.confirmaTurno).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (rtaConfirmacion) {
                return ({ type: _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["RTA_CONFIRMACION"], rtaConfirmacion: rtaConfirmacion });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.liberarTurno$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["LIBERA_TURNO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.turnoService.liberarTurno(payload.liberaTurno).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (liberacion) {
                return ({ type: _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["RTA_LIBERACION"], liberacion: liberacion });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.postPaciente$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["POST_PACIENTE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.turnoService.postPaciente(payload.paciente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pacienteSelected) {
                return ({ type: _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PACIENTE_SELECTED"], pacienteSelected: pacienteSelected });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getPacientes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["GET_PACIENTES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.turnoService.getPacientes(payload.filtrosPacientes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pacientes) { return ({ type: _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PACIENTES"], pacientes: pacientes }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
        this.getPacienteByCodigo$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["GET_PACIENTE_CODIGO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (payload) { return _this.turnoService.getPacienteByCodigo(payload.filtrosPacientes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pacienteSelected) { return ({ type: _actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PACIENTE_SELECTED"], pacienteSelected: pacienteSelected }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_error_actions__WEBPACK_IMPORTED_MODULE_5__["SHOW_ERROR"], error: error.message });
            })); }));
        });
    }
    TurnoEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] }
    ]; };
    TurnoEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]])
    ], TurnoEffects);
    return TurnoEffects;
}());



/***/ }),

/***/ "./src/app/core/store/reducers/contexto.reducers.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/store/reducers/contexto.reducers.ts ***!
  \**********************************************************/
/*! exports provided: initialState, contextoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contextoReducer", function() { return contextoReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _actions_contexto_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/contexto.actions */ "./src/app/core/store/actions/contexto.actions.ts");



var initialState = {
    token: undefined,
};
var _setToken = function (state, newToken) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.token = newToken;
    localStorage.setItem('contexto', JSON.stringify(stateNew));
    return stateNew;
};
var _contextoReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_contexto_actions__WEBPACK_IMPORTED_MODULE_2__["setToken"], function (state, _a) {
    var token = _a.token;
    return _setToken(state, token);
}));
function contextoReducer(state, action) {
    return _contextoReducer(state, action);
}


/***/ }),

/***/ "./src/app/core/store/reducers/error.reducers.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/store/reducers/error.reducers.ts ***!
  \*******************************************************/
/*! exports provided: Errors, errorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorReducer", function() { return errorReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _actions_error_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/error.actions */ "./src/app/core/store/actions/error.actions.ts");
/* harmony import */ var _utils_error_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/error.utils */ "./src/app/core/utils/error.utils.ts");




var Errors = /** @class */ (function () {
    function Errors() {
    }
    return Errors;
}());

var initialState = {
    errors: []
};
var _showError = function (state, error) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.errors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.errors, [_utils_error_utils__WEBPACK_IMPORTED_MODULE_3__["ErrorUtils"].getFormatedError(error)]);
    return stateNew;
};
var _cleanError = function (state, error) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.errors = state.errors.filter(function (x) { return x !== _utils_error_utils__WEBPACK_IMPORTED_MODULE_3__["ErrorUtils"].getFormatedError(error); });
    return stateNew;
};
var _errorReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_error_actions__WEBPACK_IMPORTED_MODULE_2__["showError"], function (state, _a) {
    var error = _a.error;
    return _showError(state, error);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_error_actions__WEBPACK_IMPORTED_MODULE_2__["cleanError"], function (state, _a) {
    var error = _a.error;
    return _cleanError(state, error);
}));
function errorReducer(state, action) {
    return _errorReducer(state, action);
}


/***/ }),

/***/ "./src/app/core/store/reducers/form.reducers.ts":
/*!******************************************************!*\
  !*** ./src/app/core/store/reducers/form.reducers.ts ***!
  \******************************************************/
/*! exports provided: initialState, formReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formReducer", function() { return formReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _actions_form_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/form.actions */ "./src/app/core/store/actions/form.actions.ts");



var initialState = {
    fechaSelected: new Date(),
    localidades: [],
    obrasSociales: [],
    obraSocialSelected: undefined,
    especialidades: [],
    especialidadSelected: undefined,
    especialidadesProfesionales: [],
    especialidadesProfesionalesFiltradas: [],
    especialidadProfesionalSelected: undefined,
    turnosRta: undefined,
    licencias: [],
};
function formReducer(state, action) {
    return _formReducer(state, action);
}
var _formReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["clear"], function () { return initialState; }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setFechaTurno"], function (state, _a) {
    var fechaSelected = _a.fechaSelected;
    return _setFechaSelected(state, fechaSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setFechaTurno"], function (state, _a) {
    var fechaSelected = _a.fechaSelected;
    return _setFechaSelected(state, fechaSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setLocalidades"], function (state, _a) {
    var localidades = _a.localidades;
    return _setLocalidades(state, localidades);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setObraSociales"], function (state, _a) {
    var obrasSociales = _a.obrasSociales;
    return _setObraSociales(state, obrasSociales);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setObraSocialSelected"], function (state, _a) {
    var obraSocialSelected = _a.obraSocialSelected;
    return _setObraSocialSelected(state, obraSocialSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setAlertaObraSocial"], function (state, _a) {
    var obraSocial = _a.obraSocial;
    return _setAlertaObraSocial(state, obraSocial);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setEspecialidades"], function (state, _a) {
    var especialidades = _a.especialidades;
    return _setEspecialidades(state, especialidades);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setEspecialidadSelected"], function (state, _a) {
    var especialidadSelected = _a.especialidadSelected;
    return _setEspecialidadSelected(state, especialidadSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setEspecialidadesProfesionales"], function (state, _a) {
    var especialidadesProfesionales = _a.especialidadesProfesionales;
    return _setEspecialidadesProfesionales(state, especialidadesProfesionales);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setLicencias"], function (state, _a) {
    var licencias = _a.licencias;
    return _setLicencias(state, licencias);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setEspecialidadesProfesionalesFiltradas"], function (state, _a) {
    var especialidadesProfesionalesFiltradas = _a.especialidadesProfesionalesFiltradas;
    return _setEspecialidadesProfesionalesFiltradas(state, especialidadesProfesionalesFiltradas);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setEspecialidadProfesionalSelected"], function (state, _a) {
    var especialidadProfesionalSelected = _a.especialidadProfesionalSelected;
    return _setEspecialidadProfesionalSelected(state, especialidadProfesionalSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_form_actions__WEBPACK_IMPORTED_MODULE_2__["setTurnos"], function (state, _a) {
    var turnosRta = _a.turnosRta;
    return _setTurnos(state, turnosRta);
}));
var _setFechaSelected = function (state, fechaSelected) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.fechaSelected = fechaSelected;
    return stateNew;
};
var _setEspecialidadSelected = function (state, especialidadSelected) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.especialidadSelected = especialidadSelected;
    return stateNew;
};
var _setEspecialidades = function (state, especialidades) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.especialidades = especialidades;
    return stateNew;
};
var _setEspecialidadProfesionalSelected = function (state, especialidadProfesionalSelected) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    if (especialidadProfesionalSelected == undefined) {
        stateNew.especialidadProfesionalSelected = undefined;
    }
    else {
        stateNew.especialidadProfesionalSelected =
            state.especialidadesProfesionales
                .filter(function (e) { return e.codigo == especialidadProfesionalSelected.codigo; })[0];
    }
    return stateNew;
};
var _setEspecialidadesProfesionales = function (state, especialidadesProfesionales) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.especialidadesProfesionales = especialidadesProfesionales;
    return stateNew;
};
var _setEspecialidadesProfesionalesFiltradas = function (state, especialidadesProfesionalesFiltradas) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.especialidadesProfesionalesFiltradas = especialidadesProfesionalesFiltradas;
    return stateNew;
};
var _setLicencias = function (state, licencias) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.licencias = licencias;
    return stateNew;
};
var _setLocalidades = function (state, localidades) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.localidades = localidades;
    return stateNew;
};
var _setObraSociales = function (state, obraSociales) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.obrasSociales = obraSociales;
    return stateNew;
};
var _setAlertaObraSocial = function (state, obraSocial) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.obraSocialSelected = obraSocial;
    //stateNew.obrasSociales.filter(e => e.codigo == obraSocial.codigo)[0].alertas = obraSocial.alertas;
    return stateNew;
};
var _setObraSocialSelected = function (state, obraSocialSelected) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.obraSocialSelected = obraSocialSelected;
    //stateNew.planSelected = undefined;
    return stateNew;
};
var _setTurnos = function (state, turnosRta) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.turnosRta = turnosRta;
    return stateNew;
};


/***/ }),

/***/ "./src/app/core/store/reducers/storage.metareducer.ts":
/*!************************************************************!*\
  !*** ./src/app/core/store/reducers/storage.metareducer.ts ***!
  \************************************************************/
/*! exports provided: storageMetaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageMetaReducer", function() { return storageMetaReducer; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");

function setSavedState(state, localStorageKey) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey) {
    return JSON.parse(localStorage.getItem(localStorageKey));
}
// the keys from state which we'd like to save.
var stateKeys = ['contexto'];
// the key for the local storage.
var localStorageKey = '__app_storage__';
function storageMetaReducer(reducer) {
    var onInit = true; // after load/refresh…
    return function (state, action) {
        // reduce the nextState.
        var nextState = reducer(state, action);
        // init the application state.
        if (onInit) {
            onInit = false;
            var savedState = getSavedState(localStorageKey);
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["merge"])(nextState, savedState);
        }
        // save the next state to the application storage.
        var stateToSave = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["pick"])(nextState, stateKeys);
        setSavedState(stateToSave, localStorageKey);
        return nextState;
    };
}


/***/ }),

/***/ "./src/app/core/store/reducers/turno.reducers.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/store/reducers/turno.reducers.ts ***!
  \*******************************************************/
/*! exports provided: initialState, turnoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnoReducer", function() { return turnoReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/turno.actions */ "./src/app/core/store/actions/turno.actions.ts");



var initialState = {
    turnoSelected: undefined,
    turnoRecuperado: undefined,
    obraSocialSelected: undefined,
    datosPaciente: undefined,
    pacienteSelected: undefined,
    pacientes: [],
    rtaConfirmacion: undefined,
    rtaAsignacion: undefined
};
function turnoReducer(state, action) {
    return _turnoReducer(state, action);
}
var _turnoReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__["clear"], function () { return initialState; }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__["setObraSocialSelected"], function (state, _a) {
    var obraSocialSelected = _a.obraSocialSelected;
    return _setObraSocialSelected(state, obraSocialSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__["setAsignacion"], function (state, _a) {
    var rtaAsignacion = _a.rtaAsignacion;
    return _setAsignacion(state, rtaAsignacion);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__["setTurnoSelected"], function (state, _a) {
    var turnoSelected = _a.turnoSelected;
    return _setTurnoSelected(state, turnoSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__["setTurnoRecuperado"], function (state, _a) {
    var turnoPacienteRespuesta = _a.turnoPacienteRespuesta;
    return _setTurnoRecuperado(state, turnoPacienteRespuesta);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__["setPacientes"], function (state, _a) {
    var pacientes = _a.pacientes;
    return _setPacientes(state, pacientes);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__["setPacienteSelected"], function (state, _a) {
    var pacienteSelected = _a.pacienteSelected;
    return _setPacienteSelected(state, pacienteSelected);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_turno_actions__WEBPACK_IMPORTED_MODULE_2__["setConfirmacion"], function (state, _a) {
    var rtaConfirmacion = _a.rtaConfirmacion;
    return _setConfirmacion(state, rtaConfirmacion);
}));
var _setObraSocialSelected = function (state, obraSocialSelected) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.obraSocialSelected = obraSocialSelected;
    return stateNew;
};
var _setTurnoSelected = function (state, turno) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.turnoSelected = turno;
    return stateNew;
};
var _setTurnoRecuperado = function (state, turnoPacienteRespuesta) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.turnoRecuperado = turnoPacienteRespuesta;
    return stateNew;
};
var _setPacientes = function (state, pacientes) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.pacientes = pacientes;
    return stateNew;
};
var _setPacienteSelected = function (state, pacienteSelected) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.pacienteSelected = pacienteSelected;
    return stateNew;
};
var _setConfirmacion = function (state, rtaConfirmacion) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.rtaConfirmacion = rtaConfirmacion;
    return stateNew;
};
var _setAsignacion = function (state, rtaAsignacion) {
    var stateNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    stateNew.rtaAsignacion = rtaAsignacion;
    return stateNew;
};


/***/ }),

/***/ "./src/app/core/store/selectors/contexto.selectors.ts":
/*!************************************************************!*\
  !*** ./src/app/core/store/selectors/contexto.selectors.ts ***!
  \************************************************************/
/*! exports provided: selectContexto, getToken, getContexto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectContexto", function() { return selectContexto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContexto", function() { return getContexto; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");

var selectContexto = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('contexto');
var getToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectContexto, function (contexto) {
    return contexto.token;
});
var getContexto = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectContexto, function (contexto) {
    return contexto;
});


/***/ }),

/***/ "./src/app/core/store/selectors/error.selectors.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/selectors/error.selectors.ts ***!
  \*********************************************************/
/*! exports provided: selectError, selectErrorMessages, getCountError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectErrorMessages", function() { return selectErrorMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountError", function() { return getCountError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");

var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('error');
var selectErrorMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectError, function (error) { return error.errors[error.errors.length - 1]; });
var getCountError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectError, function (error) { return error.errors.length; });


/***/ }),

/***/ "./src/app/core/store/selectors/form.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/core/store/selectors/form.selectors.ts ***!
  \********************************************************/
/*! exports provided: selectFormulario, selectAllLocalidades, selectAllObrasSociales, selectObraSocialSelected, selectPlanes, selectAllEspecialidades, selectEspecialidadSelected, selectAllProfesionales, selectProfesionalesBusquedaA, selectProfesionalSelected, selectBusquedaProfesionales, selecBusquedatLicencias, selectLicencias, selectBusquedaTurnos, selectTurnos, selectFechaTurnos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFormulario", function() { return selectFormulario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllLocalidades", function() { return selectAllLocalidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllObrasSociales", function() { return selectAllObrasSociales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectObraSocialSelected", function() { return selectObraSocialSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPlanes", function() { return selectPlanes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllEspecialidades", function() { return selectAllEspecialidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEspecialidadSelected", function() { return selectEspecialidadSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllProfesionales", function() { return selectAllProfesionales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProfesionalesBusquedaA", function() { return selectProfesionalesBusquedaA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProfesionalSelected", function() { return selectProfesionalSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBusquedaProfesionales", function() { return selectBusquedaProfesionales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selecBusquedatLicencias", function() { return selecBusquedatLicencias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLicencias", function() { return selectLicencias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBusquedaTurnos", function() { return selectBusquedaTurnos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTurnos", function() { return selectTurnos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFechaTurnos", function() { return selectFechaTurnos; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _shared_models_request_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/request.models */ "./src/app/shared/models/request.models.ts");


var selectFormulario = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('formulario');
var selectAllLocalidades = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.localidades; });
// obras sociales
var selectAllObrasSociales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.obrasSociales; });
var selectObraSocialSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.obraSocialSelected; });
// planes
var selectPlanes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectObraSocialSelected, function (obraSocial) {
    if (obraSocial) {
        return obraSocial.plan;
    }
});
// especialidades
var selectAllEspecialidades = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.especialidades; });
var selectEspecialidadSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.especialidadSelected; });
// profesionales
var selectAllProfesionales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.especialidadesProfesionales; });
var selectProfesionalesBusquedaA = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.especialidadesProfesionalesFiltradas; });
var selectProfesionalSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.especialidadProfesionalSelected; });
var selectBusquedaProfesionales = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) {
    var _a;
    var request = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_1__["FiltrosProfesionales"]();
    if (formulario.especialidadSelected != undefined) {
        request.esp = formulario.especialidadSelected.codigo.toString();
    }
    if (formulario.obraSocialSelected != undefined) {
        request.os = (_a = formulario.obraSocialSelected.codigo) === null || _a === void 0 ? void 0 : _a.toString();
    }
    return request;
});
// licencias
var selecBusquedatLicencias = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) {
    var request = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_1__["FiltrosLicencias"]();
    if (formulario.especialidadProfesionalSelected != undefined) {
        request.ep = formulario.especialidadProfesionalSelected.codigo.toString();
    }
    return request;
});
var selectLicencias = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.licencias; });
// turnos
var selectBusquedaTurnos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) {
    var _a;
    var request = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_1__["FiltrosTurnos"]();
    if (formulario.fechaSelected != undefined) {
        request.fecha =
            Number(formulario.fechaSelected.getFullYear()) + "-" +
                Number((formulario.fechaSelected.getMonth() + 1)) + "-" +
                Number(formulario.fechaSelected.getDate());
    }
    if (formulario.especialidadProfesionalSelected != undefined) {
        request.ep = formulario.especialidadProfesionalSelected.codigo.toString();
    }
    if (formulario.obraSocialSelected != undefined) {
        request.os = (_a = formulario.obraSocialSelected.codigo) === null || _a === void 0 ? void 0 : _a.toString();
    }
    return request;
});
var selectTurnos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.turnosRta; });
var selectFechaTurnos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormulario, function (formulario) { return formulario.fechaSelected; });


/***/ }),

/***/ "./src/app/core/store/selectors/turno.selectors.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/selectors/turno.selectors.ts ***!
  \*********************************************************/
/*! exports provided: selectFormularioTurno, selectObraSocialSelected, selectTurnoSelected, selectTurnoRecuperado, alertaCambioEstadoTurnoSeleccionado, reqAsignarTurno, selectPacientesFiltrados, selectFiltroPacientes, selectPacienteSelected, selectRtaAsignado, selectRespuesta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFormularioTurno", function() { return selectFormularioTurno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectObraSocialSelected", function() { return selectObraSocialSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTurnoSelected", function() { return selectTurnoSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTurnoRecuperado", function() { return selectTurnoRecuperado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertaCambioEstadoTurnoSeleccionado", function() { return alertaCambioEstadoTurnoSeleccionado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqAsignarTurno", function() { return reqAsignarTurno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPacientesFiltrados", function() { return selectPacientesFiltrados; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFiltroPacientes", function() { return selectFiltroPacientes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPacienteSelected", function() { return selectPacienteSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRtaAsignado", function() { return selectRtaAsignado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRespuesta", function() { return selectRespuesta; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _shared_models_request_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/request.models */ "./src/app/shared/models/request.models.ts");
/* harmony import */ var _utils_service_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/service.utils */ "./src/app/core/utils/service.utils.ts");



var selectFormularioTurno = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('formularioTurno');
// seleccion
// obras sociales
var selectObraSocialSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) { return formularioTurno.obraSocialSelected; });
// turno
var selectTurnoSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) { return formularioTurno.turnoSelected; });
var selectTurnoRecuperado = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) { return formularioTurno.turnoRecuperado; });
var alertaCambioEstadoTurnoSeleccionado = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) {
    var _a, _b, _c;
    if (((_b = (_a = formularioTurno === null || formularioTurno === void 0 ? void 0 : formularioTurno.turnoRecuperado) === null || _a === void 0 ? void 0 : _a.turno) === null || _b === void 0 ? void 0 : _b.estado) != ((_c = formularioTurno === null || formularioTurno === void 0 ? void 0 : formularioTurno.turnoSelected) === null || _c === void 0 ? void 0 : _c.estado)) {
        var estadoIni = Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_2__["getEstadoString"])(formularioTurno.turnoSelected.estado);
        var estadoNvo = Object(_utils_service_utils__WEBPACK_IMPORTED_MODULE_2__["getEstadoString"])(formularioTurno.turnoRecuperado.turno.estado);
        return "El turno elegido cambio su estado de " + estadoIni + " a " + estadoNvo;
    }
    return undefined;
});
var reqAsignarTurno = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) {
    var request = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_1__["ConfirmacionTurno"]();
    if (formularioTurno.turnoSelected != undefined) {
        request.codTurno = formularioTurno.turnoSelected.codigo;
    }
    if (formularioTurno.pacienteSelected != undefined) {
        request.codPaciente = formularioTurno.pacienteSelected.codigo;
    }
    if (formularioTurno.obraSocialSelected != undefined) {
        request.codObraSocial = formularioTurno.obraSocialSelected.codigo;
    }
    return request;
});
// pacientes
var selectPacientesFiltrados = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) { return formularioTurno.pacientes; });
// paciente
var selectFiltroPacientes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) {
    var request = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_1__["FiltrosPacientes"]();
    if (formularioTurno.datosPaciente != undefined &&
        formularioTurno.datosPaciente.dni != undefined) {
        request.dni = formularioTurno.datosPaciente.dni.toString();
    }
    if (formularioTurno.datosPaciente != undefined &&
        formularioTurno.datosPaciente.nombreApellido != undefined) {
        request.apenom = formularioTurno.datosPaciente.nombreApellido.trim();
    }
    return request;
});
var selectPacienteSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) { return formularioTurno.pacienteSelected; });
var selectRtaAsignado = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) { return formularioTurno.rtaAsignacion; });
var selectRespuesta = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormularioTurno, function (formularioTurno) { return formularioTurno.rtaConfirmacion; });


/***/ }),

/***/ "./src/app/core/utils/error.utils.ts":
/*!*******************************************!*\
  !*** ./src/app/core/utils/error.utils.ts ***!
  \*******************************************/
/*! exports provided: ErrorUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorUtils", function() { return ErrorUtils; });
var ErrorUtils = /** @class */ (function () {
    function ErrorUtils() {
    }
    ErrorUtils.listGenericErrors = [
        'Http failure response for (unknown url): 0 Unknown Error',
    ];
    ErrorUtils.getFormatedError = function (error) {
        var result = error;
        if (ErrorUtils.listGenericErrors.indexOf(error) !== -1) {
            result = 'Ha ocurrido un error, reintente nuevamente más tarde.';
        }
        return result;
    };
    return ErrorUtils;
}());



/***/ }),

/***/ "./src/app/core/utils/service.utils.ts":
/*!*********************************************!*\
  !*** ./src/app/core/utils/service.utils.ts ***!
  \*********************************************/
/*! exports provided: getWsFromMock, throwErrorToUser, throwErrorIfBadCode, throwMensajeToUser, getEstadoString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWsFromMock", function() { return getWsFromMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwErrorToUser", function() { return throwErrorToUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwErrorIfBadCode", function() { return throwErrorIfBadCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMensajeToUser", function() { return throwMensajeToUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEstadoString", function() { return getEstadoString; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_DELAY = 1000;
function getWsFromMock(mockup, delayMs) {
    delayMs = delayMs ? delayMs : DEFAULT_DELAY;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(mockup).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(delayMs));
}
function throwErrorToUser(msj) {
    throw new Error("" + msj);
}
function throwErrorIfBadCode(res) {
    if (res.respuesta.codigo !== 200) {
        throw new Error(res.respuesta.mensaje + " (Cod.Error:" + res.respuesta.codigo + ")");
    }
}
function throwMensajeToUser(msj) {
    throw new Error("" + msj);
}
function getEstadoString(estado) {
    if (estado == 1) {
        return "Libre";
    }
    else if (estado == 2) {
        return "Sobreturno Libre";
    }
    else if (estado == 3) {
        return "Asignado";
    }
    else if (estado == 4) {
        return "Confirmado";
    }
    else {
        return estado.toString();
    }
}


/***/ }),

/***/ "./src/app/modules/home/components/asignarTurno/asignarTurno.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/home/components/asignarTurno/asignarTurno.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popupTitle {\r\n  margin-bottom: 0px;\r\n  font-size: medium;\r\n}\r\n\r\n.label {\r\n  width: 20%;  \r\n}\r\n\r\n.texto {\r\n  line-height:26px;\r\n}\r\n\r\n.mat-option {\r\n    margin: 1rem 0;\r\n    overflow: visible;\r\n    line-height: initial;\r\n    word-wrap: break-word;\r\n    white-space: pre-wrap;\r\n    height: unset;\r\n  }\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.filaHorarios {\r\n  height: 35px;\r\n}\r\n\r\ntd.mat-column-star {\r\n  width: 20px;\r\n  padding-right: 8px;\r\n}\r\n\r\nth.mat-column-position, td.mat-column-position {\r\n  padding-left: 8px;\r\n}\r\n\r\n.mat-table-sticky:first-child {\r\n  border-right: 1px solid #e0e0e0;\r\n}\r\n\r\n.mat-table-sticky:last-child {\r\n  border-left: 1px solid #e0e0e0;\r\n}\r\n\r\n.labelForm {\r\n  color: rgba(0,0,0,.54);\r\n  font: 400 11px/20px Roboto,\"Helvetica Neue\",sans-serif;\r\n}\r\n\r\n.alert {\r\n  background-color: yellow;\r\n}\r\n\r\n.alert-default {\r\n  background-color: #A8AAB1;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.alert-warning {\r\n  background-color: #FDBA0F;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.alert-success {\r\n  background-color: #59AD78;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.alert-error {\r\n  background-color: #d30000;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.alert-info {\r\n  background-color: #00b6ff;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.msjerror {\r\n  background-color: orangered;\r\n}\r\n\r\n.recuadroSeccion2 {\r\n  background-color: #3567AF;\r\n  color: white;\r\n  padding-top: 10px;\r\n  padding-bottom: 6px;\r\n  font-size: small;\r\n  border-top-left-radius: 20px; \r\n  border-top-right-radius: 20px; \r\n}\r\n\r\n.tituloSeccion2 {\r\n  font-size: medium;\r\n  margin-left: 10px;\r\n}\r\n\r\n.cuadro-formulario2 {\r\n  background-color: white;\r\n  border: 0px solid transparent;\r\n  padding: 0.5vw;\r\n  border-color: var(--bordes);\r\n  border-radius: 20px; \r\n}\r\n\r\n.cuadro-gris {\r\n  background-color: whitesmoke;\r\n  border: 1px solid transparent;\r\n  padding: 0.5vw;\r\n  border-color: var(--bordes);\r\n  margin-top: 1vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvYXNpZ25hclR1cm5vL2FzaWduYXJUdXJuby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztBQUVGO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2FzaWduYXJUdXJuby9hc2lnbmFyVHVybm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cFRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgd2lkdGg6IDIwJTsgIFxyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gIGxpbmUtaGVpZ2h0OjI2cHg7XHJcbn1cclxuXHJcbi5tYXQtb3B0aW9uIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlsYUhvcmFyaW9zIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbnRkLm1hdC1jb2x1bW4tc3RhciB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1hdC10YWJsZS1zdGlja3k6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUtc3RpY2t5Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG5cclxuLmxhYmVsRm9ybSB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcclxuICBmb250OiA0MDAgMTFweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5hbGVydC1kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQThBQUIxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWxlcnQtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZEQkEwRjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OUFENzg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hbGVydC1lcnJvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFsZXJ0LWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGI2ZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tc2plcnJvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG4ucmVjdWFkcm9TZWNjaW9uMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NjdBRjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7IFxyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4OyBcclxufVxyXG5cclxuLnRpdHVsb1NlY2Npb24yIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmN1YWRyby1mb3JtdWxhcmlvMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMC41dnc7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG59XHJcblxyXG4uY3VhZHJvLWdyaXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMC41dnc7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXMpO1xyXG4gIG1hcmdpbi10b3A6IDF2dztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/components/asignarTurno/asignarTurno.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/home/components/asignarTurno/asignarTurno.component.ts ***!
  \********************************************************************************/
/*! exports provided: AsignarTurnoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarTurnoDialogComponent", function() { return AsignarTurnoDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/store/selectors/form.selectors */ "./src/app/core/store/selectors/form.selectors.ts");
/* harmony import */ var _core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/store/selectors/turno.selectors */ "./src/app/core/store/selectors/turno.selectors.ts");
/* harmony import */ var _core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/store/actions/turno.actions */ "./src/app/core/store/actions/turno.actions.ts");
/* harmony import */ var _shared_models_datos_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/models/datos.models */ "./src/app/shared/models/datos.models.ts");
/* harmony import */ var _shared_models_request_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/models/request.models */ "./src/app/shared/models/request.models.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _busqPaciente_busqPaciente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../busqPaciente/busqPaciente.component */ "./src/app/modules/home/components/busqPaciente/busqPaciente.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_utils_service_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/utils/service.utils */ "./src/app/core/utils/service.utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");















var AsignarTurnoDialogComponent = /** @class */ (function () {
    function AsignarTurnoDialogComponent(dialog, store, dialogRef, data) {
        var _this = this;
        this.dialog = dialog;
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dni = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(/^\d+$/)]);
        this.apeNom = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(5)]);
        this.nroHC = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]({ value: '', disabled: true });
        this.edad = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]({ value: '', disabled: true });
        this.fecNac = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]);
        this.direccion = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.localidadFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]);
        this.telefonoArea1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.telefonoNumero1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.telefonoRef1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.telefonoArea3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.telefonoNumero3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.telefonoRef3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email]);
        this.comentario = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.personaFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            dni: this.dni,
            apeNom: this.apeNom,
            fecNac: this.fecNac,
            email: this.email,
        }, { validators: [] });
        this.displayedColumns = ['confirmado', 'fecha', 'os', 'profesional'];
        this.localidades$ = this.store.select(_core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_4__["selectAllLocalidades"]);
        store.select(_core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_5__["selectObraSocialSelected"]).subscribe(function (os) {
            _this.obraSocialNombre = os === null || os === void 0 ? void 0 : os.nombre;
        });
        this.store.select(_core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_5__["selectPacienteSelected"]).subscribe(function (pe) {
            _this.paciente = pe;
            _this.turnosAnteriores = pe === null || pe === void 0 ? void 0 : pe.turnoPaciente;
            if (pe == undefined) {
                pe = new _shared_models_datos_models__WEBPACK_IMPORTED_MODULE_7__["Paciente"]();
            }
            _this.pacienteToView(pe);
        });
        this.store.select(_core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_5__["selectRtaAsignado"]).subscribe(function (rta) {
            var _a, _b, _c, _d, _e;
            _this.alerta2 = undefined;
            _this.error = undefined;
            _this.rtaAsignado = undefined;
            if (rta != undefined) {
                _this.rtaAsignado = (_a = rta === null || rta === void 0 ? void 0 : rta.respuesta) === null || _a === void 0 ? void 0 : _a.codigo;
                if (((_b = rta === null || rta === void 0 ? void 0 : rta.respuesta) === null || _b === void 0 ? void 0 : _b.codigo) == 200) {
                    //
                }
                else if (((_c = rta === null || rta === void 0 ? void 0 : rta.respuesta) === null || _c === void 0 ? void 0 : _c.codigo) == 400) {
                    _this.alerta2 = (_d = rta.respuesta) === null || _d === void 0 ? void 0 : _d.mensaje;
                }
                else {
                    _this.error = (_e = rta.respuesta) === null || _e === void 0 ? void 0 : _e.mensaje;
                }
            }
        });
        this.store.select(_core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_5__["selectRespuesta"]).subscribe(function (rta) {
            var _a, _b, _c, _d;
            if (rta != undefined) {
                _this.alerta = undefined;
                _this.error = undefined;
                if (((_a = rta === null || rta === void 0 ? void 0 : rta.respuesta) === null || _a === void 0 ? void 0 : _a.codigo) == 200) {
                    _this.dialogRef.close({ event: 'Confirmo' });
                    _this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["clear"]());
                    Object(_core_utils_service_utils__WEBPACK_IMPORTED_MODULE_12__["throwMensajeToUser"])("Turno confirmado con éxito!");
                }
                else if (((_b = rta === null || rta === void 0 ? void 0 : rta.respuesta) === null || _b === void 0 ? void 0 : _b.codigo) == 400) {
                    _this.alerta = (_c = rta.respuesta) === null || _c === void 0 ? void 0 : _c.mensaje;
                }
                else {
                    _this.error = (_d = rta.respuesta) === null || _d === void 0 ? void 0 : _d.mensaje;
                }
            }
        });
    }
    AsignarTurnoDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fechaHora = this.data.turno.fechaHora;
        this.profesionalNombre = this.data.profesional.nombreApellido;
        this.turnosAnteriores = [];
        this.store.select(_core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_5__["alertaCambioEstadoTurnoSeleccionado"]).subscribe(function (alerta) {
            if (alerta != undefined) {
                _this.alerta = alerta;
            }
            else {
                _this.alerta = undefined;
            }
        }).unsubscribe();
        this.filteredLocalidades$ = this.localidadFC.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (value) { return typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.nombre; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function (x) { return _this.filterLoc(x); }));
        this.localidadFC.valueChanges.subscribe(function (value) { return _this.cambioLocalidad(value); });
    };
    AsignarTurnoDialogComponent.prototype.onCancelarClick = function () {
        var _this = this;
        if (this.turnoDisponible()) {
            this.onLiberarThis();
        }
        this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["clear"]());
        setTimeout(function () {
            _this.dialogRef.close({ event: 'Cancel' });
        });
    };
    AsignarTurnoDialogComponent.prototype.onConfirmarClick = function () {
        var _this = this;
        //this.onGuardaPaciente().then(save => {
        //  if (save) {
        this.store.select(_core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_5__["reqAsignarTurno"]).subscribe(function (confTurno) {
            _this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["confirmarTurno"]({ confirmaTurno: confTurno }));
        }).unsubscribe();
        //  }
        //});
    };
    AsignarTurnoDialogComponent.prototype.onLiberarThis = function () {
        this.onLiberar(this.data.turno.codigo);
    };
    AsignarTurnoDialogComponent.prototype.onLiberar = function (codTurno) {
        var _this = this;
        var reqLiberarTurno = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_8__["LiberacionTurno"]();
        this.store.select(_core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_5__["selectPacienteSelected"]).subscribe(function (ps) {
            reqLiberarTurno.codTurno = codTurno;
            reqLiberarTurno.codPaciente = ps === null || ps === void 0 ? void 0 : ps.codigo;
            _this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["liberarTurno"]({ liberaTurno: reqLiberarTurno }));
        }).unsubscribe();
    };
    AsignarTurnoDialogComponent.prototype.onLiberarClick = function (tp) {
        this.onLiberar(tp.turno.codigo);
    };
    AsignarTurnoDialogComponent.prototype.buscarPacientes = function () {
        var filtrosPacientes = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_8__["FiltrosPacientes"]();
        filtrosPacientes.dni = this.dni.value;
        filtrosPacientes.apenom = this.apeNom.value;
        // this.store.dispatch(TurnoActions.getPacientes({filtrosPacientes}));
        // this.pacientes$ = this.store.select(TurnoSelectors.selectPacientesFiltrados);
        var dialogRef = this.dialog.open(_busqPaciente_busqPaciente_component__WEBPACK_IMPORTED_MODULE_10__["BusqPacienteDialogComponent"], {
            width: '50%',
            data: {
                filtro: filtrosPacientes
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            setTimeout(function () {
            });
        });
    };
    AsignarTurnoDialogComponent.prototype.getDate = function (dd) {
        if (dd == undefined || dd.length != 10) {
            return undefined;
        }
        return new Date(Number(dd.substring(0, 4)), Number(dd.substring(6, 7)) - 1, Number(dd.substring(9, 10)));
    };
    AsignarTurnoDialogComponent.prototype.pacienteToView = function (pacDto) {
        var _a, _b, _c, _d, _e, _f;
        this.nroHC.setValue(pacDto.hc);
        this.dni.setValue(pacDto.dni);
        this.apeNom.setValue(pacDto.nombreApellido);
        //this.fecNac.setValue(pacDto.fechaNacimiento);
        if ((pacDto === null || pacDto === void 0 ? void 0 : pacDto.fechanacimiento) != undefined) {
            this.fecNac.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(pacDto === null || pacDto === void 0 ? void 0 : pacDto.fechanacimiento, 'yyyy-MM-dd', 'en'));
        }
        this.edad.setValue(pacDto === null || pacDto === void 0 ? void 0 : pacDto.edad);
        this.direccion.setValue(pacDto === null || pacDto === void 0 ? void 0 : pacDto.direccion);
        this.localidadFC.setValue(pacDto === null || pacDto === void 0 ? void 0 : pacDto.localidad);
        if (pacDto.telefonoFijo != undefined) {
            this.telefonoArea1.setValue((_a = pacDto === null || pacDto === void 0 ? void 0 : pacDto.telefonoFijo) === null || _a === void 0 ? void 0 : _a.area);
            this.telefonoNumero1.setValue((_b = pacDto === null || pacDto === void 0 ? void 0 : pacDto.telefonoFijo) === null || _b === void 0 ? void 0 : _b.numero);
            this.telefonoRef1.setValue((_c = pacDto === null || pacDto === void 0 ? void 0 : pacDto.telefonoFijo) === null || _c === void 0 ? void 0 : _c.referencia);
        }
        if (pacDto.celular != undefined) {
            this.telefonoArea3.setValue((_d = pacDto === null || pacDto === void 0 ? void 0 : pacDto.celular) === null || _d === void 0 ? void 0 : _d.area);
            this.telefonoNumero3.setValue((_e = pacDto === null || pacDto === void 0 ? void 0 : pacDto.celular) === null || _e === void 0 ? void 0 : _e.numero);
            this.telefonoRef3.setValue((_f = pacDto === null || pacDto === void 0 ? void 0 : pacDto.celular) === null || _f === void 0 ? void 0 : _f.referencia);
        }
        this.email.setValue(pacDto === null || pacDto === void 0 ? void 0 : pacDto.email);
        this.comentario.setValue(pacDto === null || pacDto === void 0 ? void 0 : pacDto.comentario);
    };
    AsignarTurnoDialogComponent.prototype.viewToPaciente = function (pacDto) {
        var localidad = (this.localidadFC.value != undefined && this.localidadFC.value != '') ? this.localidadFC.value : undefined;
        pacDto.hc = this.nroHC.value;
        pacDto.dni = this.dni.value;
        pacDto.nombreApellido = this.apeNom.value;
        pacDto.fechanacimiento = this.fecNac.value;
        pacDto.fechaNacimiento = this.fecNac.value;
        pacDto.direccion = this.direccion.value;
        pacDto.localidad = localidad,
            pacDto.telefonoFijo = undefined;
        pacDto.celular = undefined;
        if (this.telefonoArea1.value > 0 && this.telefonoNumero1.value > 0) {
            pacDto.telefonoFijo = {
                area: this.telefonoArea1.value,
                numero: this.telefonoNumero1.value,
                referencia: this.telefonoRef1.value
            };
        }
        if (this.telefonoArea3.value > 0 && this.telefonoNumero3.value > 0) {
            pacDto.celular = {
                area: this.telefonoArea3.value,
                numero: this.telefonoNumero3.value,
                referencia: this.telefonoRef3.value
            };
        }
        pacDto.email = this.email.value;
        pacDto.comentario = this.comentario.value;
        return pacDto;
    };
    AsignarTurnoDialogComponent.prototype.buscarPaciente = function (codigo) {
        var _this = this;
        // llamamos a este pq me pierde los turnos al actualizar un paciente existente
        var filtrosPacientes = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_8__["FiltrosPacientes"]();
        filtrosPacientes.codigo = codigo;
        this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["getPacienteByCodigo"]({ filtrosPacientes: filtrosPacientes }));
        setTimeout(function () {
            _this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["setPacientes"]({ pacientes: undefined }));
        }, 200);
    };
    AsignarTurnoDialogComponent.prototype.onGuardaPaciente = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (save) {
                        var _a;
                        var pacienteReq = _this.viewToPaciente(new _shared_models_datos_models__WEBPACK_IMPORTED_MODULE_7__["Paciente"]);
                        pacienteReq.codigo = (_a = _this.paciente) === null || _a === void 0 ? void 0 : _a.codigo;
                        _this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["postPaciente"]({ paciente: pacienteReq }));
                        setTimeout(function () {
                            var _a;
                            _this.buscarPaciente((_a = _this.paciente) === null || _a === void 0 ? void 0 : _a.codigo);
                        }, 200);
                        save(Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(true));
                    })];
            });
        });
    };
    AsignarTurnoDialogComponent.prototype.onNuevoPaciente = function () {
        this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_6__["setPacienteSelected"]({ pacienteSelected: new _shared_models_datos_models__WEBPACK_IMPORTED_MODULE_7__["Paciente"]() }));
    };
    AsignarTurnoDialogComponent.prototype.hayPaciente = function () {
        var _a, _b, _c;
        return (((_a = this.paciente) === null || _a === void 0 ? void 0 : _a.codigo) != undefined && ((_b = this.paciente) === null || _b === void 0 ? void 0 : _b.hc) && ((_c = this.paciente) === null || _c === void 0 ? void 0 : _c.codigo) > 0);
    };
    AsignarTurnoDialogComponent.prototype.perCompleta = function () {
        return this.personaFormGroup.valid;
    };
    AsignarTurnoDialogComponent.prototype.filterLoc = function (value) {
        if (value != undefined) {
            if (value != undefined && value != "" && !isNaN(Number(value))) {
                return this.localidades$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (loc) {
                    return loc.filter(function (el) {
                        var _a, _b;
                        return ((_a = el.nombre) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(value.toLowerCase())) !== -1 ||
                            ((_b = el.codigo) === null || _b === void 0 ? void 0 : _b.toString().indexOf(value.toLowerCase())) === 0;
                    })
                        .sort(function (a, b) {
                        if (a.codigo == 0)
                            return -1;
                        if (b.codigo == 0)
                            return 1;
                        if (a.codigo > b.codigo)
                            return 1;
                        if (a.codigo < b.codigo)
                            return -1;
                        return 0;
                    });
                }));
            }
            return this.localidades$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (loc) {
                return loc.filter(function (el) {
                    var _a, _b;
                    return ((_a = el.nombre) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(value.toLowerCase())) !== -1 ||
                        ((_b = el.codigo) === null || _b === void 0 ? void 0 : _b.toString().indexOf(value.toLowerCase())) === 0;
                });
            }));
        }
        else {
            return this.localidades$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (loc) {
                return loc.filter(function (el) { return 1 == 1; });
            }));
        }
    };
    AsignarTurnoDialogComponent.prototype.displayLoc = function (option) {
        return option ? option.codigo + " " + option.nombre : undefined;
    };
    AsignarTurnoDialogComponent.prototype.cambioLocalidad = function (value) {
        //this.localidad = value;
    };
    AsignarTurnoDialogComponent.prototype.clearLoc = function () {
        this.localidadFC.setValue('');
        //this.cambioLocalidad(undefined);
    };
    AsignarTurnoDialogComponent.prototype.turnoDisponible = function () {
        return this.rtaAsignado == 200 && (this.data.turno.estado == 1 || this.data.turno.estado == 2);
    };
    AsignarTurnoDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoLocComplete'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AsignarTurnoDialogComponent.prototype, "autoLocComplete", void 0);
    AsignarTurnoDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asignarTurno-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asignarTurno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/asignarTurno/asignarTurno.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asignarTurno.component.css */ "./src/app/modules/home/components/asignarTurno/asignarTurno.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AsignarTurnoDialogComponent);
    return AsignarTurnoDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/busqPaciente/busqPaciente.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/home/components/busqPaciente/busqPaciente.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myTable {\r\n    width: 100%;\r\n}\r\n\r\n.titleTable {\r\n    padding-right: 2px;\r\n    padding-left: 1px;\r\n}\r\n\r\n.rowTable {\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    padding-right: 2px;\r\n    padding-left: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvYnVzcVBhY2llbnRlL2J1c3FQYWNpZW50ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2J1c3FQYWNpZW50ZS9idXNxUGFjaWVudGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGVUYWJsZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxufVxyXG5cclxuLnJvd1RhYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/components/busqPaciente/busqPaciente.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/home/components/busqPaciente/busqPaciente.component.ts ***!
  \********************************************************************************/
/*! exports provided: BusqPacienteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusqPacienteDialogComponent", function() { return BusqPacienteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/store/selectors/turno.selectors */ "./src/app/core/store/selectors/turno.selectors.ts");
/* harmony import */ var _core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/store/actions/turno.actions */ "./src/app/core/store/actions/turno.actions.ts");
/* harmony import */ var _shared_models_request_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/models/request.models */ "./src/app/shared/models/request.models.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");








var BusqPacienteDialogComponent = /** @class */ (function () {
    function BusqPacienteDialogComponent(store, dialogRef, data) {
        var _this = this;
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        // filtros
        this.dniFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.apeNomFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.displayedColumnsBusq1 = ['hc', 'dni', 'nombreApellido'];
        this.loading = false;
        store.select(_core_store_selectors_turno_selectors__WEBPACK_IMPORTED_MODULE_4__["selectPacientesFiltrados"]).subscribe(function (pacientes) {
            _this.resultados = pacientes;
            _this.loading = false;
        });
    }
    BusqPacienteDialogComponent.prototype.ngOnInit = function () {
        this.dniFC.setValue(this.data.filtro.dni);
        this.apeNomFC.setValue(this.data.filtro.apenom);
    };
    BusqPacienteDialogComponent.prototype.onCancelarClick = function () {
        var _this = this;
        this.data.filtro = undefined;
        this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_5__["setPacientes"]({ pacientes: undefined }));
        setTimeout(function () {
            _this.dialogRef.close();
        }, 200);
    };
    BusqPacienteDialogComponent.prototype.onClickPaciente = function (seleccion) {
        var _this = this;
        var filtrosPacientes = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_6__["FiltrosPacientes"]();
        filtrosPacientes.codigo = seleccion.codigo;
        this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_5__["getPacienteByCodigo"]({ filtrosPacientes: filtrosPacientes }));
        //this.store.select(TurnoSelectors.selectPacienteSelected);
        setTimeout(function () {
            _this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_5__["setPacientes"]({ pacientes: undefined }));
            _this.dialogRef.close();
        }, 200);
    };
    BusqPacienteDialogComponent.prototype.buscarPacientes = function () {
        this.loading = true;
        var filtrosPacientes = new _shared_models_request_models__WEBPACK_IMPORTED_MODULE_6__["FiltrosPacientes"]();
        filtrosPacientes.dni = this.dniFC.value;
        filtrosPacientes.apenom = this.apeNomFC.value;
        this.store.dispatch(_core_store_actions_turno_actions__WEBPACK_IMPORTED_MODULE_5__["getPacientes"]({ filtrosPacientes: filtrosPacientes }));
        //this.pacientes$ = this.store.select(TurnoSelectors.selectPacientesFiltrados);
    };
    BusqPacienteDialogComponent.prototype.isValid = function () {
        var _a, _b;
        var result = false;
        if (this.dniFC != undefined && this.dniFC.valid &&
            this.apeNomFC != undefined && this.apeNomFC.valid) {
            if ((this.dniFC != undefined && ((_b = (_a = this.dniFC) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString().trim()) != "") ||
                (this.apeNomFC != undefined && this.apeNomFC.value.trim() != "")) {
                result = true;
            }
        }
        return result;
    };
    BusqPacienteDialogComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    BusqPacienteDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-busqPaciente-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./busqPaciente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/busqPaciente/busqPaciente.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./busqPaciente.component.css */ "./src/app/modules/home/components/busqPaciente/busqPaciente.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], BusqPacienteDialogComponent);
    return BusqPacienteDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/busqProfesional/busqProfesional.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/home/components/busqProfesional/busqProfesional.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myTable {\r\n    width: 100%;\r\n}\r\n\r\n.titleTable {\r\n    padding-right: 2px;\r\n    padding-left: 1px;\r\n}\r\n\r\n.rowTable {\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    padding-right: 2px;\r\n    padding-left: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvYnVzcVByb2Zlc2lvbmFsL2J1c3FQcm9mZXNpb25hbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2J1c3FQcm9mZXNpb25hbC9idXNxUHJvZmVzaW9uYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGVUYWJsZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxufVxyXG5cclxuLnJvd1RhYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/components/busqProfesional/busqProfesional.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/busqProfesional/busqProfesional.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BusqProfesionalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusqProfesionalDialogComponent", function() { return BusqProfesionalDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_store_selectors_contexto_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/store/selectors/contexto.selectors */ "./src/app/core/store/selectors/contexto.selectors.ts");
/* harmony import */ var _core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/store/selectors/form.selectors */ "./src/app/core/store/selectors/form.selectors.ts");
/* harmony import */ var _core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/store/actions/form.actions */ "./src/app/core/store/actions/form.actions.ts");
/* harmony import */ var _shared_models_datos_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/models/datos.models */ "./src/app/shared/models/datos.models.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var BusqProfesionalDialogComponent = /** @class */ (function () {
    function BusqProfesionalDialogComponent(store, dialogRef, data) {
        var _this = this;
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        // filtros
        this.especialidadFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('');
        this.obraSocialFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
        this.displayedColumnsBusq1 = ['codigo', 'nombreApellido', 'sinOS', 'AM', 'PM'];
        this.obrasSociales$ = store.select(_core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAllObrasSociales"]);
        this.especialidades$ = store.select(_core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAllEspecialidades"]);
        store.select(_core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_5__["selectProfesionalesBusquedaA"]).subscribe(function (profesionales) {
            _this.resultados = profesionales;
        });
    }
    BusqProfesionalDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(_core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["setEspecialidadesProfesionalesFiltradas"]({ especialidadesProfesionalesFiltradas: undefined }));
        this.store.select(_core_store_selectors_contexto_selectors__WEBPACK_IMPORTED_MODULE_4__["getToken"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (token) { return (token != undefined || token != null); })).subscribe(function () {
            _this.filteredObrasSociales$ = _this.obraSocialFC.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return typeof value === 'string' ? value : value.nombre; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (x) { return _this.filterOs(x); }));
            _this.obraSocialFC.valueChanges.subscribe(function (value) { return _this.cambioObraSocial(value); });
            _this.filteredEspecialidades$ = _this.especialidadFC.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return typeof value === 'string' ? value : value.nombre; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (x) { return _this.filterEsp(x); }));
            _this.especialidadFC.valueChanges.subscribe(function (value) { return _this.cambioEspecialidad(value); });
        }).unsubscribe();
    };
    BusqProfesionalDialogComponent.prototype.filterOs = function (value) {
        var filterValue = value.toLowerCase();
        if (value != "" && !isNaN(Number(value))) {
            return this.obrasSociales$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (os) {
                return os.filter(function (el) {
                    var _a, _b;
                    return ((_a = el.nombre) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(filterValue)) !== -1 ||
                        ((_b = el.codigo) === null || _b === void 0 ? void 0 : _b.toString().indexOf(filterValue)) === 0;
                })
                    .sort(function (a, b) {
                    if (a.codigo == 0)
                        return -1;
                    if (b.codigo == 0)
                        return 1;
                    if (a.codigo > b.codigo)
                        return 1;
                    if (a.codigo < b.codigo)
                        return -1;
                    return 0;
                });
            }));
        }
        return this.obrasSociales$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (os) {
            return os.filter(function (el) {
                var _a, _b;
                return ((_a = el.nombre) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(filterValue)) !== -1 ||
                    ((_b = el.codigo) === null || _b === void 0 ? void 0 : _b.toString().indexOf(filterValue)) === 0;
            });
        }));
    };
    BusqProfesionalDialogComponent.prototype.filterEsp = function (value) {
        var filterValue = value.toLowerCase();
        if (value != "" && !isNaN(Number(value))) {
            return this.especialidades$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (esp) {
                return esp.filter(function (esp) {
                    var _a, _b;
                    return ((_a = esp.nombre) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(filterValue)) !== -1 ||
                        ((_b = esp.codigo) === null || _b === void 0 ? void 0 : _b.toString().indexOf(filterValue)) !== -1;
                })
                    .sort(function (a, b) {
                    if (a.codigo == 0)
                        return -1;
                    if (b.codigo == 0)
                        return 1;
                    if (a.codigo > b.codigo)
                        return 1;
                    if (a.codigo < b.codigo)
                        return -1;
                    return 0;
                });
            }));
        }
        return this.especialidades$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (esp) {
            return esp.filter(function (esp) {
                var _a, _b;
                return ((_a = esp.nombre) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(filterValue)) !== -1 ||
                    ((_b = esp.codigo) === null || _b === void 0 ? void 0 : _b.toString().indexOf(filterValue)) !== -1;
            });
        }));
    };
    BusqProfesionalDialogComponent.prototype.cambioObraSocial = function (value) {
        this.store.dispatch(_core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["setObraSocialSelected"]({ obraSocialSelected: value }));
    };
    BusqProfesionalDialogComponent.prototype.cambioEspecialidad = function (value) {
        this.store.dispatch(_core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["setEspecialidadSelected"]({ especialidadSelected: value }));
    };
    BusqProfesionalDialogComponent.prototype.onCancelarClick = function () {
        var _this = this;
        this.data.profesional = new _shared_models_datos_models__WEBPACK_IMPORTED_MODULE_7__["EspecialidadProfesional"];
        this.store.dispatch(_core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["setEspecialidadProfesionalSelected"]({ especialidadProfesionalSelected: undefined }));
        setTimeout(function () {
            _this.dialogRef.close();
        }, 200);
    };
    BusqProfesionalDialogComponent.prototype.onClickProf = function (seleccion) {
        this.data.profesional = seleccion;
        this.store.dispatch(_core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["setEspecialidadProfesionalSelected"]({ especialidadProfesionalSelected: seleccion }));
        this.dialogRef.close();
    };
    BusqProfesionalDialogComponent.prototype.buscarProfesionales = function () {
        var _this = this;
        this.store.select(_core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_5__["selectBusquedaProfesionales"]).subscribe(function (filtrosProfesionales) {
            _this.store.dispatch(_core_store_actions_form_actions__WEBPACK_IMPORTED_MODULE_6__["getEspecialidadesProfesionalesFiltradas"]({ filtrosProfesionales: filtrosProfesionales }));
        }).unsubscribe();
    };
    // evento emter 
    BusqProfesionalDialogComponent.prototype.onEnterE2 = function (evt, field) {
        if (evt && evt.key === "Enter") {
            this.onEnterE(evt, field);
        }
    };
    BusqProfesionalDialogComponent.prototype.onEnterE = function (evt, field) {
        setTimeout(function () {
        });
    };
    // como resuelve el display en los combos
    BusqProfesionalDialogComponent.prototype.displayOS = function (option) {
        return option ? option.codigo + " " + option.nombre : undefined;
    };
    BusqProfesionalDialogComponent.prototype.displayEsp = function (option) {
        return option ? option.codigo + " " + option.nombre : undefined;
    };
    // crucecitas para limpiar combos
    BusqProfesionalDialogComponent.prototype.clearOS = function () {
        this.obraSocialFC.setValue('');
    };
    BusqProfesionalDialogComponent.prototype.clearEspecialidad = function () {
        this.especialidadFC.setValue('');
    };
    BusqProfesionalDialogComponent.prototype.isValid = function () {
        var result = false;
        if (this.obraSocialFC.valid && this.especialidadFC.valid) {
            result = true;
        }
        return result;
    };
    BusqProfesionalDialogComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoEspComplete'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BusqProfesionalDialogComponent.prototype, "autoEspComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autoObraComplete'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BusqProfesionalDialogComponent.prototype, "autoObraComplete", void 0);
    BusqProfesionalDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-busqProfesional-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./busqProfesional.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/busqProfesional/busqProfesional.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./busqProfesional.component.css */ "./src/app/modules/home/components/busqProfesional/busqProfesional.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], BusqProfesionalDialogComponent);
    return BusqProfesionalDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/licencias/licencias.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/home/components/licencias/licencias.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myTable {\r\n    width: 100%;\r\n}\r\n\r\n.titleTable {\r\n    padding-right: 2px;\r\n    padding-left: 1px;\r\n}\r\n\r\n.rowTable {\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    padding-right: 2px;\r\n    padding-left: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvbGljZW5jaWFzL2xpY2VuY2lhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2xpY2VuY2lhcy9saWNlbmNpYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGVUYWJsZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxufVxyXG5cclxuLnJvd1RhYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/components/licencias/licencias.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/licencias/licencias.component.ts ***!
  \**************************************************************************/
/*! exports provided: LicenciasDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenciasDialogComponent", function() { return LicenciasDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/store/selectors/form.selectors */ "./src/app/core/store/selectors/form.selectors.ts");





var LicenciasDialogComponent = /** @class */ (function () {
    function LicenciasDialogComponent(store, dialogRef, data) {
        //this.licencias$ = store.select(FormSelectors.selectLicencias);
        var _this = this;
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumnsBusq1 = ['desde', 'hasta', 'motivo'];
        store.select(_core_store_selectors_form_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLicencias"]).subscribe(function (licencias) {
            _this.licencias = licencias;
        });
    }
    LicenciasDialogComponent.prototype.ngOnInit = function () {
    };
    LicenciasDialogComponent.prototype.onCancelarClick = function () {
        this.dialogRef.close();
    };
    LicenciasDialogComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    LicenciasDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-licencias-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./licencias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/licencias/licencias.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./licencias.component.css */ "./src/app/modules/home/components/licencias/licencias.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], LicenciasDialogComponent);
    return LicenciasDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/adapters/common.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/adapters/common.ts ***!
  \*******************************************/
/*! exports provided: MY_DATE_FORMATS, CustomDateAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_DATE_FORMATS", function() { return MY_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateAdapter", function() { return CustomDateAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");


var MY_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { month: 'numeric', year: 'numeric', },
        dateA11yLabel: { day: 'numeric', month: 'long', year: 'numeric' },
        monthYearA11yLabel: { month: 'long', year: 'numeric' },
    },
};
var CustomDateAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomDateAdapter, _super);
    function CustomDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDateAdapter.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            if (month >= 0 && month < 12 && date > 0 && date <= 31 &&
                (month != 1 || date <= 28 ||
                    (month == 1 && date == 29 &&
                        (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)))) &&
                ((month != 3 && month != 3 && month != 5 && month != 8 && month != 10) || date <= 30)) {
                return new Date(year, month, date);
            }
        }
        // const timestamp = typeof value === 'number' ? value : Date.parse(value);
        return null;
    };
    CustomDateAdapter.prototype.format = function (date, displayFormat) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return this._to2digit(day) + "/" + this._to2digit(month) + "/" + year;
    };
    CustomDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return CustomDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]));



/***/ }),

/***/ "./src/app/shared/components/errors/error-control/error-control.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/errors/error-control/error-control.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ErrorControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorControlComponent", function() { return ErrorControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _core_store_selectors_error_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/store/selectors/error.selectors */ "./src/app/core/store/selectors/error.selectors.ts");





var ErrorControlComponent = /** @class */ (function () {
    function ErrorControlComponent(snackBar, store) {
        this.snackBar = snackBar;
        this.store = store;
    }
    ErrorControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_core_store_selectors_error_selectors__WEBPACK_IMPORTED_MODULE_4__["selectErrorMessages"]).subscribe(function (x) { return _this.openDialog(x); });
    };
    ErrorControlComponent.prototype.openDialog = function (msg) {
        if (msg) {
            this.snackBar.open(msg, 'x', {
                duration: 7000,
            });
        }
    };
    ErrorControlComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    ErrorControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-control',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-control.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/errors/error-control/error-control.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ErrorControlComponent);
    return ErrorControlComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/datos.models.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/datos.models.ts ***!
  \***********************************************/
/*! exports provided: Contexto, ObraSocial, Plan, CentroAtencion, Especialidad, Rango, Horario, EspecialidadProfesional, EspecialidadProfesionalBusq, Licencia, Turno, Localidad, Telefono, Paciente, TurnoPaciente, TurnoAsignado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contexto", function() { return Contexto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObraSocial", function() { return ObraSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plan", function() { return Plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentroAtencion", function() { return CentroAtencion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Especialidad", function() { return Especialidad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rango", function() { return Rango; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Horario", function() { return Horario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecialidadProfesional", function() { return EspecialidadProfesional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspecialidadProfesionalBusq", function() { return EspecialidadProfesionalBusq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Licencia", function() { return Licencia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Turno", function() { return Turno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Localidad", function() { return Localidad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Telefono", function() { return Telefono; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paciente", function() { return Paciente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoPaciente", function() { return TurnoPaciente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoAsignado", function() { return TurnoAsignado; });
// login
var Contexto = /** @class */ (function () {
    function Contexto() {
    }
    return Contexto;
}());

// obra social
var ObraSocial = /** @class */ (function () {
    function ObraSocial() {
    }
    return ObraSocial;
}());

var Plan = /** @class */ (function () {
    function Plan() {
    }
    return Plan;
}());

// centro atencion
var CentroAtencion = /** @class */ (function () {
    function CentroAtencion() {
    }
    return CentroAtencion;
}());

// especialidad
var Especialidad = /** @class */ (function () {
    function Especialidad() {
    }
    return Especialidad;
}());

// especialidadProfesional
var Rango = /** @class */ (function () {
    function Rango() {
    }
    return Rango;
}());

var Horario = /** @class */ (function () {
    function Horario() {
    }
    return Horario;
}());

var EspecialidadProfesional = /** @class */ (function () {
    function EspecialidadProfesional() {
    }
    return EspecialidadProfesional;
}());

var EspecialidadProfesionalBusq = /** @class */ (function () {
    function EspecialidadProfesionalBusq() {
    }
    return EspecialidadProfesionalBusq;
}());

// licencias
var Licencia = /** @class */ (function () {
    function Licencia() {
    }
    return Licencia;
}());

// turnos
var Turno = /** @class */ (function () {
    function Turno() {
    }
    return Turno;
}());

// paciente
var Localidad = /** @class */ (function () {
    function Localidad() {
    }
    return Localidad;
}());

var Telefono = /** @class */ (function () {
    function Telefono() {
    }
    return Telefono;
}());

var Paciente = /** @class */ (function () {
    function Paciente() {
    }
    return Paciente;
}());

var TurnoPaciente = /** @class */ (function () {
    function TurnoPaciente() {
    }
    return TurnoPaciente;
}());

var TurnoAsignado = /** @class */ (function () {
    function TurnoAsignado() {
    }
    return TurnoAsignado;
}());



/***/ }),

/***/ "./src/app/shared/models/request.models.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/request.models.ts ***!
  \*************************************************/
/*! exports provided: Login, DatosFormulario, FiltrosLicencias, FiltrosProfesionales, FiltrosPacientes, FiltrosTurnos, ConfirmacionTurno, LiberacionTurno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosFormulario", function() { return DatosFormulario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosLicencias", function() { return FiltrosLicencias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosProfesionales", function() { return FiltrosProfesionales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosPacientes", function() { return FiltrosPacientes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosTurnos", function() { return FiltrosTurnos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionTurno", function() { return ConfirmacionTurno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiberacionTurno", function() { return LiberacionTurno; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

var DatosFormulario = /** @class */ (function () {
    function DatosFormulario() {
    }
    return DatosFormulario;
}());

var FiltrosLicencias = /** @class */ (function () {
    function FiltrosLicencias() {
    }
    return FiltrosLicencias;
}());

var FiltrosProfesionales = /** @class */ (function () {
    function FiltrosProfesionales() {
    }
    return FiltrosProfesionales;
}());

var FiltrosPacientes = /** @class */ (function () {
    function FiltrosPacientes() {
    }
    return FiltrosPacientes;
}());

var FiltrosTurnos = /** @class */ (function () {
    function FiltrosTurnos() {
    }
    return FiltrosTurnos;
}());

var ConfirmacionTurno = /** @class */ (function () {
    function ConfirmacionTurno() {
    }
    return ConfirmacionTurno;
}());

var LiberacionTurno = /** @class */ (function () {
    function LiberacionTurno() {
    }
    return LiberacionTurno;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_errors_error_control_error_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/errors/error-control/error-control.component */ "./src/app/shared/components/errors/error-control/error-control.component.ts");
/* harmony import */ var _adapters_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adapters/common */ "./src/app/shared/adapters/common.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_errors_error_control_error_control_component__WEBPACK_IMPORTED_MODULE_5__["ErrorControlComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            exports: [
                _components_errors_error_control_error_control_component__WEBPACK_IMPORTED_MODULE_5__["ErrorControlComponent"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            entryComponents: [],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"], useValue: 'es-AR' },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _adapters_common__WEBPACK_IMPORTED_MODULE_6__["CustomDateAdapter"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _adapters_common__WEBPACK_IMPORTED_MODULE_6__["MY_DATE_FORMATS"] },
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    endpoint: 'https://hespanolserviciosweb.com.ar:5007/api',
    mockups: false,
    username: 'Test',
    password: 'password',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fernando\Desarrollo\HospitalEspanol\admTurnos\turnero-hospital-espaniol\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map